/* eslint-disable react-refresh/only-export-components */
import { colors, tries } from "../colorChoice/colorChoice";

export const InitGame = () => ({
  currentRow: 0,
  currentColor: colors[0],
  // eslint-disable-next-line no-unused-vars
  rows: new Array(tries).fill().map(_ => ['', '', '', '', '', '', '', '']),
  // eslint-disable-next-line no-unused-vars
  hints: new Array(tries).fill().map(_ => ([{ correctPlace: 0, correctColor: 0 }])),
  // eslint-disable-next-line no-unused-vars
  secret: Array.from({ length: 8 }, () => colors[Math.floor(Math.random() * colors.length)])
  
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
        checkedColorIndices.push(i);
      }
    }
  }

  return [hints];
};

