import { useEffect, useState } from "react";
import { getUsers, patchUserActive } from "../../../services/users.services";
import type { UserType } from "../../../types/userType";
import Loading from "../../../components/utils/Loading";
import ErrorCard from "../../../components/utils/ErrorCard";
import TableCustom from "../../../components/Table/Table";
import { Chip, Fab, Grid, type ChipProps } from "@mui/material";
import type { Column } from "../../../components/Table/Table";
import { useGoTo } from "../../../hooks/useGoTo";
import AddIcon from '@mui/icons-material/Add';
import { RiEdit2Line } from "react-icons/ri";
import { PiUserCheckBold } from "react-icons/pi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { successToast } from "../../../utils/toast";


type ChipColor = ChipProps['color'];

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

    const changeChip = (value: UserType['active']) => {
        let color: ChipColor
        let label: string

        if (value) {
            color = 'success';
            label = 'Activo';
        } else {
            color = 'error';
            label = 'Inactivo';
        }

        return  <Chip  label={label} color={color} variant="outlined" />

    }

    const changeActive = async(id: UserType['_id']) => {
        try {
            const response = await patchUserActive(id)
            successToast(`change Status: ${ response?.active ? "Activo" : "Inactivo"} - User: ${response?.email}` )
            getUsersList()
        }catch (err: any) {

        }
    }

    const columns: Column<UserType>[] = [
    { id: "firstName", label: "First Name", minWidth: 150 },
    { id: "secondName", label: "second Name", minWidth: 100 },
    { id: "rol", label: "Rol", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 100 },
    { id: "active", label: "Estado", minWidth: 100, format: (value: any) => changeChip(value)},
    {
        id: "actions",
        label: "Acciones",
        actions: [
        { label:(<><RiEdit2Line /> <span className="ml-1.5">edit</span> </> ), onClick: (row: UserType) => goTo(String(row._id+'/edit')) },
        { label: (<><PiUserCheckBold /> <span className="ml-1.5">Profile</span> </> ), onClick: (row: UserType) => goTo(String(row._id)) },
        { label: (<><HiOutlineLockClosed /> <span className="ml-1.5">Disable / Enable</span></>),onClick: (row: UserType) => changeActive(row._id)},
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