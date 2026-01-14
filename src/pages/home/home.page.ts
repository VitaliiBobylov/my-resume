export function homePage(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section";

  section.innerHTML = `
      <div class="container">
        <h2 style="text-align:center; margin-bottom: 40px;">Привіт! Я Віталій</h2>
        <p style="text-align:center; margin-bottom: 60px;">
          Fullstack / Frontend розробник з акцентом на AI та сучасні технології
        </p>
  
        <div class="cards" id="home-cards"></div>
      </div>
    `;

  // Дані для карток
  const cardsData = [
    { title: "AI Content Maker", link: "#services" },
    { title: "AI Automator", link: "#services" },
    { title: "Prompt Engineering", link: "#services" },
    { title: "QA + AI", link: "#services" },
    { title: "Fullstack + AI", link: "#services" },
    { title: "Data Analytics + AI", link: "#services" },
  ];

  const cardsContainer = section.querySelector("#home-cards")!;

  cardsData.forEach((card) => {
    const a = document.createElement("a");
    a.className = "card";
    a.href = card.link;
    a.innerHTML = `<h3>${card.title}</h3>`;
    cardsContainer.appendChild(a);
  });

  return section;
}
