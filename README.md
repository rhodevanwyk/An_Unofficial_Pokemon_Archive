# An Unofficial Pokémon Archive

A small React + Vite web app that lets you browse Pokémon cards and search the Pokédex. This repository powers the live site at https://an-unofficial-pokemon-archive.netlify.app.

**Live demo:** https://an-unofficial-pokemon-archive.netlify.app

## Summary

- Minimal React app scaffolded with Vite.
- Uses React 19, Vite, Tailwind CSS, and Framer Motion for animations.
- Client-side UI components live under `src/components` (e.g., `PokemonList.jsx`, `PokemonCard.jsx`, `SearchBar.jsx`).

## Features

- Browse a grid of Pokémon.
- Click a Pokémon to view details.
- Search by name using the search bar with live filtering.
- Responsive layout and simple animations.

## Tech Stack

- React (see `package.json`)
- Vite (dev/build tooling)
- Tailwind CSS (styling)
- Framer Motion (animations)

## API

- This project fetches Pokémon data from the PokéAPI: https://pokeapi.co/.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

Open the site at the URL printed by Vite (usually `http://localhost:5173`).

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/` — application source
	- `assets/` — images and static assets
	- `components/` — React components (`PokemonList.jsx`, `PokemonCard.jsx`, `SearchBar.jsx`)
	- `App.jsx`, `main.jsx` — app entry and bootstrapping
- `public/` — static public files
- `package.json` — scripts and dependencies

## License & Usage

This project is proprietary. See the repository `LICENSE` file for the full terms. In short: all rights reserved. Copying, redistributing, creating derived works, or otherwise using this code without explicit written permission from the copyright holder is prohibited.

## Contact / Questions

If you need permission to use any part of this project, please open an issue on the repository or contact the project owner through the site.

---
