import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function CarrotMain(props) {
  return (
    <Svg
      width={57}
      height={70}
      viewBox="0 0 30 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H30V38.4586H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_33_457" transform="scale(.00376 .00293)" />
        </Pattern>
        <Image
          id="image0_33_457"
          width={266}
          height={341}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default CarrotMain
