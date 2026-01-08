import {
  getProjects,
  createProject,
  deleteProject,
  type Project,
  type NewProject,
} from "../api/projectsApi";
import { isAuthenticated } from "../auth/auth";

let projects: Project[] = [];
let editProjectId: string | null = null;

function renderProjectCard(project: Project): string {
  return `
    <div class="home-card">
      <div class="card-img-wrapper">
        <img src="${project.image}" alt="${project.title}" />
        ${
          isAuthenticated()
            ? `<button class="icon-btn delete-btn" data-id="${project._id}">×</button>`
            : ""
        }
      </div>

      <p>${project.description}</p>

      <div class="card-buttons">
        <a class="button" href="${project.link}" target="_blank">
          Подивитися
        </a>

        ${
          isAuthenticated()
            ? `<button class="button edit-btn" data-id="${project._id}">
                Редагувати
              </button>`
            : ""
        }
      </div>
    </div>
  `;
}

export async function servicesPage(): Promise<string> {
  projects = await getProjects();

  return `
    <section class="section">
      <div class="container">
        <h2>Проєкти</h2>

        <div class="home-grid" id="projects-grid">
          ${projects.map(renderProjectCard).join("")}
        </div>

        ${
          isAuthenticated()
            ? `
          <button id="toggle-form" class="button add-project-btn">
            Додати проєкт
          </button>

         <div id="project-modal" class="modal hidden">
  <div class="modal-overlay"></div>

  <div class="modal-content">
    <button id="close-modal" class="modal-close">×</button>

    <form id="project-form" class="project-form">

      <input id="title" placeholder="Назва" required />
      <input id="image" placeholder="Картинка URL" required />
      <textarea id="description" placeholder="Опис" required></textarea>

      <!-- ПОСИЛАННЯ -->
      <input id="link-live" placeholder="Посилання на живу сторінку" required />
      <input id="link-github" placeholder="Посилання на GitHub" />

      <button class="button">Зберегти</button>
    </form>
  </div>
</div>
        `
            : ""
        }
      </div>
    </section>
  `;
}

export function initServicesEvents() {
  const grid = document.getElementById("projects-grid");
  const modal = document.getElementById("project-modal");
  const openBtn = document.getElementById("toggle-form");
  const closeBtn = document.getElementById("close-modal");
  const form = document.getElementById("project-form") as HTMLFormElement;

  const liveRow = document.getElementById("live-link-row");
  const liveLink = document.getElementById("live-link") as HTMLAnchorElement;

  openBtn?.addEventListener("click", () => {
    editProjectId = null;
    form.reset();
    liveRow?.classList.add("hidden");
    modal?.classList.remove("hidden");
  });

  closeBtn?.addEventListener("click", () => {
    modal?.classList.add("hidden");
  });

  modal?.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      modal.classList.add("hidden");
    }
  });

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload: NewProject = {
      title: (document.getElementById("title") as HTMLInputElement).value,
      image: (document.getElementById("image") as HTMLInputElement).value,
      description: (
        document.getElementById("description") as HTMLTextAreaElement
      ).value,
      link: (document.getElementById("link") as HTMLInputElement).value,
    };

    if (editProjectId) {
      await fetch(
        `${import.meta.env.VITE_API_URL}/api/projects/${editProjectId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
    } else {
      await createProject(payload);
    }

    location.reload();
  });

  grid?.addEventListener("click", async (e) => {
    const btn = e.target as HTMLElement;

    if (btn.classList.contains("delete-btn")) {
      await deleteProject(btn.dataset.id!);
      location.reload();
    }

    if (btn.classList.contains("edit-btn")) {
      const id = btn.dataset.id!;
      const project = projects.find((p) => p._id === id);
      if (!project) return;

      editProjectId = id;
      modal?.classList.remove("hidden");

      (document.getElementById("title") as HTMLInputElement).value =
        project.title;
      (document.getElementById("image") as HTMLInputElement).value =
        project.image;
      (document.getElementById("description") as HTMLTextAreaElement).value =
        project.description;
      (document.getElementById("link") as HTMLInputElement).value =
        project.link;

      liveLink.href = project.link;
      liveRow?.classList.remove("hidden");
    }
  });
}
