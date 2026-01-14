import { setToken } from "../auth/auth";

export function loginPage(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section";

  section.innerHTML = `
    <div class="container">
      <h2>Вхід</h2>

      <form class="project-form">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Пароль" required />
        <button class="button">Увійти</button>
      </form>

      <p class="form-message"></p>
    </div>
  `;

  const form = section.querySelector("form") as HTMLFormElement;
  const message = section.querySelector(".form-message") as HTMLElement;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData);

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
      window.location.hash = "#about";
    } catch {
      message.textContent = "Сервер недоступний";
      message.style.color = "red";
    }
  });

  return section;
}
