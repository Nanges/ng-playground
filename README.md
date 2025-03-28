# NgPlayground

This project is a template for futur developments.

## Solution structure

```mermaid
flowchart BT
    common["@common/*"]
    core["@core/*"]
    shared["@shared/*"]
    feature@{ shape: procs, label: "features"}
    app
    app --> core
    app --> common
    app -.Lazy.->
    feature --> common
    feature --> core
    feature --> shared
    core --> common
    shared --> common
    shared -.Models maybe?.-> core
```

### @common
Reusable components, pipes, directives, services, classes or functions that are business agnostic. Basically those entities can be used in other projects.

### @core
- Components that are visible almost everywhere like header, footer or menu.
- App settings (json file loaded when app starts)
- Security concerns
  - Guards
  - Interceptor
- Api services and models (generated from OAS)
- Error management and error components (page and/or modal)

### @shared
Reusable components, pipes, directives,... that are shared between **features**. Then reusable components with business value.

## Create a sub package in @common ore @core

```bash
./scripts/subpackage.sh PACKAGE_NAME SUB_PACKAGE_NAME
```

concrete example:

```bash
./scripts/subpackage.sh common ui
```

The file `public_api.ts` contains all exports that are exposed by the sub-package
