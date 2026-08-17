# Tổng hợp NextJS Toàn Tập

## I. Nextjs Fundamentals

### 1. Nextjs Fundamentals
**Next.js:** Một framework để xây dựng các ứng dụng web hoàn chỉnh.
So với React.js, Next.js có Server-side Rendering (SSR - Kết xuất phía máy chủ). Với SSR:
* Máy chủ (Server) tạo ra toàn bộ HTML.
* Trình duyệt (Browser) hiển thị nội dung ngay lập tức.

**Ưu điểm (Pros):** Tối ưu hóa công cụ tìm kiếm (SEO) tuyệt vời, thời gian hiển thị nội dung đầu tiên (First Contentful Paint) nhanh hơn.

**Tại sao nên dùng Next.js? (Why Next.js?)**
* **Kết xuất lai (Hybrid Rendering):** Hỗ trợ SSR (Server-Side Rendering), SSG (Static Site Generation), và CSR (Client-Side Rendering).
* **Định tuyến dựa trên hệ thống tệp (File-system Routing):** Các thư mục sẽ định nghĩa các đường dẫn/route (không cần phải thiết lập react-router-dom).
* **Các route API (API routes):** Có thể xây dựng các endpoint Backend ngay bên trong cùng một dự án.
* **Tối ưu hóa tự động (Automatic Optimization):** Tự động tối ưu hóa Hình ảnh (Images), Phông chữ (Fonts), và các tệp kịch bản (Scripts).

### 2. Thiết lập dự án Next.js đầu tiên
Để bắt đầu một dự án Next.js mới, chúng ta sử dụng công cụ dòng lệnh `create-next-app`. Công cụ này tự động thiết lập mọi thứ bạn cần, bao gồm cả cấu trúc thư mục App Router mặc định.

**Điều kiện tiên quyết:**
* Node.js phiên bản 18.17 trở lên.

Mở terminal của bạn và chạy lệnh sau:
```bash
npx create-next-app@latest
```
Bạn sẽ thấy các lời nhắc tương tự như thế này. Bạn có thể chấp nhận các giá trị mặc định bằng cách nhấn Enter.
```text
? What is your project named? ... my-next-app
? Would you like to use TypeScript? ... Yes
? Would you like to use ESLint? ... Yes
? Would you like to use Tailwind CSS? ... Yes
? Would you like to use the src/ directory? ... No
? Would you like to use App Router? (recommended) ... Yes
? Would you like to customize the default import alias? ... No
```
Sau khi quá trình cài đặt hoàn tất, hãy điều hướng vào thư mục dự án của bạn và khởi động máy chủ phát triển:
```bash
cd my-next-app
npm run dev
```
Bây giờ, hãy mở trình duyệt của bạn và truy cập `http://localhost:3000` để xem trang chủ mới của bạn.

### 3. Hiểu về cấu trúc thư mục `app/`
App Router giới thiệu một mô hình định tuyến dựa trên hệ thống tệp (file-system-based routing) mới bên trong thư mục `app`. Mỗi thư mục bên trong `app` đại diện cho một phân đoạn URL (URL segment). Giao diện người dùng (UI) cho một route được định nghĩa bằng các tệp đặc biệt như `page.tsx` và `layout.tsx`.

**Cấu trúc thư mục ví dụ:**
```text
app/
├── layout.tsx       # Giao diện gốc (ROOT layout), được áp dụng cho toàn bộ ứng dụng.
├── page.tsx         # Giao diện cho trang chủ (route /).
├── globals.css      # Các style CSS toàn cục.
└── dashboard/       # Định nghĩa route /dashboard.
    ├── layout.tsx   # Giao diện cụ thể cho /dashboard và các trang con của nó.
    ├── page.tsx     # Giao diện cho route /dashboard.
    └── settings/    # Định nghĩa route /dashboard/settings.
        └── page.tsx # Giao diện cho route /dashboard/settings.
```

**Các quy ước tệp đặc biệt:**
* `layout.tsx`: Định nghĩa giao diện (UI) dùng chung bao bọc nhiều trang.
* `page.tsx`: Giao diện chính, duy nhất cho một route cụ thể.
* `loading.tsx`: Giao diện hiển thị trong khi dữ liệu của trang đang tải (sử dụng React Suspense).
* `error.tsx`: Giao diện hiển thị khi có lỗi xảy ra bên trong một route.
* `route.ts`: Được sử dụng để tạo các endpoint API.
* `not-found.tsx`: Định nghĩa giao diện hiển thị khi không tìm thấy route.
* `metadata.ts`: Được sử dụng để quản lý siêu dữ liệu (metadata) của trang phục vụ cho SEO, chẳng hạn như tiêu đề, mô tả, ảnh thu nhỏ, v.v.
* `template.tsx`: Một component bao bọc các layout và trang con.

### 4. Layout và Định tuyến lồng nhau
Layout (Bố cục) là các component nhận một prop `children` và hiển thị nó. Chúng cho phép bạn tạo các thành phần giao diện dùng chung (như header, footer và sidebar) mà không bị kết xuất lại (re-render) khi người dùng điều hướng giữa các trang con.

Khi bạn tạo một tệp `layout.tsx` trong một thư mục, nó sẽ tự động bao bọc tất cả các tệp `page.tsx` và các layout con bên trong thư mục đó. Các layout được lồng vào nhau, tạo thành một hệ thống phân cấp component (component hierarchy).

**Ví dụ (Example):**
1. **Root Layout - Layout gốc (`app/layout.tsx`)**
Đây là layout cấp cao nhất (top-level layout). Nó là tệp bắt buộc phải có và phải chứa các thẻ `<html>` và `<body>`.
2. **Dashboard Layout - Layout trang Dashboard (`app/dashboard/layout.tsx`)**
Layout này chỉ được áp dụng cho các trang (pages) nằm bên trong route `/dashboard`.

### 5. Server và Client Components
App Router giới thiệu hai loại component: Server và Client.

**Server Components (Mặc định):**
* Chỉ chạy trên máy chủ (server).
* Không thể sử dụng các hook (như `useState`, `useEffect`) hoặc các API chỉ dành cho trình duyệt.
* Lý tưởng cho việc truy cập trực tiếp vào các tài nguyên backend (cơ sở dữ liệu, API nội bộ) và làm giảm lượng JavaScript gửi đến client (trình duyệt của người dùng).
* Tất cả các component nằm trong thư mục `app` đều là Server Components theo mặc định.

**Client Components:**
* Để biến một component thành Client Component, bạn phải thêm chỉ thị `"use client";` ở dòng trên cùng của tệp.
* Chúng được kết xuất (render) trên máy chủ (SSR) và sau đó được "hydrat hóa" (hydrated) trên client để có thể tương tác được.
* Chúng có thể sử dụng các hook, quản lý trạng thái (state), và xử lý các sự kiện từ người dùng (như `onClick`, `onChange`, v.v.).

**Ví dụ (Example):**
1. **Server Component dùng để lấy dữ liệu (`app/posts/page.tsx`)**
Component này sử dụng `async/await` để gọi và lấy dữ liệu trực tiếp ở phía máy chủ.

2. **Client Component tương tác (`components/Counter.tsx`)**
Component này sử dụng hook `useState` và sự kiện `onClick`, vì vậy nó bắt buộc phải là một Client Component.

### 6. Tổng kết
* Giới thiệu các khái niệm cơ bản và quy trình thiết lập dự án Next.js.
* Giải thích cấu trúc và các quy ước của thư mục `app/`.
* Mô tả về layout, định tuyến lồng nhau (nested routing) và lợi ích của chúng.
* Phân biệt giữa Server Component và Client Component.
* Cung cấp các ví dụ về cách sử dụng component.

---

## II. Advanced Routing Techniques

### 1. Tạo Route động
Thay vì tạo ra vô số các file riêng lẻ, bạn chỉ cần tạo một template (mẫu giao diện). Trong App Router, bạn chỉ cần bọc tên thư mục trong dấu ngoặc vuông, ví dụ như `[foldername]`. Bất cứ giá trị nào người dùng nhập vào URL cho phần đó, bạn sẽ nhận được nó dưới dạng prop `params` trong component.

**Sơ đồ cấu trúc (Structure Diagram)** - Cấu trúc thư mục để tạo các trang bài viết blog động:
```text
app/
└── blog/
    └── [slug]/         <- Thư mục động (Dynamic folder)
        └── page.tsx    <- Template cho mỗi bài viết (Template for each post)
```

**Ví dụ (Example):** Component của trang (page component) sẽ nhận được params chứa giá trị slug từ URL.
```tsx
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  // params sẽ mang giá trị { slug: 'hello-world' } đối với URL /blog/hello-world
  return (
    <div>
      <h1>Post: {params.slug}</h1>
      {/* Hiển thị nội dung bài viết tại đây */}
    </div>
  )
}
```

### 2. Route lồng nhau và Layout
**Ví dụ (Example):**
Layout người dùng (User Layout) (`app/users/[userId]/layout.tsx`)
```tsx
export default function UserProfileLayout({ children, params }: { children: React.ReactNode; params: { userId: string }; }) {
  return (
    <section>
      <aside>
        <h2>User Profile {params.userId}</h2>
      </aside>
      <main>{children}</main>
    </section>
  );
}
```
Trang Cài đặt (Settings Page) (`app/users/[userId]/settings/page.tsx`)
```tsx
export default function UserSettingsPage({ params }: { params: { userId: string } }) {
  return (
    <div>
      <h3>Settings for user {params.userId}</h3>
    </div>
  );
}
```

### 3. Route Catch-all và Route Catch-all tùy chọn
* **Catch-all Routes (Route "bắt" tất cả):** Thêm ba dấu chấm bên trong dấu ngoặc vuông, ví dụ như `[...folderName]`, và nó sẽ "gom" tất cả mọi thứ đi theo sau nó.
* **Optional Catch-all Routes (Route Catch-all tùy chọn):** Sử dụng hai cặp dấu ngoặc vuông, ví dụ như `[[...folderName]]`. Hoạt động cho cả trang chính mà không có bất kỳ thành phần URL bổ sung nào.

**Ví dụ:**
1. **Catch-all Route (`[...slug]`)**
   * Cấu trúc: `app/docs/[...slug]/page.tsx`
   * `/docs/getting-started` -> params: `{ slug: ['getting-started'] }`
   * `/docs/routing/dynamic-routes` -> params: `{ slug: ['routing', 'dynamic-routes'] }`
2. **Optional Catch-all Route (`[[...filters]]`)**
   * Cấu trúc: `app/shop/[[...filters]]/page.tsx`
   * `/shop` -> params: `{}`
   * `/shop/shoes/red` -> params: `{ filters: ['shoes', 'red'] }`

### 4. Sử dụng component `<Link>` để điều hướng
Di chuyển giữa các trang bằng component `<Link>`. Trang sẽ thay đổi mà không gặp phải quá trình tải lại toàn bộ trang (full-page reload). Next.js tự động tải trước (pre-loads) trang tiếp theo ở chế độ nền.
```tsx
import Link from 'next/link'

export default function Header() {
  const blogPostSlug = 'my-first-post'
  return (
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href={`/blog/${blogPostSlug}`}>First Post</Link>
    </nav>
  )
}
```

### 5. Điều hướng bằng Code
Hook `useRouter()` sẽ là người bạn thân thiết nhất của bạn ở đây.
```tsx
// components/LoginButton.tsx
'use client'; // Bắt buộc phải là một Client Component
import { useRouter } from 'next/navigation';

export default function LoginButton() {
  const router = useRouter();
  function handleLogin() {
    // ... (Xử lý logic đăng nhập tại đây)
    router.push('/dashboard');
  }
  return <button onClick={handleLogin}>Login</button>;
}
```

### 6. Tổng kết
* Route động (Dynamic routes) tạo ra nhiều trang từ một template duy nhất.
* Route lồng nhau và layout (Nested routes and layouts) cho phép dùng chung giao diện.
* Catch-all routes nắm bắt (capture) nhiều thành phần của URL.
* Component `<Link>` cung cấp khả năng điều hướng nhanh chóng.
* Điều hướng bằng code (Programmatic navigation) chuyển hướng người dùng sau khi họ thực hiện hành động.

---

## III. Data Fetching in Next.js

### 1. Các chiến lược lấy dữ liệu trong Next.js
Next.js giới thiệu Server Components, cho phép bạn lấy dữ liệu trực tiếp trên server trước khi render. Việc lấy dữ liệu hiệu quả đòi hỏi phải phân biệt được giữa:
* **Dữ liệu tĩnh (Static Data):** Được lấy một lần tại thời điểm build (build time) và được lưu trữ bộ nhớ đệm toàn cục.
* **Dữ liệu động (Dynamic Data):** Được lấy ở mỗi yêu cầu (request) riêng biệt.

Next.js kiểm soát hành vi này thông qua các tùy chọn của hàm fetch:
* Dùng `{ cache: 'force-cache' }` cho dữ liệu tĩnh.
* Dùng `{ cache: 'no-store' }` cho dữ liệu động.

### 2. Lấy dữ liệu với Server Components (Async/Await)
Tất cả các components đều là Server Components theo mặc định, cho phép lấy dữ liệu trực tiếp bằng `async/await` ngay bên trong component.

### 3. Tạo trang tĩnh với `generateStaticParams`
Static Site Generation (SSG - Tạo trang tĩnh) cho phép bạn kết xuất trước (pre-render) các trang tại thời điểm build. Đối với các định tuyến động (`[slug]`), hàm `generateStaticParams` sẽ trả về một mảng các đối tượng chứa tham số (params), và Next.js sẽ tạo một trang HTML tĩnh cho mỗi đối tượng đó.

### 4. Kết xuất phía máy chủ và Giao diện người dùng dạng luồng (Streaming UI)
Kết xuất phía máy chủ (SSR) là hành vi mặc định cho các trang động. Với Streaming UI, thay vì bắt người dùng phải đợi toàn bộ trang kết xuất xong, Next.js ngay lập tức gửi bộ khung UI tĩnh cùng với trạng thái tải (loading state) thông qua tệp `loading.tsx` và React Suspense. Khi dữ liệu được lấy xong, nội dung động sẽ được "truyền" (streamed) vào để thay thế trạng thái tải.

### 5. Lấy dữ liệu phía Client
Sử dụng các React hooks như `useEffect` và `useState`, hoặc sử dụng các thư viện như SWR hay React Query. Các components sử dụng phương pháp này bắt buộc phải là Client Component (khai báo `"use client";`).

### 6. Tạo và sử dụng định tuyến API
Tạo các điểm cuối (endpoints) API bằng cách tạo tệp `route.ts` bên trong một thư mục định tuyến (route folder). Bạn có thể xuất (export) các hàm bất đồng bộ được đặt tên theo các phương thức HTTP (GET, POST, PUT, DELETE).

### 7. Tổng kết
* Server Components sử dụng async/await để lấy dữ liệu.
* `generateStaticParams` cho phép tạo trang tĩnh.
* SSR cung cấp giao diện người dùng dạng luồng (streaming UI).
* Lấy dữ liệu phía máy khách sử dụng các hooks như SWR.
* API Routes cho phép tạo các điểm cuối cho backend.

---

## IV. Performance Optimization Techniques

### 1. Tối ưu hóa Hình ảnh với Thành phần `<Image>`
Thành phần `<Image>` của Next.js (`next/image`) tự động thực hiện:
* **Thay đổi kích thước (Resizing):** Tạo các phiên bản nhỏ hơn cho các màn hình khác nhau.
* **Tối ưu hóa Định dạng (Format Optimization):** Chuyển đổi sang WebP/AVIF.
* **Tải lười (Lazy Loading):** Tải hình ảnh khi chúng được cuộn vào viewport.
* **Ngăn chặn Sự thay đổi Bố cục Tích lũy (CLS):** Ngăn chặn việc nội dung bị "nhảy" đột ngột.

### 2. Tách mã và tải song song
* **Automatic Code Splitting:** Mỗi tệp `page.tsx` được biên dịch thành một "gói" JavaScript riêng biệt. Người dùng chỉ tải mã cần thiết cho trang đó.
* **Parallel Route Loading:** Next.js sẽ tải tất cả các tệp `layout.tsx` và `page.tsx` cần thiết một cách song song.

### 3. React Suspense và Lazy Loading với Giao diện chờ
Next.js tích hợp sâu với Suspense để tạo ra trải nghiệm Truyền phát (Streaming) thông qua tệp `loading.tsx`.

### 4. Các chiến lược lưu bộ nhớ đệm và ISR
* **Static Fetch (Mặc định):** `fetch('...')` lưu vào bộ nhớ đệm vô thời hạn.
* **No-cache Fetch:** `fetch('...', { cache: 'no-store' })` luôn lấy dữ liệu mới.
* **Incremental Static Regeneration (ISR):** `fetch('...', { next: { revalidate: 60 } })` lưu đệm trong một khoảng thời gian, sau đó tự động tái xác thực ở chế độ nền.

### 5. Theo dõi và Cải thiện Core Web Vitals
* **LCP (Largest Contentful Paint):** Cải thiện bằng component `<Image>`.
* **INP (Interaction to Next Paint):** Cải thiện bằng tính năng tách mã (code splitting).
* **CLS (Cumulative Layout Shift):** Cải thiện bằng tự động căn chỉnh kích thước khung cho hình ảnh.
(Tích hợp `@vercel/analytics` vào `app/layout.tsx` để theo dõi).

### 6. Tổng kết
* Tối ưu hóa hình ảnh là vô cùng quan trọng.
* Next.js tự động tách mã và tải song song.
* React Suspense nâng cao trải nghiệm người dùng qua giao diện chờ.
* Các chiến lược bộ nhớ đệm bao gồm: tĩnh, no-cache và ISR.
* Core Web Vitals giúp đo lường hiệu suất.

---

## V. Styling and CSS in Next.js

### 1. Sử dụng CSS Modules
Tự động tạo ra các tên class độc nhất, giúp tránh xung đột tên. Đặt tên file theo quy ước `[tên].module.css`.

### 2. Tích hợp Sass/SCSS
Sass/SCSS giúp mở rộng CSS với Biến (Variables), Lồng nhau (Nesting), Mixins.
Cài đặt: `npm install sass`

### 3. Styled-components với Server Components
Thư viện CSS-in-JS. Để dùng trong App Router:
* Mọi component dùng styled-components BẮT BUỘC phải là Client Components (`'use client'`).
* Cần tạo Style Registry (`StyledComponentsRegistry`) để thu thập style và chèn vào `<head>`.

### 4. Tailwind CSS trong App Router
Framework theo hướng tiện ích. Cài đặt bằng `tailwindcss`, `postcss`, `autoprefixer`.
Cấu hình trong `tailwind.config.js` để quét các file trong App Router, thêm màu/spacing tùy chỉnh.
Thêm directive (`@tailwind base; @tailwind components; @tailwind utilities;`) vào `globals.css`.

### 5. Tổng kết
* CSS Modules: Phạm vi cục bộ cho từng component.
* Sass/SCSS: Tính năng nâng cao như biến và lồng nhau.
* Styled-components: CSS-in-JS (cần Registry).
* Tailwind CSS: Tiếp cận hướng tiện ích phát triển giao diện siêu nhanh.

---

## VI. State Management in Next.js Applications

### 1. Những thách thức trong Next.js
* **Server Components:** Chạy trên server, stateless, không thể dùng `useState/useEffect`.
* **Client Components:** Chạy trên client (`use client`), dùng được hooks.
Tất cả các thư viện quản lý trạng thái (Context, Redux, Zustand) đều phải được sử dụng bên trong Client Components.

### 2. React Context & Server Components
Lý tưởng cho các trạng thái ít bị thay đổi (theme, ngôn ngữ).
Context Provider BẮT BUỘC phải đặt trong Client Component.

### 3. Redux Toolkit & App Router
Quản lý trạng thái tập trung. Tương tự như Context, Provider của Redux phải được đặt trong Client Component (`StoreProvider`).
Cấu trúc: `RootLayout` -> `StoreProvider` (Client) -> Các Component (Server/Client).

### 4. Recoil & Zustand
Zustand: Trạng thái lưu trữ ngoài React, truy cập qua hooks, không cần bọc Provider, rất nhẹ.
Recoil: Dựa trên 'atoms' và 'selectors', tối ưu việc render lại.

### 5. Lưu trữ trạng thái (Persist State) & Hydration
Sử dụng middleware `persist` trong Zustand lưu state vào `localStorage`.
**Xử lý Hydration:** Truyền trạng thái khởi tạo từ Server Component xuống Client Component thông qua props để khởi tạo state, tránh lỗi "Hydration Mismatch".

### 6. Tổng kết
* Bắt đầu đơn giản: Dùng `useState` hoặc React Context.
* Mở rộng: Dùng Zustand (đơn giản) hoặc Redux Toolkit (phức tạp).
* Luôn đặt các Provider bên trong Client Component.

---

## VII. Authentication & Authorization

### 1. Tổng quan
* **Xác thực (Authentication):** "Bạn là ai?" (Đăng nhập).
* **Phân quyền (Authorization):** "Bạn được phép làm những gì?" (Kiểm soát quyền truy cập).

### 2. Cài đặt NextAuth.js trong App Router
Giải pháp xác thực toàn diện, hỗ trợ nhiều Providers (Google, GitHub, Credentials). Tự động quản lý session và cookie bảo mật.

### 3. Tính năng Xác thực tùy chỉnh với Server Actions
Một form gọi Server Action -> Kiểm tra DB & băm mật khẩu -> Tạo phiên làm việc (iron-session) -> Lưu vào cookie bảo mật (httpOnly) -> Chuyển hướng.

### 4. Triển khai Xác thực JWT & Bảo mật API
JWT (JSON Web Token) dùng để bảo vệ API Routes. Client gửi JWT trong header (`Authorization: Bearer <token>`). API xác minh chữ ký và trả về lỗi 401 nếu không hợp lệ.

### 5. Kiểm soát truy cập dựa trên vai trò (RBAC)
Sử dụng **Middleware** (`middleware.ts`) như "người gác cổng" để kiểm tra session và vai trò của người dùng (role), sau đó tự động chuyển hướng nếu người dùng không có quyền truy cập.

### 6. Tổng kết
* NextAuth.js để quản lý đăng nhập dễ dàng.
* Custom Auth dùng Server Actions & Cookie khi cần kiểm soát nội bộ.
* JWT cho API Route Handlers.
* Middleware xử lý RBAC hiệu quả trước khi trang kịp render.

---

## VIII. Testing Next.js Application

### 1. Kim tự tháp Kiểm thử
1. **Unit Tests (Nhiều nhất):** Kiểm thử các hàm/component độc lập. Tốc độ nhanh (Jest, React Testing Library).
2. **Integration Tests (Vừa phải):** Kiểm thử sự tương tác giữa nhiều đơn vị (form + hiển thị thông báo).
3. **E2E Tests (Ít nhất):** Kiểm thử toàn bộ luồng ứng dụng từ đầu đến cuối trên trình duyệt thực (Cypress).

### 2. Kiểm thử Đơn vị và Tích hợp với Jest & RTL
* Unit Test: Render một component, mô phỏng thao tác, xác nhận kết quả.
* Integration Test: Render một trang chứa nhiều component, giả lập người dùng, kiểm tra trạng thái cuối.

### 3. Kiểm thử E2E với Cypress
Mô phỏng người dùng thực tế: Mở trình duyệt -> Truy cập trang -> Click/Type -> Xác nhận nội dung.

### 4. Kiểm thử API Routes và Server Actions
Dùng Jest và `node-mocks-http` để gọi trực tiếp các handler của API Route, cấp request giả và xác nhận response giả. Gọi các hàm Server Actions trực tiếp trong bài test.

---

## IX. Deploying and Hosting Next.js Applications

### 1. Triển khai lên Vercel
Không cần cấu hình, tự động build & tối ưu hóa, tích hợp Git liền mạch.
Push code -> Vercel tự lấy mã mới -> Chạy `next build` -> Triển khai lên Global CDN.

### 2. CI/CD với Netlify và các nền tảng khác
CI/CD tự động hóa việc build, test và triển khai.
Cấu hình Netlify thông qua tệp `netlify.toml` (Lệnh build: `next build`, Publish dir: `.next`).

### 3. Đóng gói ứng dụng bằng Docker
Sử dụng Dockerfile chia làm nhiều giai đoạn (Multi-stage build):
1. Giai đoạn Builder: Cài đặt dependencies và chạy `npm run build`.
2. Giai đoạn Runner (Production): Chỉ copy `.next` và `node_modules` cần thiết để giảm nhẹ Image, sau đó chạy ứng dụng.

### 4. Serverless và Edge Functions
* **Serverless:** Tự động mở rộng tài nguyên (Route Handlers).
* **Edge Functions:** Triển khai trên CDN toàn cầu (CDN Edge nodes) để giảm độ trễ tối đa (Middleware là một ví dụ).

---

## X. Scalability Patterns and Best Practices

### 1. Tổ chức mã nguồn: Cấu trúc thư mục theo Module
Các tệp liên quan đến một tính năng nên được đặt cùng vị trí (co-located) để dễ bảo trì. (Ví dụ: `app/products/`, `app/products/_components`).

### 2. Tính tái sử dụng: Layouts và Templates
* **Layouts:** Bố cục không bị render lại (re-render) khi điều hướng (Tốt cho Navbar, Sidebar).
* **Templates:** Tạo phiên bản mới mỗi lần điều hướng (Tốt khi cần chạy lại `useEffect`).

### 3. Kiến trúc Microservices và API Gateways
Chia nhỏ monolith thành Microservices. API Gateway đóng vai trò làm điểm vào (entry point) duy nhất để xác thực, định tuyến.

### 4. Hiệu suất: CDN và Chiến lược Bộ nhớ đệm
Phân phối tài nguyên tĩnh qua Edge Cache / CDN. Cache kết quả query DB trên Server.

### 5. Cơ sở dữ liệu: Các kỹ thuật mở rộng
* **Bản sao đọc (Read Replicas):** Chuyển traffic ĐỌC sang các bản sao.
* **Phân mảnh (Sharding):** Chia nhỏ dữ liệu theo các phân mảnh vật lý.
* **Nhóm kết nối (Connection Pooling):** Tái sử dụng kết nối DB để tránh quá tải.

---

## XI. Internationalization and Localization (i18n)

### 1. Cài đặt i18n
* Sử dụng route động `[lang]` cho các trang.
* Dùng `middleware.ts` để phát hiện ngôn ngữ ưu tiên (từ `Accept-Language` header) và tự động redirect.

### 2. Quản lý nội dung và RTL
* Lưu trữ chuỗi văn bản vào tệp JSON và dùng Dynamic Import (import động) để tải đúng ngôn ngữ.
* Hỗ trợ Layout từ phải sang trái (RTL) cho ngôn ngữ như tiếng Ả Rập bằng cách set thuộc tính `dir="rtl"` ở thẻ `<html>` và dùng CSS Logical Properties.

### 3. Chuyển đổi ngôn ngữ
Dùng `usePathname` để tạo các liên kết thay đổi `lang` trực tiếp trên URL.

---

## XII. Redux With Next.js (App Router)

### 1. Cấu hình Store sử dụng Redux Toolkit
Dùng cho state toàn cục phức tạp. Cài đặt `@reduxjs/toolkit` và `react-redux`.
Dùng `configureStore` và tạo các Slices. Dùng `createAsyncThunk` để gọi API bất đồng bộ.

### 2. Tích hợp Provider
Bọc ứng dụng bằng một Client Component (ví dụ: `StoreProvider`) nằm trong `app/layout.tsx`.

### 3. Server Components và Redux
Server Component lấy dữ liệu ban đầu -> truyền xuống Client Component qua props -> Client Component dispatch vào Redux store.

### 4. Server Actions
Client Component gọi Server Action -> nhận kết quả từ Server -> dispatch kết quả đó vào Redux store.

---

## XIII. SEO Optimization for Next.js

### 1. Quản lý Metadata
Dùng object `metadata` hoặc hàm `generateMetadata` trong `layout.tsx`/`page.tsx`. Metadata được kết xuất phía máy chủ, đảm bảo Bot thu thập được dễ dàng.

### 2. Tạo Sitemap Động
Tạo tệp `sitemap.ts` xuất mảng URL để giúp Google lập chỉ mục hiệu quả.

### 3. Dữ liệu có cấu trúc (JSON-LD)
Nhúng mã JSON-LD bằng thẻ `<script type="application/ld+json">` để hiển thị các Rich Snippets trên kết quả tìm kiếm.

---

## XIV. Performance & Optimization (Chi tiết)

### 1. Phân tách mã & Import động
Dùng `next/dynamic` để lazy load các component nặng, giảm kích thước bundle ban đầu.

### 2. Tối ưu hóa Hình ảnh & Phông chữ
* `<Image>`: Tự động đổi kích thước, chuyển sang WebP, tránh CLS. Ưu tiên thuộc tính `priority` cho hình ảnh chính (LCP).
* `next/font`: Cài font Google ở chế độ tự lưu trữ (self-hosted), không gây xê dịch bố cục.

### 3. Bộ nhớ đệm fetch
* Cache nhiều lớp (Data Cache, Full Route Cache, CDN Edge Cache).
* Sử dụng linh hoạt `force-cache`, `no-store`, hoặc `next: { revalidate: x }` (ISR).

### 4. Phân tích Bundle
Dùng `@next/bundle-analyzer` để trực quan hóa và loại bỏ các phần mã phình to không cần thiết.

---

## XV. Advanced Next.js Features and Patterns

### 1. Middleware cho Custom Server Logic
Chạy mã ở Edge trước khi hoàn thành request. Lý tưởng cho Xác thực, Thử nghiệm A/B, Localize.

### 2. Máy chủ tùy chỉnh (Custom Server)
Chỉ dùng cho các trường hợp đặc thù như tích hợp WebSocket. Khuyến khích ưu tiên Route Handlers / Middleware hơn.

### 3. Xuất HTML tĩnh (Static Export)
Kích hoạt `output: 'export'` trong `next.config.mjs` để xuất ra HTML/CSS/JS thuần túy. Phù hợp cho website tĩnh, tuy nhiên sẽ không hỗ trợ API Routes hay ISR.

### 4. Tiện ích API có thể tái sử dụng
Tạo các hàm bậc cao (higher-order functions) như `withAuthentication` bao bọc logic của Route Handler để mã nguồn DRY (không lặp lại) và dễ quản lý.