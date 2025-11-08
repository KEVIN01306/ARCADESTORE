import { useEffect, useState } from "react";
import { errorToast } from "../../../../../utils/toast";
import { getGame } from "../../../../../services/games.services";
import type { RankingType } from "../../../../../types/rankingType";

export type PlayerType = {
  name: string;
  movements: number;
  time: string
}

export const TableRank = () => {

    const [rankList, setRankList] = useState<RankingType[] | undefined>([])
    const [loading, setLoading] = useState<boolean>(true)

    const rankOrderList = (players: any[]): any[] => {
        return [...players].sort(
            (a, b) => (a as any).movements - (b as any).movements 
        );
    };

    const rankingHanlder = async () => {
        try {
            setLoading(true)
            const response = await getGame("68f70feeb095942c1c0a361b")
            setRankList(response.ranking)
        } catch (err: any) {
            errorToast("Error in Load Ranking")
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        rankingHanlder()
    }, [])
    
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Name</th>
                            <th>Movements</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rankList && rankList.length > 0 ?(
                                rankOrderList(rankList).slice(0,10).map( (player,index) => (
                                    <tr key={index}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {player.userName}
                                        </td>
                                        <td>{player.movements}</td>
                                        <td>{player.time}</td>
                                    </tr>
                                ))
                            ): (
                                <tr >
                                    <h1>{loading ? "Loading Players..." :"Players Not Found" }</h1>
                                </tr>
                            )
                            
                        }
                                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Position</th>
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

