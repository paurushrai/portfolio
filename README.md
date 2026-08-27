<div align="center">
    <a href="https://paurushrai.in"><h1 align="center">Paurush Rai - Personal Portfolio</h1></a>

Senior Frontend Engineer — personal website and professional portfolio. Built for speed, performance, and multilingual support.

[![CI](https://github.com/paurushrai/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/paurushrai/portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
</div>

## ✨ Features & Highlights

- **Bilingual / Multilingual Support**: Dynamic routing and language toggling with robust type-safe i18n implementation across 12 languages.
- **Content-Driven Projects**: Project case studies written in MDX using Contentlayer for seamless static generation.
- **Dynamic Contact Form**: Handled via server actions and Resend for robust email delivery.
- **Performance Optimized**: Achieves near-perfect Lighthouse scores across all Core Web Vitals.
- **Dark Mode Native**: A sleek, custom dark UI relying on modern Tailwind paradigms.
- **Analytics**: Lightweight, privacy-friendly analytics via Umami and Google Analytics.

## 🏗️ Architecture Overview

The application is built on the **Next.js 14 App Router**. 
- **Routing & Rendering**: Relies heavily on static generation (SSG) for maximum performance, with selective dynamic rendering for the contact API.
- **Content Management**: `Contentlayer` processes local MDX files into type-safe JSON data, allowing markdown files to act as a git-backed CMS.
- **Styling**: `Tailwind CSS` for utility-first styling with `framer-motion` for smooth layout transitions and micro-interactions.
- **Components**: Adopts a component-driven design using React Server Components where possible to minimize client JavaScript.

## 🛠️ Design Rationale & Stack

- **Next.js (App Router)**: Chosen for its superior rendering strategies, easy API route integration, and out-of-the-box SEO optimizations.
- **Tailwind CSS**: Allows rapid UI iteration without context-switching to CSS files, ensuring a minimal CSS bundle size.
- **Contentlayer**: Transforms markdown content into strongly-typed data sets, reducing runtime parsing overhead and preventing dead links.
- **Resend**: Chosen over SendGrid/Mailgun for its exceptional developer experience.

## 🚀 Running Locally

```bash
git clone https://github.com/paurushrai/portfolio.git
cd portfolio
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

## 🎨 Make It Yours

Forking this as your own portfolio? Swap out the personal content — the code is yours to keep, the identity is not (see [License](#-license)). Everything you need to change:

| What | Where |
| ---- | ----- |
| **Copy & UI strings** (name, headings, bios) | `app/i18n/locales/` — per-language translation files |
| **Project case studies** | `content/projects/<locale>/*.mdx` — one folder per language (`en`, `de`, `es`, …) |
| **Résumé** | `public/resume.pdf` |
| **Branding assets** | `public/` — `favicon.ico`, `apple-touch-icon.png`, `og.png` |
| **Site metadata & social links** | `app/[locale]/layout.tsx` (title, Open Graph, domain) |
| **Domain references** | search-and-replace `paurushrai.in` across `app/` (e.g. `app/sitemap.ts`, `app/[locale]/layout.tsx`) |
| **Analytics** | `UMAMI_WEBSITE_ID` / `GTM_ID` in your `.env` (omit to disable) |

> Tip: `grep -rn "paurushrai" app/ content/` surfaces remaining references to replace.

## 🐳 Running with Docker

No local Node.js required — the multi-stage `Dockerfile` installs dependencies, builds, and serves the standalone Next.js output.

### First-time setup

```bash
# 1. Clone
git clone https://github.com/paurushrai/portfolio.git
cd portfolio

# 2. (Optional) configure env vars — site runs without them,
#    but the contact form needs RESEND_API_KEY
cp .env.example .env   # then fill in values

# 3. Build the image
docker build -t portfolio .
```

### Daily launch

```bash
docker run --rm -p 3000:3000 --env-file .env portfolio
```

Open <http://localhost:3000>. Skip `--env-file .env` if you didn't create one.

Rebuild the image (`docker build -t portfolio .`) whenever code or content changes — the site is statically generated at build time.

## ⚙️ Environment Variables

A `.env.example` file is included in the repository. Create a `.env.local` file at the root of the project with the following keys:

| Variable | Description |
| -------- | ----------- |
| `RESEND_API_KEY` | Your Resend API key for the contact form functionality. |
| `UMAMI_WEBSITE_ID` | Your Umami site ID for privacy-friendly analytics. |
| `GTM_ID` | Your Google Tag Manager container ID (e.g. `GTM-XXXXXXX`). |

## ☁️ Deployment

This project is strictly configured for deployment on **Netlify**. 

The configuration is managed via the included `netlify.toml` file, which handles:
- Build environment variables logic.
- Excluding analytics IDs (`UMAMI_WEBSITE_ID`, `GTM_ID`) from Netlify's secret scanner to prevent false-positive build failures (these values are intentionally rendered into HTML).

**To deploy:**
1. Connect the repository to your Netlify account.
2. The build command will automatically run `npm run build` and the publish directory is `.next`.
3. Add your environment variables in the Netlify UI.
4. Deploy!

## ⚡ Performance (Lighthouse)

The site is meticulously optimized for Core Web Vitals:

|  | Performance | Accessibility | Best Practices | SEO |
|--|:-----------:|:-------------:|:--------------:|:---:|
| Mobile  | 97 | 100 | 100 | 100 |
| Desktop | 99 | 100 | 100 | 100 |

## 📝 License

The **source code** is open-source under the [MIT License](LICENSE) — fork it, modify it, ship it.

> **Personal content is not covered by MIT.** The name, biography, copy, project case studies, résumé, photographs, and branding are © Paurush Rai, all rights reserved. Replace all of it with your own before deploying a derivative site (see [Make It Yours](#-make-it-yours)).
