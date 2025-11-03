import { shuffleArray, shuffleArrayNull } from "./Mingle";



const OrderPuzzle = {
    orderList: [
        1,2,3,
        4,5,6,
        7,8,9
    ]
}


export const ValidPuzzle = (PuzzleScrambled: any[]) => {

    for ( let i = PuzzleScrambled.length; i >= 0; i -- ){
        if ( PuzzleScrambled[i] == null){
            continue;
        }

        if (PuzzleScrambled[i] != OrderPuzzle.orderList[i]){
            return false
        }
    }

    return true
}

export const scrambledPuzzle = ( Puzzle: any[]) =>{
    return shuffleArray(shuffleArrayNull(Puzzle))
} 