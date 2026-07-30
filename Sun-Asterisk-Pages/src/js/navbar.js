document.addEventListener("headerLoaded", () => {
  const header = document.querySelector("header");
  if (!header) return;

  // Đổi bóng header khi cuộn xuống
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // gọi 1 lần lúc load để đúng trạng thái ban đầu

  // Gán active cho link tương ứng theo section đang cuộn tới
  const navLinks = header.querySelectorAll(".nav-link");

  const setActiveOnScroll = () => {
    const sections = document.querySelectorAll("main section[id]");
    let currentId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("nav-link-active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("nav-link-active");
      }
    });
  };

  window.addEventListener("scroll", setActiveOnScroll);
});