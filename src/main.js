// Vue
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@/assets/scss/global.scss";

// NProgress
import "nprogress/nprogress.js";
import "nprogress/nprogress.css";

// Components
import Footer from "./components/Footer.vue";
import Loading from "./components/Home/Loading.vue";

createApp(App)
  .use(router)
  .component("Footer", Footer)
  .component("Loading", Loading)
  .mount("#app");
