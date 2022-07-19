import * as React from "react";
import Svg, {
  Path,
  Mask,
  G,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={88}
    height={81}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M42.546 78.786c10.498 0 21.441-4.244 29.766-11.072C80.637 60.887 86.5 51.336 86.5 40.647c0-10.356-2.678-19.915-8.884-26.903C71.383 6.725 61.775 2.51 48.362 2.51c-.942 0-1.897-.002-2.863-.005-9.31-.023-19.587-.05-27.78 2.06C13.17 5.735 9.104 7.6 6.167 10.62 3.19 13.68 1.5 17.8 1.5 23.2c0 10.502 4.972 24.31 12.438 35.466 3.746 5.596 8.167 10.598 12.993 14.215 4.822 3.614 10.132 5.905 15.615 5.905Z"
      fill="#fff"
      stroke="#212552"
      strokeWidth={3}
    />
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={4}
      width={82}
      height={74}
    >
      <Path
        d="M85 40.647c0 20.235-22.22 36.639-42.454 36.639C22.311 77.286 3 43.436 3 23.2S28.127 4.009 48.362 4.009C74.532 4.01 85 20.413 85 40.647Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M62.29 63.235c19.056-14.899 32.713-15.445 25.273-5.312-22.3 30.37-65.3 29.437-66.236 18.365-.935-11.07 21.907 1.846 40.963-13.053Z"
        fill="url(#b)"
      />
    </G>
    <Path
      d="M25.1 36.894a2 2 0 1 0 0 4v-4Zm37.47 3.414a2 2 0 0 0 0-2.829L49.842 24.752a2 2 0 1 0-2.828 2.828l11.314 11.314-11.314 11.313a2 2 0 1 0 2.828 2.829L62.57 40.308Zm-37.47.586h36.056v-4H25.099v4Z"
      fill="#212552"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={29.82}
        y1={64.359}
        x2={89.914}
        y2={46.696}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.274} stopColor="#FFE07D" />
        <Stop offset={1} stopColor="#FFE8A6" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
