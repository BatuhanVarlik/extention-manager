# Browser Extensions Manager UI — Frontend Mentor Solution

![Screenshot of the Browser Extensions Manager UI](/extention-manager/public/Ekran%20Resmi%202026-01-06%2015.48.42.png)

## Welcome! 👋

This repository contains my solution to the "Browser extensions manager UI" challenge from Frontend Mentor. It is implemented with Next.js, TypeScript and Tailwind CSS and demonstrates a responsive UI with basic state management and theme selection.

---

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Demo & Links](#demo--links)
- [Built with](#built-with)
- [Getting Started](#getting-started)
- [Project structure](#project-structure)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Build a browser extensions manager UI that matches the provided design and implements the following behaviors:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select a color theme
- Provide a responsive layout that works well on mobile and desktop
- Include hover and focus states for interactive elements

This project uses the example data from `src/app/data/data.json` and renders the list dynamically using small, focused components.

---

## Features

- Toggle extension active/inactive
- Filter by Active / Inactive / All
- Remove extension from the list
- Theme selection (light / dark )
- Responsive layout for mobile and desktop
- Accessible focus and hover states

---

## Demo & Links

- Frontend Mentor challenge: https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp
- Live site: -
- Solution URL: https://github.com/BatuhanVarlik/extention-manager

---

## Built with

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- PostCSS

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or an alternative package manager (pnpm, yarn)

### Install and run locally

1. Clone the repository

```bash
git clone <your-repo-url>
cd browser-extensions-manager-ui-main/extention-manager
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

### Build for production

```bash
npm run build
npm run start
```

---

## Project structure

Key files and folders:

- `extention-manager/` - Next.js project
  - `src/app/` - App routes and pages
    - `page.tsx` - main page
    - `data/data.json` - sample extensions data
  - `src/Components/` - `List.tsx`, `Navbar.tsx`
  - `public/` - assets and images
  - `README.md` - project-specific README

---

## What I learned

- Implementing a responsive UI following a design mockup
- Using Next.js (App Router) and TypeScript together
- Managing UI state (filtering, toggles, removal) in small React components
- Styling with Tailwind CSS and maintaining consistent spacing and typography

---

## Continued development

- Persist theme and extension states in localStorage
- Add unit/integration tests
- Improve accessibility (keyboard navigation, ARIA attributes)
- Add animations and smoother transitions

---

## Useful resources

- Frontend Mentor challenge — https://www.frontendmentor.io
- Next.js docs — https://nextjs.org/docs
- Tailwind CSS — https://tailwindcss.com

---

## Author

- **Batu** — https://github.com/BatuhanVarlik

---

## Acknowledgments

Thanks to Frontend Mentor for the design and challenge. Feel free to open an issue or submit a PR if you have suggestions or improvements.

---

> \_This README was generated from the provided `README-template.md` and customized for this project.
