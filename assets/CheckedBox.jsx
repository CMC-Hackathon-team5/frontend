import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CheckedBox(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#fff" stroke="#B9B9B9" strokeWidth={2} d="M1 1H19V19H1z" />
    </Svg>
  )
}

export default CheckedBox;
