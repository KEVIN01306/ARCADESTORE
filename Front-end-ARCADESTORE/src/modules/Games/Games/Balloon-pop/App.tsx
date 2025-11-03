import BgGame from './components/Bg-game'
import GameBalloonPop from './views/GameBalloonPop'

function App() {

  return (  
    <>
      <div className="min-h-screen w-screen relative overflow-x-hidden p-0 m-0 font-inter">
            <BgGame/>
            <div className="flex flex-col items-center justify-center min-h-screen relative z-10 p-4">
                <GameBalloonPop/>
            </div>
            
          </div>
    </>
  )
}

export default App
