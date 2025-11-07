import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../../services/users.services";
import Loading from "../../../components/utils/Loading";
import ErrorCard from "../../../components/utils/ErrorCard";
import type { UserType } from "../../../types/userType";

import {
    Container,
    Card,
    CardContent,
    Typography,
    Avatar,
    Box,
    Button,
    Chip,
    Divider,
} from "@mui/material";
import { DetailData } from "../components/index";
import { PiUserCheck, PiUsersFill } from "react-icons/pi";
import BreadcrumbsRoutes from "../../../components/utils/Breadcrumbs";
import { useGoTo } from "../../../hooks/useGoTo";

const UserDetail = () => {
    const goTo = useGoTo()
    const { id } = useParams()
    const [user, setUser] = useState<UserType>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const getUserOne = async () => {
        try {
            setLoading(true)
            const response = await getUser(id)
            setUser(response)
        } catch (err: any) {
            setError(err.message || "Error al cargar los datos del usuario.")
        } finally {
            setLoading(false)
        }
    }
    const breadcrumbsData = [
        { label: "User", icon: <PiUsersFill fontSize="inherit" />, href: "/users" },
        { label: user?.firstName ? user?.firstName : "", icon: <PiUserCheck fontSize="inherit" />, href: `/${id}` },
    ];

    useEffect(() => {
        getUserOne()
    }, [id])

    if (loading) return <Loading />;

    if (error) return <ErrorCard errorText={error} restart={getUserOne} />;

    if (!user) return <ErrorCard errorText="Usuario no encontrado." restart={getUserOne} />;

    const {
        firstName,
        secondName,
        firstLastName,
        secondLastName,
        role,
    } = user;

    const fullName = `${firstName || ''} ${secondName || ''} ${firstLastName || ''} ${secondLastName || ''}`.trim();

    return (
        <>
            <BreadcrumbsRoutes items={breadcrumbsData} />
            <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                <Card elevation={2} sx={{ borderRadius: 2 }}>
                    <CardContent>
                        <Box sx={{ textAlign: 'center', pb: 2 }}>
                            <Avatar
                                sx={{
                                    width: 80,
                                    height: 80,
                                    bgcolor: 'primary.main',
                                    fontSize: '2rem',
                                    mb: 1,
                                    mx: 'auto'
                                }}
                            >
                                {firstName ? firstName[0].toUpperCase() : 'U'}
                            </Avatar>

                            <Typography variant="h5" component="div" fontWeight="bold">
                                {fullName || 'Usuario Desconocido'}
                            </Typography>

                            <Chip
                                label={role?.toUpperCase() || 'USUARIO'}
                                size="small"
                                color={role === 'admin' ? 'secondary' : 'default'}
                                sx={{ mt: 0.5 }}
                            />
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="h6" gutterBottom color="text.primary" fontWeight="bold">
                            Información del Perfil
                        </Typography>

                        <DetailData user={user} />

                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                            <Button variant="outlined" color="primary" onClick={() => goTo(String('edit'))}>
                                Editar Perfil
                            </Button>
                            <Button variant="contained" color="secondary" onClick={() => console.log('Cambiar Contraseña')}>
                                Cambiar Contraseña
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}

export default UserDetail;