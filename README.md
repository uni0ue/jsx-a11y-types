# JSX Accessibility Types

A TypeScript type definitions package that enforces accessibility requirements on common HTML elements in JSX, based on WCAG 2.1 AA standards. This package helps developers ensure their components meet accessibility guidelines by requiring specific properties and restricting invalid attribute combinations.

## Features

- Defines accessibility requirements for HTML elements like `<button>`, `<img>`, `<a>`, `<input>`, `<textarea>`, `<select>`, `<iframe>`, `<table>`, `<th>`, `<audio>`, and `<video>`.
- Enforces required attributes (e.g., `alt` for `<img>`, `title` for `<iframe>`).
- Restricts invalid attribute combinations through TypeScript union types.
- Aligns with [WCAG 2.1 AA](https://www.w3.org/TR/WCAG21/) and [Axe accessibility rules](https://dequeuniversity.com/rules/axe/4.1/).

## Installation

Install this package as a development dependency:

```bash
npm install jsx-a11y-types --save-dev
```

```bash
yarn add jsx-a11y-types --dev
```
