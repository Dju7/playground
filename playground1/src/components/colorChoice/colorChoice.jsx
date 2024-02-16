import Pion from "../pion/pions";
import { useAppContext } from "../context/context";
import { setColor } from "../reducer/action";


// eslint-disable-next-line react-refresh/only-export-components
export const colors = ['bg-black', 'bg-white', 'bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-amber-900', 'bg-orange-500', 'bg-purple-500', 'bg-zinc-500'];
export const tries = 14;


export default function ColorChoice() {

const [appState, dispatch] = useAppContext()

  return (
    <div className='grid grid-cols-2 gap-6 h-[80%] w-[50%] justify-center items-center '>
        {
            colors.map((color) => (
              
                <Pion
                className={appState.currentColor === color ? 'active': ''}
                 key={color} 
                 color={color}
                 onClick={() => {
                  console.log(`Setting color: ${color}`);
                  dispatch(setColor(color));
                }}
                 />
                 
            ))
        }
      
    </div>
  )
}
