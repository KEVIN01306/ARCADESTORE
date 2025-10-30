import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { Controller } from "react-hook-form"
import BackgroundField from "./BackgroundField";
import { useEffect } from "react";


interface InputsFormProps{
    register: any;
    errors: any
    control: any;
    watch: any;
    setValue: any;
}

const InputsForm = ({register,errors, control, watch,setValue}: InputsFormProps) => {
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
            <Grid size={10}>
                <BackgroundField control={control} errors={errors} />
            </Grid>

        </>
    )
}

export default InputsForm;