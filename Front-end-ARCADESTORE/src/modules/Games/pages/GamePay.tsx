import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Box,
    Button,
    Divider,
} from '@mui/material';
import {
    ShoppingCartOutlined,
    SecurityOutlined,
} from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useShoppingCart } from '../../../store/useShoppingCart';
import { paymentSchema } from '../../../zod/payment.schema';
import { PaymentInitialState, type PaymentFormInputs } from '../../../types/paymentType';
import InputsFormPayment from '../components/InputsFormPayment';
import PaymentSummary from '../components/PaymentSummary';
import { patchUserGameMultiple } from '../../../services/users.services';
import { useAuthStore } from '../../../store/useAuthStore';
import { successToast } from '../../../utils/toast';



const GamePay = () => {
    const shoppingCart = useShoppingCart((state) => state.shoppingCardtList);
    const clearCart = useShoppingCart((state) => state.clearShoppingCart);
    const user = useAuthStore.getState().user

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<PaymentFormInputs>({
        resolver: zodResolver(paymentSchema),
        defaultValues: PaymentInitialState,
    });

    const onConfirmPayment = async () => {
        try{

            const response = await patchUserGameMultiple(user?._id,shoppingCart.map(({ _id }) => _id))
            clearCart();
            reset();
            successToast(String(response.message))
        }catch (err: any) {
            successToast(String(err.message))
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Card elevation={3} sx={{ borderRadius: 2 }}>
                        <CardContent sx={{ p: 4 }}>
                            <Typography variant="h6" component="h2" fontWeight="bold" gutterBottom>
                                Información de Pago
                            </Typography>
                            <Divider sx={{ mb: 3 }} />

                            <Box component="form" onSubmit={handleSubmit(onConfirmPayment)} noValidate>
                                <InputsFormPayment register={register} errors={errors} />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    size="large"
                                    startIcon={<ShoppingCartOutlined />}
                                    disabled={isSubmitting}
                                    sx={{ mt: 2, py: 1.5, borderRadius: 1 }}
                                >
                                    {isSubmitting ? 'Procesando Pago...' : 'Confirmar Pago'}
                                </Button>

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                                    <SecurityOutlined fontSize="small" color="success" sx={{ mr: 0.5 }} />
                                    <Typography variant="caption" color="text.secondary">
                                        Pago seguro con cifrado SSL.
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <PaymentSummary />
            </Grid>
        </Container>
    );
};

export default GamePay;
