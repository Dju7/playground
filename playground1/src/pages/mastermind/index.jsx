import { useReducer } from "react"
import ColorChoice from "../../components/colorChoice/colorChoice"

import Rows from "../../components/rows/rows"
import { reducer } from "../../components/reducer/reducer"
import AppContext from "../../components/context/context"
import { InitGame } from "../../components/initGame/initGames"
import CheckButton from "../../components/buttons/checkButton"

function Mastermind() {
const [appState, dispatch] = useReducer(reducer, InitGame())

  return (
    <AppContext.Provider value={[appState, dispatch]}>
    <div className=" text-black h-screen w-full flex justify-center items-center gap-4 ">
         <section className="h-[60%] w-[10%] flex flex-col justify-between  ">
          <button className="h-[30%] w-full bg-gray-200 rounded-2xl">New Game</button>
          <div className="h-[30%] w-full rounded-2xl flex justify-center items-center"><p>Gagné ou perdu ?</p></div>
          <div className="h-[30%] w-full rounded-2xl">
            <CheckButton />
          </div>

         </section>
      <section className="h-[90%] w-[45%] bg-gray-200 flex flex-col items-center gap-4 rounded-2xl">
        <h1 className="text-6xl mt-2">MASTERMIND</h1>
        <div className=" h-16 w-[70%] flex justify-center items-center bg-gray-400 rounded-xl">
            <h2>ici le code secret</h2>
        </div>
        <div className=" w-[95%] h-[80%]  mt-6 flex gap-2">
            <div className="w-full h-full flex">
                <div className="w-full h-full border">
                    <Rows/>
                </div>  
            </div>
        </div>
      </section>
      <section className="h-[50%] w-[8%] bg-gray-200 flex flex-col justify-center items-center gap-10">
        <h2 className="text-2xl">COLOR CHOICE</h2>
      <ColorChoice />
      </section>
    </div>
    </AppContext.Provider>
  )
}

export default Mastermind
