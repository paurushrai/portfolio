import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ICON_STROKE = "#d4d4d8";

/** Icon paths ported from lucide-react — satori doesn't reliably render lucide's <svg> wrapper. */
const SOCIAL_ICONS = [
  {
    label: "GitHub",
    text: "github.com/paurushrai",
    path: [
      <path
        key="body"
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      />,
      <path key="tail" d="M9 18c-4.51 2-5-2-7-2" />,
    ],
  },
  {
    label: "LinkedIn",
    text: "linkedin.com/in/paurushrai",
    path: [
      <path
        key="body"
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      />,
      <rect key="bar" width="4" height="12" x="2" y="9" />,
      <circle key="dot" cx="4" cy="4" r="2" />,
    ],
  },
  {
    label: "Email",
    text: "paurushrai96@gmail.com",
    path: [
      <rect key="envelope" width="20" height="16" x="2" y="4" rx="2" />,
      <path key="flap" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />,
    ],
  },
  {
    label: "Discord",
    text: "discord.com/users/paurushrai",
    path: [<path key="bubble" d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />],
  },
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage:
            "linear-gradient(to top left, #000000, rgba(63,63,70,0.4), #000000)",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          Paurush Rai
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#a1a1aa",
          }}
        >
          Senior Frontend Engineer
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            marginTop: 40,
          }}
        >
          {SOCIAL_ICONS.map(({ label, text, path }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke={ICON_STROKE}
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {path}
              </svg>
              <div style={{ fontSize: 20, color: "#a1a1aa" }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
