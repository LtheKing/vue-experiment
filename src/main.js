import './assets/main.css'
import customBase from "./assets/custom/custom-base.css?inline";
import { createWebHashHistory, createRouter } from "vue-router";
import { defaultRoutes } from "./main.routes.js";
import { createApp } from 'vue'
import App from './App.vue'
import Main from "./Main.vue";
// import { store } from "./store/index.js";
import {
  defineCustomElement as VueDefineCustomElement,
  h,
  getCurrentInstance,
} from "vue";

import Custom1 from './components/custom/custom1.vue'
import { createWebComponent } from "vue-web-component-wrapper";
import { pluginsWrapper } from './plugins';
import axios from "axios";

const custom1 = VueDefineCustomElement(Custom1);
customElements.define('custom-satu', custom1)

createWebComponent({
  rootComponent: App,
  elementName: "my-web-component",
  plugins: pluginsWrapper,
  cssFrameworkStyles: customBase,
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
});

// const app = createApp(App);
// app.use(defaultRoutes);
// app.mount("#app");
