import { useAppContext } from "../context/context"
import { getHints } from "../initGame/initGames"
import { checkRow } from "../reducer/action"

export default function CheckButton() {

    const [{currentRow, rows, secret}, dispatch] = useAppContext()
    const isRowComplete = rows[currentRow].every(x => x)
    const onCheck = () => {
        const hints = getHints(secret,rows[currentRow])
        dispatch(checkRow(hints))
    }
  return (
    <button disabled={!isRowComplete} onClick={onCheck} className="bg-red-100 cursor-pointer h-full w-full rounded-xl">
      check
    </button>
  )
}
