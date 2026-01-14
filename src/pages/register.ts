export function registerPage(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section";

  section.innerHTML = `
    <div class="container">
      <h2>Реєстрація</h2>

      <form class="project-form">
        <input name="name" placeholder="Імʼя" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Пароль" required />
        <button class="button">Зареєструватися</button>
      </form>

      <p class="form-message"></p>
    </div>
  `;

  const form = section.querySelector("form") as HTMLFormElement;
  const message = section.querySelector(".form-message") as HTMLElement;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) throw new Error();

      message.textContent = "Реєстрація успішна 🎉";
      message.style.color = "green";
      form.reset();
    } catch {
      message.textContent = "Помилка реєстрації";
      message.style.color = "red";
    }
  });

  return section;
}
