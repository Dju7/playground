import { useReducer } from "react"
import { useEffect } from "react"
import ColorChoice from "../../components/colorChoice/colorChoice"
import Rows from "../../components/rows/rows"
import { reducer } from "../../components/reducer/reducer"
import AppContext from "../../components/context/context"
import { InitGame, checkGameState  } from "../../components/initGame/initGames"
import CheckButton from "../../components/buttons/checkButton"
import { setGameState } from "../../components/reducer/action"
import GameEnds from "../../components/endGames/EndGames"
import WinLoose from "../../components/winLoose/WinLoose"
import NewGame from "../../components/buttons/newGame"

function Mastermind() {
const [appState, dispatch] = useReducer(reducer, InitGame())



    useEffect(() => {
        const gameState = checkGameState(appState.hints,appState.currentRow-1)
        if (gameState === appState.gameState)
            return
        else    
            dispatch(setGameState(gameState))
    }, [appState.currentRow, appState.gameState, appState.hints])

  return (
    <AppContext.Provider value={[appState, dispatch]}>
    <div className=" text-black h-screen w-full flex justify-center items-center gap-4 ">
         <section className="h-[45%] w-[10%] flex flex-col justify-between  ">
          <div className="h-[30%] w-full flex justify-center items-center text-9xl text-blue-500"><NewGame/></div>
          <div className="h-[25%] w-[80%] rounded-2xl flex justify-center items-center border border-black"><WinLoose/></div>
          <div className="h-[30%] w-full ">
            <CheckButton />
          </div>

         </section>
      <section className="h-[95%] w-[40%] bg-gray-200 flex flex-col items-center gap-4 rounded-2xl border border-black shadow-inner shadow-black/70">
        <h1 className="text-6xl mt-2 text-blue-500">MASTERMIND</h1>
        <div className=" h-16 w-[80%] flex justify-center items-center bg-gray-400 rounded-xl shadow-lg shadow-black/70">
            <GameEnds />
        </div>
        <div className=" w-[85%] h-[80%]  mt-6 flex gap-2">
            <div className="w-full h-full flex">
                <div className="w-full h-full border">
                    <Rows/>
                </div>  
            </div>
        </div>
      </section>
      <section className="h-[50%] w-[6%] bg-gray-200 flex flex-col justify-center items-center gap-4 border-2 border-black shadow-lg shadow-black/60">
        <h2 className="text-xl">CHOOSE ONE</h2>
      <ColorChoice />
      </section>
    </div>
    </AppContext.Provider>
  )
}

export default Mastermind
