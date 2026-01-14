import logoPath from "../assets/BoviaN-logo.png";
import { isAuthenticated, removeToken } from "../auth/auth";

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
        <a href="#login" id="loginLink">Вхід</a>
        <a href="#" id="logoutLink" class="hidden">Вихід</a>
      </nav>
    </div>
  `;

  // Логотип
  const logoDiv = header.querySelector(".logo")!;
  const logoImg = document.createElement("img");
  logoImg.src = logoPath;
  logoImg.alt = "BoviaN Logo";
  logoImg.style.height = "50px";
  logoImg.style.width = "auto";
  logoDiv.appendChild(logoImg);

  // Burger menu
  const burgerBtn = header.querySelector(".burger")!;
  const nav = header.querySelector(".nav")!;

  burgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (nav.classList.contains("active") && !nav.contains(e.target as Node)) {
      nav.classList.remove("active");
    }
  });

  nav
    .querySelectorAll("a")
    .forEach((link) =>
      link.addEventListener("click", () => nav.classList.remove("active"))
    );

  // Auth Links
  const loginLink = header.querySelector("#loginLink") as HTMLElement;
  const logoutLink = header.querySelector("#logoutLink") as HTMLElement;

  function updateAuthUI() {
    if (isAuthenticated()) {
      loginLink.style.display = "none";
      logoutLink.style.display = "inline";
    } else {
      loginLink.style.display = "inline";
      logoutLink.style.display = "none";
    }
  }

  updateAuthUI();

  logoutLink.addEventListener("click", () => {
    removeToken();
    updateAuthUI();
    window.location.hash = "#home";
  });

  return header;
}
