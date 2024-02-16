import { useAppContext } from "../context/context";

export default function WinLoose() {
    const [appState] = useAppContext();

    console.log(appState.gameState)

    if (!appState.gameState) {
        return <p className="text-2xl"> Win or Loose</p>;
    }

    if (appState.gameState === 'won') {
        console.log(appState.gameState)
        return (
            <>
                <p>You win!</p>
                
            </>
        );
    } else if (appState.gameState === 'lost') {
 
    return (
        <>
            <p>You lose!</p>
            
        </>
    );
    }
}
