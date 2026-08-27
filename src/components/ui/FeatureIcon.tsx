import type {
  FeatureIconType,
} from "../sections/about/constants/about.data";

interface FeatureIconProps {
  type: FeatureIconType;
  color: string;
}

export default function FeatureIcon({
  type,
  color,
}: FeatureIconProps) {
  if (type === "code") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4 sm:h-5 sm:w-5"
        style={{ color }}
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
        />

        <path
          d="m9 9-3 3 3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="m15 9 3 3-3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M14 8.5 10 15.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4 sm:h-5 sm:w-5"
        style={{ color }}
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3 20 6v5c0 5.2-3.3 8.6-8 10-4.7-1.4-8-4.8-8-10V6l8-3Z" />

        <path
          d="m8.5 12 2.2 2.2 4.8-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 sm:h-5 sm:w-5"
      style={{ color }}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
      />

      <path d="M3.8 9h16.4" />

      <path d="M3.8 15h16.4" />

      <path d="M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2 3.4-3.3 6.2-3.3 8.5S9.8 5.8 12 3.5Z" />
    </svg>
  );
}