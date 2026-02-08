import { setToken } from "../../auth/auth";
import "./AuthModal.css";

export function createAuthModal(): HTMLElement {
  const modal = document.createElement("div");
  modal.className = "auth-modal hidden";

  modal.innerHTML = `
    <div class="auth-overlay"></div>

    <div class="auth-box">
      <h2>Вхід</h2>

      <form id="authForm">
        <input id="username" name="username" placeholder="Логін" required />
        <input id="password" name="password" type="password" placeholder="Пароль" required />
        <button type="submit">Увійти</button>
      </form>

      <div class="auth-links">
        <button id="registerBtn" class="link-btn">Реєстрація</button>
        <button id="forgotBtn" class="link-btn">Забули пароль?</button>
      </div>
    </div>
  `;

  const overlay = modal.querySelector(".auth-overlay") as HTMLElement;
  const form = modal.querySelector("#authForm") as HTMLFormElement;
  const usernameInput = modal.querySelector<HTMLInputElement>("#username")!;
  const passwordInput = modal.querySelector<HTMLInputElement>("#password")!;
  const registerBtn = modal.querySelector("#registerBtn") as HTMLElement;
  const forgotBtn = modal.querySelector("#forgotBtn") as HTMLElement;

  // Закриття модалки
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  function closeModal() {
    modal.classList.add("hidden");
  }

  function openModal() {
    modal.classList.remove("hidden");
  }

  document.addEventListener("open-login-modal", openModal);

  // Submit форми
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Запам’ятовуємо логін/пароль для автозаповнення
    const username = usernameInput.value;
    const password = passwordInput.value;
    localStorage.setItem("savedUsername", username);
    localStorage.setItem("savedPassword", password);

    setToken("demo_token"); // поки фейк
    closeModal();
    window.location.hash = "#home";
    window.location.reload();
  });

  // Автозаповнення, якщо є збережені дані
  const savedUsername = localStorage.getItem("savedUsername");
  const savedPassword = localStorage.getItem("savedPassword");
  if (savedUsername) usernameInput.value = savedUsername;
  if (savedPassword) passwordInput.value = savedPassword;

  // Кнопки Реєстрація та Забули пароль
  registerBtn.addEventListener("click", () => {
    alert("Реєстрація (поки демо)");
  });

  forgotBtn.addEventListener("click", () => {
    alert("Відновлення паролю (поки демо)");
  });

  return modal;
}
