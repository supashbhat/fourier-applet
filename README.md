# Wavefunction Graffiti

Wavefunction Graffiti is a browser-based quantum mechanics applet for drawing a complex wavefunction by hand and immediately seeing how that choice propagates through position space, momentum space, phase, and uncertainty.

The project is built as a fully static React + TypeScript site with no backend. Everything runs client-side in the browser.

## What It Does

- lets the user draw a complex-valued state directly in position space
- normalizes the state continuously
- computes a live Fourier transform into momentum space
- displays real part, imaginary part, density, and phase structure
- reports live uncertainty metrics such as `Δx`, `Δp`, and `ΔxΔp`
- supports preset states for guided exploration
- includes a built-in help/manual section for first-time users

This is not meant to be a general-purpose Schrödinger solver. The app is designed as a visual instrument for Fourier duality and quantum intuition.

## Getting Started

### Requirements

- Node.js
- npm

### Install and Run

```bash
npm install
npm run dev
```

The dev server will print a local URL such as `http://127.0.0.1:4173/`.

### Useful Commands

```bash
npm run typecheck
npm run build
npm run preview
```

## How To Use The App

1. Load a preset from the signal library or start drawing immediately.
2. Use the position-space panel to paint amplitude or phase.
3. Watch the momentum-space panel update live from the FFT.
4. Read the uncertainty cards to compare the visual tradeoff against the numerical one.
5. Use the guided manual section near the bottom of the page for feature explanations and suggested exploration paths.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Canvas-based rendering
- in-browser FFT and observable calculations

## Repository Layout

- `src/app/`
  App composition and the top-level shell.
- `src/components/`
  UI panels, controls, overlays, branding, and visualization components.
- `src/lib/math/`
  FFT logic, wavefunction presets, evolution code, and observable calculations.
- `src/lib/state/`
  The main interaction/state hook that connects drawing, normalization, transforms, and UI state.
- `src/lib/rendering/`
  Rendering helpers such as phase coloring.
- `src/styles/`
  Global styling and shared visual system rules.
- `public/`
  Static assets such as the site icon.
- `docs/`
  Architecture notes, roadmap, visual direction, and physics assumptions.

## Physics Scope

The app aims to be pedagogically correct without pretending to be a research-grade simulation environment.

- wavefunctions are sampled on a finite grid
- normalization is enforced numerically
- momentum space is obtained through a discrete FFT convention chosen for intuition and stable visuals
- uncertainty values are computed from sampled observables
- the current evolution support focuses on the educational cases implemented in the UI

For the exact assumptions used in the current build, see [docs/physics-assumptions.md](docs/physics-assumptions.md).

## Additional Docs

- [Architecture](docs/architecture.md)
- [Physics Assumptions](docs/physics-assumptions.md)
- [Visual Design Spec](docs/visual-design-spec.md)
- [Roadmap](docs/roadmap.md)
