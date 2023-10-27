# vue-experiment

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Guide
1. Folder Structure
   - public
   - src
        - widget-app-1
            - assets
            - components
            - plugins
            - router
            - style
            - api.js
            - main-<yourAppName>.js
        - widget-app-2
            - assets
            - components
            - plugins
            - router
            - style
            - api.js
            - main-<yourAppName>.js

2. mounting app using vue-web-component-wrapper
    - go to main-<yourAppName>.js
    - follow MainWidget1.js template
3. setting axios as global plugin (per app)
    - go to widget-<yourApp>/plugins/index.js
    - import axios
    - inside pluginsWrapper object, insert : Vue.config.globalProperties.$axios = axios;
    - you can use "this.$axios" to call axios call, but this only can be use in component.
4. update token
   emit token in every api call.

