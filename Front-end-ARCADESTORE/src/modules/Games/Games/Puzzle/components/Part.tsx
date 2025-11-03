
interface PartProps {
    part: number | null;
    index: number;
    move: (index: number) => void;
    changeSelect: (newSelect: number, newPart: number) => void;
    img: string
}

const Part = ({ part, index, move, changeSelect,img }: PartProps) => {
    const isBlank = part === null;
    const handleClick = isBlank
        ? () => move(index)
        : () => changeSelect(index, part as number);

    const partClass = isBlank ? '' : `puzzle-part-${part}`;

    return (
        <div
            style={{backgroundImage:` ${!isBlank && "url('../imagenes/"+img+"')"}`}}
            key={index}
            onClick={handleClick}
            className={`
                text-2xl font-bold rounded-md flex items-center justify-center 
                cursor-pointer select-none transition-all duration-150
                p-2 aspect-[4/4] w-full
                ${isBlank 
                    ? 'bg-transparent' 
                    : `bg-yellow-600/5 border-3 border-yellow-600/20 ${partClass} puzzle-image-piece`
                } 
                ${!isBlank ? 'shadow-[0_8px_0_rgba(159,117,29,0.67),_0_4px_6px_rgba(255,255,255,0.7)]' : ''}
            `}
        >
        </div>
    );
}

export default Part;