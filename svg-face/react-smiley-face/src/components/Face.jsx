import BackgroundShape from "./BackgroundShape";
import Eyes from "./Eyes";
import Mouth from "./Mouth";
import EyeBrows from "./Eyebrows";
import Nose from "./Nose";
import FaceContainer from "./FaceContainer";

export default function Face({
  width,
  height,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  arcWidth,
  mouthRadius,
}) {
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackgroundShape strokeWidth={strokeWidth} />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <EyeBrows mouthRadius={mouthRadius} arcWidth={arcWidth} />
      <Nose arcWidth={arcWidth} />
      <Mouth mouthRadius={mouthRadius} arcWidth={arcWidth} />
    </FaceContainer>
  );
}
