import React from 'react'
import Square from './square'

type SquareRowProps = {
  numSquares: number
}

function SquareRow({ numSquares }: SquareRowProps) {
  return (
    <div className="h-25 w-120 flex flex-row justify-center items-center gap-6 border-2 border-grey-600 rounded-lg">
      {Array.from({ length: numSquares }, (_, index) => (
        <Square key={index} height={50} width={50} color="slate" />
      ))}
    </div>
  )
}

export default SquareRow
