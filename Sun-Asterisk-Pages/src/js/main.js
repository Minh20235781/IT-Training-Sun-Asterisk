let hasInitialized = false;

async function loadComponent(id, path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Không tải được ${path} (status ${res.status})`);
    const html = await res.text();
    const target = document.getElementById(id);
    if (target) target.innerHTML = html;
  } catch (err) {
    console.error("[loadComponent]", err);
  }
}

async function initPage() {
  if (hasInitialized) {
    console.warn("[main.js] initPage() đã chạy trước đó, bỏ qua lần gọi lặp.");
    return;
  }
  hasInitialized = true;

  await loadComponent("header", "./src/components/header.html");
  document.dispatchEvent(new Event("headerLoaded"));

  await Promise.all([
    loadComponent("hero", "./src/components/hero.html"),
    loadComponent("service", "./src/components/service.html"),
    loadComponent("project", "./src/components/project.html"),
    loadComponent("career", "./src/components/career.html"),
    loadComponent("about", "./src/components/about.html"),
    loadComponent("news", "./src/components/news.html"),
    loadComponent("footer", "./src/components/footer.html"),
  ]);

  document.dispatchEvent(new Event("componentsLoaded"));
}

document.addEventListener("DOMContentLoaded", initPage);