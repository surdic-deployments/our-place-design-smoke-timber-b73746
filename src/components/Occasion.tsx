import { occasion } from "@/content/site";
import { Reveal } from "./Reveal";
import { BeamLine } from "./icons";

export function Occasion() {
  return (
    <section id="unser-place" className="bg-timber-800 px-5 py-16 sm:px-8 sm:py-24">
      <BeamLine className="beam-line mb-12" />
      <Reveal
        as="div"
        className="reveal mx-auto grid max-w-6xl gap-8 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-14"
      >
        <div className="flex items-start">
          <h2 className="font-display text-3xl italic leading-none text-ember-400 sm:text-4xl">
            {occasion.heading}
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          {occasion.paragraphs.map((paragraph, index) => (
            <p key={index} className="max-w-2xl text-base leading-relaxed text-linen-200 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
      <BeamLine className="beam-line mt-12" />
    </section>
  );
}
