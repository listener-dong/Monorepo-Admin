import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import microApp from "@micro-zoe/micro-app";
microApp.start();

const app = createApp(App);

app.use(router);

app.mount("#app");
