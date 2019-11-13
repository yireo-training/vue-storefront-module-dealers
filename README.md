# Example Dealers module for Vue StoreFront
This module creates a API-driven Dealers component in your Vue StoreFront PWA.

## Requirements
- Vue StoreFront 1.X (tested under 1.10)
- [Dealers extension](https://github.com/yireo-training/vue-storefront-api-extension-dealers) for the Vue StoreFront API

## Installation
- Copy these sources to `src/modules/dealers` in your PWA
- Register this module in the file `src/modules/index.ts`
    - Add `import { Dealers } from './dealers'` in the top
    - Add `Dealers` as part of the `registerModules` export
- Navigate to the URL `/dealers`
