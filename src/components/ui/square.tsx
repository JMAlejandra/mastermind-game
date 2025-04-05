import React from 'react'

type SquareProps = {
  width: number
  height: number
  color?: string
}

function Square({ ..._props }: SquareProps) {
  //const squareClasses = `min-w-[${width.toString()}px] min-h-[${height.toString()}px] bg-amber-500`
  const squareClasses = `min-w-14 min-h-14 max-w-14 max-h-14 bg-amber-500`
  return <div className={squareClasses}></div>
}

export default Square
