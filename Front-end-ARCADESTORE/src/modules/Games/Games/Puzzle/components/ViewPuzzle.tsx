
interface ViewPuzzleProps{

    img: string;
}


export const ViewPuzzle = ({img}:ViewPuzzleProps) => {


    return (
        <>
            <div className="h-full  aspect-[4/4] shadow-[inset_0_0_10px_3px_rgba(159,117,29,0.67),_inset_0_-6px_10px_rgba(255,255,255,0.7)] rounded-2xl p-3">
                <img  className="h-full w-auto"  src={`../imagenes/${img}`} alt="" />
            </div>
        </>
    )
}
