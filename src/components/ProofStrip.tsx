import { proofPoints } from "@/content/site";
import { BeamLine } from "./icons";

export function ProofStrip() {
  return (
    <section className="bg-timber-800 px-4 pb-6 pt-0 sm:px-8">
      <BeamLine className="beam-line" />
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6">
        {proofPoints.map((point) => (
          <li key={point} className="tag">
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
