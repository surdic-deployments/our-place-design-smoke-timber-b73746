import { nav, restaurant } from "@/content/site";
import { ReservationButton } from "./ReservationButton";
import { MenuGlyph } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-timber-700 bg-timber-900/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#top" className="font-display text-xl italic text-linen-50 sm:text-2xl">
          {restaurant.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-quiet text-sm">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ReservationButton id="header-desktop" className="text-sm" />
        </div>

        <details className="relative md:hidden">
          <summary
            className="flex h-11 w-11 items-center justify-center rounded-md border border-timber-500 text-linen-50 [&::-webkit-details-marker]:hidden"
            aria-label="Menü öffnen"
          >
            <MenuGlyph className="h-5 w-5" />
          </summary>
          <div className="panel absolute right-0 top-12 flex w-56 flex-col gap-3 p-4">
            <span className="grain-wood" aria-hidden="true" />
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="relative text-sm text-linen-50">
                {item.label}
              </a>
            ))}
            <span className="relative">
              <ReservationButton id="header-mobile" className="justify-center text-sm" />
            </span>
          </div>
        </details>
      </div>
    </header>
  );
}
