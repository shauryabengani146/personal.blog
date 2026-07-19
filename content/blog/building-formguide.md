---
title: "FormGuide — Building a Full-Stack Exercise Form App with Next.js 15"
date: "2026-07-10"
description: "How I built FormGuide — a responsive exercise form guide with full-text search, muscle anatomy SVGs, a drag-and-drop workout builder, and localStorage persistence using Next.js 15 App Router and TypeScript."
tags: ["Next.js", "TypeScript", "Fitness", "Web Dev"]
---

# FormGuide — Learn Any Exercise, the Right Way

**FormGuide** is a responsive, accessible web app for learning proper exercise form — think of it as an interactive encyclopedia of movements, built with **Next.js 15 App Router**, **TypeScript**, and **Tailwind CSS**.

## The Problem

Most fitness resources are either scattered across YouTube, behind a paywall, or so overwhelming they're useless for beginners. I wanted a single, clean reference that answers: *"Am I doing this right?"*

## Key Features

### 🔍 Search-First Explore Page

Full-text search with filters for muscle group, equipment, and difficulty. Uses `useDeferredValue` to keep the UI snappy even on slow devices — no debounce boilerplate needed.

### 📹 Exercise Detail Pages

Statically generated with `generateStaticParams` for zero runtime cost. Each page includes:

- A **click-to-load YouTube facade** — no iframe penalty until the user actually wants to watch
- A numbered **step-by-step execution guide**
- **Form cues & common mistakes** side-by-side
- A **front/back SVG muscle anatomy chart** highlighting primary and secondary muscles

### 🗂️ Personalized Dashboard

Favorites and saved routines stored in `localStorage` with an SSR-safe hook and cross-tab sync via the `storage` event.

```typescript
// SSR-safe localStorage hook
function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return defaultValue;
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });
  // ...
}
```

### 🏗️ Workout Builder

Drag-and-drop to reorder exercises (with keyboard fallback: `Alt+↑/↓`), edit sets/reps inline, and save named routines.

### 🌙 Dark/Light Mode

Class-based Tailwind theming with a pre-paint inline script to eliminate flash of wrong theme — it respects `prefers-color-scheme` and persists the user's preference.

## What I Learned

1. **`useDeferredValue` is underrated** — it makes search feel instant without any manual throttling
2. **Static generation + facades** is the best combo for media-heavy pages
3. **`aria-live` result counts** are a small touch that makes a huge difference for accessibility

Check it out on [GitHub](https://github.com/shauryabengani146/FormGuide).
