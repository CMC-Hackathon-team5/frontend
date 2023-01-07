import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CheckIcon(props) {
  return (
    <Svg
      width={18}
      height={16}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        stroke="#000"
        strokeWidth={2}
        d="M4.10539 14.4804L17.2929 1.29289"
      />
      <Path
        stroke="#000"
        strokeWidth={2}
        d="M0.707107 9.66674L5.50256 14.4622"
      />
    </Svg>
  )
}

export default CheckIcon
