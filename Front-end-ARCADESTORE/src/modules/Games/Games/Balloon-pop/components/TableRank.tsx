import { useEffect, useState } from "react";
import { getGame } from "../../../../../services/games.services";
import { errorToast } from "../../../../../utils/toast";
import type { RankingType } from "../../../../../types/rankingType";

export type PlayerType = {
    name: string;
    score: number;
}

export const TableRank = () => {
    const [rankList, setRankList] = useState<RankingType[] | undefined>([])
    const [loading, setLoading] = useState<boolean>(true)

    const rankOrderList = (players: any[]): any[] => {
        return [...players].sort(
            (a, b) => (b as any).score - (a as any).score
        );
    };

    const rankingHanlder = async () => {
        try {
            setLoading(true)
            const response = await getGame("6903f094a331c5799f4e4146")
            setRankList(response.ranking)
        } catch (err: any) {
            errorToast("Error in Load Ranking")
        } finally {
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
                            <td>
                                Position
                            </td>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rankList && rankList.length > 0 ? (
                                rankOrderList(rankList).slice(0,10).map((player, index) => (
                                    <tr key={index}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {player.userName}
                                        </td>
                                        <td>{player.score}</td>
                                    </tr>
                                ))
                            ) : (

                                <tr >
                                    <h1>{loading ? "Loading Players..." : "Players Not Found"}</h1>
                                </tr>
                            )

                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                Position
                            </td>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

