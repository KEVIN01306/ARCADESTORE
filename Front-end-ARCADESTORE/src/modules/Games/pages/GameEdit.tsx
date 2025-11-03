import { Button, Divider, Grid} from "@mui/material";
import {  useForm } from 'react-hook-form'
import { type GameType } from "../../../types/gameType";
import { zodResolver } from "@hookform/resolvers/zod";
import { gameSchema } from "../../../zod/game.schema";
import { getGame, putGame } from "../../../services/games.services";
import { InputsForm } from "../components/index";
import { successToast, errorToast } from "../../../utils/toast";
import { useEffect, useState } from "react";
import BreadcrumbsRoutes from "../../../components/utils/Breadcrumbs";
import { Create, Whatshot } from "@mui/icons-material";
import { PiGameController } from "react-icons/pi";
import Loading from "../../../components/utils/Loading";
import ErrorCard from "../../../components/utils/ErrorCard";
import { useParams } from "react-router-dom";
import FormEstructure from "../../../components/utils/FormEstructure";

const GameEdit = () => {
    const { id } = useParams()
    const [game, setGame] = useState<GameType>();
    const breadcrumbsData = [
        { label: "Games", icon: <PiGameController fontSize="inherit" />, href: "/games" },
        { label: game?.name ? game?.name : "", icon: <Whatshot fontSize="inherit" />, href: `/games/${id}` },
        { label: game?.name ? `Edit ${game?.name}` : "Edit Game", icon: <Create fontSize="inherit" />, href: "edit" },
    ];
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
        control,
        setValue,
    } =
        useForm<GameType>({
            resolver: zodResolver(gameSchema),
            mode: "onSubmit",
        })

    const handlerSubmitGame = async (data: GameType) => {
        try {
            const response = await putGame(id ? id : "",data)
            successToast("Game Update: " + response)
            getGameOne()
            reset(game)
        }
        catch (err: any) {
            console.log(err)
            errorToast(err.message)
        }

    }

    const getGameOne = async () => {
        try {
            setLoading(true)
            const response = await getGame(id);
            setGame(response);
            reset(response);
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getGameOne()
    }, [])


    if (loading) return <Loading />

    if (error) return <ErrorCard errorText={error} restart={getGameOne} />;

    return (
        <>
            <BreadcrumbsRoutes items={breadcrumbsData} />
            <FormEstructure handleSubmit={handleSubmit(handlerSubmitGame)}>
                <InputsForm control={control} register={register} errors={errors} watch={watch} setValue={setValue}/>
                <Grid size={12}>
                    <Divider sx={{ my: 2 }} />
                </Grid>
                <Grid size={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        fullWidth
                    >

                        {isSubmitting ? "Loading..." : "Save Game"}
                    </Button>
                </Grid>
            </FormEstructure>
        </>
    )
}

export default GameEdit;