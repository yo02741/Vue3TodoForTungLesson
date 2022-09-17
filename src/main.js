import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "./assets/all.scss";

import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vue3Lottie);

app.mount("#app");
