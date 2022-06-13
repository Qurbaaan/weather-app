import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home.vue";
import Weaather from "../components/weatherWidget.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [ 
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
        path: "/weather/:id",
        name: "weather",
        component: Weaather
    }
  ]
});