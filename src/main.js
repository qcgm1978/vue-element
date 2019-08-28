import Vue from "vue";
import ElementUI from "element-ui";
// import "./element-variables.scss";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import Nuxt from "./Nuxt.vue";
import { Button, Select, Dialog, Notification } from "element-ui";
// import ElementUI from "element-ui";
import Transition from "./Transition.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
// const Foo = { template: Transition };
// const Bar = { template: Nuxt };

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: App },
  { path: "/nuxt", component: Nuxt },
  { path: "/transition", component: Transition }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
Vue.use(ElementUI);
// new Vue({ el: "#app", router, render: h => h(App) });

// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// Vue.component(Dialog.name, Dialog);
// Vue.component(Notification.name, Notification);

Vue.use(Dialog, { size: "small", zIndex: 3000 });
const app = new Vue({
  router
}).$mount("#app");
// Vue.prototype.$notify = Notification;

// new Vue({
//   el: "#app",

//   render: h => h(App)
// });
// new Vue({
//   el: "#nuxt",

//   render: h => h(Nuxt)
// });
// new Vue({
//   el: "#transition",

//   render: h => h(Transition)
// });
