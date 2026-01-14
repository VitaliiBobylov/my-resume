import "./css/styles.css";
import { renderLayout } from "./components/Layout";
import { resolveRoute } from "./app/router";

const app = document.getElementById("app");
if (!app) throw new Error("Root #app not found");

// Рендеримо сторінку при завантаженні
window.addEventListener("DOMContentLoaded", () => {
  renderLayout(resolveRoute(), app);
});

// Рендеримо сторінку при зміні хеша
window.addEventListener("hashchange", () => {
  renderLayout(resolveRoute(), app);
});
