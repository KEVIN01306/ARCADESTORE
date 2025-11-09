import { Avatar, Card, CardContent, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import type { GameType } from "../../../types/gameType";
import { useShoppingCart } from "../../../store/useShoppingCart";

const PaymentSummary = () => {

    const shoppingCart = useShoppingCart( state => state.shoppingCardtList)

    const calculateTotal = () => {
        return shoppingCart.reduce((sum, item) => sum + (item.price || 0), 0);
    };

    return(
        <>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Card elevation={3} sx={{ borderRadius: 2 }}>
                        <CardContent sx={{ p: 4 }}>
                            <Typography variant="h6" component="h2" fontWeight="bold" gutterBottom>
                                Resumen del Pedido
                            </Typography>
                            <Divider sx={{ mb: 3 }} />
                            {shoppingCart.length === 0 ? (
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ mt: 2, textAlign: 'center' }}
                                >
                                    Tu carrito está vacío.
                                </Typography>
                            ) : (
                                <List disablePadding>
                                    {shoppingCart.map((item: GameType) => (
                                        <ListItem key={item._id} sx={{ py: 1, px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 40 }}>
                                                <Avatar
                                                    variant="square"
                                                    src={item.background || 'https://via.placeholder.com/40'}
                                                    alt={item.name}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="body1" fontWeight="medium">
                                                        {item.name}
                                                    </Typography>
                                                }
                                            />
                                            <Typography variant="body1" fontWeight="medium">
                                                Q{item.price ? item.price.toFixed(2) : '0.00'}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                    <Divider sx={{ my: 2 }} />
                                    <ListItem sx={{ py: 1, px: 0, justifyContent: 'space-between' }}>
                                        <Typography variant="h6" fontWeight="bold">
                                            Total:
                                        </Typography>
                                        <Typography variant="h6" fontWeight="bold" color="primary">
                                            Q{calculateTotal().toFixed(2)}
                                        </Typography>
                                    </ListItem>
                                </List>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
        </>
    )
}

export default PaymentSummary;