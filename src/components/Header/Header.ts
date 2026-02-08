import logoPath from "../../assets/BoviaN-logo.png";
import { isAuthenticated, removeToken } from "../../auth/auth";
import "./Header.css";

export function createHeader(): HTMLElement {
  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
    <div class="container header-container">
      <div class="logo"></div>

      <button class="burger" aria-label="Toggle menu">☰</button>

      <nav class="nav">
        <a href="#home">Головна</a>
        <a href="#about">Про мене</a>
        <a href="#services">Проєкти</a>
        <a href="#contact">Контакти</a>

        <button id="loginBtn" class="btn-login">Вхід</button>
        <button id="logoutBtn" class="btn-logout hidden">Вихід</button>
      </nav>
    </div>
  `;

  // Logo
  const logoDiv = header.querySelector(".logo") as HTMLElement;

  const logoImg = document.createElement("img");
  logoImg.src = logoPath;
  logoImg.alt = "BoviaN Logo";
  logoDiv.appendChild(logoImg);

  const logoText = document.createElement("span");
  logoText.textContent = "BoviaN";
  logoText.className = "logo-text";
  logoDiv.appendChild(logoText);

  // Клік на логотип або текст → повернення на стартову сторінку
  logoDiv.style.cursor = "pointer"; // показує, що можна клікати
  logoDiv.addEventListener("click", () => {
    window.location.hash = "#home"; // або "/" якщо використовуєш роутинг
  });

  // Burger
  const burgerBtn = header.querySelector(".burger") as HTMLElement;
  const nav = header.querySelector(".nav") as HTMLElement;

  burgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (nav.classList.contains("active") && !nav.contains(e.target as Node)) {
      nav.classList.remove("active");
    }
  });

  // Auth UI
  const loginBtn = header.querySelector("#loginBtn") as HTMLElement;
  const logoutBtn = header.querySelector("#logoutBtn") as HTMLElement;
  const menuLinks = Array.from(nav.querySelectorAll("a")) as HTMLElement[];

  function updateAuthUI() {
    if (isAuthenticated()) {
      loginBtn.style.display = "none";
      logoutBtn.style.display = "inline-block";
      menuLinks.forEach((link) => (link.style.display = "inline-block"));
    } else {
      loginBtn.style.display = "inline-block";
      logoutBtn.style.display = "none";
      menuLinks.forEach((link) => (link.style.display = "none"));
    }
  }

  updateAuthUI();

  // Open modal
  loginBtn.addEventListener("click", () => {
    document.dispatchEvent(new Event("open-login-modal"));
  });

  // Logout
  logoutBtn.addEventListener("click", () => {
    removeToken();
    updateAuthUI();
    window.location.hash = "#login";
  });

  return header;
}
