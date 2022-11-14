import "./App.css";
import { arc } from "d3-shape";
import BackgroundShape from "./components/BackgroundShape";
import Eyes from "./components/Eyes";
import Mouth from "./components/Mouth";
import EyeBrows from "./components/Eyebrows";
import Nose from "./components/Nose";
export default function App() {
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 50;
  const mouthRadius = 120;
  const arcWidth = 20;

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {/*group element*/}
        <BackgroundShape strokeWidth={strokeWidth} />
        <Eyes
          eyeOffsetX={eyeOffsetX}
          eyeOffsetY={eyeOffsetY}
          eyeRadius={eyeRadius}
        />
        <EyeBrows mouthRadius={mouthRadius} arcWidth={arcWidth} />
        <Nose arcWidth={arcWidth} />
        <Mouth mouthRadius={mouthRadius} arcWidth={arcWidth} />
      </g>
    </svg>
  );
}
