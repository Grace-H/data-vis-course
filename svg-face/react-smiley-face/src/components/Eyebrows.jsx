import { arc } from "d3-shape";

export default function Eyebrows({ arcWidth, mouthRadius }) {
  const browArc = arc()
    .innerRadius(arcWidth)
    .outerRadius(arcWidth * 2)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2);

  return (
    <>
      <path
        d={browArc()}
        transform={`translate(${mouthRadius},-${mouthRadius + 40})`}
      ></path>
      <path
        d={browArc()}
        transform={`translate(-${mouthRadius},-${mouthRadius + 40})`}
      ></path>
    </>
  );
}
