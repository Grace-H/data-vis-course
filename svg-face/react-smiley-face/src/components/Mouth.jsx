import { arc } from "d3-shape";

export default function Mouth({ mouthRadius, arcWidth }) {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(arcWidth + mouthRadius)
    .startAngle(Math.PI / 2)
    .endAngle((3 * Math.PI) / 2);

  return <path d={mouthArc()}></path>;
}
