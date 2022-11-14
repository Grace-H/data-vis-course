import { arc } from "d3-shape";

export default function Nose({ arcWidth }) {
  const noseArc = arc()
    .innerRadius(arcWidth)
    .outerRadius(arcWidth * 2)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2);

  return <path d={noseArc()} transform={`translate(0,20)`}></path>;
}
