import "./App.css";
import { useEffect, useState } from "react";
import { csv, arc } from "d3";

const csvURL =
  "https://gist.githubusercontent.com/Grace-H/6fa383b8274ae4de60bd9a2638455854/raw/namedColorsCSS.csv";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

const pieArc = arc().innerRadius(0).outerRadius(200);

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvURL).then(setData);
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {data.map((d, i) => (
          <path
            d={pieArc({
              startAngle: (i / data.length) * 2 * Math.PI,
              endAngle: ((i + 1) / data.length) * 2 * Math.PI,
            })}
            fill={d["RGB hex value"]}
          />
        ))}
      </g>
    </svg>
  );
}
