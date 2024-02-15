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