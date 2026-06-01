# PC Store

Premium tech store demo built with React + Vite.

## Run Locally

```bash
npm.cmd install
npm.cmd run dev
```

Local URL:

```text
http://127.0.0.1:5173/
```

## Production Build

```bash
npm.cmd run build
```

The finished static site will be generated in:

```text
dist/
```

To preview the production build locally:

```bash
npm.cmd run preview
```

## Hosting

For static hosting, upload the full contents of `dist/` to the hosting provider.

Recommended simple options:

- Netlify: drag and drop the `dist/` folder into Netlify Deploys.
- Vercel: import the project, use `npm.cmd run build`, output directory `dist`.
- Any regular hosting: upload everything inside `dist/` to the public web root.

## GitHub Pages

This project is prepared for GitHub Pages with GitHub Actions.

The workflow file is:

```text
.github/workflows/deploy.yml
```

The Vite base path is configured for a repository named:

```text
pc-store
```

If your GitHub repository has another name, update this line in `vite.config.js`:

```js
base: mode === 'github-pages' ? '/pc-store/' : '/',
```

For GitHub Pages, the workflow builds with:

```bash
npm run build -- --mode github-pages
```

After pushing to the `main` branch, open the repository on GitHub:

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

The published URL will look like:

```text
https://YOUR_USERNAME.github.io/pc-store/
```

## Implemented Features

- responsive premium tech store layout;
- product catalog with search, category filter and sorting;
- product cards with images;
- cart drawer with quantity controls;
- cart persistence in localStorage;
- checkout form;
- order persistence in localStorage;
- Telegram order function with placeholders;
- delivery, warranty, service, reviews, FAQ, contacts and footer sections.

## Telegram Orders

Telegram order sending is prepared in:

```text
src/utils/telegram.js
```

Replace only these placeholders:

```js
const BOT_TOKEN = 'PASTE_YOUR_BOT_TOKEN_HERE'
const CHAT_ID = 'PASTE_YOUR_CHAT_ID_HERE'
```

Do not commit real secret tokens to a public repository. For a real production store, move Telegram sending to a backend or serverless function so the bot token is not visible in browser code.
