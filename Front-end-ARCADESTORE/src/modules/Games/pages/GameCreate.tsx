import { Button, Divider, Grid } from "@mui/material";
import { useForm } from 'react-hook-form'
import { GameInitialState, type GameType } from "../../../types/gameType";
import { zodResolver } from "@hookform/resolvers/zod";
import { gameSchema } from "../../../zod/game.schema";
import { postGame } from "../../../services/games.services";
import { InputsForm } from "../components/index";
import { successToast, errorToast } from "../../../utils/toast";
import { useEffect } from "react";
import BreadcrumbsRoutes from "../../../components/utils/Breadcrumbs";
import { Create } from "@mui/icons-material";
import { PiGameController } from "react-icons/pi";
import FormEstructure from "../../../components/utils/FormEstructure";

const GameCreate = () => {
    const breadcrumbsData = [
        { label: "Games", icon: <PiGameController fontSize="inherit" />, href: "/games" },
        { label: "Create Game", icon: <Create fontSize="inherit" />, href: "/games/create" },
    ];
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
            defaultValues: GameInitialState
        })

    const handlerSubmitGame = async (data: GameType) => {
        console.log("esta es la data: "+data)
        try {
            const response = await postGame(data)
            successToast("Game create: " + response)
            reset()
        }
        catch (err: any) {
            console.log(err)
            errorToast(err.message)
        }

    }


    const typeValue = watch("type");

    useEffect(() => {
        if (typeValue === "Free") {
            setValue("price", 0);
        }
    }, [typeValue, setValue]);

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

                        {isSubmitting ? "Loading..." : "Create Game"}
                    </Button>
                </Grid>
            </FormEstructure>
        </>
    )
}

export default GameCreate;