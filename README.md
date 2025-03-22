# NgPlayground

This project is a template for futur developments.

## Solution structure

### Dependencies graph

```mermaid
flowchart BT
    lib["@lib"]
    core["@core"]
    shared["@shared"]
    feature@{ shape: procs, label: "features"}
    core --> lib
    shared --> lib
    shared -- Model only --> core
    feature --> lib
    feature --> core
    feature --> shared
```
