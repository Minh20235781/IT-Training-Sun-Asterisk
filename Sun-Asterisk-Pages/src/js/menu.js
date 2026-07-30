document.addEventListener("headerLoaded", () => {
  const menuBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      menuBtn.classList.toggle("active");
    });

    // Đóng menu khi bấm ra ngoài
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.remove("open");
        menuBtn.classList.remove("active");
      }
    });
  }

  // Toggle ngôn ngữ VI / EN (ảnh header có khung đỏ quanh "VI")
  const langButtons = document.querySelectorAll("[data-lang]");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      langButtons.forEach((b) => b.classList.remove("nav-link-active"));
      btn.classList.add("nav-link-active");
      const lang = btn.getAttribute("data-lang");
      console.log("Chuyển ngôn ngữ sang:", lang);
      // TODO: gắn logic đổi nội dung theo ngôn ngữ khi có bản dịch
    });
  });
});