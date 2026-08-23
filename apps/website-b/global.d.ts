// Next.js only ships type declarations for CSS Modules (`*.module.css`),
// not for plain `*.css` side-effect imports. This declaration prevents
// TypeScript from erroring on `import './globals.css'` when side-effect
// import checking is enabled (e.g. `noUncheckedSideEffectImports`).
declare module '*.css';
