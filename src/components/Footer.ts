export function createFooter(): HTMLElement {
  const footer = document.createElement("footer");
  footer.className = "footer";

  footer.innerHTML = `
      <div class="container">
        <div class="footer-logo">BoviaN</div>
        <p>Телефон: <a href="tel:+380932324038">+38 (093) 23-24-038</a></p>
        <div class="footer-socials">
          <a href="https://t.me/Bobylov_Vitalii" target="_blank">Telegram</a> |
          <a href="https://www.facebook.com/vitos.bobylev?locale=ru_RU" target="_blank">Facebook</a> |
          <a href="viber://chat?number=%2B380932324038">Viber</a>
        </div>
        <p>© 2025 BoviaN. Усі права захищені.</p>
      </div>
    `;

  return footer;
}
