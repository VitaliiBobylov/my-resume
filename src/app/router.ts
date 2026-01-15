import { aboutPage } from "../pages/about/about.page";
import { homePage } from "../pages/home/home.page";
import { servicesPage } from "../pages/projects/projects.page";
import { contactPage } from "../pages/contact/contact.page";
import { loginPage } from "../pages/auth/login.page";
import { registerPage } from "../pages/auth/register.page";
import { isAuthenticated } from "../auth/auth";

// Всі функції сторінок повертають або HTMLElement, або Promise<HTMLElement>
// тому функція resolveRoute завжди повертає Promise<HTMLElement>
export async function resolveRoute(): Promise<HTMLElement> {
  const hash = window.location.hash || "#home";

  // Якщо не авторизований → завжди показуємо логін
  if (!isAuthenticated() && hash !== "#login" && hash !== "#register") {
    return loginPage();
  }

  switch (hash) {
    case "#home":
      return homePage();

    case "#about":
      return aboutPage();

    case "#services":
      return servicesPage();  // без await — якщо servicesPage повертає Promise, async-функція сама його розгорне

    case "#contact":
      return contactPage();

    case "#login":
      return loginPage();

    case "#register":
      return registerPage();

    default:
      return homePage(); // fallback на головну
  }
}