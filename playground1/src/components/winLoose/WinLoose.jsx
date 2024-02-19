import { useAppContext } from "../context/context";

export default function WinLoose() {
    const [appState] = useAppContext();

    if (!appState.gameState) {
        return <p className="text-2xl"> Win or Loose</p>;
    }

    if (appState.gameState === 'won') {
        
        return (
            <>
                <p className="text-4xl text-red-500 font-bold animate-ping">You win!</p>
                
            </>
        );
    } else if (appState.gameState === 'lost') {
  
    return (
        <>
            <p className="text-4xl text-red-500 font-bold animate-ping">You loose!</p>
            
        </>
    );
    }
}
