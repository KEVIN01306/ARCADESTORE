import { useEffect } from "react";
import { BgColors } from "../utilities/bg-colors";

export type BallonTypes = {
  color: string;
  left: number;
  top: number;
  size: number;
  id: number;
};

interface BallonProps {
  color: string;
  left: number;
  top: number;
  size: number;
  id: number;
  modBallon: string;
  pause: boolean;
  updatePosition: (id: number, newTop: number) => void;
  deleteBalloon: (id: number) => void;
  createBallon: () => void;
  updateScore: () => void;
}

export const Balloon = ({ color, left, top, id, modBallon, pause, updatePosition, deleteBalloon, createBallon, updateScore, size }: BallonProps) => {

  useEffect(() => {
    if (modBallon == "RAIN" && !pause){
      const interval = setInterval(() => {
        updatePosition(id, top + 0.9);
      }, 10);

      return () => clearInterval(interval);
    }
    
  }, [id, top, updatePosition,pause]);
  
  useEffect(() => {
    if(!pause){
      const timeout = setTimeout(() => {
        deleteBalloon(id);
      }, 2000);
    
      return () => clearTimeout(timeout);
    }
  }, [id, deleteBalloon,pause]);

  const colorActual = BgColors[color] || { bg: "bg-gray-500", shadow: "shadow-gray-600/50" };

  const balloonSize = size;

  const containerHeight = balloonSize * 1.5;

  const ropeHeight = balloonSize * 0.5;

  const knotSize = balloonSize * 0.15;
  const knotTop = balloonSize - knotSize * 0.7;
  const knotLeft = balloonSize * 0.7;

  return (
    <div className="absolute" style={{ top: `${top}%`, left: `${left}%` }}>
      <div 
        className="relative" 
        style={{ width: `${balloonSize}px`, height: `${containerHeight}px` }} 
      >
        <div
          className={`${colorActual.bg} rounded-full shadow-lg ${colorActual.shadow} absolute top-0 left-0`}
          style={{ width: `${balloonSize}px`, height: `${balloonSize}px`, cursor: "pointer" }}
          onClick={() => { pause == false ? (deleteBalloon(id), createBallon(), updateScore() ) : null }}
        />
        
        <div
          className={`
            ${colorActual.bg} 
            absolute 
            transform -translate-x-1/2 
            rotate-45 
            z-10
          `}
          style={{
            width: `${knotSize}px`, 
            height: `${knotSize}px`, 
            top: `${knotTop}px`, 
            left: `${knotLeft}px` 
          }}
        />
        
        <div
          className="
            bg-gray-400 
            absolute 
            transform -translate-x-1/2 
          "
          style={{
            width: `2px`,
            height: `${ropeHeight}px`, 
            top: `${balloonSize}px`, 
            left: `${knotLeft}px` 
          }}
        />
      </div>
    </div>
  );
};