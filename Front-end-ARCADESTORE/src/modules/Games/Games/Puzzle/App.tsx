import Bg from "./components/Bg";
import GamePuzzle from "./views/GamePuzzle"
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
        <ToastContainer/>
        <div className="min-h-screen w-screen relative overflow-x-hidden p-0 m-0 font-inter">
          <Bg/>
            <div className="flex flex-col items-center justify-center min-h-screen relative z-10 p-4 ">
              <GamePuzzle/>
            </div>
          </div>
    </>  
  )
}

export default App
