import Vue from "vue";
import ElementUI from "element-ui";
// import "./element-variables.scss";
import "element-ui/lib/theme-chalk/index.css";
import Top from "./Top.vue";
import App from "./App.vue";
import Nuxt from "./Nuxt.vue";
import Grid from "./Grid.vue";
import Form from "./Form.vue";
import Tree from "./Tree.vue";
import { Button, Select, Dialog, Notification } from "element-ui";
// import ElementUI from "element-ui";
import Transition from "./Transition.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: Top,
    children: [
      { path: "/app", component: App },
      { path: "/nuxt", component: Nuxt },
      { path: "/grid", component: Grid },
      { path: "/transition", component: Transition },
      { path: "/tree", component: Tree },
      { path: "form", component: Form }
    ]
  }
];
const router = new VueRouter({
  routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
Vue.use(ElementUI);
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
