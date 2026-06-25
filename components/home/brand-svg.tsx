import { cn } from "@/lib/utils";

type SvgProps = {
  className?: string;
};

export function HeroFieldLines({ className }: SvgProps) {
  return (
    <svg
      className={cn("pointer-events-none absolute", className)}
      viewBox="0 0 760 520"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M34 394C180 286 342 248 558 286C641 301 700 289 734 249"
        stroke="#FFF8E6"
        strokeOpacity="0.2"
        strokeWidth="2"
      />
      <path
        d="M5 456C171 333 357 292 618 338C675 348 717 344 752 322"
        stroke="#65C22E"
        strokeOpacity="0.28"
        strokeWidth="2"
      />
      <path
        d="M130 505C259 414 406 384 626 421"
        stroke="#F5B84B"
        strokeOpacity="0.22"
        strokeWidth="2"
      />
      <path
        d="M572 34L610 109L694 121L633 180L648 263L572 224L497 263L511 180L450 121L534 109L572 34Z"
        fill="#FFF8E6"
        fillOpacity="0.08"
      />
    </svg>
  );
}

export function CleanupRouteSvg({ className }: SvgProps) {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 520 360"
      fill="none"
      aria-hidden="true"
    >
      <rect width="520" height="360" rx="32" fill="#FFF8E6" />
      <path d="M0 244C84 204 161 204 230 244C305 288 402 289 520 218V360H0V244Z" fill="#D8F1CB" />
      <path d="M0 284C92 243 187 249 270 291C343 329 430 318 520 260V360H0V284Z" fill="#BFE5AC" />
      <path
        d="M78 218C125 146 192 118 280 134C362 149 418 111 442 52"
        stroke="#0F5A24"
        strokeLinecap="round"
        strokeDasharray="8 14"
        strokeWidth="8"
      />
      <circle cx="78" cy="218" r="20" fill="#65C22E" />
      <circle cx="442" cy="52" r="20" fill="#F5B84B" />
      <path d="M176 96H80V58H176V96Z" fill="#FFFFFF" stroke="#0F5A24" strokeWidth="5" />
      <path d="M103 58V34H153V58" stroke="#0F5A24" strokeLinecap="round" strokeWidth="5" />
      <path d="M385 220H449V292H337V220H385Z" fill="#FFFFFF" stroke="#0F5A24" strokeWidth="5" />
      <path d="M365 220V186H421V220" stroke="#0F5A24" strokeLinecap="round" strokeWidth="5" />
      <path d="M246 238C246 210 269 187 297 187C325 187 348 210 348 238" stroke="#0F5A24" strokeLinecap="round" strokeWidth="8" />
      <path d="M270 238H324" stroke="#0F5A24" strokeLinecap="round" strokeWidth="8" />
    </svg>
  );
}

export function PriceLeafSvg({ className }: SvgProps) {
  return (
    <svg
      className={cn("size-16", className)}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M63 15C39 14 18 30 16 54C39 60 61 44 63 15Z"
        fill="#65C22E"
      />
      <path
        d="M20 56C32 44 44 35 59 24"
        stroke="#0F5A24"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M19 56C17 62 15 67 12 72"
        stroke="#0F5A24"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
}

export function ContactSweepSvg({ className }: SvgProps) {
  return (
    <svg
      className={cn("pointer-events-none absolute", className)}
      viewBox="0 0 980 280"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M-14 202C149 95 291 91 410 189C536 293 668 287 819 157C888 98 947 71 1002 69"
        stroke="#F5B84B"
        strokeOpacity="0.45"
        strokeWidth="3"
      />
      <path
        d="M-20 244C172 125 335 125 472 234C599 335 726 319 969 118"
        stroke="#65C22E"
        strokeOpacity="0.35"
        strokeWidth="3"
      />
    </svg>
  );
}

export function ResidentialYardSvg({ className }: SvgProps) {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <rect width="120" height="120" rx="24" fill="#FFF8E6" />
      <path d="M0 82C24 69 48 70 72 84C90 94 105 94 120 84V120H0V82Z" fill="#D8F1CB" />
      <path d="M31 58L60 34L89 58V91H31V58Z" fill="white" stroke="#0F5A24" strokeWidth="5" strokeLinejoin="round" />
      <path d="M51 91V70H69V91" stroke="#0F5A24" strokeWidth="5" strokeLinejoin="round" />
      <path d="M24 58L60 29L96 58" stroke="#65C22E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
      <path d="M20 91H100" stroke="#0F5A24" strokeLinecap="round" strokeWidth="5" />
    </svg>
  );
}

export function WeeklyRoutesSvg({ className }: SvgProps) {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <rect width="120" height="120" rx="24" fill="#E8F7DF" />
      <rect x="25" y="31" width="70" height="66" rx="13" fill="white" stroke="#0F5A24" strokeWidth="5" />
      <path d="M25 51H95" stroke="#0F5A24" strokeLinecap="round" strokeWidth="5" />
      <path d="M43 24V37M77 24V37" stroke="#65C22E" strokeLinecap="round" strokeWidth="6" />
      <path d="M44 70L55 81L78 63" stroke="#65C22E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" />
      <path d="M32 103C52 95 71 95 91 103" stroke="#F5B84B" strokeLinecap="round" strokeWidth="5" />
    </svg>
  );
}

export function OneTimeCleanupSvg({ className }: SvgProps) {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <rect width="120" height="120" rx="24" fill="#EAF6FF" />
      <path d="M31 80C49 69 71 69 89 80" stroke="#65C22E" strokeLinecap="round" strokeWidth="8" />
      <path d="M33 91H87" stroke="#0F5A24" strokeLinecap="round" strokeWidth="6" />
      <path d="M58 29V75" stroke="#0F5A24" strokeLinecap="round" strokeWidth="6" />
      <path d="M58 36C73 32 85 36 94 48C84 61 72 65 58 60V36Z" fill="#F5B84B" stroke="#0F5A24" strokeLinejoin="round" strokeWidth="5" />
      <path d="M58 43C45 39 35 42 27 52C35 63 45 66 58 61V43Z" fill="white" stroke="#0F5A24" strokeLinejoin="round" strokeWidth="5" />
      <circle cx="85" cy="29" r="5" fill="#65C22E" />
      <circle cx="36" cy="30" r="4" fill="#65C22E" />
    </svg>
  );
}

export function MultiDogHomesSvg({ className }: SvgProps) {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <rect width="120" height="120" rx="24" fill="#FFF0CF" />
      <path d="M60 24C75 37 91 36 91 36V58C91 78 78 93 60 99C42 93 29 78 29 58V36C29 36 45 37 60 24Z" fill="white" stroke="#0F5A24" strokeLinejoin="round" strokeWidth="5" />
      <circle cx="47" cy="61" r="8" fill="#65C22E" />
      <circle cx="73" cy="61" r="8" fill="#65C22E" />
      <path d="M51 78C56 82 64 82 69 78" stroke="#0F5A24" strokeLinecap="round" strokeWidth="5" />
      <path d="M42 47L34 39M78 47L86 39" stroke="#0F5A24" strokeLinecap="round" strokeWidth="5" />
      <path d="M60 25V43" stroke="#F5B84B" strokeLinecap="round" strokeWidth="6" />
    </svg>
  );
}
