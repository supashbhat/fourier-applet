# Wavefunction Graffiti Deployment

## Current Repository Context

Wavefunction Graffiti is intended to live in its own repository.

Recommended repository:

`supashbhat/fourier-applet`

GitHub Pages will then serve the app at:

`https://supashbhat.github.io/fourier-applet/`

## Setup

1. Create a new GitHub repository named `fourier-applet`.
2. Push this project as that repository's root.
3. Go to `Settings -> Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push to `main`.
6. The workflow `.github/workflows/deploy.yml` will build and deploy the app automatically.

## Resulting URL

`https://supashbhat.github.io/fourier-applet/`

## Alternative: Root Site Integration

If you instead want the app to live inside the separate `supashbhat.github.io` repository, you can copy the built output there under a subfolder such as:

`fourier-applet/`

That would still produce:

`https://supashbhat.github.io/fourier-applet/`

But the cleaner default is a dedicated standalone repo.

## Why The Same Build Works In Both Places

The Vite config uses a relative base path:

`base: './'`

That keeps asset URLs relative to the deployed directory, so the app can live at:

- `/fourier-applet/`
- or another static subdirectory

without rebuilding for each path.

## Workflow Notes

- The deploy workflow lives at `.github/workflows/deploy.yml`.
- This repo is intentionally frontend-only and static-hosting friendly.
