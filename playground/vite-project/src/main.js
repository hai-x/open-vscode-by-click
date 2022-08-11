import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import elementClick from "@hai/open-code-server/src/elementClick";

createApp(App).mount("#app");

document.addEventListener("click", elementClick);
