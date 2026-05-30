# listen. — Editorial Portfolio

A minimal, editorial black-and-white portfolio site. Warm off-white background
(`#F0EDE8`), large serif typography, and a project grid. Pure static
HTML + CSS — no build step, no dependencies.

## Pages

| File          | Page  |
| ------------- | ----- |
| `index.html`  | Home (hero + selected work) |
| `work.html`   | Work (full project grid) |
| `about.html`  | About |
| `404.html`    | Not found |

## Develop locally

It's static, so just open `index.html` in a browser — or serve it:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit http://localhost:8000.

## Deploy

The site is deploy-ready as-is on any static host. The repo root is the publish
directory; there is no build command.

**Netlify** — drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop),
or connect the Git repo (build command: _none_, publish directory: `/`).

**Vercel** — `npx vercel` from the project root, or import the repo (framework
preset: _Other_).

**GitHub Pages** — push to GitHub, then Settings → Pages → deploy from branch
`main`, folder `/ (root)`.

## Customize

- Colors and type live in the `:root` block of `styles.css`.
- The hero word is in `index.html` (`.hero__word`).
- Swap the numbered placeholder tiles (`.project__media`) for real images by
  replacing the `<span>` with an `<img>`.
