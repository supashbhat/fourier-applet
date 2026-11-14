# Deployment

The app is published from this repository to [supashbhat.github.io/fourier-applet](https://supashbhat.github.io/fourier-applet/). The GitHub Actions workflow builds `dist/` and deploys it to GitHub Pages when `main` changes.

To make and preview a production build locally:

```bash
npm ci
npm run build
npm run preview
```

The project uses a relative Vite base path so the same build works at the repository's Pages URL.
