<div align="center">
    <a href="https://paurushrai.in"><h1 align="center">Paurush Rai - Personal Portfolio</h1></a>

My personal website and professional portfolio. Built for speed, performance, and multilingual support.
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

## ⚙️ Environment Variables

A `.env.example` file is included in the repository. Create a `.env.local` file at the root of the project with the following keys:

| Variable | Description |
| -------- | ----------- |
| `RESEND_API_KEY` | Your Resend API key for the contact form functionality. |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Your Umami site ID for analytics tracking. |

## ☁️ Deployment

This project is strictly configured for deployment on **Netlify**. 

The configuration is managed via the included `netlify.toml` file, which handles:
- Build environment variables logic.
- Excluding intentionally public variables (like `NEXT_PUBLIC_UMAMI_WEBSITE_ID`) from Netlify's aggressive secret scanner to prevent false-positive build failures.

**To deploy:**
1. Connect the repository to your Netlify account.
2. The build command will automatically run `npm run build` and the publish directory is `.next`.
3. Add your environment variables in the Netlify UI.
4. Deploy!

## ⚡ Performance (Lighthouse)

The site is meticulously optimized for Core Web Vitals:
- **Performance**: 93
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 📝 License

This project is open-source and available under the [MIT License](LICENSE). 

> **Note:** Please remove all of my personal information, branding, projects, and images before deploying your own version of this site.
