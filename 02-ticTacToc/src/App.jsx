import { useState } from "react"
import confetti from 'canvas-confetti'

import { TURNS } from './constants.js'
import { WinnerModal } from "./WinnerModal.jsx"
import { Square } from "./Square.jsx"
import { CheckWinnerFrom, checkEndGame } from './logic/board.js'


// aqui estamos renderizando el componente app 
export function App() {

  /* boardInitial es el tablero vacio que sera el valor inicial
       del estado de la app y cuando el tablero cambie la app se 
       renderizara de nuevo con el nuevo tablero*/

       const boardInitial = Array(9).fill(null)
  const [board, SetBoard] = useState(() => {

    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) {
      return JSON.parse(boardFromStorage)
    }
    return boardInitial

  })

  //segundo estado que puede modificar algo en la App
  const [turn, setTurn] = useState(()=>{
    const turnStorage= window.localStorage.getItem('turn')
    return turnStorage ?turnStorage: TURNS.X
  })

  // tercer estado 
  const [winner, setWinner] = useState(null)


  const resetGame = () => {
    SetBoard(boardInitial)
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }
  const updateBoard = (index) => {
    // no actualiza la posicion y el tablero si hay algo
    //en la posicion

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    SetBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', turn)



    /** usamos newBoard ya que la actualizacion de board es asincrona
     * por lo tanto habria problemas de sincronia si usamos "board" abajo                                 
     *                                 V                  */
    const newWinner = CheckWinnerFrom(newBoard)
    console.log(newWinner);
    if (newWinner) {
      confetti()
      setWinner(newWinner) /* esta accion es asincrona no se puede usar await  */
    }
    else if (checkEndGame(newBoard)) {
      setWinner(false)
    }


  }
  return (

    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>

      <section className="game">

        {
          board.map((_, index) =>
            <Square
              key={index}
              updateBoard={updateBoard}
              index={index}
            >
              {board[index]}
            </Square>
          )
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}> {/*si turn es igual a X retorna true */}
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal
        winner={winner}
        resetGame={resetGame}

      />
    </main>

  )
}

