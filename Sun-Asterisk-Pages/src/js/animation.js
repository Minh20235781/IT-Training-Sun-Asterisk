document.addEventListener("componentsLoaded", () => {
  initFadeInOnScroll();
  initCounterAnimation();
});

/* ---- Fade-in khi phần tử xuất hiện trong viewport ---- */
function initFadeInOnScroll() {
  const elements = document.querySelectorAll(".fade-in-up");
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ---- Đếm số tăng dần cho "200++ Đối tác", "300++ Dịch vụ" ---- */
function initCounterAnimation() {
  const counters = document.querySelectorAll("[data-counter]");
  if (counters.length === 0) return;

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute("data-counter"), 10);
    const duration = 1200; // ms
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}