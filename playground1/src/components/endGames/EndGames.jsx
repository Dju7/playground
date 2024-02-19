import { useAppContext } from '../context/context';
import Pion from '../pion/pions';
import { AiFillQuestionCircle } from "react-icons/ai";

const GameEnds = () => {
  const [appState] = useAppContext();
 
  if (!appState.gameState) {
    return <div className='flex justify-center gap-10 items-center text-4xl text-white'>
      <AiFillQuestionCircle />
      <AiFillQuestionCircle />
      <AiFillQuestionCircle />
      <AiFillQuestionCircle />
      <AiFillQuestionCircle />
      <AiFillQuestionCircle />
      <AiFillQuestionCircle />
      <AiFillQuestionCircle />
    
    </div>;
  }
 
  if (appState.gameState === 'won' || appState.gameState === 'lost') {
  
    return (
      <div className='flex gap-10'>
        {appState.secret.map((x, i) => <Pion key={i} color={x} />)}
      </div>
    );
  }

  return null;
};

export default GameEnds;