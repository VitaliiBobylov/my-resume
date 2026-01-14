import { homePage } from "../pages/home/home.page";
import { aboutPage } from "../pages/about/about.page";
import { servicesPage } from "../pages/projects/projects.page"; // ⚡ переписали під HTMLElement
import { contactPage } from "../pages/contact/contact.page";
import { loginPage } from "../pages/auth/login.page";
import { registerPage } from "../pages/auth/register.page";
import { isAuthenticated } from "../auth/auth";

export function resolveRoute(): HTMLElement {
  const hash = window.location.hash || "#home";

  if (!isAuthenticated() && hash !== "#login" && hash !== "#register") {
    return loginPage();
  }

  switch (hash) {
    case "#home":
      return homePage();
    case "#about":
      return aboutPage();
    case "#services":
      return servicesPage();
    case "#contact":
      return contactPage();
    case "#login":
      return loginPage();
    case "#register":
      return registerPage();
    default:
      return homePage();
  }
}
