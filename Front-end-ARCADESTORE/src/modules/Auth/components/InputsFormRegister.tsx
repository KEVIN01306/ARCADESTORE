import { Grid, TextField } from "@mui/material";

interface InputsFormProps {
    register: any;
    errors: any;
    control: any;
    watch: any;
    setValue: any;
}

const InputsFormRegister = ({ register, errors }: InputsFormProps) => {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    label="First Name"
                    required
                    fullWidth
                    variant="outlined"
                    size="medium"
                    {...register("firstName")}
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    label="Second Name"
                    fullWidth
                    variant="outlined"
                    size="medium"
                    {...register("secondName")}
                    error={!!errors.secondName}
                    helperText={errors.secondName?.message}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    label="First LastName"
                    required
                    fullWidth
                    variant="outlined"
                    size="medium"
                    {...register("firstLastName")}
                    error={!!errors.firstLastName}
                    helperText={errors.firstLastName?.message}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    label="Second LastName"
                    fullWidth
                    variant="outlined"
                    size="medium"
                    {...register("secondLastName")}
                    error={!!errors.secondLastName}
                    helperText={errors.secondLastName?.message}
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TextField
                    label="Email"
                    required
                    fullWidth
                    variant="outlined"
                    size="medium"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TextField
                    label="Password"
                    required
                    fullWidth
                    type="password"
                    variant="outlined"
                    size="medium"
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TextField
                    label="Date of Birth"
                    required
                    fullWidth
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    size="medium"
                    {...register("dateBirthday")}
                    error={!!errors.dateBirthday}
                    helperText={errors.dateBirthday?.message}
                />
            </Grid>
        </Grid>
    );
};

export default InputsFormRegister;
