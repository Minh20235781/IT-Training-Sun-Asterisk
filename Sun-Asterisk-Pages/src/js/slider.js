function initSlider(sliderId) {
  const wrapper = document.getElementById(sliderId);
  if (!wrapper) return;

  const track = wrapper.querySelector(".slider-track");
  const items = wrapper.querySelectorAll(".slider-item");
  const prevBtn = wrapper.querySelector(".slider-arrow.prev");
  const nextBtn = wrapper.querySelector(".slider-arrow.next");

  if (!track || items.length === 0) return;

  let currentIndex = 0;

  // Lấy số lượng hiển thị từ thuộc tính data-items
  const getItemsPerView = () => {
    const dataItems = wrapper.getAttribute("data-items");
    if (dataItems) return parseInt(dataItems);
    return window.innerWidth >= 768 ? 3 : 1;
  };

  const updateSlider = () => {
    const itemsPerView = getItemsPerView();
    const maxIndex = Math.max(0, items.length - itemsPerView);
    
    // Gán width cho từng item
    items.forEach(item => {
      item.style.flex = `0 0 ${100 / itemsPerView}%`;
      item.style.width = `${100 / itemsPerView}%`;
    });

    // Cập nhật vị trí cuộn
    const offset = currentIndex * (100 / itemsPerView);
    track.style.transform = `translateX(-${offset}%)`;

    // Cập nhật độ mờ của nút điều hướng
    if (prevBtn) {
      prevBtn.style.opacity = currentIndex === 0 ? "0.3" : "1";
      prevBtn.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
    }
    if (nextBtn) {
      nextBtn.style.opacity = currentIndex >= maxIndex ? "0.3" : "1";
      nextBtn.style.pointerEvents = currentIndex >= maxIndex ? "none" : "auto";
    }
  };

  // Clone node để tránh bị lặp sự kiện click nếu initSlider bị gọi 2 lần
  if (prevBtn) {
    const newPrevBtn = prevBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    newPrevBtn.addEventListener("click", () => {
      currentIndex = Math.max(0, currentIndex - 1);
      updateSlider();
    });
  }

  if (nextBtn) {
    const newNextBtn = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    newNextBtn.addEventListener("click", () => {
      const maxIndex = Math.max(0, items.length - getItemsPerView());
      currentIndex = Math.min(maxIndex, currentIndex + 1);
      updateSlider();
    });
  }

  window.addEventListener("resize", updateSlider);
  updateSlider();
}

// BƯỚC QUYẾT ĐỊNH: Lắng nghe sự kiện từ main.js thay vì DOMContentLoaded
document.addEventListener("componentsLoaded", () => {
  console.log("Khởi chạy Slider sau khi HTML đã load xong!");
  initSlider("project-slider");
  
  // Bạn có thể gọi thêm các slider khác ở đây nếu có (VD: slider tin tức)
  // initSlider("news-slider"); 
});