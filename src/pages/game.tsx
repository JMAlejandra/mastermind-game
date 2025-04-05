import React from 'react'
import SquareRow from '~/components/ui/square-row'

function Game() {
  return (
    <div className="min-h-screen flex flex-row justify-center items-center">
      <SquareRow numSquares={5} />
    </div>
  )
}

export default Game
