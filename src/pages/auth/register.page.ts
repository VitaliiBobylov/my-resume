export function registerPage(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section";

  section.innerHTML = `
      <div class="container">
        <h2>Реєстрація</h2>
        <form id="registerForm" class="project-form">
          <input id="name" name="name" placeholder="Імʼя" required />
          <input id="email" name="email" type="email" placeholder="Email" required />
          <input id="password" name="password" type="password" placeholder="Пароль" required />
          <button class="button">Зареєструватися</button>
        </form>
        <p id="registerMessage" class="form-message"></p>
      </div>
    `;

  const form = section.querySelector("#registerForm") as HTMLFormElement;
  const message = section.querySelector("#registerMessage") as HTMLElement;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = (
      document.getElementById("name") as HTMLInputElement
    ).value.trim();
    const email = (
      document.getElementById("email") as HTMLInputElement
    ).value.trim();
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;

    if (!name || !email || !password)
      return showMessage(message, "Заповніть усі поля", "error");
    if (password.length < 6)
      return showMessage(message, "Пароль мінімум 6 символів", "error");
    if (!email.includes("@"))
      return showMessage(message, "Некоректний email", "error");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await res.json();

      if (!res.ok)
        return showMessage(
          message,
          data.message || "Помилка реєстрації",
          "error"
        );

      showMessage(message, "Реєстрація успішна 🎉", "success");
      form.reset();
    } catch {
      showMessage(message, "Сервер недоступний", "error");
    }
  });

  return section;
}

// утиліта для обох сторінок
function showMessage(
  element: HTMLElement,
  text: string,
  type: "error" | "success"
) {
  element.textContent = text;
  element.style.color = type === "error" ? "red" : "green";
}
