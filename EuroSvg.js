import * as React from "react";
import Svg, { Path } from "react-native-svg";

const EuroSvg = (props) => (
  <Svg
    width={36}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 5C0 5 0 7 0 7v21s0 2 2 2h32c2 0 2-2 2-2V7s0-2-2-2H2Z"
      fill="#2A6797"
    />
    <Path
      d="M2 0C0 0 0 2 0 2v20s0 2 2 2h32c2 0 2-2 2-2V2s0-2-2-2H2Z"
      fill="#5DADEC"
    />
    <Path d="M25 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" fill="#4289C1" />
    <Path
      d="M33 22.5H3c-.827 0-1.5-.673-1.5-1.5V3c0-.827.673-1.5 1.5-1.5h30c.827 0 1.5.673 1.5 1.5v18c0 .827-.673 1.5-1.5 1.5ZM3 2.5a.5.5 0 0 0-.5.5v18c0 .275.225.5.5.5h30c.275 0 .5-.225.5-.5V3a.5.5 0 0 0-.5-.5H3Z"
      fill="#2A6797"
    />
    <Path d="M14 0h8v24.062h-8V0Z" fill="#FFE8B6" />
    <Path d="M14 24h8v6h-8v-6Z" fill="#FFAC33" />
    <Path
      d="M12.764 15.84c0 .658-1.474 1.447-3.301 1.447-2.42 0-3.877-1.681-4.361-3.742H3.808a.57.57 0 1 1 0-1.139h1.129c-.008-.136-.029-.27-.029-.406 0-.3.026-.597.063-.89H3.808a.57.57 0 1 1 0-1.14h1.416c.593-1.835 2.03-3.257 4.313-3.257 1.84 0 3.008.993 3.008 1.519 0 .336-.205.612-.526.612-.584 0-.876-1.022-2.482-1.022-1.51 0-2.428.942-2.891 2.147h3.327a.57.57 0 1 1 0 1.14H6.351a6.246 6.246 0 0 0-.072.891c0 .134.016.27.025.405h3.668a.57.57 0 1 1 0 1.139H6.485c.389 1.43 1.346 2.631 2.978 2.631 1.563 0 2.25-.934 2.79-.934.307.001.511.235.511.599Z"
      fill="#2A6797"
    />
  </Svg>
);

export default EuroSvg;
