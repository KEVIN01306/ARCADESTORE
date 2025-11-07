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
import { Login as LoginIcon } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormEstructure from '../../../components/utils/FormEstructure';
import { errorToast, successToast } from '../../../utils/toast';
import { useGoTo } from '../../../hooks/useGoTo';
import { useAuthStore } from '../../../store/useAuthStore';
import { UserInitialState, type UserType } from '../../../types/userType';
import { userSchema } from '../../../zod/user.schema';
import type { AuthType } from '../../../types/authType';
import InputsFormRegister from '../components/InputsFormRegister';
import { postRegister } from '../../../services/auth.services';

const Register = () => {
    const login = useAuthStore(state => state.login);
    const goTo = useGoTo();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
        control,
        setValue,
    } = useForm<UserType>({
        resolver: zodResolver(userSchema),
        mode: "onSubmit",
        defaultValues: UserInitialState,
    });

    const handleLogin = async (data: AuthType) => {
        try {
            await login(data);
            const user = useAuthStore.getState().user;
            successToast("Auth Success: Hello " + user?.firstName);
            reset();
            goTo('/games');
        } catch (err: any) {
            errorToast(err.message);
        }
    };

    const handleRegister = async (data: UserType) => {
        try {
            const response = await postRegister(data);
            successToast("User created: " + response);
            await handleLogin({ email: data.email, password: data.password });
            reset();
        } catch (err: any) {
            errorToast(err.message);
        }
    };

    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                py: 2,
            }}
        >
            <FormEstructure
                handleSubmit={handleSubmit(handleRegister)}
                sx={{ border: 'none', boxShadow: 'none', width: '100%' }}
                center
            >
                <Card elevation={5}
                    sx={{
                        borderRadius: 3,
                        p: 1,
                        width: '100%',
                        maxWidth: 600,
                    }}
                >
                    <CardContent>
                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                            <LoginIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                            <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                                Register
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Create Account of ARCADESTORE
                            </Typography>
                        </Box>

                        <InputsFormRegister
                            register={register}
                            errors={errors}
                            control={control}
                            watch={watch}
                            setValue={setValue}
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                            <Link href="#" variant="body2" color="primary" underline="hover">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </Box>

                        <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                            fullWidth
                            startIcon={<LoginIcon />}
                            sx={{ mt: 3, py: 1.5, borderRadius: 2 }}
                        >
                            Send
                        </Button>

                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2">
                                ¿Ya tienes cuenta?{' '}
                                <Link
                                    href="/public/auth/login"
                                    variant="body2"
                                    color="secondary"
                                    fontWeight="bold"
                                    underline="hover"
                                >
                                    Sign in
                                </Link>
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </FormEstructure>
        </Container>
    );
};

export default Register;
