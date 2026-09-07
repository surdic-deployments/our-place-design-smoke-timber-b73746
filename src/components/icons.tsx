const STROKE = 1.75;

export function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.5 19.5 4.5 13.5 4.5 5.5c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

export function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function MenuGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function withDrawIn({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return { className: `draw-in ${className}`, ...props };
}

/** The Fachwerkhaus itself: a half-timber building silhouette with the
 * diagonal/vertical/horizontal beam pattern visible in the façade, a
 * chimney, and a rising smoke wisp — the direction's core thesis (real
 * building + BBQ) made into a single hero image rather than two motifs. */
export function FachwerkhausIllustration(props: React.SVGProps<SVGSVGElement>) {
  const { className, ...rest } = withDrawIn(props);
  return (
    <svg viewBox="0 0 260 220" className={className} fill="none" aria-hidden="true" {...rest}>
      {/* roofline */}
      <path
        d="M20 100 L130 30 L240 100"
        stroke="var(--linen-50)"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* wall outline */}
      <rect
        x="34"
        y="100"
        width="192"
        height="104"
        stroke="var(--linen-50)"
        strokeWidth={5}
        strokeLinejoin="round"
      />
      {/* half-timber beam pattern: verticals — wood tone, ember stays
          reserved for the CTA and small emphasis marks per OWN-WORLD */}
      <path d="M78 100 L78 204 M130 100 L130 204 M182 100 L182 204" stroke="var(--timber-300)" strokeWidth={4} />
      {/* horizontal tie beam */}
      <path d="M34 152 L226 152" stroke="var(--timber-300)" strokeWidth={4} />
      {/* diagonal braces (St. Andrew's cross, left and right bays) */}
      <path
        d="M34 152 L78 204 M78 152 L34 204 M182 100 L226 152 M226 100 L182 152"
        stroke="var(--timber-300)"
        strokeWidth={4}
      />
      {/* door — kept within bay 2 (78-130), clear of the x=130 beam */}
      <rect x="86" y="164" width="36" height="40" stroke="var(--linen-50)" strokeWidth={3.5} />
      {/* windows — placed in the two bays without a diagonal brace */}
      <rect x="52" y="116" width="18" height="22" stroke="var(--linen-50)" strokeWidth={3} />
      <rect x="190" y="164" width="18" height="22" stroke="var(--linen-50)" strokeWidth={3} />
      {/* chimney */}
      <path d="M186 60 L186 92" stroke="var(--linen-50)" strokeWidth={5} strokeLinecap="round" />
      {/* smoke wisp */}
      <path
        className="smoke-wisp"
        d="M186 58c-10-8 10-14 0-24s10-16 0-26"
        stroke="var(--timber-300)"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Flat-lay rib slab, squarer joints than Pit Room's rounder woodcut
 * style, to match this direction's timber-beam visual language. */
export function RibsIllustration(props: React.SVGProps<SVGSVGElement>) {
  const { className, ...rest } = withDrawIn(props);
  return (
    <svg viewBox="0 0 160 100" className={className} fill="none" aria-hidden="true" {...rest}>
      <rect x="16" y="14" width="128" height="72" stroke="var(--linen-50)" strokeWidth={4} />
      <path d="M40 14v72 M64 14v72 M88 14v72 M112 14v72" stroke="var(--ember-500)" strokeWidth={3} />
    </svg>
  );
}

/** Cross-section burger. */
export function BurgerIllustration(props: React.SVGProps<SVGSVGElement>) {
  const { className, ...rest } = withDrawIn(props);
  return (
    <svg viewBox="0 0 160 120" className={className} fill="none" aria-hidden="true" {...rest}>
      <path d="M22 52 Q80 18 138 52" stroke="var(--linen-50)" strokeWidth={4} strokeLinecap="round" />
      <path d="M22 60 L138 60" stroke="var(--ember-500)" strokeWidth={4} strokeLinecap="round" />
      <path d="M22 72 L138 72" stroke="var(--linen-50)" strokeWidth={4} strokeLinecap="round" />
      <path d="M22 84 L138 84" stroke="var(--ember-500)" strokeWidth={4} strokeLinecap="round" />
      <path d="M18 96 Q80 112 142 96" stroke="var(--linen-50)" strokeWidth={4} strokeLinecap="round" />
    </svg>
  );
}

/** Tomahawk steak with an actual dog-bone silhouette handle. */
export function TomahawkIllustration(props: React.SVGProps<SVGSVGElement>) {
  const { className, ...rest } = withDrawIn(props);
  return (
    <svg viewBox="0 0 170 100" className={className} fill="none" stroke="var(--linen-50)" strokeWidth={4} aria-hidden="true" {...rest}>
      <path d="M20 50a34 34 0 1 0 68 0 34 34 0 1 0-68 0Z" />
      <path d="M46 40c6 4 6 16 0 20 M62 36c6 6 6 22 0 28" />
      <rect x="96" y="42" width="46" height="12" rx="2" fill="var(--timber-300)" stroke="var(--timber-300)" />
      <circle cx="100" cy="42" r="8" fill="var(--timber-300)" stroke="var(--timber-300)" />
      <circle cx="100" cy="54" r="8" fill="var(--timber-300)" stroke="var(--timber-300)" />
      <circle cx="146" cy="41" r="10" fill="var(--timber-300)" stroke="var(--timber-300)" />
      <circle cx="146" cy="57" r="10" fill="var(--timber-300)" stroke="var(--timber-300)" />
    </svg>
  );
}

/** A hanging entrance lantern for the Visit/Book section — an old
 * building's own light, not a road sign. */
export function LanternIllustration(props: React.SVGProps<SVGSVGElement>) {
  const { className, ...rest } = withDrawIn(props);
  return (
    <svg viewBox="0 0 120 160" className={className} fill="none" aria-hidden="true" {...rest}>
      <path d="M60 4 L60 26" stroke="var(--linen-50)" strokeWidth={3} strokeLinecap="round" />
      <path d="M40 26 L80 26" stroke="var(--linen-50)" strokeWidth={4} strokeLinecap="round" />
      <path d="M60 26 L60 40" stroke="var(--linen-50)" strokeWidth={3} />
      <rect x="34" y="40" width="52" height="70" rx="4" stroke="var(--linen-50)" strokeWidth={4} />
      <path d="M34 56h52 M34 94h52 M50 40v70 M70 40v70" stroke="var(--linen-50)" strokeWidth={2.5} />
      <circle cx="60" cy="75" r="14" fill="var(--ember-500)" stroke="var(--ember-600)" strokeWidth={2} />
      <path d="M46 110 L52 128 L68 128 L74 110" stroke="var(--linen-50)" strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}

/** Timber-brace corner bracket: a diagonal Fachwerk-style brace used at
 * panel corners in place of a plain rounded-rectangle border. Placed via
 * CSS at each corner the panel wants framed. */
export function TimberBrace(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <path d="M2 2 L2 20 M2 2 L20 2" stroke="var(--timber-500)" strokeWidth={4} strokeLinecap="round" />
      <path d="M2 14 L14 2" stroke="var(--ember-500)" strokeWidth={3.5} strokeLinecap="round" />
    </svg>
  );
}

/** Beam-line divider: a literal wood-grain beam spanning the section
 * seam, this direction's replacement for a torn-paper or flat divider. */
export function BeamLine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1200 14" preserveAspectRatio="none" fill="none" aria-hidden="true" {...props}>
      <rect x="0" y="0" width="1200" height="14" fill="var(--timber-700)" />
      <rect
        x="0"
        y="0"
        width="1200"
        height="14"
        filter="url(#wood-grain)"
        opacity={0.4}
        style={{ mixBlendMode: "overlay" }}
      />
      <path d="M0 4 L1200 4" stroke="var(--timber-500)" strokeWidth={1.5} />
      <path d="M0 10 L1200 10" stroke="var(--timber-950)" strokeWidth={1.5} opacity={0.5} />
    </svg>
  );
}
