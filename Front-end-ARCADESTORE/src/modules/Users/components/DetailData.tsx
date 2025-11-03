import { Chip, Grid } from "@mui/material";
import DetailItem from "./DetailItem";
import { EventNote, MailOutline, PersonOutline, SportsEsports, VpnKey } from "@mui/icons-material";
import type { UserType } from "../../../types/userType";
import { formatDate } from "../../../utils/formatDate";

interface DataDetail{
    user: UserType;
}

const DataDetail = ({ user }: DataDetail) => {
        const {
        firstName,
        secondName,
        firstLastName,
        secondLastName,
        email,
        rol,
        games,
        dateBirthday,
        active,
        _id,
        //password,
    } = user;

     const fullName = `${firstName || ''} ${secondName || ''} ${firstLastName || ''} ${secondLastName || ''}`.trim();

    return (
        <>
             <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6}}>
                            <DetailItem
                                label="Nombre Completo"
                                value={fullName}
                                icon={<PersonOutline fontSize="small" />}
                            />
                            <DetailItem
                                label="Correo Electrónico"
                                value={email || 'N/A'}
                                icon={<MailOutline fontSize="small" />}
                            />
                            <DetailItem
                                label="Fecha de Nacimiento"
                                value={formatDate(dateBirthday)}
                                icon={<EventNote fontSize="small" />}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6}}>
                            <DetailItem
                                label="ID de Usuario"
                                value={_id || 'N/A'}
                                icon={<VpnKey fontSize="small" />}
                            />
                            <DetailItem
                                label="Rol"
                                value={rol || 'N/A'}
                                icon={<VpnKey fontSize="small" />}
                            />
                            <DetailItem
                                label="Juegos Comprados"
                                value={<Chip label={games ? games.length.toString() : '0'} size="small" color="primary" />}
                                icon={<SportsEsports fontSize="small" />}
                            />
                            <DetailItem
                                label="Estado"
                                value={
                                    <Chip
                                        label={active ? "Activo" : "Inactivo"}
                                        size="small"
                                        color={active ? "success" : "error"}
                                    />
                                }
                                icon={<VpnKey fontSize="small" />}
                            />
                        </Grid>
                    </Grid>

        </>
    )
}

export default DataDetail;