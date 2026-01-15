import { createHeader } from "./Header";
import { createFooter } from "./Footer/Footer";

let headerMounted = false;
let footerMounted = false;

export function renderLayout(
  content: HTMLElement,
  root: HTMLElement,
  headerRoot: HTMLElement,
  footerRoot: HTMLElement
) {
  // Header — тільки 1 раз
  if (!headerMounted) {
    headerRoot.appendChild(createHeader());
    headerMounted = true;
  }

  // Footer — тільки 1 раз
  if (!footerMounted) {
    footerRoot.appendChild(createFooter());
    footerMounted = true;
  }

  // Міняємо тільки контент
  root.innerHTML = "";
  root.appendChild(content);
}
