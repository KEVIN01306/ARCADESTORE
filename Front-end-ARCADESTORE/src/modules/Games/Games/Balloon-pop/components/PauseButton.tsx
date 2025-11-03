
interface PauseButtonPrps {
    pause: boolean;
    changePause: () => void; 
}

const PauseButton = ({pause, changePause}: PauseButtonPrps) => {
return (
    <label className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
      <input className="hidden peer" type="checkbox" checked={pause} onChange={changePause} />
      <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-center rotate-90 -translate-x-[0.3rem] translate-y-[0.1rem] peer-checked:translate-y-[0.1rem]" />
      <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.05rem] peer-checked:rotate-[-30deg] peer-checked:translate-y-[0.22rem] peer-checked:translate-x-[0.15rem]" />
      <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.16rem] peer-checked:rotate-[30deg] peer-checked:translate-y-[-0.4rem] peer-checked:translate-x-[0.15rem]" />
    </label>
  );
}

export default PauseButton;