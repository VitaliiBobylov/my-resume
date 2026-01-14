import { isAuthenticated } from "../auth/auth";
import { aboutPage } from "../pages/about";
import { loginPage } from "../pages/login";
import { registerPage } from "../pages/register";

export function resolveRoute(): HTMLElement {
  const hash = window.location.hash || "#about";

  if (!isAuthenticated() && hash !== "#login" && hash !== "#register") {
    return loginPage();
  }

  switch (hash) {
    case "#login":
      return loginPage();
    case "#register":
      return registerPage();
    case "#about":
    default:
      return aboutPage();
  }
}
