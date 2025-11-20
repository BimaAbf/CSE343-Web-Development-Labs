# Udemy Landing Clone

A simple React + Vite implementation of the public Udemy landing page up to the "Trusted by companies" section. Content is powered by dummy data stored in JavaScript objects and arrays so it can be reused in later labs.

## What’s Included

- Header, hero, featured course tabs, learner highlights, and trusted companies sections that mirror the layout of udemy.com (animations omitted).
- Seasonal sale banner, hero slide selector, skill spotlight chips, trending course cards, and refreshed trusted-companies row that mirror the November 2025 homepage.
- Reusable content definitions in `src/data/content.js` for navigation, sale messaging, hero slides, skills, course listings, and company logos.
- Responsive styles that adapt the layout for tablets and mobile screens with minimal CSS.

## Getting Started

```powershell
# Install dependencies (first run only)
npm install

# Start the dev server with hot reload
npm run dev

# Compile a production build
npm run build
```

> **Note:** The current toolchain emits a notice when using Node.js 21.x. Vite officially supports Node 20.19+ (LTS) or 22.12+. The build still succeeds, but upgrading to an LTS release is recommended for consistency.

## Project Structure Highlights

- `src/App.jsx` renders the landing page sections using the shared data objects.
- `src/data/content.js` centralizes all placeholder text, course cards, topics, and company names.
- `src/App.css` and `src/index.css` contain the global and component styling for the page.
