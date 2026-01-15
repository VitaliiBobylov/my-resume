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
        <a href="#login" id="loginLink" class="btn-login">Вхід</a>
        <a href="#" id="logoutLink" class="hidden btn-logout">Вихід</a>
      </nav>
    </div>

    <!-- Форма входу, спочатку прихована -->
    <div id="loginForm" class="login-form hidden">
      <form>
        <input type="text" name="username" placeholder="Логін" required autocomplete="username">
        <input type="password" name="password" placeholder="Пароль" required autocomplete="current-password">
        <button type="submit">Увійти</button>
      </form>
    </div>
  `;

  // Логотип
  const logoDiv = header.querySelector(".logo") as HTMLElement;
  const logoImg = document.createElement("img");
  logoImg.src = logoPath;
  logoImg.alt = "BoviaN Logo";
  logoImg.style.height = "50px";
  logoImg.style.width = "auto";
  logoDiv.appendChild(logoImg);

  // Бургер-меню
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

  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => nav.classList.remove("active"))
  );

  // Авторизація
  const loginLink = header.querySelector("#loginLink") as HTMLElement;
  const logoutLink = header.querySelector("#logoutLink") as HTMLElement;
  const menuLinks = Array.from(
    nav.querySelectorAll("a:not(#loginLink):not(#logoutLink)")
  ) as HTMLElement[];
  const loginForm = header.querySelector("#loginForm") as HTMLElement;

  function updateAuthUI() {
    if (isAuthenticated()) {
      loginLink.style.display = "none";
      logoutLink.style.display = "inline-block";
      menuLinks.forEach(link => (link.style.display = "inline-block"));
      loginForm.classList.add("hidden");
    } else {
      loginLink.style.display = "inline-block";
      logoutLink.style.display = "none";
      menuLinks.forEach(link => (link.style.display = "none"));
      loginForm.classList.add("hidden");
    }
  }

  updateAuthUI();

  // Toggle форми входу з анімацією
  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.toggle("hidden");
    loginForm.classList.toggle("show"); // клас для анімації
  });

  logoutLink.addEventListener("click", () => {
    removeToken();
    updateAuthUI();
    window.location.hash = "#home";
  });

  return header;
}
