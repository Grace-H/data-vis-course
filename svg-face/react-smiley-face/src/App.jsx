import { range } from "d3";
import Face from "./components/Face";

export default function App() {
  const width = 500;
  const height = 500;
  const array = range(2 * 3);

  return array.map(() => (
    <>
      <Face
        width={width}
        height={height}
        strokeWidth={10}
        eyeOffsetX={90}
        eyeOffsetY={100}
        eyeRadius={10 + Math.random() * 50}
        mouthRadius={120}
        arcWidth={5 + Math.random() * 20}
      />
    </>
  ));
}
