import "./home.page.css";

export function homePage(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section";

  section.innerHTML = `
    <div class="container">
      <h2>Оберіть категорію IT-продуктів</h2>

      <div class="cards">
        <a class="card" href="#services">
          <span class="card-icon">
            <!-- Frontend icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60" height="60" fill="#61dafb">
              <circle cx="32" cy="32" r="6"/>
              <path d="M32 12a20 20 0 1 1 0 40 20 20 0 0 1 0-40z" fill="none" stroke="#61dafb" stroke-width="4"/>
            </svg>
          </span>
          <h3>Frontend</h3>
          <p>Розробка інтерфейсів та UX/UI</p>
        </a>

        <a class="card" href="#services">
          <span class="card-icon">
            <!-- Backend icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60" height="60" fill="#f1502f">
              <rect x="16" y="16" width="32" height="32" rx="4" ry="4"/>
              <path d="M16 24h32M16 32h32M16 40h32" stroke="#fff" stroke-width="2"/>
            </svg>
          </span>
          <h3>Backend</h3>
          <p>Серверна логіка та бази даних</p>
        </a>

        <a class="card" href="#services">
          <span class="card-icon">
            <!-- Testing icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60" height="60" fill="#ffca28">
              <circle cx="32" cy="32" r="28" stroke="#ffca28" stroke-width="4" fill="none"/>
              <path d="M20 32l8 8 16-16" stroke="#ffca28" stroke-width="4" fill="none"/>
            </svg>
          </span>
          <h3>Testing</h3>
          <p>Автоматизація тестів та QA</p>
        </a>

        <a class="card" href="#services">
          <span class="card-icon">
            <!-- SEO icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60" height="60" fill="#28a745">
              <path d="M32 12a20 20 0 1 1 0 40 20 20 0 0 1 0-40z" fill="none" stroke="#28a745" stroke-width="4"/>
              <path d="M32 16v16l12 12" stroke="#28a745" stroke-width="4" fill="none"/>
            </svg>
          </span>
          <h3>SEO</h3>
          <p>Оптимізація сайтів для пошукових систем</p>
        </a>
      </div>
    </div>
  `;

  return section;
}
