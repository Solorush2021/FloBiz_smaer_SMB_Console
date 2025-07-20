export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      aria-label="FloBiz Logo"
      {...props}
    >
      <g fill="currentColor">
        <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z" />
        <path d="M168 96a40 40 0 1 0-40 40h40a40 40 0 0 0 0-80Zm-40 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24Z" />
      </g>
    </svg>
  );
}
