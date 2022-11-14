export default function Eyes({ eyeOffsetX, eyeOffsetY, eyeRadius }) {
  return (
    <>
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
    </>
  );
}
