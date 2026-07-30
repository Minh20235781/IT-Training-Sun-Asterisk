function initSlider(sliderId) {
  const wrapper = document.getElementById(sliderId);
  if (!wrapper) return;

  const track = wrapper.querySelector(".slider-track");
  const items = wrapper.querySelectorAll(".slider-item");
  const prevBtn = wrapper.querySelector(".slider-arrow.prev");
  const nextBtn = wrapper.querySelector(".slider-arrow.next");

  if (!track || items.length === 0) return;

  let currentIndex = 0;

  // Lấy số lượng item hiển thị từ thuộc tính data-items trong HTML, 
  // nếu không có thì mặc định: Desktop = 3, Mobile = 1
  const getItemsPerView = () => {
    const dataItems = wrapper.getAttribute("data-items");
    if (dataItems) return parseInt(dataItems);
    return window.innerWidth >= 768 ? 3 : 1;
  };

  const updateSlider = () => {
    const itemsPerView = getItemsPerView();
    
    // Gán độ rộng chuẩn cho từng item dựa theo số lượng hiển thị
    items.forEach(item => {
      item.style.flex = `0 0 ${100 / itemsPerView}%`;
    });

    const maxIndex = Math.max(0, items.length - itemsPerView);
    currentIndex = Math.min(currentIndex, maxIndex);

    const offset = currentIndex * (100 / itemsPerView);
    track.style.transform = `translateX(-${offset}%)`;

    // Cập nhật trạng thái mờ của nút điều hướng
    if (prevBtn) {
      prevBtn.classList.toggle("opacity-40", currentIndex === 0);
      prevBtn.classList.toggle("pointer-events-none", currentIndex === 0);
    }
    if (nextBtn) {
      nextBtn.classList.toggle("opacity-40", currentIndex >= maxIndex);
      nextBtn.classList.toggle("pointer-events-none", currentIndex >= maxIndex);
    }
  };

  prevBtn?.addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateSlider();
  });

  nextBtn?.addEventListener("click", () => {
    const itemsPerView = getItemsPerView();
    const maxIndex = Math.max(0, items.length - itemsPerView);
    currentIndex = Math.min(maxIndex, currentIndex + 1);
    updateSlider();
  });

  // Lắng nghe sự kiện resize để update lại độ rộng
  window.addEventListener("resize", updateSlider);
  
  // Khởi tạo lần đầu
  updateSlider();
}

document.addEventListener("DOMContentLoaded", () => {
  initSlider("project-slider");
  initSlider("news-slider");
});