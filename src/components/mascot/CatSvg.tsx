/** Static mascot illustration: placeholder while 3D loads, fallback without GPU, and lesson avatar. */
export function CatSvg({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <ellipse cx="100" cy="186" rx="52" ry="8" fill="currentColor" opacity="0.1" />
      <path d="M150 168c28-4 36-34 22-52" fill="none" stroke="#f2a066" strokeWidth="14" strokeLinecap="round" />
      <ellipse cx="100" cy="142" rx="54" ry="44" fill="#f2a066" />
      <ellipse cx="100" cy="150" rx="30" ry="32" fill="#fff1e2" />
      <ellipse cx="78" cy="182" rx="15" ry="9" fill="#fff1e2" />
      <ellipse cx="122" cy="182" rx="15" ry="9" fill="#fff1e2" />
      <path d="M48 70 56 18l40 34zM152 70l-8-52-40 34z" fill="#f2a066" strokeLinejoin="round" />
      <path d="M58 56 62 30l20 18zM142 56l-4-26-20 18z" fill="#f29a9a" />
      <ellipse cx="100" cy="78" rx="62" ry="50" fill="#f2a066" />
      <path d="M100 32v16M92 34l3 12M108 34l-3 12" stroke="#d9783f" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="100" cy="96" rx="24" ry="16" fill="#fff1e2" />
      <g className="cat-eyes">
        <ellipse cx="78" cy="78" rx="8" ry="10" fill="#1c1d29" />
        <ellipse cx="122" cy="78" rx="8" ry="10" fill="#1c1d29" />
        <circle cx="81" cy="74" r="3" fill="#fff" />
        <circle cx="125" cy="74" r="3" fill="#fff" />
      </g>
      <ellipse cx="62" cy="96" rx="8" ry="5" fill="#f29a9a" opacity="0.6" />
      <ellipse cx="138" cy="96" rx="8" ry="5" fill="#f29a9a" opacity="0.6" />
      <path d="M96 90h8l-4 4z" fill="#f29a9a" />
      <path d="M92 98q4 5 8 0q4 5 8 0" fill="none" stroke="#1c1d29" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 92h26M46 102l24-4M156 92h-26M154 102l-24-4" stroke="#6b4a3a" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}
