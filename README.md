# Intent Flow Package Monorepo

Intent flow industry standard websites - A monorepo for multiple independent Next.js applications that share code safely, without publishing any packages.

## 📁 Repository Structure

```
industry-websites/
├── apps/
│   ├── vip-transport/      # Independent Next.js app (port 3000)
│   │   ├── app/
│   │   ├── next.config.js
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── .env.local
│   │
│   ├── website-b/          # Independent Next.js app (port 3001)
│   │   ├── app/
│   │   ├── next.config.js
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── .env.local
│
├── packages/
│   ├── ui/                 # Shared UI components
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── utils/              # Shared utilities
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│
├── package.json            # Root workspace config (npm workspaces)
├── tsconfig.base.json      # Shared TypeScript config
└── turbo.json              # Turborepo task orchestration
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start all apps in development mode:
```bash
npm run dev
```

Or start individual apps:
```bash
# VIP Transport (port 3000)
cd apps/vip-transport
npm run dev

# Website B (port 3001)
cd apps/website-b
npm run dev
```

## 📦 Shared Packages

### `@intent-flow-package/ui`

Shared UI components that can be used across all apps.

**Example:**
```tsx
import { Button } from '@intent-flow-package/ui';

<Button variant="primary" size="md">Click me</Button>
```

### `@intent-flow-package/utils`

Shared utility functions that are runtime-agnostic.

**Example:**
```ts
import { formatDate, formatCurrency } from '@intent-flow-package/utils';

const date = formatDate(new Date());
const price = formatCurrency(99.99, 'USD');
```

## 🏗️ Architecture Principles

### Strict Separation

- **Apps** (`apps/*`): Independent, runnable Next.js applications
- **Packages** (`packages/*`): Shared libraries only, no runtime assumptions

### Package Imports

Always use package-style imports:
```ts
// ✅ Correct
import { Button } from '@intent-flow-package/ui';

// ❌ Wrong - never use relative imports across apps
import { Button } from '../../packages/ui/src';
```

### Environment Variables

- Each app manages its own `.env.local` file
- Shared packages **never** access `process.env`
- Apps read environment variables and pass configuration to packages

### Private Packages

All shared packages are marked as `"private": true` to prevent accidental publishing to npm.

## 🛠️ Development

### Adding a New Shared Package

1. Create a new directory in `packages/`:
```bash
mkdir -p packages/my-package/src
```

2. Create `package.json`:
```json
{
  "name": "@intent-flow-package/my-package",
  "version": "1.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts"
}
```

3. Add to `tsconfig.base.json` paths:
```json
{
  "compilerOptions": {
    "paths": {
      "@intent-flow-package/my-package": ["./packages/my-package/src"]
    }
  }
}
```

4. Use in apps:
```ts
import { something } from '@intent-flow-package/my-package';
```

### Adding a New App

1. Create a new directory in `apps/`:
```bash
mkdir -p apps/my-app/app
```

2. Initialize Next.js app (or copy from existing app)

3. Update `package.json` to use shared packages:
```json
{
  "dependencies": {
    "@intent-flow-package/ui": "*",
    "@intent-flow-package/utils": "*"
  }
}
```

4. Configure `next.config.js` to transpile packages:
```js
const nextConfig = {
  transpilePackages: ['@intent-flow-package/ui', '@intent-flow-package/utils'],
};
```

## 📝 Best Practices

1. **Never merge apps** - Each app is independent
2. **No business logic in packages** - Keep packages generic and reusable
3. **No environment assumptions** - Packages should be runtime-agnostic
4. **Use TypeScript** - All code should be typed
5. **Keep packages private** - Never publish to npm

## 🔧 Available Scripts

- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all apps and packages
- `npm run lint` - Lint all apps and packages
- `npm run clean` - Clean all build artifacts

## 🚢 Deployment

Each app can be deployed independently:

- **VIP Transport**: Deploy `apps/vip-transport` to your hosting platform
- **Website B**: Deploy `apps/website-b` to your hosting platform

Each app includes its own environment configuration and can use different databases, APIs, and deployment strategies.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [npm Workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces)
- [Turborepo Documentation](https://turbo.build/repo/docs)
