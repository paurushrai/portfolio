import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/nav";
import {
  type AppLocale,
  DEFAULT_LOCALE,
  alternatesFor,
  isLocale,
  localizedPath,
} from "../../i18n/config";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  return {
    title: "Privacy Policy",
    description:
      "Privacy policy for paurushrai.in: how analytics tools, contact form data, and third-party services are used.",
    alternates: alternatesFor("/privacy", locale),
  };
}

const LAST_UPDATED = "May 1, 2025";
const CONTACT_EMAIL = "paurushrai96@gmail.com";
const BASE_URL = "https://paurushrai.in";

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  return (
    <div className="min-h-screen bg-linear-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />

      <main className="px-6 pt-20 pb-32 mx-auto max-w-4xl lg:px-8 md:pt-24 lg:pt-32">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
            Privacy Policy
          </h1>
          <p className="mt-4 text-zinc-400 text-sm">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="prose-custom space-y-10">

          {/* Intro */}
          <Section>
            <p className="text-zinc-400 leading-relaxed">
              This Privacy Policy explains what information is collected when you
              visit{" "}
              <span className="text-zinc-200 font-medium">{BASE_URL}</span>{" "}
              (the &quot;Site&quot;), how it is used, and what choices you have.
              This is a personal portfolio site operated by{" "}
              <span className="text-zinc-200 font-medium">Paurush Rai</span>. No
              products are sold, no user accounts are created, and no personal
              data is sold to third parties.
            </p>
          </Section>

          <Divider />

          {/* Information Collected */}
          <Section title="1. Information We Collect">
            <SubSection title="A. Analytics & Usage Data">
              <p className="text-zinc-400 leading-relaxed mb-4">
                This site uses the following analytics services to understand
                how visitors interact with it. All data collection is governed
                by the respective service&apos;s own privacy policies.
              </p>

              <div className="space-y-6">
                <ToolCard
                  name="Microsoft Clarity"
                  type="Session Recording & Heatmaps"
                  collects={[
                    "Mouse movements, clicks, and scrolls (heatmaps)",
                    "Session recordings (pages visited, interactions)",
                    "Browser type, device type, OS",
                    "Approximate geographic region (country/city level)",
                    "Pages visited and time spent",
                  ]}
                  note="Clarity automatically masks text inputs (including the contact form) by default to protect sensitive data."
                  policyUrl="https://privacy.microsoft.com/en-us/privacystatement"
                  policyLabel="Microsoft Privacy Statement"
                />

                <ToolCard
                  name="Google Tag Manager"
                  type="Tag Management (conditional)"
                  collects={[
                    "Manages the loading of third-party scripts",
                    "May collect page views and events depending on configured tags",
                    "IP address (anonymised by Google)",
                  ]}
                  note="GTM is only loaded when a GTM_ID environment variable is configured."
                  policyUrl="https://policies.google.com/privacy"
                  policyLabel="Google Privacy Policy"
                />

                <ToolCard
                  name="Umami Analytics"
                  type="Privacy-focused Page Analytics (conditional)"
                  collects={[
                    "Page views and referrer URLs",
                    "Browser type and OS (no persistent fingerprinting)",
                    "Country-level location",
                    "Session duration and bounce rate",
                  ]}
                  note="Umami does not use cookies and does not track users across sessions or sites. Data is self-hosted."
                  policyUrl="https://umami.is/privacy"
                  policyLabel="Umami Privacy Policy"
                />
              </div>
            </SubSection>

            <SubSection title="B. Contact Form">
              <p className="text-zinc-400 leading-relaxed">
                When you submit the contact form at{" "}
                <Link
                  href={localizedPath("/contact", locale)}
                  className="text-zinc-300 hover:text-white underline underline-offset-4 duration-150"
                >
                  /contact
                </Link>
                , the following data is collected and sent to me via email:
              </p>
              <ul className="mt-3 space-y-1.5 text-zinc-400 text-sm list-disc list-inside">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your message</li>
              </ul>
              <p className="mt-4 text-zinc-400 leading-relaxed text-sm">
                This data is used solely to respond to your inquiry. It is not
                stored in a database, shared with third parties, or used for
                marketing purposes.
              </p>
            </SubSection>

            <SubSection title="C. Search Engine Verification">
              <p className="text-zinc-400 leading-relaxed">
                This site uses verification files for{" "}
                <span className="text-zinc-200">Google Search Console</span>{" "}
                and{" "}
                <span className="text-zinc-200">Bing Webmaster Tools</span> to
                confirm site ownership. These services may collect crawl data
                (pages indexed, click-through rates from search results) as
                described in their respective privacy policies.
              </p>
            </SubSection>
          </Section>

          <Divider />

          {/* Cookies */}
          <Section title="2. Cookies & Local Storage">
            <p className="text-zinc-400 leading-relaxed">
              This site itself does not set any first-party cookies. The
              third-party analytics tools listed above may set their own cookies
              or use local storage as described in their privacy policies:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400 list-disc list-inside">
              <li>
                <span className="text-zinc-200">Microsoft Clarity</span>: may
                set session and persistent cookies for session replay
              </li>
              <li>
                <span className="text-zinc-200">Google Tag Manager</span>: may
                set cookies depending on which tags are active
              </li>
              <li>
                <span className="text-zinc-200">Umami</span>: cookie-free by
                design
              </li>
            </ul>
            <p className="mt-4 text-zinc-400 leading-relaxed text-sm">
              You can disable cookies at any time in your browser settings. Note
              that disabling cookies may affect the functionality of third-party
              services.
            </p>
          </Section>

          <Divider />

          {/* Third party links */}
          <Section title="3. Third-Party Links">
            <p className="text-zinc-400 leading-relaxed">
              This site contains links to external platforms including GitHub,
              LinkedIn, Discord, and others. Once you leave this site, this
              Privacy Policy no longer applies. We encourage you to review the
              privacy policies of any external site you visit.
            </p>
          </Section>

          <Divider />

          {/* Fonts */}
          <Section title="4. Fonts">
            <p className="text-zinc-400 leading-relaxed">
              This site loads the{" "}
              <span className="text-zinc-200">Inter</span> typeface via
              Google Fonts. Google may collect anonymous usage data when fonts
              are served. See the{" "}
              <ExternalLink href="https://policies.google.com/privacy">
                Google Privacy Policy
              </ExternalLink>{" "}
              for details. The{" "}
              <span className="text-zinc-200">CalSans</span> font is loaded
              locally and does not make any external requests.
            </p>
          </Section>

          <Divider />

          {/* Your rights */}
          <Section title="5. Your Rights">
            <p className="text-zinc-400 leading-relaxed mb-4">
              Depending on your location, you may have rights under applicable
              data protection laws (such as GDPR or CCPA) including the right
              to:
            </p>
            <ul className="space-y-1.5 text-zinc-400 text-sm list-disc list-inside">
              <li>Know what personal data is collected about you</li>
              <li>Request deletion of data you have submitted</li>
              <li>Opt out of analytics tracking (via browser settings or browser extensions such as uBlock Origin)</li>
              <li>Object to data processing</li>
            </ul>
            <p className="mt-4 text-zinc-400 leading-relaxed text-sm">
              To exercise any of these rights, contact me directly at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-zinc-300 hover:text-white underline underline-offset-4 duration-150"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Divider />

          {/* Data retention */}
          <Section title="6. Data Retention">
            <p className="text-zinc-400 leading-relaxed">
              Analytics data is retained according to each provider&apos;s
              default retention policies. Contact form submissions are retained
              only as long as necessary to respond to your inquiry and are not
              archived beyond that point.
            </p>
          </Section>

          <Divider />

          {/* Changes */}
          <Section title="7. Changes to This Policy">
            <p className="text-zinc-400 leading-relaxed">
              This policy may be updated from time to time. The &quot;Last
              updated&quot; date at the top of this page will reflect any
              changes. Continued use of the site after changes constitutes
              acceptance of the updated policy.
            </p>
          </Section>

          <Divider />

          {/* Contact */}
          <Section title="8. Contact">
            <p className="text-zinc-400 leading-relaxed">
              If you have any questions about this Privacy Policy, you can reach
              me at:
            </p>
            <div className="mt-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 text-sm space-y-1">
              <p className="text-zinc-200 font-medium">Paurush Rai</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-zinc-400 hover:text-zinc-200 underline underline-offset-4 duration-150"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-zinc-500">{BASE_URL}</p>
            </div>
          </Section>

        </div>
      </main>
      <Footer />
    </div>
  );
}

/* ── Helper components ─────────────────────────────────────────────── */

function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      {title && (
        <h2 className="text-lg font-semibold text-zinc-100 tracking-tight">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 space-y-3">
      <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="w-full h-px bg-zinc-800" />;
}

function ToolCard({
  name,
  type,
  collects,
  note,
  policyUrl,
  policyLabel,
}: {
  name: string;
  type: string;
  collects: string[];
  note?: string;
  policyUrl: string;
  policyLabel: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-3">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="text-zinc-100 font-medium text-sm">{name}</p>
          <p className="text-zinc-500 text-xs mt-0.5">{type}</p>
        </div>
        <ExternalLink href={policyUrl} small>
          {policyLabel}
        </ExternalLink>
      </div>
      <ul className="space-y-1 text-zinc-400 text-sm list-disc list-inside">
        {collects.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {note && (
        <p className="text-xs text-zinc-500 border-t border-zinc-800 pt-3">
          ℹ️ {note}
        </p>
      )}
    </div>
  );
}

function ExternalLink({
  href,
  children,
  small,
}: {
  href: string;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-zinc-400 hover:text-zinc-200 underline underline-offset-4 duration-150 ${small ? "text-xs" : ""}`}
    >
      {children}
    </a>
  );
}
