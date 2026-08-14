# Algolia E-commerce Demo

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JSON Server](https://img.shields.io/badge/JSON_Server-333333?style=for-the-badge&logo=json&logoColor=white)](https://github.com/typicode/json-server)

Đây là repository demo một ứng dụng E-commerce Frontend sử dụng dữ liệu mẫu được lấy và chuẩn hóa từ Algolia. Dự án minh hoạ các tính năng cốt lõi của một trang thương mại điện tử như: tìm kiếm, bộ lọc động (facets), phân trang, và tích hợp API.

## Live Demo

Dự án đã được deploy và chạy thực tế tại:
**[Trải nghiệm Live Demo](https://algolia-ecommerce-final.vercel.app/)**

---

## Công nghệ sử dụng

* **Frontend:** React (SPA), Vite, TypeScript.
* **Backend (Mock API):** JSON Server.
* **Styling:** CSS thuần (BEM methodology) / SCSS (tùy chỉnh).
* **Data Fetching:** Axios.
* **Deployment:** Vercel (Frontend) & Render/Glitch (Backend).

---

## Cấu trúc thư mục

Dự án được thiết kế theo dạng Monorepo đơn giản với 2 thư mục chính độc lập:

```text
IT-Training-Sun-Asterisk/
│
├── data/                  # Backend (Mock API)
│   ├── algolia-raw.json   # Dữ liệu gốc xuất ra từ Algolia
│   ├── db.json            # Database chính sau khi đã được transform
│   ├── transform.js       # Script chuẩn hóa dữ liệu gốc sang db.json
│   ├── server.js          # File khởi chạy JSON Server (cho môi trường deploy)
│   └── package.json       # Chứa scripts chạy backend
│
└── frontend/              # Frontend (React + Vite)
    ├── src/
    │   ├── api/           # Cấu hình Axios và các hàm gọi API
    │   ├── components/    # Reusable UI components (ProductCard, FilterMenu,...)
    │   ├── hooks/         # Custom hooks (useProducts, useDebounce,...)
    │   ├── pages/         # Các trang chính (Home,...)
    │   ├── types/         # TypeScript interfaces/types
    │   ├── utils/         # Constants, helpers,...
    │   └── vite-env.d.ts  # Khai báo môi trường cho Vite
    ├── index.html         # Entry point HTML
    ├── vite.config.ts     # Cấu hình Vite (bao gồm proxy config)
    ├── tsconfig.json      # Cấu hình TypeScript
    └── package.json       # Chứa dependencies và scripts chạy frontend
```

## Hướng dẫn cài đặt & Khởi chạy (Local Development)

Yêu cầu môi trường: Cài đặt sẵn **Node.js (LTS)** và **npm** (hoặc yarn/pnpm).

### Bước 1: Clone dự án

```bash
git clone https://github.com/TEN_USER/IT-Training-Sun-Asterisk.git
cd IT-Training-Sun-Asterisk
```

### Bước 2: Thiết lập & Khởi chạy Backend (`data`)

Mở terminal thứ nhất và chạy các lệnh sau:

```bash
cd data
npm install

# (Tùy chọn) Chạy lệnh này nếu bạn muốn tạo lại file db.json từ dữ liệu thô
node transform.js

# Khởi chạy JSON Server trên http://localhost:3001
npm start
```

*Lưu ý: API sẽ lắng nghe tại `http://localhost:3001/products`.*

### Bước 3: Thiết lập & Khởi chạy Frontend (`frontend`)

Mở terminal thứ hai và chạy các lệnh sau:

```bash
cd frontend
npm install

# Khởi chạy Vite Dev Server
npm run dev
```

Vite sẽ khởi chạy dự án tại `http://localhost:5173`.
*(Lưu ý: Vite đã được cấu hình proxy tự động chuyển tiếp các request từ `/api` sang `http://localhost:3001` để tránh lỗi CORS khi dev).* 

## Các Script hữu ích

### Thư mục `frontend/`

- `npm run dev`: Khởi chạy Vite dev server.
- `npm run build`: Kiểm tra lỗi TypeScript (`tsc -b`) và đóng gói dự án vào thư mục `dist`.
- `npm run preview`: Xem trước bản build trên local.

### Thư mục `data/`

- `npm start`: Khởi chạy JSON server kết nối với `db.json`.

## Dữ liệu Algolia & Quá trình chuyển đổi (Transformation)

Để mô phỏng môi trường thực tế, dữ liệu được export từ file `algolia-raw.json`. Script `transform.js` đóng vai trò quan trọng trong việc chuẩn hóa dữ liệu này để Frontend dễ dàng tiêu thụ:

- Đổi `objectID` thành `id`.
- Trích xuất và làm phẳng các trường dữ liệu như `category`, `brand`, `price`, `image`, `description`.
- Tính toán lại các cấu trúc lồng nhau phức tạp của Algolia thành dạng mảng JSON đơn giản.

## Lưu ý khi phát triển (Troubleshooting)

1. **Lỗi trang trắng:** Luôn mở DevTools (F12) -> Tab **Console** để kiểm tra lỗi Runtime. Điều này quan trọng hơn các lỗi cảnh báo đỏ của TypeScript trong VS Code.
2. **Lỗi TypeScript với biến môi trường:** Nếu gặp lỗi liên quan đến `import.meta.env`, hãy kiểm tra file `src/vite-env.d.ts` xem đã khai báo đủ type cho Vite chưa và đảm bảo `@types/node` đã được cài đặt.
3. **Lỗi Import Paths:** Dự án sử dụng alias `@/` trỏ vào thư mục `src`. Nếu IDE báo lỗi không tìm thấy file, hãy kiểm tra lại mục `paths` trong `tsconfig.json`.

## Định hướng cải tiến (Roadmap)

- [ ] Tích hợp **React Testing Library** và Jest/Vitest để viết Unit Test cho các Components.
- [ ] Sử dụng **React Query** (TanStack Query) hoặc **SWR** để tối ưu hóa quá trình caching, background refetch và quản lý loading state gọn gàng hơn.
- [ ] Chuyển đổi (Migration) sang **Next.js** nếu dự án có yêu cầu cao về SEO (SSR/SSG).
- [ ] Cấu hình CI/CD tự động bằng GitHub Actions (tự động chạy linter, tester trước khi merge).

## Đóng góp (Contributing)

Dự án tuân theo mô hình đóng góp cơ bản:

1. **Fork** repository.
2. Tạo **Branch** mới cho tính năng hoặc bản vá lỗi (`git checkout -b feature/AmazingFeature`).
3. **Commit** thay đổi (`git commit -m 'Add some AmazingFeature'`).
4. **Push** lên branch (`git push origin feature/AmazingFeature`).
5. Tạo **Pull Request (PR)**.

Vui lòng giữ các thay đổi nhỏ gọn và kèm theo mô tả rõ ràng.

## Giấy phép (License)

Dự án này được phân phối dưới giấy phép **MIT License**. Xem chi tiết tại file `LICENSE`.
