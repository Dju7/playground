import { useAppContext } from "../context/context";

export default function WinLoose() {
    const [appState] = useAppContext();

    if (!appState.gameState) {
        return <p className="text-2xl"> Win or Loose</p>;
    }

    if (appState.gameState === 'won' && appState.currentRow < 14) {
        return (
            <>
                <p>You win!</p>
                
            </>
        );
    }

    
    return (
        <>
            <p>You lose!</p>
            
        </>
    );
}
