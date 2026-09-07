import { signatureDishes } from "@/content/site";
import { Reveal } from "./Reveal";
import { BurgerIllustration, RibsIllustration, TimberBrace, TomahawkIllustration } from "./icons";

const ILLUSTRATIONS = [RibsIllustration, BurgerIllustration, TomahawkIllustration];

export function SignatureDishes() {
  return (
    <section className="bg-timber-900 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 font-display text-3xl italic text-linen-50 sm:text-4xl">
          Von der Platte
        </h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {signatureDishes.map((dish, i) => {
            const Illustration = ILLUSTRATIONS[i];
            return (
              <Reveal key={dish.index} as="article" className="panel reveal flex flex-col gap-3 p-6">
                <span className="grain-wood" aria-hidden="true" />
                <TimberBrace className="absolute -left-1 -top-1 h-6 w-6" />
                <TimberBrace className="absolute -bottom-1 -right-1 h-6 w-6 rotate-180" />

                <div className="relative flex items-center justify-end gap-2">
                  <span className="label-caps !text-linen-200/70">Schärfe</span>
                  <div className="flex items-center gap-1" aria-label={`Schärfe ${dish.spiceLevel} von 3`}>
                    {[1, 2, 3].map((level) => (
                      <span
                        key={level}
                        className="h-2 w-2 rounded-full"
                        style={{
                          background: level <= dish.spiceLevel ? "var(--ember-500)" : "var(--timber-500)",
                        }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
                <Illustration className="relative mx-auto h-24 w-auto" />
                <h3 className="relative font-display text-xl leading-tight text-linen-50">
                  {dish.name}
                </h3>
                <p className="relative text-sm leading-relaxed text-linen-200">{dish.description}</p>
                <div className="relative mt-auto flex items-center justify-end pt-2">
                  <span className="font-display text-lg text-ember-400">{dish.price}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
