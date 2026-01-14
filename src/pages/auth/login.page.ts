import { setToken } from "../../auth/auth";

export function loginPage(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section";

  section.innerHTML = `
    <div class="container">
      <h2>Вхід</h2>
      <form id="loginForm" class="project-form">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Пароль" required />
        <button class="button">Увійти</button>
      </form>
      <p id="loginMessage" class="form-message"></p>
    </div>
  `;

  const form = section.querySelector("#loginForm") as HTMLFormElement;
  const message = section.querySelector("#loginMessage") as HTMLElement;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();

      if (!res.ok) {
        message.textContent = data.message || "Помилка входу";
        message.style.color = "red";
        return;
      }

      setToken(data.token);
      window.location.hash = "#home";
    } catch {
      message.textContent = "Сервер недоступний";
      message.style.color = "red";
    }
  });

  return section;
}
