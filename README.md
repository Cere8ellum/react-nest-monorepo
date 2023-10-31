# Monorepo including api, web, and common paths

## Environment and Intellisense:

> See [env files](./env) to understand what urls should be used

> To eliminate Typescript (React) errors caused by Intellisense of VS Code,
> you need:
>
> 1. Select Workspace version of Typescript
> 2. Restart TS Server
>    - Close all files
>    - Open [dummy.ts](./apps/web/dummy.ts)
>    - Restart TS server by clicking the key combination **Ctrl+Shift+P**, and next choose **TypeScript: Restart TS Server**.

## Common apps:

> If you add a new common package into [./packages/](./packages), please don't forget to:
>
> 1.  Add paths into **paths** section in [tsconfig.common.json](./tsconfig.common.json)
> 2.  Add paths into **resolve** section in an every common config of webpack.

## Run some command from list:

### Bundling monorepo in DEV environment with response to changes in code

```bash
npm run start:dev
```

### Bundling monorepo in PROD environment with response to changes in code

```bash
npm run start:prod
```

### Getting DEV build

```bash
npm run build-api:dev
```

```bash
npm run build-web:dev
```

### Getting PROD build

```bash
npm run build-api:prod
```

```bash
npm run build-web:prod
```

### Remove build

```bash
npm run clean
```

### Compare js with rules of linter

```bash
npm run lint
```

### Compare js with rules of linter and then fix all errors

```bash
npm run lint-fix
```

### Running all tests (see jest config)

```bash
npm run test-web
```

### Running all tests using watch mode

```bash
npm run test-web-watch
```

### Running all tests using coverage mode

```bash
npm run test-web-coverage
```
