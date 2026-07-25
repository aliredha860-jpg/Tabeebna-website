# Tabeebna Website

Official website for Tabeebna, a Bahrain-based student-run nonprofit helping high school students explore career paths through internships, career-exposure events, and workshops.

Built with [Eleventy](https://www.11ty.dev/) (a static site generator) so the site is fast, simple, and deploys cleanly to GitHub Pages.

## Adding or removing an opportunity (no coding required)

See [`/opportunities/README.md`](./opportunities/README.md) — that's the only folder most team members will ever need to touch.

## Local development

```bash
npm install
npm start
```

This starts a local server (usually at `http://localhost:8080`) that automatically rebuilds whenever you save a file, including files in `/opportunities`.

## Building for production

```bash
npm run build
```

This outputs the finished site into a `_site` folder. You normally don't need to run this yourself — GitHub Actions does it automatically on every push (see below).

## Deploying to GitHub Pages

Deployment is automatic. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages every time you push to `main`.

**One-time setup in the GitHub repo settings:**
1. Go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to **GitHub Actions**.
3. Push to `main` — the site will build and go live within a minute or two, at `https://<username>.github.io/tabeebna-website/`.

### Important: the PATH_PREFIX setting

Because a GitHub Pages project site (without a custom domain) is served from a sub-path like `/tabeebna-website/` rather than the root of the domain, `.github/workflows/deploy.yml` sets:

```yaml
env:
  PATH_PREFIX: "/tabeebna-website/"
```

**Once the `tabeebna.bh` custom domain is connected**, delete that `PATH_PREFIX` line entirely (or add a `CNAME` file to `src/` containing just `tabeebna.bh` and set `PATH_PREFIX` back to `/`). Leaving it set to `/tabeebna-website/` while using a custom domain will break every internal link and asset path.

## Project structure

```
├── opportunities/          ← Non-technical members edit this folder
│   ├── _template.json      ← Copy this to create a new listing
│   ├── README.md            ← Plain-language instructions
│   └── *.json               ← One file per live listing
├── src/
│   ├── _includes/           ← Shared layout + reusable partials
│   ├── _data/
│   │   └── opportunities.js ← Reads /opportunities and sorts by deadline
│   ├── assets/               ← CSS, JS, images (including the logo)
│   ├── index.njk             ← Home
│   ├── about.njk
│   ├── team.njk
│   ├── programs.njk          ← Renders the opportunity cards
│   ├── apply.njk
│   └── contact.njk
├── .github/workflows/deploy.yml   ← Auto-build + deploy to GitHub Pages
└── .eleventy.js               ← Eleventy configuration
```

## Status / what still needs real content

- **About** — placeholder copy, needs final mission/background text
- **Team** — one placeholder card, needs real names, roles, and photos
- **Apply** — needs the real application form link
- **Programs/Contact** — live and using real content from the brief
