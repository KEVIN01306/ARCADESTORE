import {
    Container,
    Card,
    CardContent,
    Typography,
    Box,
    Button,
    Link,
    Divider,
} from '@mui/material';
import {
    Login as LoginIcon
} from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { AuthInitialState, type AuthType } from '../../../types/authType';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema } from '../../../zod/auth.schema';
import FormEstructure from '../../../components/utils/FormEstructure';
import InputsForm from '../components/InputsForm';
import { errorToast, successToast } from '../../../utils/toast';
import { useGoTo } from '../../../hooks/useGoTo';
import { useAuthStore } from '../../../store/useAuthStore';

const Login = () => {
    const login = useAuthStore( state => state.login)
    const goTo = useGoTo()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
        control,
        setValue,
    } =
        useForm<AuthType>({
            resolver: zodResolver(authSchema),
            mode: "onSubmit",
            defaultValues: AuthInitialState
        })


    const handleLogin = async (data: AuthType) => {
        try {
            await login(data)
            const user =  useAuthStore.getState().user
            successToast("Auth Succes: Hello " + user?.firstName)
            reset()
            goTo('/games')
        } catch (err: any) {
            errorToast(err.message)
        }
    };

    return (
        <Container maxWidth="xs" sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'center' }}>
            <FormEstructure sx={{ padding: 0, margin: 0, border: "none", boxShadow: "none" }} pGrid={1} handleSubmit={handleSubmit(handleLogin)}>
                <Card elevation={3} sx={{ borderRadius: 2 }}>
                    <CardContent sx={{ p: 4 }}>
                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                            <LoginIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                            <Typography variant="h5" component="h1" fontWeight="bold" sx={{ mt: 1 }}>
                                Iniciar Sesión
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Accede a tu cuenta de ARCADESTORE
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <InputsForm register={register} errors={errors} control={control} watch={watch} setValue={setValue} />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, mb: 3 }}>
                                <Link href="#" variant="body2" color="primary" sx={{ textDecoration: 'none' }}>
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </Box>

                            <Button
                                type="submit"
                                variant="contained"
                                disabled={isSubmitting}
                                fullWidth
                                startIcon={<LoginIcon />}
                                sx={{ mt: 2, mb: 2, py: 1.5, borderRadius: 1 }}
                            >
                                Iniciar Sesión
                            </Button>
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2">
                                ¿Aún no tienes cuenta?{' '}
                                <Link href="auth/register" variant="body2" color="secondary" sx={{ fontWeight: 'bold', textDecoration: 'none' }}>
                                    Regístrate aquí
                                </Link>
                            </Typography>
                        </Box>

                    </CardContent>
                </Card>
            </FormEstructure>
        </Container>
    );
};

export default Login;