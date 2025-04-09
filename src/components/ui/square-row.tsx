import React, { useState } from 'react'
import Square from './square'

type SquareRowProps = {
  numSquares: number
}

type SquareInfo = {
  position: number
  colorIndex: number
  colorClass: string
}

const squareColorClasses = [
  'bg-blue-500',
  'bg-green-500',
  'bg-amber-500',
  'bg-pink-500',
  'bg-teal-500',
  'bg-indigo-500',
  'bg-orange-500',
  'bg-red-700',
]
const defaultSquareColor = 'bg-slate-500'
const defaultHeightClass = 'h-14'
const defaultWidthClass = 'w-14'

const generateDefaultSquaresInfo = (numSquares: number) => {
  const squaresArray: SquareInfo[] = []
  for (let i = 0; i < numSquares; i++) {
    squaresArray.push({ position: i, colorIndex: -1, colorClass: defaultSquareColor })
  }
  return squaresArray
}

// TODO: validate that no colors are repeated in the row
/* const validateUnrepeatedSquareColorsInRow = (squareRow: SquareInfo[])=>{} */

function SquareRow({ numSquares }: SquareRowProps) {
  const [rowSquaresInfo, setRowSquaresInfo] = useState<SquareInfo[] | []>(
    generateDefaultSquaresInfo(numSquares),
  )

  const handleSquareClick = (position: number) => {
    const newRowSquares = [...rowSquaresInfo]
    const currentColorIndex = rowSquaresInfo[position]!.colorIndex
    if ((currentColorIndex && currentColorIndex < 0) || currentColorIndex === 7) {
      newRowSquares[position] = { position, colorIndex: 0, colorClass: squareColorClasses[0]! }
    } else {
      newRowSquares[position] = {
        position,
        colorIndex: currentColorIndex + 1,
        colorClass: squareColorClasses[currentColorIndex + 1]!,
      }
    }
    setRowSquaresInfo(newRowSquares)
  }

  return (
    <div className="h-25 w-120 flex flex-row justify-center items-center gap-6 border-2 border-slate-600 rounded-lg">
      {rowSquaresInfo.map((sq, i) => (
        <Square
          key={i}
          heightClass={defaultHeightClass}
          widthClass={defaultWidthClass}
          colorClass={sq.colorClass}
          position={i}
          onClick={handleSquareClick}
        />
      ))}
    </div>
  )
}

export default SquareRow
