import { LockOutlined, MailOutline, Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material"
import { useState } from "react";

interface InputsFormProps{
    register: any;
    errors: any
    control: any;
    watch: any;
    setValue: any;
}

const InputsForm = ({register,errors}: InputsFormProps) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                error={!!errors.email}
                helperText={errors?.email?.message}
                variant="outlined"
                {...register("email")}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MailOutline />
                        </InputAdornment>
                    ),
                }}
                sx={{ mb: 2 }}
            />

            <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                variant="outlined"
                error={!!errors.password}
                helperText={errors?.password?.message}
                {...register("password")}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockOutlined />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </>
    )
}

export default InputsForm;