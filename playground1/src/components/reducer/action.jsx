import actionTypes from "./actionTypes";

export const setColor = color => ({
    type: actionTypes.SET_COLOR,
    payload: color
});

export const setSlot = col => {
    return {
        type: actionTypes.SET_SLOT,
        payload: col
    }
}

export const checkRow = hints => {
    return {
        type: actionTypes.CHECK_ROW,
        payload: hints
    }
}

export const setGameState = (gameState) => {
    return {
        type: actionTypes.SET_GAME_STATE,
        payload : gameState
    }
}

export const newGame = () => {
    return {
        type: actionTypes.NEW_GAME,
    }
}