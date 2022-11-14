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
  const noseArc = arc()
    .innerRadius(mouthWidth)
    .outerRadius(40)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2);

  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthWidth + mouthRadius)
    .startAngle(Math.PI / 2)
    .endAngle((3 * Math.PI) / 2);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {/*group element*/}
        <BackgroundShape strokeWidth={strokeWidth} />
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <circle
          cx={-eyeOffsetX}
          cy={-eyeOffsetY}
          r={(2 * eyeRadius) / 5}
          fill="grey"
        />
        <circle
          cx={eyeOffsetX}
          cy={-eyeOffsetY}
          r={(2 * eyeRadius) / 5}
          fill="grey"
        />
        <path
          d={noseArc()}
          transform={`translate(${mouthRadius},-${mouthRadius + 40})`}
        ></path>
        <path
          d={noseArc()}
          transform={`translate(-${mouthRadius},-${mouthRadius + 40})`}
        ></path>
        <path d={noseArc()} transform={`translate(0,20)`}></path>
        <path d={mouthArc()}></path>
      </g>
    </svg>
  );
}

function BackgroundShape({ strokeWidth }) {
  return (
    <polygon
      points="-200,-200 190,-170 190,-80 240,198 -240,198 -170,78"
      fill="green"
      stroke="purple"
      stroke-width={strokeWidth}
    />
  );
}
