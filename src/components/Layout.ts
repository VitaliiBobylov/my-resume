import { createHeader } from "./Header/Header";
import { createFooter } from "./Foo/Footer";
import { createAuthModal } from "./AuthModal/AuthModal";

let headerMounted = false;
let footerMounted = false;
let modalMounted = false;

export function renderLayout(
  content: HTMLElement,
  root: HTMLElement,
  headerRoot: HTMLElement,
  footerRoot: HTMLElement
) {
  if (!headerMounted) {
    headerRoot.appendChild(createHeader());
    headerMounted = true;
  }

  if (!footerMounted) {
    footerRoot.appendChild(createFooter());
    footerMounted = true;
  }

  if (!modalMounted) {
    document.body.appendChild(createAuthModal());
    modalMounted = true;
  }

  root.innerHTML = "";
  root.appendChild(content);
}
