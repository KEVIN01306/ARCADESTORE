import React, { useRef, useEffect } from 'react';

const FONT_SIZE: number = 20;
const CELL_SIZE: number = 30;
const FONT_FAMILY: string = '"Courier New", Courier, monospace';
const CHARS: string = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";

const STATIC_COLORS: { color: string, shadowBlur: number, shadowColor: string }[] = [
    { color: 'rgba(0, 150, 255, 0.4)', shadowBlur: 5, shadowColor: 'rgba(0, 150, 255, 0.5)' },
    { color: 'rgba(100, 200, 255, 1)', shadowBlur: 15, shadowColor: 'rgba(100, 200, 255, 1)' },
    { color: 'rgba(255, 105, 180, 1)', shadowBlur: 15, shadowColor: 'rgba(255, 105, 180, 1)' },
    { color: '#ffffff', shadowBlur: 20, shadowColor: '#fff' },
];

interface CellState {
    char: string;
    style: { color: string, shadowBlur: number, shadowColor: string };
}

const BgGame: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cellsRef = useRef<CellState[]>([]);
    
    const renderGrid = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = '#05050a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${FONT_SIZE}px ${FONT_FAMILY}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const cols = canvas.width / CELL_SIZE;

        cellsRef.current.forEach((cell, i) => {
            const colIndex = i % cols;
            const x = colIndex * CELL_SIZE + CELL_SIZE / 2;
            const y = Math.floor(i / cols) * CELL_SIZE + CELL_SIZE / 2;
            
            ctx.fillStyle = cell.style.color;
            ctx.shadowColor = cell.style.shadowColor;
            ctx.shadowBlur = cell.style.shadowBlur; 
            
            ctx.fillText(cell.char, x, y);
        });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const setCanvasSizeAndData = () => {
            const cols = Math.ceil(window.innerWidth / CELL_SIZE);
            const rows = Math.ceil(window.innerHeight / CELL_SIZE);
            const totalCells = cols * rows;

            canvas.width = cols * CELL_SIZE;
            canvas.height = rows * CELL_SIZE;
            
            const charsToUse = CHARS.repeat(Math.ceil(totalCells / CHARS.length));
            
            cellsRef.current = Array.from({ length: totalCells }).map((_, index) => ({
                char: charsToUse[index],
                style: STATIC_COLORS[Math.floor(Math.random() * STATIC_COLORS.length)],
            }));

            renderGrid(canvas, ctx);
        };

        setCanvasSizeAndData();
        window.addEventListener('resize', setCanvasSizeAndData);
        
        return () => {
            window.removeEventListener('resize', setCanvasSizeAndData);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            style={{
                position: 'fixed', 
                top: 0, 
                left: 0, 
                zIndex: -1, 
                backgroundColor: '#05050a'
            }}
            aria-hidden="true" 
        />
    );
}

export default BgGame;