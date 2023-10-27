# Monorepo including api, web, and common paths

> See [env files](./env) to understand what urls should be used

> To eliminate Typescript (React) errors caused by Intellisense of VS Code,
> you need:
>
> 1. Select Workspace version of Typescript
> 2. Restart TS Server
>    ⋅⋅1. Close all files
>    ⋅⋅2. Open [dummy.ts](./apps/web/dummy.ts)
>    ⋅⋅3. Restart TS server by clicking the key combination **Ctrl+Shift+P**, and next choose **TypeScript: Restart TS Server**.

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
npm run build-web:dev
```

### Getting PROD build

```bash
npm run build-api:prod
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
