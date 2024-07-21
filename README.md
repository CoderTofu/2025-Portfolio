# GDSC PLM Web React Template Developer Guide

This template provides a minimal and flexible set up for GDSC PLM Web Development projects that uses React, TypeScript, MUI, and Firebase in Vite.

## Getting Started

Assuming that you have created a project using this template, kindly follow these steps

1. Install the dependencies by running `npm i`
2. Run the application by running `npm run dev`

## Codebase Architecture

The template was made simple for all community members of all skill levels by following a Fractal codebase Architecture. Shown below is the whole codebase structure of the template:

```
public
└── ...
src
├── app
│   ├── router
│   │   ├── layout
│   │   │   └── ...
│   │   ├── index.tsx
│   │   └── RouterRoot.tsx
│   ├── theme
│   │   └── ...
│   ├── AppRouter.tsx
│   └── index.tsx
├── assets
│   └── ...
├── common
│   └── ...
└── pages
    └── [pageName]
        ├── components
        │   └── ...
        ├── config
        │   └── ...
        ├── context
        │   └── ...
        ├── hooks
        │   └── ...
        ├── services
        │   └── ...
        ├── types
        │   └── ...
        └── index.tsx
```

#### Root Folders

`public` - The public folder contains images, favicons, fonts, and scripts. `src` - The src folder contains the source code for the application itself.

- `src/app` - The `app` folder under src contains the router and the theme of the application. If you want to add routes or adjust the theme, this is the folder that you're looking for.
- `src/assets` - The `assets` folder under src contains the svg files or other media assets of the application.
- `src/common` - The `common` folder under src contains all of the common components that are shared across all pages of the application.
- `src/pages` - the `pages` folder under src contains the pages/modules of the application.

#### Sub Folders

`src/app`

- `router` - The `router` folder exposes a RouterObject that consists all of the routes in the application. The RouterObject is used in the `AppRouter.tsx` file.
  - `layout` - The `layout` folder contains the general layout of the application. This template offers flexibility on the template and it can be modified based on the project requirements.

`src/pages`

- `[pageName]` - The `[pageName]` folder contains numerous subfolders that make up a whole page that is exposed in the `index.tsx` file.
  - `components` - The `component` folder contains all of the components of the page.
  - `config` - The `config` folder is an optional folder that contains configurations for tables, sidebars, or anything similar.
  - `context` - The `context` folder contains the global states of the page.
  - `hooks` - The `hooks` folder contains the custom hooks of the page.
  - `services` - The `services` folder contains the connection/queries of the page to the database.
  - `types` - The `types` folder contains the relevant types and interfaces of the page.
  - `index.tsx` - This file contains the structure of the page and serves as an entry point of relative and absolute imports.

> Made with ♥ by GDSC PLM '24-'25 #LearnEngageThrive #DevelopWithPurpose
