import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@/assets/scss/global.scss";
import Footer from "./components/Footer.vue";
import Loading from "./components/Home/Loading.vue";

createApp(App)
  .use(router)
  .component("Footer", Footer)
  .component("Loading", Loading)
  .mount("#app");
