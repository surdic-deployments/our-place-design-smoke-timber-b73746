import { hours, restaurant } from "@/content/site";
import { Reveal } from "./Reveal";
import { ReservationButton } from "./ReservationButton";
import { ClockIcon, LanternIllustration, MapPinIcon, PhoneIcon, TimberBrace } from "./icons";

export function VisitBook() {
  return (
    <section id="besuch" className="bg-timber-800 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 font-display text-3xl italic text-linen-50 sm:text-4xl">
          Besuch &amp; Buchung
        </h2>

        <Reveal as="div" className="panel reveal relative grid overflow-hidden sm:grid-cols-2">
          <span className="grain-wood" aria-hidden="true" />
          <TimberBrace className="absolute -left-1 -top-1 z-10 h-7 w-7" />
          <TimberBrace className="absolute -bottom-1 -right-1 z-10 h-7 w-7 rotate-180" />

          <div className="relative flex flex-col gap-6 p-6 sm:p-10">
            <div className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-5 w-5 flex-none text-ember-400" />
              <div className="text-sm text-linen-200">
                {hours.lines.map((line) => (
                  <div key={line.days} className="flex justify-between gap-6">
                    <span>{line.days}</span>
                    <span className="font-semibold text-linen-50">{line.time}</span>
                  </div>
                ))}
                <div className="mt-1 text-xs text-linen-200/60">Stand {hours.lastConfirmed}</div>
              </div>
            </div>

            <a
              href={restaurant.mapsUrl}
              className="flex items-start gap-3 text-sm text-linen-50 hover:text-ember-400"
            >
              <MapPinIcon className="mt-0.5 h-5 w-5 flex-none text-ember-400" />
              <span>
                {restaurant.address.street}
                <br />
                {restaurant.address.postalCode} {restaurant.address.city}
              </span>
            </a>

            <a
              href={`tel:${restaurant.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-sm text-linen-50 hover:text-ember-400"
            >
              <PhoneIcon className="h-5 w-5 flex-none text-ember-400" />
              {restaurant.phoneDisplay}
            </a>

            <div className="mt-2 flex flex-wrap items-center gap-6">
              <ReservationButton id="visit" />
              <a href={restaurant.takeawayUrl} className="link-quiet">
                Takeaway bestellen
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[260px] flex-col items-center justify-center gap-4 border-t border-timber-500 p-6 text-center sm:min-h-full sm:border-l sm:border-t-0">
            <LanternIllustration className="h-36 w-auto" />
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet text-sm"
            >
              Route planen ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
