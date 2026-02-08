import { aboutPage } from "../pages/about/about.page";
import { homePage } from "../pages/home/home.page";
import { servicesPage } from "../pages/projects/projects.page";
import { contactPage } from "../pages/contact/contact.page";

export async function resolveRoute(): Promise<HTMLElement> {
  const hash = window.location.hash || "#home";

  switch (hash) {
    // case "#home":
    //   return homePage();

    case "#about":
      return aboutPage();

    case "#services":
      return servicesPage();

    case "#contact":
      return contactPage();

    default:
      return homePage();
  }
}
