import { RouterProvider } from "react-router-dom"
import router from "./routes/Router"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
      <ToastContainer/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
  