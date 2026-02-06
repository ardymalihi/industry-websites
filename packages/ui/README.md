# @intent-flow-package/ui

Shared UI components built with Tailwind CSS and shadcn/ui for all Intent Flow websites.

## Installation

This package is already installed in the monorepo workspace. Import components directly:

```tsx
import { Button } from '@intent-flow-package/ui';
```

## Adding shadcn/ui Components

To add new shadcn/ui components:

1. Navigate to the UI package:
```bash
cd packages/ui
```

2. Use shadcn CLI to add components:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

3. Components will be added to `src/components/ui/`

4. Export them from `src/index.ts`:
```ts
export { Button } from './components/ui/button';
export { Card } from './components/ui/card';
```

5. Use in apps:
```tsx
import { Button, Card } from '@intent-flow-package/ui';
```

## Available Components

- **Button** - shadcn/ui Button component with variants (default, destructive, outline, secondary, ghost, link)
- **cn** - Utility function for merging Tailwind classes

## Styling

All components use Tailwind CSS with CSS variables for theming. The theme supports both light and dark modes.

## Structure

```
packages/ui/
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── lib/
│   │   └── utils.ts     # Utility functions (cn)
│   └── index.ts         # Public exports
├── components.json      # shadcn/ui configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```
