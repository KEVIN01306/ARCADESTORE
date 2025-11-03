
interface CountersProps {
    time: number;
}

interface CustomCSSProperties extends React.CSSProperties {
    '--value': number;
}
const Counters = ({ time }: CountersProps) => {


    return (
        <>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max mb-1.5">
                
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-4xl">
                    <span style={{"--value":time}  as CustomCSSProperties} aria-live="polite" aria-label={`${time}`}>{time}</span>
                    </span>
                    Time
                </div>
            </div>
            </>
    )
}

export default Counters;