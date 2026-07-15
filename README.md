# An Unofficial Pokémon Archive

A small React + Vite web app that lets you browse Pokémon cards and search the Pokédex. This repository powers the live site at https://an-unofficial-pokemon-archive.netlify.app.

<img width="1920" height="1080" alt="Mockup Result" src="https://github.com/user-attachments/assets/1616e415-46a3-46e7-866d-d5af7494664d" />

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

<img width="1920" height="1080" alt="Mockup Result2" src="https://github.com/user-attachments/assets/07061da4-acdc-496a-a334-41f215a85618" />

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

---
