const iconClass = 'h-5 w-5 shrink-0'

/** Shared rounded square frame for all contact icons */
const iconBox = <rect x="3" y="3" width="18" height="18" rx="4" />

export function InstagramIcon() {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {iconBox}
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.8" cy="7.2" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function EmailIcon() {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {iconBox}
      <rect x="7" y="9" width="10" height="7" rx="0.5" />
      <path d="M7 10l5 3.5 5-3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function FacebookIcon() {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {iconBox}
      <path
        d="M14 10.5v-1.3c0-.7.5-1.2 1.2-1.2h1.3V6.5h-2.1c-2 0-3.4 1.3-3.4 3.4v.6H9v2.4h1.5V18h3.1v-7.1H16l.5-2.4h-2.5z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

export function PhoneIcon() {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {iconBox}
      <rect x="9" y="7" width="6" height="10" rx="1" />
      <path d="M10.5 16h3" strokeLinecap="round" />
    </svg>
  )
}
