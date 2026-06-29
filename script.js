
const buttons = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-btn");

/* Changement de page */
function showPage(pageId) {
  const currentPage = document.querySelector(".page.active-page");
  const nextPage = document.getElementById(pageId);

  if (!nextPage) return;

  /* Si la page est déjà ouverte, retour en haut */
  if (currentPage === nextPage) {
    nextPage.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }

  if (currentPage) {
    currentPage.classList.add("page-exit");
  }

  setTimeout(() => {
    pages.forEach((page) => {
      page.classList.remove("active-page", "page-exit");
    });

    nextPage.classList.add("active-page");

    navButtons.forEach((navButton) => {
      navButton.classList.remove("active");
    });

    const activeNavButton = document.querySelector(
      `.nav-btn[data-page="${pageId}"]`
    );

    if (activeNavButton) {
      activeNavButton.classList.add("active");
    }

    nextPage.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 250);
}

/* Boutons de navigation */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageId = button.dataset.page;
    showPage(pageId);
  });
});

/* Animation du nom lettre par lettre */
const typingName = document.getElementById("typing-name");

function typeWriterName() {
  if (!typingName) return;

  const text = typingName.dataset.text || "Arezki LOUNIS";

  typingName.textContent = "";
  typingName.classList.add("typing");

  let index = 0;

  const typingInterval = setInterval(() => {
    if (index < text.length) {
      typingName.textContent += text.charAt(index);
      index++;
      return;
    }

    clearInterval(typingInterval);
    typingName.classList.remove("typing");
  }, 120);
}

typeWriterName();

