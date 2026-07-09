import "../../global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProgressBar } from "../components/progress-bar";
import ClickSpark from "../components/click-spark";
import { LanguageProvider } from "../i18n/LanguageContext";
import { LOCALES, DEFAULT_LOCALE, isLocale, localizedPath } from "../i18n/config";

const BASE_URL = "https://paurushrai.in";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const languages: Record<string, string> = { "x-default": BASE_URL };
  for (const l of LOCALES) {
    languages[l] = `${BASE_URL}${localizedPath("/", l)}`;
  }
  const canonical = `${BASE_URL}${localizedPath("/", locale)}`;

  return {
    metadataBase: new URL(
      process.env.NODE_ENV === "development" ? "http://localhost:3000" : BASE_URL,
    ),
    title: {
      default: "Paurush Rai — Senior Product Engineer & Full-Stack Developer",
      template: "%s | Paurush Rai",
    },
    description:
      "Paurush Rai is a Senior Product Engineer and Full-Stack Developer with 5+ years of experience building enterprise SaaS, AI-integrated platforms, and developer tools. Available for Senior Product Engineer, Senior Frontend Developer, and Senior Software Engineer roles.",
    keywords: [
      "Senior Product Engineer",
      "Senior Software Engineer",
      "Senior Frontend Developer",
      "Full-Stack Developer",
      "React Developer",
      "Next.js Developer",
      "React Native Developer",
      "TypeScript Engineer",
      "AI Integration Engineer",
      "Enterprise Web Development",
      "Developer Tools Engineer",
      "Paurush Rai",
    ],
    alternates: { canonical, languages },
    openGraph: {
      title: "Paurush Rai — Senior Product Engineer & Full-Stack Developer",
      description:
        "Senior Product Engineer & Full-Stack Developer specializing in AI integration, enterprise SaaS, and developer tools. 5+ years building scalable web platforms.",
      url: canonical,
      siteName: "paurushrai.in",
      images: [
        {
          url: `${BASE_URL}/og.png`,
          width: 1920,
          height: 1080,
          alt: "Paurush Rai — Senior Product Engineer & Full-Stack Developer",
        },
      ],
      locale,
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
      title: "Paurush Rai — Senior Product Engineer & Full-Stack Developer",
      description:
        "Senior Product Engineer & Full-Stack Developer specializing in AI integration, enterprise SaaS, and developer tools. 5+ years building scalable web platforms.",
      card: "summary_large_image",
      images: [`${BASE_URL}/og.png`],
    },
    icons: {
      shortcut: "/favicon.ico",
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
  display: "swap",
});

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;

  return (
    <html lang={locale} className={[inter.variable, calSans.variable].join(" ")}>
      {process.env.GTM_ID && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.GTM_ID}');`}
        </Script>
      )}
      {process.env.UMAMI_WEBSITE_ID && (
        <Script
          defer
          src="/um/script.js"
          data-website-id={process.env.UMAMI_WEBSITE_ID}
          data-host-url="/um"
          strategy="lazyOnload"
        />
      )}
      <Script id="clarity-analytics" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "wk5kqembjf");`}
      </Script>
      <body className="bg-black">
        {process.env.GTM_ID && (
          <noscript>
            <iframe
              title="Google Tag Manager"
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {/* JSON-LD structured data, serialized from trusted app constants (no user input). */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from trusted app constants, no user input
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Paurush Rai",
              url: BASE_URL,
              jobTitle: "Senior Product Engineer",
              description:
                "Senior Product Engineer and Full-Stack Developer specializing in AI integration, enterprise SaaS platforms, and developer productivity tools.",
              image: `${BASE_URL}/og.png`,
              sameAs: [
                "https://github.com/paurushrai",
                "https://linkedin.com/in/paurushrai",
              ],
              knowsAbout: [
                "Product Engineering",
                "Full-Stack Engineering",
                "Frontend Development",
                "AI Integration",
                "React",
                "Next.js",
                "React Native",
                "TypeScript",
                "Node.js",
                "Enterprise SaaS",
                "LMS & LTI Integrations",
                "Developer Tooling",
                "Web Performance Optimization",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Senior Product Engineer",
                occupationLocation: {
                  "@type": "Country",
                  name: "India",
                },
                skills:
                  "React, Next.js, TypeScript, Node.js, AI Integration, Full-Stack Development",
              },
            }),
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LanguageProvider locale={locale}>
          <Suspense fallback={null}>
            <ProgressBar />
          </Suspense>
          <div id="main-content">{children}</div>
        </LanguageProvider>
        <ClickSpark />
      </body>
    </html>
  );
}
