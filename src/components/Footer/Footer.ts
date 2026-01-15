export function createFooter(): HTMLElement {
  const footer = document.createElement("footer");
  footer.className = "footer";

  footer.innerHTML = `
    <div class="container">
      <div class="footer-logo">BoviaN</div>
      <p>Телефон: <a href="tel:+380932324038">+38 (093) 23-24-038</a></p>
      
      <div class="footer-socials contact-icons">
        <a href="https://t.me/Bobylov_Vitalii" target="_blank" aria-label="Telegram">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="Telegram">
        </a>
        <a href="https://www.facebook.com/vitos.bobylev?locale=ru_RU" target="_blank" aria-label="Facebook">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="Facebook">
        </a>
        <a href="viber://chat?number=%2B380932324038" aria-label="Viber">
          <img src="https://www.svgrepo.com/show/110209/viber.svg" alt="Viber">
        </a>
      </div>

      <p>© 2025 BoviaN. Усі права захищені.</p>
    </div>
  `;

  return footer;
}
