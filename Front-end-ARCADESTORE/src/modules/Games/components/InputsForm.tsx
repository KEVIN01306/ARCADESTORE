    import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
    import { Controller, type Control, type FieldErrors, type UseFormRegister, type UseFormSetValue, type UseFormWatch } from "react-hook-form"
    import BackgroundField from "./BackgroundField";
    import { useEffect } from "react";
    import { ESRB_RATINGS, type GameType, type RatingKey } from "../../../types/gameType";


    interface InputsFormProps {
    register: UseFormRegister<GameType>;
    errors: FieldErrors<GameType>;
    control: Control<GameType>;
    watch: UseFormWatch<GameType>;
    setValue: UseFormSetValue<GameType>;
    }


    const InputsForm = ({register,errors, control, watch,setValue}: InputsFormProps) => {

        const categories = (Object.keys(ESRB_RATINGS) as RatingKey[]).map( key => ESRB_RATINGS[key].code )
        const typeValue = watch("type");

        useEffect(() => {
            if (typeValue === "Free") {
                setValue("price", 0);
            }
        }, [typeValue, setValue]);

        return (
            <>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        label="Name of the Game"
                        fullWidth
                        variant="standard"
                        size="small"
                        {...register("name")}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                    <TextField
                        label="Context"
                        multiline
                        fullWidth
                        rows={4}
                        type="text"
                        {...register("context")}
                        variant="standard"
                        error={!!errors.context}
                        helperText={errors.context?.message}
                    />
                </Grid>
                <Grid size={4}>
                    <FormControl fullWidth size="small" error={!!errors.type}>
                        <InputLabel id="type-label">Type</InputLabel>
                        <Controller
                            name="type"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    labelId="type-label"
                                    label="Type"
                                    variant="standard"
                                    {...field}
                                >
                                    <MenuItem value="Free">Free</MenuItem>
                                    <MenuItem value="Pay">Pay</MenuItem>
                                </Select>
                            )}
                        />
                    </FormControl>
                    {errors.type && (
                        <p style={{ color: "#d32f2f", fontSize: "0.8rem", marginTop: "4px" }}>
                            {errors.type.message}
                        </p>
                    )}
                </Grid>
                <Grid size={{ xs: 6, md: 6 }}>
                    <TextField
                        label="Price"
                        fullWidth
                        type="number"
                        variant="standard"
                        size="small"
                        disabled={typeValue == "Free"}
                        {...register("price", { valueAsNumber: true })}
                        error={!!errors.price}
                        helperText={errors.price?.message}
                    />
                </Grid>
                <Grid size={4}>
                    <FormControl fullWidth size="small" error={!!errors.category}>
                        <InputLabel id="category-label">Category</InputLabel>
                        <Controller
                            name="category"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    labelId="category-label"
                                    label="category"
                                    variant="standard"
                                    {...field}
                                    value={field.value || ''}
                                >
                                    {
                                        categories.map((categoy) => {
                                            return <MenuItem key={categoy} value={categoy}>{categoy}</MenuItem>
                                        })
                                    }
                                </Select>
                            )}
                        />
                    </FormControl>
                    {errors.category && (
                        <p style={{ color: "#d32f2f", fontSize: "0.8rem", marginTop: "4px" }}>
                            {errors.category.message}
                        </p>
                    )}
                </Grid>
                <Grid size={10}>
                    <BackgroundField control={control} errors={errors} />
                </Grid>

            </>
        )
    }

    export default InputsForm;