import { useCallback, useEffect, useState } from "react";
import { Balloon } from "../components/Balloon";
import type { BallonTypes } from "../components/Balloon";
import { BgColors } from "../utilities/bg-colors";
import ModalSummary from "../components/ModalSummary";
import Counters from "../components/Counters";
import PauseButton from "../components/PauseButton";
import Mods from "../components/Mods";
import { patchGameRanking } from "../../../../../services/games.services";
import { useAuthStore } from "../../../../../store/useAuthStore";
import { errorToast, successToast } from "../../../../../utils/toast";

const GameBalloonPop = () => {
    const user = useAuthStore(state => state.user)
    const [ballonList, setBallonList] = useState<BallonTypes[]>([]);
    const [score, setScore] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [time, setTime] = useState<number>(30);
    const [modBallon, setModBaloon] = useState<string>("RAIN");
    const [pause, setPause] = useState<boolean>(true);

    useEffect(() => {
      if (!open && !pause){
        const interval = setInterval(() => {
            createBalloon()
        }, 2000);

        return () => clearInterval(interval);
      }
    }, [open,pause]);


    useEffect(() => {
        if (!open && !pause){
          const interval = setInterval(() => {
              setTime( prev => prev - 1)
              if ( time == 0){
                changeOpen()
                setTime( 0 )
              }
            }, 1000);

          return () => clearInterval(interval);
        }
    }, [time,open,pause]);

    const createBalloon = () => {
            const colorKeys = Object.keys(BgColors);
            const colorAleatoreo = Math.floor(Math.random() * colorKeys.length);
            const newBallon = {
                color: colorKeys[colorAleatoreo],
                left: Math.floor(Math.random() * 81),
                top: modBallon == "RAIN" ? 0 : Math.floor(Math.random() * 81), 
                size: Math.floor(Math.random() * (100 - 25 + 1)) + 25 ,
                id: Date.now() + Math.random(),
            };  
            setBallonList((prev) => [...prev, newBallon]);
    }

  const updatePosition = useCallback((id: number, newTop: number) => {
    setBallonList((prevList) =>
      prevList.map((balloon) => {
        if (balloon.id === id) {
          const cappedTop = newTop >= 80 ? 80 : newTop;
          return { ...balloon, top: cappedTop };
        }
        return balloon;
      })
    );

    setBallonList((prevList) => prevList.filter((b) => b.top < 80));
    }, []);

    const deleteBalloon = useCallback((id: number) => {
        setBallonList((prevList) => prevList.filter((balloon) => balloon.id !== id));
    }, []);

    const updateScore = () =>{
        setScore(prev => prev + 1)
    }

    const changeOpen = () => {
      setOpen( prev => !prev)
    }

    const returnGame = () => {
        setTime(30)
        setScore(0)
        changeOpen()
    }

    const Save = async (newName: string, newScore: number) => {

      try{
          const ranking = {userId: user._id,userName: newName, score: newScore}
          const gameId = "6903f094a331c5799f4e4146"
          await patchGameRanking(gameId,ranking) 
          returnGame()
          changeOpen()
          successToast("Ranking save")
      }catch (err: any){
        errorToast(err?.message)
      }
    }

    const changeMod = (newMod: string) => {
      setModBaloon(newMod);
    }

    return (
    <div className="w-full max-w-3xl mx-auto p-4">
        <ModalSummary open={open} close={changeOpen} score={score} returnGame={returnGame} save={Save}/>
        <div className="flex flex-row justify-between items-center">
          <Counters time={time}/>
          <Mods modBallon={modBallon} changeMod={changeMod}/>
          <PauseButton pause={pause} changePause={() => setPause(!pause)}/>
        </div>
        <div className="w-full aspect-[4/6] sm:aspect-[16/9] relative bg-white text-primary-content rounded-box flex items-center justify-center shadow-xl/20 shadow-accent-500/5 border-l-cyan-400 border-r-cyan-400 border-b-blue-400 border-t-blue-400 border-solid border-8">
            <span className="absolute top-0 left-0 p-2 text-black">score: {score}</span>
            {ballonList.map((ballon) => (
            <Balloon
                key={ballon.id}
                id={ballon.id}
                color={ballon.color}
                size={ballon.size}
                left={ballon.left}
                top={ballon.top}
                modBallon={modBallon}
                pause={pause}
                updatePosition={updatePosition}
                deleteBalloon={deleteBalloon}
                createBallon={createBalloon}
                updateScore={updateScore}
            />
            ))}
        </div>
    </div>
  );
};

export default GameBalloonPop;
