# Algolia E-commerce (Mẫu)

Đây là repository demo một ứng dụng e-commerce front-end sử dụng dữ liệu mẫu được lấy/chuyển đổi từ Algolia. Mục tiêu: minh hoạ tìm kiếm/lọc/phan trang sản phẩm, kèm frontend React + một JSON API nhẹ để phát triển.

## Tổng quan

- Frontend: SPA React (Vite + TypeScript). Thư mục: [frontend](frontend)
- Dữ liệu phát triển: JSON server (db.json) được tạo từ file Algolia raw trong [data](data)

Ứng dụng minh họa các tính năng cơ bản: danh sách sản phẩm, bộ lọc theo category/brand, tìm kiếm, phân trang, và ví dụ tích hợp API.

## Cấu trúc chính

- [frontend](frontend): mã nguồn React, cấu hình Vite, TypeScript, scripts `dev`, `build`, `preview`.
- [data](data): dữ liệu mẫu, script chuyển đổi `transform.js`, `db.json` đầu ra, và `package.json` chạy `json-server`.

Tham khảo các file config:

- Frontend config: [frontend/tsconfig.json](frontend/tsconfig.json)
- Vite config: [frontend/vite.config.ts](frontend/vite.config.ts)
- Data scripts: [data/transform.js](data/transform.js)

## Yêu cầu cài đặt

- Node.js (LTS) và npm (hoặc yarn/pnpm).

## Khởi động nhanh (local development)

1. Cài dependencies cho `data` (chạy một lần nếu cần) và tạo `db.json`:

```bash
cd data
npm install
node transform.js    # chuyển đổi algolia-raw.json -> db.json
npm run start        # chạy json-server trên cổng 3001
```

2. Cài dependencies và chạy frontend:

```bash
cd frontend
npm install
npm run dev
```

Frontend mặc định dùng Vite (port 5173). Nếu port bận, Vite sẽ đề xuất cổng khác.

API backend (json-server) mặc định lắng nghe trên `http://localhost:3001` và cung cấp endpoint
`/products` (từ `data/db.json`). Vite cấu hình proxy `/api` → `http://localhost:3001` để tránh CORS khi dev.

**Demo (Live)**

- Live demo được deploy trên Vercel: [https://algolia-ecommerce-final.vercel.app/](https://algolia-ecommerce-final.vercel.app/)

## Scripts hữu ích

- Root: không có script root đặc biệt; làm việc trong từng package `frontend` hoặc `data`.
- [frontend/package.json](frontend/package.json):
  - `dev`: chạy vite dev server
  - `build`: chạy `tsc -b` rồi `vite build`
  - `preview`: preview build

- [data/package.json](data/package.json):
  - `start`: khởi chạy `json-server --watch db.json --port 3001`

## Environment & TypeScript notes

- Đã thêm `src/vite-env.d.ts` trong frontend để TypeScript nhận diện `import.meta.env` và định nghĩa Vite types.
- `tsconfig.node.json` đã include `types: ["node"]` để Vite/Node type hoạt động tốt khi dùng ESM trong `vite.config.ts`.

## Dữ liệu Algolia và chuyển đổi

- Nếu bạn có một export từ Algolia (file `algolia-raw.json` trong `data`), chạy `node transform.js` để tạo `db.json` phù hợp với frontend.
- `transform.js` thực hiện các bước chuẩn hoá: lấy `objectID` làm `id`, trích `category`, `brand`, `price`, `image`, `description`, v.v.

## Lưu ý khi phát triển

- Nếu trang trắng trên trình duyệt: mở DevTools → Console để xem lỗi runtime (điều này quan trọng hơn các lỗi type-check trong VS Code).
- Nếu gặp lỗi TypeScript liên quan tới CSS imports hoặc `import.meta.env`, đảm bảo file `src/vite-env.d.ts` tồn tại và `@types/node` được cài trong `frontend`.
- Nếu thay đổi cấu trúc path trong `tsconfig.json`, hãy dùng `"./src/*"` cho `paths` hoặc thiết lập `baseUrl` hợp lệ.

## Gợi ý cải tiến

- Thêm test cho components với React Testing Library.
- Dùng React Query hoặc SWR để tối ưu caching + background refetch cho API.
- Thử Next.js nếu cần SSR/SSG cho SEO.

## Contributing

- Mô hình đơn giản: fork → branch → PR. Giữ thay đổi nhỏ, kèm mô tả rõ ràng.

## License

- Mã nguồn demo — tuỳ bạn thêm license phù hợp (MIT, Apache-2.0,...).

---

Nếu bạn muốn, tôi có thể thêm hướng dẫn thiết lập Algolia (indexing), hoặc hướng dẫn chi tiết về cách tích hợp tìm kiếm thực tế (autocomplete, faceting), hoặc thêm badge/CI config.
