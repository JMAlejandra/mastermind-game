import React from 'react'

type SquareProps = {
  widthClass: string
  heightClass: string
  colorClass?: string
  position: number
  onClick: (position: number) => void
}

function Square({ widthClass, heightClass, colorClass, position, onClick }: SquareProps) {
  return (
    <div
      className={`${widthClass} ${heightClass} ${colorClass}`}
      onClick={() => onClick(position)}
    ></div>
  )
}

export default Square
