// Simple intersection observer for reveal-on-scroll
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: show everything if IntersectionObserver not supported
  revealEls.forEach((el) => el.classList.add("reveal--visible"));
}

// Smooth scroll for internal nav links
document.addEventListener("click", (event) => {
  const target = event.target.closest('a[href^="#"]');
  if (!target) return;

  const href = target.getAttribute("href");
  const targetEl = document.querySelector(href);
  if (targetEl) {
    event.preventDefault();
    targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
