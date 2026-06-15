const buttons = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-btn");

/* Changement d'interface avec animation */
function showPage(pageId) {
  const currentPage = document.querySelector(".page.active-page");
  const nextPage = document.getElementById(pageId);

  if (!nextPage || currentPage === nextPage) return;

  if (currentPage) {
    currentPage.classList.add("page-exit");
  }

  setTimeout(() => {
    pages.forEach(page => {
      page.classList.remove("active-page", "page-exit");
    });

    nextPage.classList.add("active-page");

    navButtons.forEach(nav => {
      nav.classList.remove("active");
    });

    const activeNav = document.querySelector(`.nav-btn[data-page="${pageId}"]`);

    if (activeNav) {
      activeNav.classList.add("active");
    }

    nextPage.scrollTo({
  top: 0,
  behavior: "smooth"
});
  }, 250);
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const pageId = button.getAttribute("data-page");
    showPage(pageId);
  });
});

/* Animation du nom lettre par lettre */
const typingName = document.getElementById("typing-name");

function typeWriterName() {
  if (!typingName) return;

  const text = typingName.getAttribute("data-text");
  typingName.textContent = "";
  typingName.classList.add("typing");

  let index = 0;

  const typingInterval = setInterval(() => {
    typingName.textContent += text.charAt(index);
    index++;

    if (index >= text.length) {
      clearInterval(typingInterval);
      typingName.classList.remove("typing");
    }
  }, 120);
}

typeWriterName();