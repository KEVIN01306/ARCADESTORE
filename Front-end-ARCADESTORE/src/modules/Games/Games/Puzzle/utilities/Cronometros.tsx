

export type CronometroType = {
    sec: number;
    minute: number;
    hour: number
}


export interface CronometroState {
    time: CronometroType;
}

interface CronometroAction{
    type: string;
}


 export function CronometroReducer(state: CronometroState, action: CronometroAction) : CronometroState{
    switch(action.type){
        case "TIME_INCREMENT":
            const { sec, minute,hour } = state.time

            let newMinute = minute;
            let newHour = hour;
            let newSec = sec + 1 

            if ( newSec == 60 ){
                newMinute += 1
                newSec = 0
            }

            if (newMinute == 60 ){
                newHour += 1
                newMinute = 0
            }

            return {
                ...state,
                time: {
                    sec: newSec,
                    minute: newMinute,
                    hour: newHour
                }
            }
        case "RESET_TIME":

            return{
                ...state,
                time: {
                    sec: 0,
                    minute: 0,
                    hour: 0
                }
            }
        
        default :

            return {
                ...state,
            }
    }
}

export const CronometroInitialState = {
    time: {
        sec: 0,
        minute: 0,
        hour: 0
    }
}