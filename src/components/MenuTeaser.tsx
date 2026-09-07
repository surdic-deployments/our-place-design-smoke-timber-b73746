import { menuTeaser } from "@/content/site";
import { TimberBrace } from "./icons";

export function MenuTeaser() {
  return (
    <section id="speisekarte" className="bg-timber-900 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl italic text-linen-50 sm:text-4xl">Von der Karte</h2>
          <span className="tag">Stand {menuTeaser.updated}</span>
        </div>

        <div className="panel relative grid gap-8 p-6 sm:grid-cols-3 sm:gap-10 sm:p-10">
          <span className="grain-wood" aria-hidden="true" />
          <TimberBrace className="absolute -left-1 -top-1 h-7 w-7" />
          <TimberBrace className="absolute -bottom-1 -right-1 h-7 w-7 rotate-180" />

          {menuTeaser.categories.map((category) => (
            <div key={category.name} className="relative flex flex-col gap-3">
              <h3 className="label-caps">{category.name}</h3>
              <ul className="flex flex-col gap-2.5">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline gap-2 border-b border-dashed border-timber-500 pb-2 text-sm text-linen-50"
                  >
                    <span>{item.name}</span>
                    <span
                      className="flex-1 translate-y-[-3px] border-b border-dotted border-timber-500/60"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-linen-200">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-linen-200/60">
          Preise &amp; Verfügbarkeit können sich ändern. Es gilt die Karte im Restaurant.
        </p>
      </div>
    </section>
  );
}
