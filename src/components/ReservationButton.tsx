import { restaurant } from "@/content/site";

const PENDING = restaurant.reservationUrl.startsWith("#todo");

export function ReservationButton({
  className = "",
  id,
}: {
  className?: string;
  id: string;
}) {
  const noteId = `reservation-pending-note-${id}`;

  return (
    <span className="relative inline-flex flex-col items-start gap-1.5">
      <a
        href={restaurant.reservationUrl}
        className={`cta-ember ${className}`}
        aria-describedby={PENDING ? noteId : undefined}
      >
        Tisch reservieren
      </a>
      {PENDING && (
        <span id={noteId} className="text-xs text-linen-200/70">
          Reservierung folgt in Kürze
        </span>
      )}
    </span>
  );
}
