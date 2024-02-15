import { useReducer } from "react"
import ColorChoice from "../../components/colorChoice/colorChoice"
import Rows from "../../components/rows/rows"
import { reducer } from "../../components/reducer/reducer"
import AppContext from "../../components/context/context"
import { InitGame } from "../../components/initGame/initGames"
import CheckButton from "../../components/buttons/checkButton"
import { MdFiberNew } from "react-icons/md";

function Mastermind() {
const [appState, dispatch] = useReducer(reducer, InitGame())

  return (
    <AppContext.Provider value={[appState, dispatch]}>
    <div className=" text-black h-screen w-full flex justify-center items-center gap-4 ">
         <section className="h-[60%] w-[10%] flex flex-col justify-between  ">
          <button className="h-[30%] w-full flex justify-center items-center text-9xl text-blue-500"><MdFiberNew className="border border-blue-500 rounded-full p-4 bg-blue-100 shadow-xl shadow-blue-500" /></button>
          <div className="h-[30%] w-full rounded-2xl flex justify-center items-center"><p>Gagné ou perdu ?</p></div>
          <div className="h-[30%] w-full ">
            <CheckButton />
          </div>

         </section>
      <section className="h-[90%] w-[40%] bg-gray-200 flex flex-col items-center gap-4 rounded-2xl border-2 border-black shadow-lg shadow-black/60">
        <h1 className="text-6xl mt-2 text-blue-500">MASTERMIND</h1>
        <div className=" h-16 w-[80%] flex justify-center items-center bg-gray-400 rounded-xl shadow-lg shadow-black/70">
            <h2>ici le code secret</h2>
        </div>
        <div className=" w-[80%] h-[80%]  mt-6 flex gap-2">
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
