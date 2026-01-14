import { createHeader } from "./Header";
import { createFooter } from "./Footer";

export function renderLayout(content: HTMLElement, root: HTMLElement) {
  root.innerHTML = "";

  // Header
  const header = createHeader();
  root.before(header);

  // Контент
  root.appendChild(content);

  // Footer
  const footer = createFooter();
  root.after(footer);
}
