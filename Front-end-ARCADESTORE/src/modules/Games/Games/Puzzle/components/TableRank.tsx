import { usePlayerListStore } from "../store/usePlayerListStore";
import type { CronometroType } from "../utilities/Cronometros";
import TimeCounter from "./TimeCounter";

export type PlayerType = {
  name: string;
  movements: number;
  time: CronometroType
}

export const TableRank = () => {

    const rankOrderList = (players: PlayerType[]): PlayerType[] => {
        const sortedPlayers = [...players].sort((playerA, playerB) => {
            return  playerA.movements - playerB.movements;
        });

    return sortedPlayers;
    
    };
    const rankList = usePlayerListStore( state => state.rankList )
    
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Movements</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rankList && rankList.length > 0 ?(
                                rankOrderList(rankList).map( (player,index) => (
                                    <tr key={index}>
                                        <td>
                                            {player.name}
                                        </td>
                                        <td>{player.movements}</td>
                                        <td><TimeCounter time={player.time} size="1xl"/></td>
                                    </tr>
                                ))
                            ): (
                                <tr >
                                    <h1>Players Not Found</h1>
                                </tr>
                            )
                            
                        }
                                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Time</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

