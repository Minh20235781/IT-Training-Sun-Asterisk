function initNavbar() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.querySelector('#menu-icon path');

  if (!menuToggle || !mobileMenu || !menuIcon) return;

  // Xóa event cũ nếu load lại component
  const newToggle = menuToggle.cloneNode(true);
  menuToggle.parentNode.replaceChild(newToggle, menuToggle);

  let isMenuOpen = false;

  newToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    const currentIcon = document.querySelector('#menu-icon path');

    if (isMenuOpen) {
      // Mở menu
      mobileMenu.classList.remove('hidden');
      // Đổi thành icon dấu X
      if (currentIcon) currentIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    } else {
      // Đóng menu
      mobileMenu.classList.add('hidden');
      // Đổi về icon 3 gạch
      if (currentIcon) currentIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    }
  });

  // Tùy chọn: Tự động đóng menu mobile khi bấm vào một link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      isMenuOpen = false;
      mobileMenu.classList.add('hidden');
      const currentIcon = document.querySelector('#menu-icon path');
      if (currentIcon) currentIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    });
  });
}

document.addEventListener("componentsLoaded", () => {
  initNavbar();
});