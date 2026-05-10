interface IcosahedronMarkProps {
  className?: string;
  glowClassName?: string;
}

export function IcosahedronMark({
  className = 'h-12 w-12',
  glowClassName = 'drop-shadow-[0_0_24px_rgba(247,198,108,0.45)]',
}: IcosahedronMarkProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      aria-hidden="true"
      className={[className, glowClassName].join(' ')}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ico-gold" x1="52" y1="38" x2="190" y2="212">
          <stop offset="0" stopColor="#FFF2B6" />
          <stop offset="0.34" stopColor="#F8D37E" />
          <stop offset="0.72" stopColor="#C78B1D" />
          <stop offset="1" stopColor="#FFF0A3" />
        </linearGradient>
        <linearGradient id="ico-aura" x1="40" y1="40" x2="216" y2="216">
          <stop offset="0" stopColor="#59D7FF" />
          <stop offset="1" stopColor="#F8D37E" />
        </linearGradient>
      </defs>
      <circle cx="128" cy="128" r="92" stroke="url(#ico-aura)" strokeOpacity="0.28" />
      <circle cx="128" cy="128" r="62" stroke="url(#ico-aura)" strokeOpacity="0.18" />
      <path
        d="M128 36L180 66L196 126L160 178L96 178L60 126L76 66L128 36Z"
        stroke="url(#ico-gold)"
        strokeWidth="7.5"
        strokeLinejoin="round"
      />
      <path
        d="M128 36V92M76 66L128 92M180 66L128 92M60 126L128 92M196 126L128 92M96 178L128 92M160 178L128 92"
        stroke="url(#ico-gold)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M96 178L128 220L160 178M60 126L128 220L196 126"
        stroke="url(#ico-gold)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="128" cy="92" r="10" fill="#F8D37E" />
    </svg>
  );
}
