import { usePlayerListStore } from "../store/usePlayerListStore";

export type PlayerType = {
  name: string;
  score: number;
}

export const TableRank = () => {

    const rankOrderList = (players: PlayerType[]): PlayerType[] => {
        const sortedPlayers = [...players].sort((playerA, playerB) => {
            return playerB.score - playerA.score;
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
                            <th>Score</th>
                            <th></th>
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
                                        <td>{player.score}</td>
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
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

