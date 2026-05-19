const iconClass = 'h-5 w-5 shrink-0'

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
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
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
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
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
      <rect x="3" y="3" width="18" height="18" rx="4" />
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
      <path
        d="M6.5 4h2.2c.6 0 1.1.4 1.2 1l.4 2.4a1.2 1.2 0 01-.7 1.3l-1.5.7a12.5 12.5 0 005.9 5.9l.7-1.5a1.2 1.2 0 011.3-.7l2.4.4c.6.1 1 .6 1 1.2v2.2c0 .7-.5 1.2-1.2 1.2C10.9 20.2 3.8 13.1 3.8 5.7c0-.7.5-1.2 1.2-1.2h1.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
