# Simplicity at Home - Landing Page

A high-performance, aesthetically pleasing landing page for Yumiko Sekine's e-book using the "Zen Japanese Minimalist" design system. Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Features

- **Zen Aesthetic Design**: Custom color palette (Indigo Deep, Cream Silk), typography (Ten Mincho), and Sashiko patterns.
- **Interactive Framework**: "Four Seasons Framework" with tabbed navigation and smooth transitions.
- **Personalized Quiz**: "Home Vibe Assessment" to suggest tailored advice based on user input.
- **High Performance**: Optimized with Next.js Image, lazy loading, and code splitting.
- **SEO Optimized**: Fully configured metadata, JSON-LD schema, sitemap, and robots.txt.
- **Responsive**: Mobile-first design that adapts seamlessly to all screen sizes.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Shippori Mincho](https://fonts.google.com/specimen/Shippori+Mincho) & [Inter](https://fonts.google.com/specimen/Inter)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simplicity-at-home.git
   cd simplicity-at-home
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev`: Starts the development server at localhost:3000.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Project Structure

```
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout with SEO and global styles
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles and Tailwind directives
├── components/           # Reusable React components
│   ├── layout/           # Layout components (Header, Footer, Section)
│   ├── sections/         # Landing page sections (Hero, Quiz, Framework)
│   ├── ui/               # UI primitives (Button, Card, Typography)
│   └── seo/              # SEO components (JsonLd)
├── public/               # Static assets (images, icons)
├── constants/            # Configuration and data constants
└── next.config.ts        # Next.js configuration
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License.
