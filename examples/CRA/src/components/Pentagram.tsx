import React, {useState} from 'react'

interface PentagramProps {
  size?: number
}

const Pentagram = ({size = 1}: PentagramProps) => {
  const [mouseOver, setMouseOver] = useState(false)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={19 * size}
      height={18 * size}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <polygon
        points={`${10 * size},0 ${16 * size},${18 * size} ${2 * size},${6 *
          size} ${19 * size},${6 * size} ${4 * size},${18 * size}`}
        style={{
          fill: mouseOver ? 'cyan' : 'red',
          stroke: mouseOver ? 'cyan' : 'red',
          strokeWidth: 1,
        }}
      />
    </svg>
  )
}

Pentagram.displayName = 'Pentagram'

export default Pentagram
