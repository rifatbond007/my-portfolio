# rifatbroh Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/234d6593-ba69-4530-a082-9f90d2a7686f/deploy-status)](https://app.netlify.com/projects/rifatbroh-me/deploys)

A modern, responsive personal portfolio built with React and Vite to showcase projects, skills, and contact information.

---

## Overview

This repository contains the source for a personal portfolio website. It is designed to be easy to customize and deploy, with a focus on performance, accessibility, and clean design.

Replace the placeholder content (name, bio, project links, and images) with your own to make the site yours.

---

## Features

- Clean, responsive UI for desktop and mobile
- Modular React components and accessible patterns
- Tailwind CSS integration for fast styling
- Simple build and deployment with Vite

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- ESLint for code quality
- Framer Motion for animations
- Lucide React for icons

---

## Project Structure

```
src/
├── assets/
│   └── images/           # Static images
├── components/
│   ├── ui/               # Base UI components (Button, etc.)
│, Input, Dialog   ├── HeroSection.tsx   # Introduction section
│   ├── SkillList.tsx    # Skills display
│   ├── ProjectCard.tsx  # Project card component
│   ├── AwardCard.tsx    # Award card component
│   ├── ArticleCard.tsx  # Blog article card
│   └── PlatformCard.tsx # Problem solving platform
├── pages/
│   ├── AboutMe.tsx       # About page
│   ├── Projects.tsx      # Projects page
│   ├── HonorsAwards.tsx  # Honors & Awards page
│   ├── Article.tsx      # Technical Writing page
│   ├── ProblemSolving.tsx # Problem Solving page
│   ├── Sidebar.tsx       # Navigation sidebar
│   └── Footer.tsx        # Footer component
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and helpers
├── types/                # TypeScript type definitions
├── App.tsx               # Main application component
├── main.jsx              # App entry point
└── index.css             # Global styles
```

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173 to view the site locally.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Deployment

This site can be deployed to platforms like Vercel, Netlify, or GitHub Pages. The `build` step produces optimized static assets in the `dist/` directory.

---

## Customization

- Update your name, bio, and contact links in `src/pages/` components
- Replace placeholder images in `src/assets/images/`
- Add new components in `src/components/` for reusability
- Modify data in page components to customize content

---

## License

MIT License

---

## Contact

For any inquiries, reach out via email or social media links in the portfolio.
