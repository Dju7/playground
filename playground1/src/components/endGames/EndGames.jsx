import { useAppContext } from '../context/context';
import Pion from '../pion/pions';

const GameEnds = () => {
  const [appState] = useAppContext();

  if (!appState.gameState) {
    return <div className='flex justify-center items-center text-3xl'>Hiding code</div>;
  }

  if (appState.gameState === 'won') {
    return (
      <div>
        {appState.secret.map((x, i) => <Pion key={i} color={x} />)}
      </div>
    );
  }

  return null;
};

export default GameEnds;