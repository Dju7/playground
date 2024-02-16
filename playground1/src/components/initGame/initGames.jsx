/* eslint-disable react-refresh/only-export-components */
import { colors, tries } from "../colorChoice/colorChoice";

// Function to shuffle an array using Fisher-Yates algorithm
const shuffleArray = (array) => {
  const newArray = [...array];  // Create a copy of the original array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const InitGame = () => ({
  currentRow: 0,
  currentColor: colors[0],
  // eslint-disable-next-line no-unused-vars
  rows: new Array(tries).fill().map(_ => ['', '', '', '', '', '', '', '']),
  // eslint-disable-next-line no-unused-vars
  hints: new Array(tries).fill().map(_ => ([{ correctPlace: 0, correctColor: 0 }])),
  // Shuffle the colors array and take the first 8 elements
  secret: shuffleArray(colors).slice(0, 8),
  gameState : ''
  
  
});

export const getHints = (secret, row) => {
  const secretCopy = [...secret];
  console.log('code', secret);
  const rowCopy = [...row];
  const hints = { correctPlace: 0, correctColor: 0 };
  

  // Check for correct color and position
  const checkedPlaceIndices = [];
  for (let i = 0; i < 8; i++) {
    if (secretCopy[i] === rowCopy[i]) {
      hints.correctPlace++;
      checkedPlaceIndices.push(i);
    }
    
  }

  // Check for correct color but incorrect position
  const checkedColorIndices = [];
  for (let i = 0; i < 8; i++) {
    if (!checkedPlaceIndices.includes(i)) {
      const j = rowCopy.indexOf(secretCopy[i]);
      if (j !== -1 && !checkedColorIndices.includes(i)) {
        hints.correctColor++;
        checkedColorIndices.push(j);
      }
      
    }
  }

  return [hints];
};



export const checkGameState = (hints, row) => {
  if (row === -1) {
    return ''; // état initial
  }
  console.log('row', row)
  if (row === 13) {  
    console.log('lost') 
    alert("Dommage, vous avez perdu")
    return 'lost'
    
  }
  
  const correctPlaceCount = hints[row][0].correctPlace;

  if (correctPlaceCount === 8) {
    console.log('bravo')
    return 'won'; // Le joueur a trouvé la combinaison
  }

  return ''; // Le jeu continue
};