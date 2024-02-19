import actionTypes from "./actionTypes"
import { InitGame } from "../initGame/initGames"

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_COLOR: {
            return {
                ...state,
                currentColor: action.payload
            }
        }

        case actionTypes.SET_SLOT : {
            const row = [...state.rows[state.currentRow]]
            row[action.payload] = state.currentColor
            state.rows[state.currentRow] = [...row]
            return {
                ...state
            }
        } 

        case actionTypes.CHECK_ROW: {
            let { currentRow, hints, rows } = state;
          
            // Ajoutez cette condition pour vérifier si currentRow est inférieur à 14
            if (currentRow < 15) {
              hints[currentRow] = [...action.payload];
          
              // Si currentRow est inférieur à 13, incrémentez currentRow
              if (currentRow < 14) {
                return {
                  
                  ...state,
                  currentRow: currentRow + 1,
                  hints,
                };
              }
          
            }
          
            // Ne modifiez pas l'état si currentRow est déjà à 14
            return {
              ...state,
              rows,
              hints,
            };
          }

          case actionTypes.SET_GAME_STATE : {
            return {
                ...state,
                gameState : action.payload
            }
        }

        case actionTypes.NEW_GAME : {
            return {
                ...InitGame()
            }
        } 

        default:
            return state
    }
}
