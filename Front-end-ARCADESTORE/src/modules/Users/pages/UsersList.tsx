import { useEffect, useState } from "react";
import { getUsers } from "../../../services/users.services";
import type { UserType } from "../../../types/userType";
import Loading from "../../../components/utils/Loading";
import ErrorCard from "../../../components/utils/ErrorCard";
import TableCustom from "../../../components/Table/Table";
import { Fab, Grid } from "@mui/material";
import type { Column } from "../../../components/Table/Table";
import { useGoTo } from "../../../hooks/useGoTo";
import AddIcon from '@mui/icons-material/Add';



const UsersList = () => {
    const [users,setUsers] = useState<UserType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const goTo = useGoTo()

    const getUsersList = async () => {
        try{    
            setLoading(true)
            const response = await getUsers()
            setUsers(response)

        }catch (err: any) {
            setError(err.message)
        } finally {
                setLoading(false)
        }
    }

    useEffect(() => {
        getUsersList()
    },[])

    
    const columns: Column<UserType>[] = [
    { id: "firstName", label: "First Name", minWidth: 150 },
    { id: "secondName", label: "second Name", minWidth: 100 },
    { id: "rol", label: "Rol", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 100 },
    { id: "active", label: "Estado", minWidth: 100 },
    {
        id: "actions",
        label: "Acciones",
        actions: [
        { label: "Editar", onClick: (row: UserType) => goTo(String(row._id+'/edit')) },
        { label: "Perfil", onClick: (row: UserType) => goTo(String(row._id)) },
        ],
    },
    ];

    if (loading) return <Loading />

    if (error) return <ErrorCard errorText={error} restart={getUsersList} />;


    return (
        <>
            <Grid  container spacing={2} flexGrow={1}>
            <Grid flexGrow={1} container p={1} gap={2} justifyContent={{sm: "center",md: "flex-end"}}>
                <Grid size={{xs: 10, md: 1}} display={"flex"} flexGrow={1} alignItems={"center"} justifyContent={"end"} >
                    <Fab size="small" color="primary" aria-label="add" onClick={() => goTo('create')} >
                        <AddIcon />
                    </Fab>
                </Grid>
            </Grid>
                <Grid size={12}>
                    <TableCustom<UserType> columns={columns} rows={users}/>
                </Grid>
            </Grid>
                
        </>
    )
}

export default UsersList;