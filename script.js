const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const revealTargets = document.querySelectorAll(
  ".hero-copy, .hero-card, .project-card, .about-card, .about-points div, .contact-panel, .case-study-hero, .case-study-summary div, .case-study-block"
);

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const nextExpanded = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(nextExpanded));
    siteNav.classList.toggle("is-open", nextExpanded);
  });
}

revealTargets.forEach((element) => {
  element.setAttribute("data-reveal", "");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
  }
);

revealTargets.forEach((element) => {
  revealObserver.observe(element);
});
