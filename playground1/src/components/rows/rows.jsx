/* eslint-disable no-undef */

import Pion from "../pion/pions";
import { useAppContext } from "../context/context";
import { setSlot } from "../reducer/action";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";



function Rows() {

  const [appState, dispatch] = useAppContext()
  const {rows, hints, currentRow} = appState

 

  const onClick = (col) => {
    dispatch(setSlot(col))
    };

  
    return (
      <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
        {new Array(12).fill().map((x, i) => 
          <div className={`w-full h-20 flex justify-around ${i === currentRow ? 'activeRow' : ''}`} key={i}>
            <div className="w-[5%] h-full flex justify-center items-center">
              {i + 1}
            </div>
            <div className="w-[75%] h-full flex justify-center items-center gap-12 ">
                <Pion color={rows[i][0]}  onClick={() => i === currentRow && onClick(0)} />
                <Pion color={rows[i][1]}  onClick={() => i === currentRow &&  onClick(1)} />
                <Pion color={rows[i][2]}  onClick={() => i === currentRow &&  onClick(2)} />
                <Pion color={rows[i][3]}  onClick={() => i === currentRow &&  onClick(3)} />
                <Pion color={rows[i][4]}  onClick={() => i === currentRow &&  onClick(4)} />
                <Pion color={rows[i][5]}  onClick={() => i === currentRow &&  onClick(5)}/>
                <Pion color={rows[i][6]}  onClick={() => i === currentRow &&  onClick(6)} />
                <Pion color={rows[i][7]}  onClick={() => i === currentRow &&  onClick(7)} />
            </div>
            <div className="w-[20%]">
            
              {hints[i] && Array.isArray(hints[i]) && (
                <div className="flex gap-4">
                  {hints[i].map((hint, index) => (
                  <div key={index} className="flex justify-end items-center m-2 w-full">
                     <span className="text-3xl text-blue-500 w-16 flex"><FaCheck/>{hint.correctPlace}</span>
                    <span className="ml-4 text-3xl text-red-500 w-26 flex"><RxCross2/> {hint.correctColor}</span>
                   </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Rows;
