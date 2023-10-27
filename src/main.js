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
import Widget1Component from "./widget1/components/Widget1Component.vue";
import { createWebComponent } from "vue-web-component-wrapper";
import { pluginsWrapper } from './plugins';
import axios from "axios";
import style from "./widget1/style/Widget1.css";
// import config from "./config.js";

const custom1 = VueDefineCustomElement(Custom1);
customElements.define('custom-satu', custom1)

const widget1 = VueDefineCustomElement(Widget1Component);
customElements.define("widget-one", widget1);

// const widget1 = createWebComponent({
//   rootComponent: Widget1Component,
//   elementName: "widget-one",
//   plugins: pluginsWrapper,
//   cssFrameworkStyles: style,
//   VueDefineCustomElement,
//   h,
//   createApp,
//   getCurrentInstance,
// });

// createWebComponent({
//   rootComponent: App,
//   elementName: "my-web-component",
//   plugins: pluginsWrapper,
//   cssFrameworkStyles: customBase,
//   VueDefineCustomElement,
//   h,
//   createApp,
//   getCurrentInstance,
// });

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.mount("#app");
