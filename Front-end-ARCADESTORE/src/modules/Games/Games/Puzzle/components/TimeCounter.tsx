import type { CronometroType } from "../utilities/Cronometros";

interface CountersProps{
    time: CronometroType;
    size?: string
}

interface CustomCSSProperties extends React.CSSProperties {
    '--value': number;
}



const TimeCounter = ( { time, size }:CountersProps) => {



    return (
        <>
            <div className="flex gap-3">
                <span className={`countdown font-mono text-${size ? size : "2xl" }`}>
                    <span style={{"--value":time.hour}  as CustomCSSProperties } aria-live="polite" aria-label={`time.hour`}>{time.hour}</span>:
                    <span style={{"--value":time.minute} as CustomCSSProperties } aria-live="polite" aria-label={`time.minute`}>{time.minute}</span>:
                    <span style={{"--value":time.sec} as CustomCSSProperties } aria-live="polite" aria-label={`time.sec`}>{time.sec}</span>
                </span>
            </div>
        </>
    )
}


export default TimeCounter;