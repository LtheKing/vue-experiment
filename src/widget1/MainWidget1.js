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
import eventBus from "./event-bus.js";

const widget1 = createWebComponent({
  rootComponent: Widget1Component,
  elementName: "widget-one",
  plugins: pluginsWrapper,
  cssFrameworkStyles: style,
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
});

eventBus.$on('my-event', eventData => {
  // Handle the event in the Vue instance
  console.log('Event Data:', eventData);
});

// eventBus.config.globalProperties.$bus.on("my-event", (eventData) => {
//   // Handle the event in the Vue instance
//   console.log("Event Data:", eventData);
// });

//testing module.exports
// import ex from "./module.js";
// console.log(ex);