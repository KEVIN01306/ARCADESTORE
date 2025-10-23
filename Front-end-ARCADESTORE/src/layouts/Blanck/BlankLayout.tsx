import { Outlet  } from 'react-router';

const BlankLayout = () => {

    return (
        <>
            <div>
                <h1>este es el black</h1>
            </div>

            <Outlet/>
        </>
    )
}

export default BlankLayout;