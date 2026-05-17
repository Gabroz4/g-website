# g-website

My personal presentation website — an online CV. A single-page portfolio for
Gabriele Broccoli (software engineer, Imola, Italy) covering an about,
experience timeline, education, skills, selected work and contact details.

It's self-hosted: the site is containerised and served from my Kubernetes
homelab through a Cloudflare Tunnel.

## Design

A misty-alpine, topographic look — calm nature colours with a sage/eucalyptus
accent, drifting contour lines in the background, and a dark/light theme.

## Tech stack

- **React 19** + **TypeScript**, built with **Vite**
- **Tailwind CSS v4** for styling, with a few **shadcn/ui** primitives
- **nginx** serving the static build inside a multi-stage **Docker** image

All page content (profile, experience, education, skills, projects, socials)
lives in [`src/content.ts`](src/content.ts) — the components only render it.

## Development

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server
npm run build    # type-check and build to dist/
npm run lint     # run ESLint
```

## Deployment

The site builds and runs as a Docker container — `npm ci && npm run build`
inside `node`, then the `dist/` output is served by `nginx`. See the
[`Dockerfile`](Dockerfile) and [`nginx.conf`](nginx.conf).
