export function aboutPage(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section section--gradient";

  section.innerHTML = `
      <div class="container">
        <h2>Про мене</h2>
        <div class="cards">
          <div class="card"><h3>Landing page</h3><p>Односторінкові сайти</p></div>
          <div class="card"><h3>SPA</h3><p>Прості односторінкові застосунки</p></div>
          <div class="card"><h3>Підтримка</h3><p>Оновлення сайтів</p></div>
        </div>
      </div>
    `;

  return section;
}
