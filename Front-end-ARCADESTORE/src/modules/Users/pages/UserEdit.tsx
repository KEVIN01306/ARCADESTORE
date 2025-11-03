import { useParams } from "react-router-dom"


const UserEdit = () => {
    const { id } = useParams()

    return (
        <>
            <h1>este es el id: {id}</h1>
        </>
    )
}

export default UserEdit;