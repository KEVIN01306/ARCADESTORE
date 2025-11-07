import { CalendarTodayOutlined, CreditCardOutlined, LockOutlined, PersonOutline } from "@mui/icons-material"
import { Checkbox, FormControlLabel, Grid, InputAdornment, TextField } from "@mui/material"

interface InputsFormPaymentProps {
    register: any;
    errors: any
}

const InputsFormPayment = ({register,errors}:InputsFormPaymentProps ) => {

    return (
        <>
            <TextField
                type='number'
                label="Número de la Tarjeta"
                placeholder="XXXX XXXX XXXX XXXX"
                fullWidth
                margin="normal"
                required
                {...register('cardNumber')}
                error={!!errors.cardNumber}
                helperText={errors.cardNumber?.message}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CreditCardOutlined />
                        </InputAdornment>
                    ),
                }}
                sx={{ mb: 2 }}
            />

            <TextField
                type="text"
                label="Nombre en la Tarjeta"
                placeholder="Nombre Completo"
                fullWidth
                margin="normal"
                required
                {...register('cardName')}
                error={!!errors.cardName}
                helperText={errors.cardName?.message}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PersonOutline />
                        </InputAdornment>
                    ),
                }}
                sx={{ mb: 2 }}
            />

            <Grid container spacing={2}>
                <Grid size={6}>
                    <TextField
                        type="month"
                        label="Fecha de Vencimiento"
                        fullWidth
                        margin="normal"
                        required
                        {...register('expiryDate')}
                        error={!!errors.expiryDate}
                        helperText={errors.expiryDate?.message}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CalendarTodayOutlined />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid size={6}>
                    <TextField
                        type="password"
                        label="CVC"
                        placeholder="XXX"
                        fullWidth
                        margin="normal"
                        required
                        {...register('cvc')}
                        error={!!errors.cvc}
                        helperText={errors.cvc?.message}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlined />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>

            <FormControlLabel
                control={<Checkbox {...register('saveCard')} color="primary" />}
                label="Guardar datos de la tarjeta para futuras compras"
                sx={{ mt: 2, mb: 3 }}
            />
        </>
    )
}

export default InputsFormPayment;