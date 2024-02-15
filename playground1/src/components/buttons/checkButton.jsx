import { useAppContext } from "../context/context"
import { getHints } from "../initGame/initGames"
import { checkRow } from "../reducer/action"
import { FaCheck } from "react-icons/fa";

export default function CheckButton() {

    const [{currentRow, rows, secret}, dispatch] = useAppContext()
    const isRowComplete = rows[currentRow].every(x => x)
    const onCheck = () => {
        const hints = getHints(secret,rows[currentRow])
        dispatch(checkRow(hints))
    }
  return (
    <button disabled={!isRowComplete} onClick={onCheck} className="text-9xl text-blue-500 cursor-pointer h-full w-full rounded-xl flex justify-center items-center">
      <FaCheck className="border border-blue-500 bg-blue-100 p-2 rounded-full shadow-xl shadow-blue-600 "/>
    </button>
  )
}
