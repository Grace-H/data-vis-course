import "./App.css";
import { arc } from "d3-shape";

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
  const mouthWidth = 20;

  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthWidth + mouthRadius)
    .startAngle(Math.PI / 2)
    .endAngle((3 * Math.PI) / 2);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {/*group element*/}
        <circle
          r={height / 2 - strokeWidth / 2}
          fill="yellow"
          stroke="black"
          stroke-width={strokeWidth}
        />
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <path d={mouthArc()}></path>
      </g>
    </svg>
  );
}
