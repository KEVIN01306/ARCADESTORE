import { useEffect, useReducer, useState } from "react";
import Part from "../components/Part";
import { toast } from "react-toastify"
import { ViewPuzzle } from "../components/ViewPuzzle";
import { BgImages } from "../utilities/BgImages";
import { scrambledPuzzle } from "../utilities/OrderPuzzle";
import { ValidPuzzle } from "../utilities/OrderPuzzle";
import { CronometroReducer, CronometroInitialState, type CronometroType } from "../utilities/Cronometros";
import Counters from "../components/Counters";
import { usePlayerListStore } from "../store/usePlayerListStore";
import ModalSummary from "../components/ModalSummary";

type Selects = {
    index: number | null,
    part: number | null
}

const GamePuzzle = () => {

    const [parts,setParts] = useState<any[]>(scrambledPuzzle([1, 2, 3, 4,5,6,7, 8, 9]))
    const [selects, setSelects] = useState<Selects>({
        index: null,
        part: null
    })
    const [openSummary, setOpenSummary] = useState<boolean>(false)
    const [selectImagen] = useState<string>(BgImages[Math.floor(Math.random() * BgImages.length )])
    const [movements,setMovements] = useState<number>(0)
    const [CronometroState,CronometropDispatch] =  useReducer(CronometroReducer,CronometroInitialState)
    const saveRankList = usePlayerListStore( (state) => state.saveRankList)
    
    const movePart = (index: number) => {
        if (selects.index != null && moveValid(index) ) {
            setParts( prevLsit =>
                prevLsit.map(( partItem,indexItem ) => {
                    if (indexItem == index){
                        partItem = selects.part
                    }

                    if (indexItem == selects.index){
                         partItem = null;
                    }
                    return partItem;
                })
            )

            changeItemSelect(null,null)
            setMovements(prev => prev + 1)
        }else {
            toast.error("No puedes realizar este movimiento")
        }

    }

    const moveValid = (index: number ) => {

        if (selects.index == null ) {
            return false
        }

        if(((index == Number(selects.index) + 1 && (Number(selects.index) + 1 != 3 &&  Number(selects.index) + 1 != 6 ) || 
            index == Number(selects.index) - 1 && (Number(selects.index) - 1 != 2 &&  Number(selects.index) - 1 != 5) ) || 
            index == Number(selects.index) + 3 || 
            index == Number(selects.index) - 3)){
            return true
        }

        return false
    }

    useEffect(() => {
        if (ValidPuzzle(parts)) {
            changeSummery()
        }
    }, [parts])

    useEffect(() => {
        const interval = setInterval(() => {
            CronometropDispatch({type: "TIME_INCREMENT"})
        },1000)
        return () => clearInterval(interval)
    }, [])

    const changeItemSelect = (newSelect: number | null, newPart: number | null) => {
        setSelects({
            index: newSelect,
            part: newPart
        });
    }

    const save = (newName: string, newScore: number, time:CronometroType ) => {
        saveRankList(newName,newScore,time)
        returnGame()
        changeSummery()
    }

    const changeSummery = () =>{
        setOpenSummary(!openSummary)
    }

    const returnGame = () => {
        CronometroState.time = CronometroInitialState.time
        setMovements(0)
        setParts(scrambledPuzzle(parts))
        changeSummery()
    }

    return (
        <>
        <ModalSummary open={openSummary} close={changeSummery} movements={movements} time={CronometroState.time}returnGame={returnGame} save={save}/>
        <div className={`w-full max-w-3xl mx-auto bg-white rounded-box shadow-[0_14px_0_rgba(159,117,29,0.67),_0_4px_6px_rgba(255,255,255,255)]`} > 
            <div className="w-full per aspect-[4/7] max-w-3xl mx-auto p-2 sm:aspect-[14/10] relative border-3
                            border-yellow-600/20 bg-yellow-600/35 text-primary-content rounded-box flex flex-col items-center 
                            shadow-[0_15px_0_rgba(159,117,29,0.67),_0_4px_6px_rgba(0,0,0,0.05)] ">
                
                <div className="flex flex-col sm:flex-row relative justify-between items-center w-full p-2 h-1/4 gap-2">
                    <ViewPuzzle img={selectImagen}/>
                    <Counters movements={movements} time={CronometroState.time}/>
                </div>
            
                <div className="w-full flex-grow flex items-center justify-center p-4 ">
                    
                    <div 
                        className={`
                            w-full sm:w-3/6 aspect-[4/4] relative bg-yellow-600/5 text-primary-content rounded-box p-2 
                            shadow-[inset_0_0_10px_4px_rgba(159,117,29,0.67),_inset_0_-6px_10px_rgba(255,255,255,0.7)]
                            transform rotate-x-30 origin-bottom 
                            grid grid-cols-3 gap-2
                            truncate 
                        
                        `}>
                        {parts.map((part, index) => (
                        
                            <Part img={selectImagen} key={index} part={part} index={index} changeSelect={changeItemSelect}  move={movePart}/>
                        ))}
                        
                    </div>

                </div>
                
            </div>
        </div>
    </>
    )
}

export default GamePuzzle;