import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackButtonIcon(props) {
  return (
    <Svg
      width={10}
      height={19}
      viewBox="0 0 10 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        transform="matrix(-.65364 .7568 -.56872 -.82253 7.97 0)"
        stroke="#000"
        strokeWidth={2}
        d="M0 -1L12.1941 -1"
      />
      <Path
        transform="matrix(.63209 .7749 -.59072 .80688 0 9.229)"
        stroke="#000"
        strokeWidth={2}
        d="M0 -1L12.61 -1"
      />
    </Svg>
  )
}

export default BackButtonIcon