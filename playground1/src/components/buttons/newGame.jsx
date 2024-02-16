import { useAppContext } from "../context/context";
import { newGame } from "../reducer/action";
import { MdFiberNew } from "react-icons/md";

const NewGame = () => {
    const [ , dispatch] = useAppContext();

    return (
    <button className="Button" onClick={() => dispatch(newGame())}>
        <MdFiberNew className="border border-blue-500 rounded-full p-4 bg-blue-100 shadow-xl shadow-blue-500" />
    </button> 
    )
}

export default NewGame