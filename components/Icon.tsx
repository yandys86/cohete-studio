type Props = { name: string; className?: string };

export default function Icon({ name, className = "size-6" }: Props) {
  switch (name) {
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 L13.5 9 L20 10.5 L13.5 12 L12 18 L10.5 12 L4 10.5 L10.5 9 Z" />
          <path d="M19 17 L 20 19 L 22 20 L 20 21 L 19 23 L 18 21 L 16 20 L 18 19 Z" />
        </svg>
      );
    case "monitor":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M9 21 L15 21 M12 17 L12 21" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M16 16 L21 21" />
        </svg>
      );
    case "share":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6"  cy="12" r="3" />
          <circle cx="18" cy="6"  r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M9 10.5 L 15 7.5 M9 13.5 L 15 16.5" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7 L12 13 L21 7" />
        </svg>
      );
    case "user":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21 C 4 16, 8 14, 12 14 C 16 14, 20 16, 20 21" />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M15 9 L13 13 L9 15 L11 11 Z" fill="currentColor" />
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 C 15 5, 16 9, 16 13 L 8 13 C 8 9, 9 5, 12 2 Z" />
          <path d="M8 13 L 6 18 L 9 17 M 16 13 L 18 18 L 15 17" />
          <circle cx="12" cy="9" r="1.5" />
          <path d="M10 19 L 9 22 M 12 19 L 12 22 M 14 19 L 15 22" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.5 0 .17 5.32.17 11.87c0 2.09.55 4.13 1.59 5.93L.07 24l6.36-1.66a11.87 11.87 0 0 0 5.62 1.43h.01c6.55 0 11.88-5.32 11.88-11.87a11.8 11.8 0 0 0-3.42-8.42zM12.06 21.78h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.77.99 1-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.27c0-5.45 4.43-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.9-9.89 9.9z" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12 L19 12 M13 6 L19 12 L13 18" />
        </svg>
      );
    default:
      return null;
  }
}
