export default function BackgroundShape({ strokeWidth }) {
  return (
    <polygon
      points="-200,-200 190,-170 190,-80 240,198 -240,198 -170,78"
      fill="green"
      stroke="purple"
      stroke-width={strokeWidth}
    />
  );
}
