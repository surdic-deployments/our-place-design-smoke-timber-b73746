// Procedural material grain, produced once via SVG filter primitives rather
// than a flat CSS gradient standing in for texture. Referenced from
// globals.css as `filter: url(#wood-grain)`.
export function TextureDefs() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="wood-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.9"
            numOctaves={3}
            seed={5}
            stitchTiles="stitch"
            result="n"
          />
          <feColorMatrix in="n" type="saturate" values="0" />
        </filter>
        <filter id="paper-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves={2}
            seed={9}
            stitchTiles="stitch"
            result="n"
          />
          <feColorMatrix in="n" type="saturate" values="0" />
        </filter>
      </defs>
    </svg>
  );
}
