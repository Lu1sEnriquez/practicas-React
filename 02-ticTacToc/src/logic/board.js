import { WINNER_COMBOS } from '../constants'



export const CheckWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] !== null &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[c] === boardToCheck[a]
      ) {
        return boardToCheck[a]
    }
}
return null


  }

  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }