import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import "normalize.css";
import "@/assets/less/index.less";

const app = createApp(App);
app.use(router);
app.mount("#app");
