# Wavefunction Graffiti

Wavefunction Graffiti is a static React + TypeScript quantum mechanics applet focused on drawing a complex wavefunction and building intuition for Fourier duality, momentum-space structure, and uncertainty.

## Current Scaffold

- Vite + React + TypeScript + Tailwind foundation
- Canvas-based scientific visualization shell
- Preset quantum states
- Live position-space and momentum-space panels
- Numerical normalization, FFT, and uncertainty metrics
- Free-particle evolution scaffold
- Design system and documentation for the next implementation phases

## Commands

```bash
npm install
npm run typecheck
npm run dev
npm run build
```

## GitHub Pages

This standalone repo is intended to publish as a project site.

Recommended repository name:

`fourier-applet`

With that repository name, GitHub Pages will publish at:

`https://supashbhat.github.io/fourier-applet/`

Setup:

- create a new GitHub repo, ideally `supashbhat/fourier-applet`
- push this folder as that repo's root
- in GitHub, open `Settings -> Pages`
- set `Source` to `GitHub Actions`
- push to `main`

The workflow at `.github/workflows/deploy.yml` will build and publish the site automatically.

The Vite config uses a relative base (`./`), so the static build is safe for GitHub Pages subdirectory hosting.

## Key Paths

- `src/app/`: app shell and composition
- `src/components/`: UI, panel, and visualization components
- `src/lib/math/`: numerical wavefunction logic, FFT, observables, presets
- `src/lib/state/`: interaction and simulation state
- `src/styles/`: global styling
- `docs/`: architecture, roadmap, design, physics, and deployment notes
