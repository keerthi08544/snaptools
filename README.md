# snaptools

Collection of React page replicas built from reference images. Each tool lives in its own file under [src/pages/](src/pages/).

## Pages

| Tool | File |
| --- | --- |
| SnapJustify | [src/pages/SnapJustify.jsx](src/pages/SnapJustify.jsx) |

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (npm ships with it)

## Run the app

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

## Switch which page is shown

Edit [src/App.jsx](src/App.jsx) and import a different page from `src/pages/`:

```jsx
import SnapJustify from "./pages/SnapJustify.jsx";

export default function App() {
  return <SnapJustify />;
}
```

## Build for production

```bash
npm run build
npm run preview
```

## Adding a new page

1. Send a reference image to the assistant.
2. A new file gets created at `src/pages/<ToolName>.jsx`.
3. Import and render it in `src/App.jsx` to view.
