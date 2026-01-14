export function aboutPage(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section";

  section.innerHTML = `
    <div class="container">
      <h2>Мої послуги</h2>

      <div class="cards">
        <a class="card" href="#services">
          <h3>Landing Page</h3>
          <p>Односторінкові сайти для бізнесу</p>
        </a>

        <a class="card" href="#services">
          <h3>SPA</h3>
          <p>Сучасні веб-застосунки</p>
        </a>

        <a class="card" href="#services">
          <h3>Підтримка</h3>
          <p>Оновлення та розвиток проєктів</p>
        </a>
      </div>
    </div>
  `;

  return section;
}
