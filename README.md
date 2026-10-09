# EventHub – College Event Registration

A modern, responsive, static college event registration web application built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for college DevOps CI/CD projects, ready for automated builds and free hosting on GitHub Pages via GitHub Actions.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- Node.js (version 18 or 20+ recommended)
- npm (comes with Node.js)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to preview the website locally.

### 4. Build for Production
```bash
npm run build
```
This generates the optimized, production-ready static files in the `dist` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Modifying Website Update Information for CI/CD Demos

To demonstrate website updates and trigger your CI/CD pipeline:

1. Open `src/config/version.ts`
2. Update the values:
   ```typescript
   export const WEBSITE_VERSION_INFO = {
     currentVersion: 'v1.1', // Change version (e.g. v1.1, v2.0)
     latestUpdate: 'Added new workshop details and updated schedule', // Change update description
   };
   ```
3. Commit and push your changes to GitHub:
   ```bash
   git add .
   git commit -m "chore: release v1.1 with updated event details"
   git push origin main
   ```
4. The **Website Update Information** card on the website will reflect the new version automatically once built!

---

## 📦 Free Deployment with GitHub Pages & GitHub Actions

A ready-to-use GitHub Actions workflow is provided in `.github/workflows/deploy.yml`.

### Steps to Deploy:
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of EventHub"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository settings:
   - Navigate to **Settings** > **Pages**
   - Under **Build and deployment** > **Source**, select **GitHub Actions**
3. Push any commit to `main` to trigger the automated build and deployment!

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD deployment workflow
├── src/
│   ├── config/
│   │   └── version.ts          # Central website version and update info
│   ├── data/
│   │   └── events.ts           # 3 flagship college events data
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation with smooth scrolling
│   │   ├── Hero.tsx            # Hero section ("Discover. Connect. Celebrate.")
│   │   ├── EventsSection.tsx   # Tech Fest, CodeSprint, and Creative Carnival
│   │   ├── RegistrationForm.tsx# Client-validated registration form & demo pass
│   │   ├── VersionInfoCard.tsx # Website Update Information display card
│   │   ├── AboutSection.tsx    # College event platform purpose & DevOps context
│   │   └── Footer.tsx          # Brand name and copyright notice
│   ├── App.tsx                 # Main layout component
│   ├── index.css               # Tailwind CSS v4 styling & theme setup
│   └── main.tsx                # Application entry point
├── index.html                  # HTML entry point with title and meta tags
├── metadata.json               # Application configuration
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite config (base: './' for GitHub Pages)
```

---

## 📋 Features

- **Navigation Bar:** EventHub logo with responsive links to Home, Events, Register, Updates, and About.
- **Hero Section:** “Discover. Connect. Celebrate.” with call to action.
- **Flagship Events:**
  1. *Tech Fest* — Technology, innovation, and project showcases.
  2. *CodeSprint* — Coding competitions and programming challenges.
  3. *Creative Carnival* — Arts, culture, and creative activities.
- **Registration Form:** Validates full name, email format, college name, and event selection. Generates a live demo entry pass without database requirement.
- **CI/CD Update Card:** Clean display of **Current Website Version** (`v1.0`) and **Latest Update** (`Initial website release`).
- **About Section:** Explains platform purpose and DevOps CI/CD demo context.
- **Responsive & Accessible:** Dark navy palette with blue and purple highlights.
