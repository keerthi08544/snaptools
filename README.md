# snaptools

Collection of React page replicas built from reference images. Each tool lives in its own file under [src/pages/](src/pages/).

## Pages

| Tool | File |
| --- | --- |
| SnapJustify | [src/pages/SnapJustify.jsx](src/pages/SnapJustify.jsx) |

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (ships with Node)

## First-time setup

The repo holds the page components only. Scaffold a Vite + React + Tailwind shell around them once:

```bash
# 1. Scaffold Vite React app in current folder
npm create vite@latest . -- --template react

# 2. Install deps
npm install

# 3. Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Edit `tailwind.config.js` content array:

```js
content: ["./index.html", "./src/**/*.{js,jsx}"],
```

Replace `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add the Playfair Display font to `index.html` `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet">
```

## Wire a page into the app

Open `src/App.jsx` and render the page you want to view:

```jsx
import SnapJustify from "./pages/SnapJustify";

export default function App() {
  return <SnapJustify />;
}
```

## Run the dev server

```bash
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`) to see the rendered page.

## Build for production

```bash
npm run build
npm run preview
```

## Adding a new page

1. Drop the reference image in a chat with the assistant.
2. A new file is created at `src/pages/<ToolName>.jsx`.
3. Import and render it in `src/App.jsx` to view.
