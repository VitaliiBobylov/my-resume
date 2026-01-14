import "./css/styles.css";
import { homePage } from "./pages/home/home.page";
import { renderLayout } from "./components/Layout";

const app = document.getElementById("app");
if (!app) throw new Error("Root #app not found");

// рендеримо одразу головну сторінку
window.addEventListener("DOMContentLoaded", () => {
  renderLayout(homePage(), app);
});

// якщо будуть хеші для інших сторінок
window.addEventListener("hashchange", () => {
  renderLayout(homePage(), app);
});
