import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import Script from "next/script";
import { ProgressBar } from "./components/progress-bar";
import { LanguageProvider } from "./i18n/LanguageContext";
import { Suspense } from "react";

const BASE_URL = "https://paurushrai.in";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : BASE_URL,
  ),
  title: {
    default: "paurushrai.in",
    template: "%s | paurushrai.in",
  },
  description: "Full-stack Software Engineer architecting enterprise web platforms, AI-driven applications, and developer productivity tools.",
  alternates: {
    canonical: BASE_URL,
    languages: {
      "x-default": BASE_URL,
      en: BASE_URL,
      de: BASE_URL,
      es: BASE_URL,
      fr: BASE_URL,
      hi: BASE_URL,
      it: BASE_URL,
      ja: BASE_URL,
      ko: BASE_URL,
      pt: BASE_URL,
      ru: BASE_URL,
      tr: BASE_URL,
      zh: BASE_URL,
    },
  },
  openGraph: {
    title: "paurushrai.in",
    description: "Full-stack Software Engineer architecting enterprise web platforms, AI-driven applications, and developer productivity tools.",
    url: BASE_URL,
    siteName: "paurushrai.in",
    images: [
      {
        url: `${BASE_URL}/og.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Paurush Rai",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9K3JKH3R6G"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9K3JKH3R6G');
        `}
      </Script>
      {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
      )}
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Paurush Rai",
              url: BASE_URL,
              jobTitle: "Full-stack Software Engineer",
              description: "Full-stack Software Engineer architecting enterprise web platforms, AI-driven applications, and developer productivity tools.",
              sameAs: [
                "https://github.com/paurushrai",
                "https://linkedin.com/in/paurushrai",
              ],
            }),
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LanguageProvider>
          <Suspense fallback={null}>
            <ProgressBar />
          </Suspense>
          <div id="main-content">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
