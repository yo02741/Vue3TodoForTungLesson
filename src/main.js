import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "./assets/all.scss";

import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import axios from "axios";
import VueAxios from "vue-axios";
import interceptors from "@/axios/interceptors";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vue3Lottie);
app.use(VueAxios, axios);

interceptors();

app.mount("#app");
