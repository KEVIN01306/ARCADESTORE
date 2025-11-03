import type{ CronometroType } from "../utilities/Cronometros";
import TimeCounter from "./TimeCounter";

interface CountersProps{
    movements: number;
    time: CronometroType;
}

const Counters = ({movements, time}:CountersProps) => {


    return(
        <>
        <div className="flex flex-col gap-1">
             <div className="flex flex-row items-center gap-1">
                <div className="
                    text-white text-shadow-2xs font-bold rounded-md flex items-center justify-center
                    w-full
                    bg-yellow-600/5 border-3 border-yellow-600/20 
                    
                    shadow-[0_8px_0_rgba(159,117,29,0.67),_0_4px_6px_rgba(255,255,255,0.7)]
                    ">
                    Movements
                </div>

                <div className="w-28 flex flex-row justify-center items-center shadow-[inset_0_0_10px_3px_rgba(159,117,29,0.67),_inset_0_-6px_10px_rgba(255,255,255,0.7)] rounded-2xl p-3">
                    <h2>{movements}</h2>
                </div>
                
            </div>

            <div className="flex flex-row items-center gap-1">
                <div className="
                    text-white text-shadow-2xs font-bold rounded-md flex items-center justify-center
                    w-full
                    bg-yellow-600/5 border-3 border-yellow-600/20 
                    
                    shadow-[0_8px_0_rgba(159,117,29,0.67),_0_4px_6px_rgba(255,255,255,0.7)]
                    ">
                    Time
                </div>

                <div className="w-28 flex flex-row justify-center items-center shadow-[inset_0_0_10px_3px_rgba(159,117,29,0.67),_inset_0_-6px_10px_rgba(255,255,255,0.7)] rounded-2xl p-3">
                    <TimeCounter time={time}/>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Counters;