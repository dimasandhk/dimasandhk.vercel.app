import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@/assets/scss/global.scss";
import Footer from "./components/Footer.vue";

createApp(App)
  .use(router)
  .component("Footer", Footer)
  .mount("#app");
