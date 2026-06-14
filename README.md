# GPBS Portal

A single launcher page that links to all GPBS systems (Insightra, 360 Demo,
GPBS PMS, and more). Built with Create React App (React 18) to match the rest
of the GPBS projects.

## Getting started

```bash
npm install      # install dependencies
npm start        # run dev server at http://localhost:3000
npm run build    # production build into /build
```

## Adding or editing a system

All tiles are defined in **`src/data/projects.js`**. Each entry looks like:

```js
{
  name: "GPBS PMS",
  description: "Project management system for GPBS.",
  url: "https://ibsdo.com/gpbs-pms/",
  category: "Management",   // becomes a filter pill automatically
  initials: "PM",           // shown in the colored badge
  accent: "#f0883e",        // badge color
  status: "live",           // "live" or "soon"
}
```

> The first three tiles (Insightra, 360 Demo, GPBS PMS) have confirmed URLs.
> The rest are placeholders marked `status: "soon"` — update their `url` and
> flip them to `"live"` once you confirm where each is hosted.

## Deployment

`package.json` sets `"homepage": "/gpbs-portal"`, so the production build is
ready to drop into the `gpbs-portal/` subfolder on `ibsdo.com` — same pattern
as the other GPBS apps. Change `homepage` if you deploy it somewhere else.
