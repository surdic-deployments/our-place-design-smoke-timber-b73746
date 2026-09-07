---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Home page surface brief

Scope: `/` (home page only). Visitor mode: Persuade. Audience: local diners and
visitors in Fürth/Nürnberg. German-first copy. Fifth visual world on this
project, on its own branch (`design/smoke-timber`), branched from `main`
(Sign Painter's Board, kept intact). Built in parallel with three sibling
branches the user requested in the same round (`design/whiskey-char`,
`design/butcher-ledger`, and a layout-structure experiment) — this brief
covers only this branch's own direction.

## Why this branch exists

Every prior build (Sign Painter's Board, Film Noir modern-luxury, The Pit
Room) treated the restaurant's real building — an actual half-timbered
Fachwerkhaus in the Fürther Altstadt — as a passing line of copy inside the
"Der Anlass" section, never as a visual driver. The user asked for more
directions to test; this one makes the building itself the visual spine,
on the theory that "a real historic building with a smoker running in it"
is more specific and more ownable than generic BBQ-joint or luxury-panel
material language.

## Direction contract

THESIS: "Smoke & Timber" — the half-timber frame construction of the actual
building (diagonal/vertical/horizontal beam geometry) becomes a literal
structural and framing device across the page, not a decorative motif
layered on top. Charred and seasoned wood are the base material (not kraft
paper, not an abstract dark panel). Smoke is a restrained atmospheric
layer, tied specifically to the smoker, not a generic mood fog.

OWN-WORLD: Predominantly dark, warm seasoned-wood palette — `--timber-900`
(near-black charred wood) as the page's own base, `--timber-700` (mid
wood-brown) for card/panel surfaces, `--linen-50` (warm off-white) for
text on dark. One accent: `--ember-500`, a warm lantern/firebox glow used
only for the primary CTA and small emphasis marks — not spread across the
page. Display face: Fraunces (a warm, soft-serif face with old-building
character — distinct from Rye/Italiana/Alfa Slab One, the three faces
already used on this project). Body: Archivo (a sturdy grotesque, distinct
from Bitter/Manrope/Libre Franklin). Structural framing device: an SVG
"timber-brace" corner bracket (a diagonal Fachwerk-style brace) applied to
card/panel corners in place of a plain rounded-rectangle border, plus a
horizontal "beam-line" section divider (a literal wood-grain beam graphic
spanning full width) replacing the torn-paper motif used on Pit Room.
Procedural wood-grain SVG texture (feTurbulence, tuned for warm brown
grain rather than kraft-paper fiber).

STORY: A visitor sees the actual timber-frame building implied structurally
before they read a word of copy — the beam brackets and beam-line dividers
read as "this is a real, specific old building" — then meets the smoker
and bar inside it, then books via one warm ember-glow CTA.

FIRST VIEWPORT: Full-bleed dark timber-brown hero. A signature illustration
of the Fachwerkhaus itself in beam-line silhouette, with a thin smoke wisp
rising from a chimney — the direction's one must-have illustration, tying
building + BBQ together in a single image rather than as two separate
motifs. Bold Fraunces H1. One ember-glow CTA with a soft (not hard-offset)
lift shadow.

FORM: Builder-committed direction (this is one of several new branches the
user asked for in the same request, full creative discretion delegated).
Named "Smoke & Timber". Code-led build: no image-generation tool is
available in this environment (true for every build in this project's
history) — `.impeccable/config.json` still records `buildPath: "comp"` as
the project's standing preference, but per the skill's own rule that
preference has no effect without an image-generation tool, so no comp
round ran and no `.impeccable/build/` state exists. This is an environment
condition, not a per-branch choice.

FINISH: unreviewed and undocumented is unfinished; this build ends with an
independent finish-review, a ship verdict, and every illustration carrying
its provenance (original inline SVG line art, not sourced). DESIGN.md
stays untouched — it documents main's Sign Painter's Board system, and
none of the other three shipped/parallel systems touch it either.

## Signature illustrations

- The Fachwerkhaus itself: a beam-line building silhouette (visible
  diagonal/vertical/horizontal half-timber pattern in the façade) with a
  chimney and a thin rising smoke wisp — the hero's signature image and
  the direction's core thesis made visible.
- Rib slab, cross-section burger, tomahawk (steak + actual bone shape,
  carrying forward the bone-shape lesson learned on Pit Room) — redrawn in
  a single-weight line style consistent with the timber-beam visual
  language (thicker, squarer joints than Pit Room's rounder woodcut style).
- A hanging lantern for the Visit/Book section, replacing Pit Room's
  roadside sign and Sign Painter's signpost arrow with a device specific
  to this direction (an old building's entrance light, not a road sign).

## Motion (moderate, matching Pit Room's restraint — not modern-luxury's cinematic layer)

Line illustrations draw themselves on via stroke-dasharray as they scroll
into view. Sections settle with a simple fade-up. The primary CTA lifts on
hover via a real blurred drop-shadow (no hard offset shadow — a mistake
made and fixed earlier on Pit Room, not to be repeated here). A very
subtle smoke-wisp drift animation on the hero illustration only (respects
prefers-reduced-motion — freezes to a settled frame, never removed
entirely since it's part of the illustration's content, not decoration).

## Open decisions / TODOs

- Real Resmio reservation (and takeaway) URL — placeholder href + visible
  pending state until supplied.
- Real photography — authored line illustrations stand in deliberately.
- Hours conflict across listings — shown with a "Stand: [date]" label.
