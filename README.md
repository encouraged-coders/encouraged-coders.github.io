# encouraged-coders.github.io

Source code for the [encouraged-coders.de](https://encouraged-coders.de) website.

## Tech stack

- [Astro](https://astro.build) — static site generator
- Deployed via GitHub Actions to GitHub Pages

## Local development

```bash
npm install
npm run dev        # start dev server at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Deployment

Merging to `main` automatically triggers the [deploy workflow](.github/workflows/deploy.yml), which builds the site with Astro and publishes it to GitHub Pages.

> **Note:** GitHub Pages must be configured to deploy via GitHub Actions  
> (Settings → Pages → Source → GitHub Actions).

## Contact

Send me a message on [LinkedIn](https://www.linkedin.com/in/mann-wahrenberg/)
