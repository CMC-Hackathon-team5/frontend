import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function PlusIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={10} cy={10} r={10} fill="#B9B9B9" />
      <Path
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        d="M10 4L10 16.1538"
      />
      <Path
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        d="M4 10L16.1538 10"
      />
    </Svg>
  )
}

export default PlusIcon
