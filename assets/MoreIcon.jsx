import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function MoreIcon(props) {
  return (
    <Svg
      width={5}
      height={20}
      viewBox="0 0 5 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={2.5} cy={2.5} r={2.5} fill={props.color || "#fff"} />
      <Circle cx={2.5} cy={9.86082} r={2.5} fill={props.color || "#fff"} />
      <Circle cx={2.5} cy={17.2216} r={2.5} fill={props.color || "#fff"} />
    </Svg>
  )
}

export default MoreIcon
