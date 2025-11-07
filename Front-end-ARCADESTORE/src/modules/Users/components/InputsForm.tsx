import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { Controller } from "react-hook-form"


interface InputsFormProps{
    register: any;
    errors: any
    control: any;
    watch: any;
    setValue: any;
}

const InputsForm = ({register,errors, control}: InputsFormProps) => {

    return (
        <>
            <Grid size={{ xs: 6, md: 3 }}>
                <TextField
                    label="First Name *"
                    fullWidth
                    variant="standard"
                    size="small"
                    {...register("firstName")}
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                />
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
                <TextField
                    label="Second Name"
                    fullWidth
                    variant="standard"
                    size="small"
                    {...register("secondName")}
                    error={!!errors.secondName}
                    helperText={errors.secondName?.message}
                />
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
                <TextField
                    label="First LastName *"
                    fullWidth
                    variant="standard"
                    size="small"
                    {...register("firstLastName")}
                    error={!!errors.firstLastName}
                    helperText={errors.firstLastName?.message}
                />
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
                <TextField
                    label="Second LastName"
                    fullWidth
                    variant="standard"
                    size="small"
                    {...register("secondLastName")}
                    error={!!errors.secondLastName}
                    helperText={errors.secondLastName?.message}
                />
            </Grid>
            <Grid size={{sm: 12, md: 12}}>
                <TextField
                    label="Email *"
                    fullWidth
                    variant="filled"
                    size="small"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
            </Grid>
            <Grid size={{sm: 12, md: 6}}>
                <TextField
                    label="Password *"
                    fullWidth
                    type="password"
                    variant="filled"
                    size="small"
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
            </Grid>
            <Grid size={{sm: 12, md: 6}}>
                <FormControl fullWidth size="small" error={!!errors.rol}>
                    <InputLabel id="role-label">Rol</InputLabel>
                    <Controller
                        name="role"
                        control={control}
                        render={({ field }) => (
                            <Select
                                labelId="role-label"
                                label="Rol"
                                variant="standard"
                                {...field}
                            >
                                <MenuItem value="admin">Admin</MenuItem>
                                <MenuItem value="user">User</MenuItem>
                            </Select>
                        )}
                    />
                </FormControl>
                {errors.rol && (
                    <p style={{ color: "#d32f2f", fontSize: "0.8rem", marginTop: "4px" }}>
                        {errors.rol.message}
                    </p>
                )}
            </Grid>
            <Grid size={{sm: 12, md: 12}}>
                <TextField
                    label="DateBirthday *"
                    fullWidth
                    type="date"
                    variant="standard"
                    size="small"
                    focused={true}
                    {...register("dateBirthday")}
                    error={!!errors.dateBirthday}
                    helperText={errors.dateBirthday?.message}
                />
            </Grid>
        </>
    )
}

export default InputsForm;