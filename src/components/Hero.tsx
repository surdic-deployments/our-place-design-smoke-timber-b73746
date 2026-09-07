import { hours } from "@/content/site";
import { Reveal } from "./Reveal";
import { ReservationButton } from "./ReservationButton";
import { ClockIcon, FachwerkhausIllustration } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative bg-timber-900 px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
      <span className="grain-wood" aria-hidden="true" style={{ borderRadius: 0 }} />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 sm:grid-cols-[1.2fr_1fr] sm:gap-6">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-display text-4xl leading-[1.05] text-linen-50 sm:text-6xl lg:text-7xl">
            Rauch. Ribs.
            <br />
            <span className="italic text-ember-500">Gute Abende.</span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-linen-200 sm:text-lg">
            American Barbecue &amp; Cocktailhouse in einem echten Fachwerkhaus
            mitten in Fürth — hickory-geräuchert, langsam gezogen, zum Teilen
            gedacht.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <ReservationButton id="hero" />
            <a href="#speisekarte" className="link-quiet">
              Speisekarte entdecken
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-linen-200">
            <ClockIcon className="h-4 w-4 text-ember-400" />
            {hours.lines[0].days} {hours.lines[0].time}
          </div>
        </div>

        <Reveal as="div" className="reveal mx-auto w-full max-w-xs sm:max-w-sm">
          <FachwerkhausIllustration className="w-full" />
        </Reveal>
      </div>
    </section>
  );
}
