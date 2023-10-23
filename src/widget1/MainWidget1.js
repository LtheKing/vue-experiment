import App from "../App.vue";
import style from "./style/Widget1.css";
import { pluginsWrapper } from "./plugins";
import {
  defineCustomElement as VueDefineCustomElement,
  h,
  getCurrentInstance,
} from "vue";
import { createApp } from "vue";
import { createWebComponent } from "vue-web-component-wrapper";
import Widget1Component from "./components/Widget1Component.vue"
import config from "../config";

createWebComponent({
  rootComponent: Widget1Component,
  elementName: "widget-one",
  plugins: pluginsWrapper,
  cssFrameworkStyles: style,
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
});