# Tổng hợp Next.js — Tài liệu đầy đủ

> Tài liệu tổng hợp toàn diện về Next.js App Router: từ nền tảng cơ bản đến các kỹ thuật nâng cao về routing, data fetching, styling, state management, authentication, testing, deployment, scalability, i18n, Redux và SEO.

---

## Mục lục

1. [Next.js Fundamentals](#1-nextjs-fundamentals)
2. [Advanced Routing Techniques](#2-advanced-routing-techniques)
3. [Data Fetching in Next.js](#3-data-fetching-in-nextjs)
4. [Performance Optimization Techniques](#4-performance-optimization-techniques)
5. [Styling and CSS in Next.js](#5-styling-and-css-in-nextjs)
6. [State Management in Next.js Applications](#6-state-management-in-nextjs-applications)
7. [Authentication & Authorization](#7-authentication--authorization)
8. [Testing Next.js Application](#8-testing-nextjs-application)
9. [Deploying and Hosting Next.js Applications](#9-deploying-and-hosting-nextjs-applications)
10. [Scalability Patterns and Best Practices](#10-scalability-patterns-and-best-practices)
11. [Internationalization and Localization](#11-internationalization-and-localization)
12. [Redux With Next.js (App Router)](#12-redux-with-nextjs-app-router)
13. [SEO Optimization for Next.js](#13-seo-optimization-for-nextjs)
14. [Performance & Optimization (Nâng cao)](#14-performance--optimization-nâng-cao)
15. [Advanced Next.js Features and Patterns](#15-advanced-nextjs-features-and-patterns)

---

## 1. Next.js Fundamentals

### 1.1 Next.js là gì?

Next.js là một framework để xây dựng các ứng dụng web hoàn chỉnh, xây dựng trên nền React.js.

So với React.js thuần, Next.js có **Server-side Rendering (SSR – Kết xuất phía máy chủ)**:

- **Server** tạo ra toàn bộ HTML.
- **Browser** hiển thị nội dung ngay lập tức.

**Ưu điểm:**
- Tối ưu hóa công cụ tìm kiếm (SEO) tuyệt vời.
- Thời gian hiển thị nội dung đầu tiên (First Contentful Paint) nhanh hơn.

### 1.2 Tại sao nên dùng Next.js?

- **Hybrid Rendering (Kết xuất lai):** Hỗ trợ SSR, SSG (Static Site Generation), và CSR (Client-Side Rendering).
- **File-system Routing:** Các thư mục định nghĩa route (không cần `react-router-dom`).
- **API routes:** Xây dựng endpoint backend ngay trong cùng dự án.
- **Automatic Optimization:** Tự động tối ưu hóa Hình ảnh, Phông chữ, Scripts.

### 1.3 Thiết lập dự án Next.js đầu tiên

**Điều kiện tiên quyết:** Node.js phiên bản 18.17 trở lên.

```bash
npx create-next-app@latest
```

Các câu hỏi cấu hình mẫu:

```
✔ What is your project named? … my-next-app
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use the src/ directory? … No
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias? … No
```

Khởi động server phát triển:

```bash
cd my-next-app
npm run dev
```

Mở trình duyệt tại `http://localhost:3000`.

### 1.4 Hiểu về cấu trúc thư mục `app/`

App Router giới thiệu mô hình định tuyến dựa trên hệ thống tệp (file-system-based routing). Mỗi thư mục trong `app` đại diện cho một URL segment. UI cho route được định nghĩa bằng `page.tsx` và `layout.tsx`.

```
my-next-app/
└── app/
    ├── layout.tsx      # ROOT layout, áp dụng cho toàn bộ ứng dụng
    ├── page.tsx        # UI cho trang chủ (route '/')
    ├── globals.css     # Global CSS styles
    │
    └── dashboard/      # Định nghĩa route '/dashboard'
        ├── layout.tsx  # Layout riêng cho /dashboard
        ├── page.tsx    # UI cho route '/dashboard'
        │
        └── settings/   # Định nghĩa route '/dashboard/settings'
            └── page.tsx
```

**Các quy ước tệp đặc biệt:**

| Tệp | Mục đích |
|---|---|
| `layout.tsx` | UI dùng chung bao bọc nhiều trang |
| `page.tsx` | UI chính, duy nhất cho một route |
| `loading.tsx` | UI hiển thị khi đang tải (dùng React Suspense) |
| `error.tsx` | UI hiển thị khi có lỗi trong route |
| `route.ts` | Tạo API endpoint |
| `not-found.tsx` | UI khi không tìm thấy route |
| `metadata.ts` | Quản lý metadata phục vụ SEO |
| `template.tsx` | Component bao bọc layout & trang con |

### 1.5 Layout và Định tuyến lồng nhau

Layout nhận prop `children` và hiển thị nó, cho phép tạo UI dùng chung (header, footer, sidebar) mà không bị re-render khi điều hướng giữa các trang con.

```
+------------------------------------------------+
| Root Layout (app/layout.tsx)                    |
| <html>, <body>, <Header>, <Footer>               |
|                                                  |
|   +--------------------------------------------+ |
|   | Dashboard Layout (app/dashboard/layout.tsx) | |
|   | <Sidebar>                                    | |
|   |                                              | |
|   |   +----------------------------------------+ | |
|   |   | Page Content                           | | |
|   |   | (app/dashboard/settings/page.tsx)       | | |
|   |   | {children}                              | | |
|   |   +----------------------------------------+ | |
|   +--------------------------------------------+ |
+------------------------------------------------+
```

**1. Root Layout** — bắt buộc, chứa `<html>` và `<body>`:

```tsx
// app/layout.tsx
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', background: '#eee' }}>
          My Awesome Website
        </header>
        <main>{children}</main>
        <footer style={{ padding: '1rem', background: '#eee', marginTop: '2rem' }}>
          Copyright 2025
        </footer>
      </body>
    </html>
  );
}
```

**2. Dashboard Layout** — chỉ áp dụng cho các trang trong `/dashboard`:

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: 'flex' }}>
      <nav style={{ width: '200px', padding: '1rem', background: '#f0f0f0' }}>
        <p>Dashboard Sidebar</p>
        <ul>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </nav>
      <div style={{ flex: 1, padding: '1rem' }}>
        {children}
      </div>
    </section>
  );
}
```

### 1.6 Server và Client Components

App Router giới thiệu hai loại component: **Server** và **Client**.

**Server Components (Mặc định):**
- Chỉ chạy trên server.
- Không thể dùng hook (`useState`, `useEffect`) hay API chỉ dành cho trình duyệt.
- Lý tưởng để truy cập trực tiếp tài nguyên backend, giảm JS gửi đến client.
- Tất cả component trong `app/` là Server Components theo mặc định.

**Client Components:**
- Thêm chỉ thị `"use client";` ở đầu file.
- Được render trên server (SSR) rồi "hydrate" trên client.
- Có thể dùng hook, quản lý state, xử lý sự kiện (`onClick`, `onChange`, ...).

**Ví dụ Server Component lấy dữ liệu:**

```tsx
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Ví dụ Client Component tương tác:**

```tsx
// components/Counter.tsx
"use client"; // Marks this as a Client Component

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### 1.7 Tổng kết phần 1

- Giới thiệu khái niệm cơ bản và quy trình thiết lập dự án Next.js.
- Cấu trúc và quy ước thư mục `app/`.
- Layout, định tuyến lồng nhau (nested routing) và lợi ích.
- Phân biệt Server Component và Client Component.

---

## 2. Advanced Routing Techniques

### 2.1 Tạo Route động (Dynamic Routes)

Dynamic Routes cho phép tạo một template dùng chung cho nhiều trang, thay vì tạo vô số file riêng lẻ. Bọc tên thư mục trong dấu ngoặc vuông: `[foldername]`. Giá trị URL sẽ được truyền vào component qua prop `params`.

```
app/
└── blog/
    └── [slug]/       <- Thư mục động
        └── page.tsx  <- Template cho mỗi bài viết
```

```tsx
// app/blog/[slug]/page.tsx
// Render cho các URL như /blog/hello-world, /blog/another-post
export default function BlogPost({ params }: { params: { slug: string } }) {
  // params: { slug: 'hello-world' } đối với URL /blog/hello-world
  // const postData = await getPostData(params.slug);
  return (
    <div>
      <h1>Post: {params.slug}</h1>
    </div>
  );
}
```

### 2.2 Route lồng nhau và Layout

**Layout người dùng** (`app/users/[userId]/layout.tsx`):

```tsx
export default function UserProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userId: string };
}) {
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

**Trang Cài đặt** (`app/users/[userId]/settings/page.tsx`):

```tsx
export default function UserSettingsPage({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <div>
      <h3>Settings for user {params.userId}</h3>
    </div>
  );
}
```

### 2.3 Route Catch-all và Catch-all tùy chọn

**Catch-all Routes:** dùng `[...folderName]` để "gom" tất cả các phần URL đi sau.

```
Cấu trúc: app/docs/[...slug]/page.tsx

/docs/getting-started           -> params: { slug: ['getting-started'] }
/docs/routing/dynamic-routes    -> params: { slug: ['routing', 'dynamic-routes'] }
```

**Optional Catch-all Routes:** dùng `[[...folderName]]`, hoạt động cả khi không có thành phần URL bổ sung — phù hợp cho bộ lọc tìm kiếm.

```
Cấu trúc: app/shop/[[...filters]]/page.tsx

/shop              -> params: {}
/shop/shoes        -> params: { filters: ['shoes'] }
/shop/shoes/red    -> params: { filters: ['shoes', 'red'] }
```

### 2.4 Component `<Link>` để điều hướng

`<Link>` giúp điều hướng không cần full-page reload, và tự động pre-load trang tiếp theo.

```tsx
import Link from 'next/link';

export default function Header() {
  const blogPostSlug = 'my-first-post';
  return (
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href={`/blog/${blogPostSlug}`}>First Post</Link>
    </nav>
  );
}
```

### 2.5 Điều hướng bằng Code (Programmatic Navigation)

Dùng hook `useRouter()` — bắt buộc trong Client Component (`"use client";`). Dùng `usePathname()` để biết trang hiện tại.

```tsx
// components/LoginButton.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function LoginButton() {
  const router = useRouter();

  function handleLogin() {
    // ... xử lý logic đăng nhập
    router.push('/dashboard');
  }

  return <button onClick={handleLogin}>Login</button>;
}
```

### 2.6 Tổng kết phần 2

- Dynamic routes tạo nhiều trang từ một template duy nhất.
- Route lồng nhau và layout cho phép dùng chung UI.
- Catch-all routes nắm bắt nhiều thành phần URL.
- `<Link>` cung cấp điều hướng nhanh.
- Programmatic navigation chuyển hướng sau hành động của người dùng.

---

## 3. Data Fetching in Next.js

### 3.1 Các chiến lược lấy dữ liệu

Trước đây React dùng `useEffect` phía client, dẫn đến layout shifts và network waterfalls. Next.js giới thiệu Server Components — lấy dữ liệu trực tiếp trên server trước khi render, ẩn API keys, trả về HTML đầy đủ dữ liệu.

```tsx
// ✅ The Next.js Way (Server Component)
async function Profile() {
  const data = await db.user.findFirst();
  return <div>{data.name}</div>;
}

// ❌ The Old Way (Client-Side)
function Profile() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/user').then(res => res.json()).then(setData);
  }, []);

  if (!data) return <Spinner />;
  return <div>{data.name}</div>;
}
```

**Static vs Dynamic Data:**

- **Dữ liệu tĩnh:** lấy một lần tại build time, cache toàn cục — giống tờ báo in.
- **Dữ liệu động:** lấy ở mỗi request — giống bảng điểm trực tiếp.

```js
// 1. Static Data (Default) — Fetched at build time
fetch('https://api.com/posts', { cache: 'force-cache' });

// 2. Dynamic Data — Fetched on every request
fetch('https://api.com/stocks', { cache: 'no-store' });
```

### 3.2 Lấy dữ liệu với Server Components (Async/Await)

```tsx
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### 3.3 Tạo trang tĩnh với `generateStaticParams`

SSG cho phép pre-render các trang tại build time. Với dynamic routes, `generateStaticParams` trả về mảng params cần build trước.

```tsx
// app/blog/[slug]/page.tsx

// 1. Cho Next.js biết những slug nào cần build
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts?_limit=3').then(res => res.json());
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

// 2. Component trang dùng params để lấy dữ liệu
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://api.example.com/posts/${params.slug}`).then(res => res.json());
  return <h1>{post.title}</h1>;
}
```

### 3.4 Kết xuất phía máy chủ và Streaming UI

SSR là mặc định cho trang động không tạo tĩnh. **Streaming UI**: server gửi ngay khung UI tĩnh + loading state (từ `loading.tsx`), sau đó "truyền" nội dung động vào khi sẵn sàng (React Suspense).

```tsx
// app/dashboard/loading.tsx
export default function Loading() {
  return <p>Loading dashboard data...</p>;
}
```

```tsx
// app/dashboard/page.tsx
async function getDashboardData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { revenue: 12345 };
}

export default async function DashboardPage() {
  const data = await getDashboardData();
  return <h1>Revenue: {data.revenue}</h1>;
}
```

### 3.5 Lấy dữ liệu phía Client

Dùng cho dữ liệu thay đổi thường xuyên hoặc phụ thuộc tương tác người dùng. Dùng `useEffect`/`useState`, hoặc thư viện SWR/React Query. Bắt buộc là Client Component.

```tsx
// components/UserProfile.tsx
'use client';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function UserProfile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return <h1>Hello, {data.name}!</h1>;
}
```

### 3.6 Tạo và sử dụng định tuyến API

Tạo tệp `route.ts` trong thư mục route để định nghĩa endpoint, export các hàm async theo tên HTTP method (GET, POST, PUT, DELETE).

```ts
// app/api/users/route.ts
import { NextResponse } from 'next/server';

// Handle GET requests
export async function GET(request: Request) {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  return NextResponse.json({ users });
}

// You can also define POST, PUT, DELETE functions here
// export async function POST(request: Request) { ... }
```

### 3.7 Tổng kết phần 3

- Nhiều chiến lược lấy dữ liệu: Server Components (async/await), `generateStaticParams` (SSG), SSR streaming, client-side (SWR), và API Routes.

---

## 4. Performance Optimization Techniques

### 4.1 Tối ưu hóa Hình ảnh với `<Image>`

`next/image` mở rộng thẻ `<img>`, tự động:

- **Resizing:** tạo phiên bản nhỏ hơn cho từng kích thước màn hình.
- **Format Optimization:** chuyển đổi sang WebP/AVIF nếu trình duyệt hỗ trợ.
- **Lazy Loading:** chỉ tải khi cuộn vào viewport.
- **Chống CLS:** tự thiết lập kích thước, tránh nhảy layout.

| Thẻ `<img>` tiêu chuẩn | `<Image>` của Next.js |
|---|---|
| Tải ảnh gốc, kích thước lớn | Tải ảnh tối ưu, đúng kích thước |
| Không tự chuyển định dạng | Tự chuyển sang WebP/AVIF |
| Tải ngay lập tức | Mặc định lazy loading |
| Có thể gây Layout Shift | Tự ngăn chặn Layout Shift |

```tsx
import Image from 'next/image';
import profilePic from '../public/me.png'; // Import ảnh cục bộ

export default function MyPage() {
  return (
    <div>
      {/* Ảnh cục bộ */}
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={500}
        height={500}
        placeholder="blur"
      />

      {/* Ảnh từ xa */}
      <Image
        src="https://images.unsplash.com/photo-12345"
        alt="An image from Unsplash"
        width={800}
        height={600}
      />
    </div>
  );
}
```

### 4.2 Tách mã và tải song song

**Automatic Code Splitting:** mỗi `page.tsx` được biên dịch thành một bundle JS riêng.

**Parallel Route Loading:** khi một URL được yêu cầu, Next.js tải song song tất cả `layout.tsx` và `page.tsx` cần thiết — hoàn toàn tự động, không cần config.

```
app/
├── layout.tsx           // Root Layout
└── dashboard/
    ├── layout.tsx        // Dashboard Layout
    └── settings/
        └── page.tsx      // Settings Page
```

### 4.3 React Suspense và Lazy Loading với Giao diện chờ

Tạo `loading.tsx` để báo cho Next.js hiển thị UI dự phòng trong khi `page.tsx` đang fetch dữ liệu.

```
Sơ đồ luồng:
Client Sends Request
  → Server Immediately Sends Back: Static UI (Layout) + UI from loading.tsx
  → (Meanwhile) page.tsx is awaiting data...
  → Data is available, Server Renders Page Content
  → Server "Streams" HTML to Client to replace Fallback
```

```tsx
// app/analytics/loading.tsx
export default function Loading() {
  return <p>Loading analytics data, please wait...</p>;
}
```

```tsx
// app/analytics/page.tsx
async function getAnalyticsData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { visitors: 9876 };
}

export default async function AnalyticsPage() {
  const data = await getAnalyticsData();
  return <h1>Visitors: {data.visitors}</h1>;
}
```

### 4.4 Các chiến lược lưu bộ nhớ đệm và ISR

- **Static Fetch (Default):** `fetch('...')` cache vô thời hạn — tương tự `getStaticProps`.
- **No-cache Fetch:** `fetch('...', { cache: 'no-store' })` — tương tự `getServerSideProps`.
- **ISR (Incremental Static Regeneration):** `fetch('...', { next: { revalidate: 60 } })` — cache trong khoảng thời gian, sau đó tái xác thực nền.

**Luồng hoạt động ISR:**

```
User A (0s)  -> Nhận dữ liệu cache (cũ) -> Server bắt đầu revalidate nền
User B (10s) -> Nhận dữ liệu cache (vẫn cũ)
(Revalidation hoàn tất, cache cập nhật)
User C (65s) -> Nhận dữ liệu cache (mới)
```

```tsx
// app/stock-price/page.tsx
async function getStockPrice() {
  const res = await fetch('https://api.example.com/stock/XYZ', {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  return res.json();
}

export default async function StockPricePage() {
  const stock = await getStockPrice();
  return <h1>XYZ Stock Price: ${stock.price}</h1>;
}
```

### 4.5 Theo dõi và Cải thiện Core Web Vitals

Ba chỉ số chính của Google:

| Chỉ số | Ý nghĩa | Giải pháp Next.js |
|---|---|---|
| **LCP** (Largest Contentful Paint) | Trang tải nhanh không? | `<Image>`, tối ưu font |
| **INP** (Interaction to Next Paint) | Phản hồi tương tác nhanh không? | Code splitting |
| **CLS** (Cumulative Layout Shift) | Bố cục ổn định không? | `<Image>`, tối ưu font |

```bash
npm i @vercel/analytics
```

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 4.6 Tổng kết phần 4

- Tối ưu hình ảnh là yếu tố quan trọng.
- Code splitting và parallel loading tự động.
- Suspense nâng cao UX với loading UI.
- Caching: static, no-cache, ISR.
- Core Web Vitals đo lường hiệu suất tổng thể.

---

## 5. Styling and CSS in Next.js

### 5.1 CSS Modules

CSS có phạm vi cục bộ, tự động tạo class name độc nhất. Đặt tên file `[tên].module.css`.

```css
/* Button.module.css */
.error {
  background-color: red;
  color: white;
}
```

```tsx
// Button.tsx
import styles from './Button.module.css';

export default function Button() {
  return (
    <button type="button" className={styles.error}>
      Delete
    </button>
  );
}
```

### 5.2 Tích hợp Sass/SCSS

```bash
npm install sass
```

```
app/
├── styles/
│   └── _variables.scss
└── components/
    ├── Card.jsx
    └── Card.module.scss
```

```scss
// app/styles/_variables.scss
$primary-color: #8a2be2;
$border-radius: 12px;
$card-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
```

```scss
// app/components/Card.module.scss
@import '../styles/variables';

.card {
  padding: 1.5rem;
  border-radius: $border-radius;
  box-shadow: $card-shadow;
  background-color: white;

  h3 {
    margin-top: 0;
  }
}
```

```jsx
// app/components/Card.jsx
import styles from './Card.module.scss';

export default function Card({ title, content }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
```

### 5.3 Styled-components với Server Components

**Thách thức:** styled-components cần môi trường trình duyệt để inject style vào DOM, nhưng Server Components render hoàn toàn trên server.

**Giải pháp:** tất cả component dùng styled-components phải là Client Components; tạo Style Registry để thu thập style và chèn vào `<head>`.

```bash
npm install styled-components
```

```jsx
// app/lib/StyledComponentsRegistry.jsx
'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({ children }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}
```

```jsx
// app/layout.jsx
import StyledComponentsRegistry from './lib/StyledComponentsRegistry';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
```

```jsx
// app/components/StyledButton.jsx
'use client'; // BẮT BUỘC là Client Component
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.$primary ? '#0070f3' : 'white'};
  color: ${props => props.$primary ? 'white' : '#0070f3'};
  font-size: 1rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #0070f3;
  border-radius: 3px;
  cursor: pointer;
`;

export default function StyledButton({ primary, children }) {
  // Dùng props tiền tố $ (ví dụ $primary) để tránh truyền xuống DOM
  return <Button $primary={primary}>{children}</Button>;
}
```

### 5.4 Tailwind CSS trong App Router

Utility-first framework: xây UI bằng cách áp dụng class tiện ích trực tiếp trong JSX.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Thêm class Tailwind tùy chỉnh** trong `theme.extend`:

```js
// tailwind.config.ts
colors: {
  brand: {
    primary: '#0070f3',   // -> bg-brand-primary
    secondary: '#ff4081', // -> text-brand-secondary
  },
},
spacing: {
  '128': '32rem', // -> p-128, w-128
},
keyframes: {
  'slide-in-down': {
    '0%': { transform: 'translateY(-100%)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
},
animation: {
  'slide-in-down': 'slide-in-down 0.5s ease-out', // -> animate-slide-in-down
}
```

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```jsx
// app/layout.jsx
import './globals.css';

export default function RootLayout({ children }) {
  // ...
}
```

### 5.5 Tổng kết phần 5

- CSS Modules: định dạng phạm vi cục bộ cho từng component.
- Sass/SCSS: nâng cấp CSS truyền thống với variables, nesting.
- Styled-components: CSS-in-JS với dynamic styling.
- Tailwind CSS: utility-first, phát triển UI nhanh chóng.

---

## 6. State Management in Next.js Applications

### 6.1 Tổng quan — thách thức trong Next.js

**Server Components:** stateless, không dùng hook, lý tưởng cho data fetching, không tương tác state client.

**Client Components** (`'use client'`): dùng hook, quản lý state, xử lý events. Tất cả thư viện state management (Context, Redux, Zustand) phải nằm trong Client Components.

**Hydration:** quá trình "thổi hồn" HTML tĩnh từ server bằng cách gắn event listeners và state phía client — cần đồng bộ state ban đầu để tránh lỗi.

### 6.2 React Context & Server Components

**Ưu điểm:** built-in, dễ học, lý tưởng cho state ít thay đổi (theme, ngôn ngữ).

**Nhược điểm:** re-render không cần thiết, không tối ưu cho state cập nhật thường xuyên/phức tạp.

**Lưu ý:** Context Provider bắt buộc trong Client Component.

```
(Server) RootLayout
└── (Client) "use client" <ThemeProvider>
    └── (Server) {children} — ví dụ: HomePage
        └── (Client) "use client" <ThemeToggleButton />
```

```tsx
'use client';

import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

```jsx
// app/layout.js
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

```tsx
'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={`p-2 rounded ${theme === 'light' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
```

### 6.3 Redux Toolkit & App Router

**Ưu điểm:** quản lý state tập trung, dự đoán được, hệ sinh thái mạnh (DevTools, middleware), tối ưu với `reselect`/Immer, phù hợp ứng dụng lớn.

**Nhược điểm:** vẫn còn boilerplate, learning curve dốc hơn.

**Lưu ý:** Redux store chỉ tồn tại phía client. Provider bắt buộc trong Client Component.

```
(Server) RootLayout
└── (Client) "use client" <StoreProvider>
    └── (Server) {children} (ví dụ: DashboardPage)
        └── (Client) "use client" <CounterComponent/>
```

**1. Cài đặt:**

```bash
npm install @reduxjs/toolkit react-redux
```

**2. Tạo Slice** (`/lib/features/counter/counterSlice.js`):

```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

**3. Tạo Store** (`/lib/store.js`):

```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};
```

**4. Tạo Provider** (`/app/StoreProvider.jsx`):

```jsx
'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../lib/store';

export default function StoreProvider({ children }) {
  const storeRef = useRef(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
```

**Tích hợp vào Root Layout và sử dụng trong component:**

```jsx
// app/layout.js
import StoreProvider from './StoreProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
```

```jsx
// components/Counter.js
'use client';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/lib/features/counter/counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
```

### 6.4 Recoil & Zustand

**Zustand:**
- 'Zustand' = 'trạng thái' trong tiếng Đức.
- Cực kỳ đơn giản, boilerplate tối thiểu.
- State lưu ngoài React, truy cập qua hooks.
- Không cần Provider.
- Phù hợp cho: mọi quy mô, cần giải pháp nhẹ gọn.

**Recoil:**
- Phát triển bởi Facebook.
- Dùng khái niệm 'atoms' và 'selectors'.
- Tối ưu re-render tốt hơn (component chỉ subscribe atoms cần dùng).
- Phù hợp cho: ứng dụng phức tạp, cần Provider (`RecoilRoot`).

```bash
npm install zustand
```

```js
// stores/bearStore.js
import { create } from 'zustand';

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearStore;
```

```jsx
// components/BearCounter.js
'use client';

import useBearStore from '@/stores/bearStore';

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}
```

### 6.5 Lưu trữ trạng thái (Persist State)

**Vấn đề:** state lưu trong bộ nhớ JS bị xóa khi reload/đóng tab — tệ cho giỏ hàng, theme preference, form data.

**Giải pháp:** lưu state vào `localStorage` qua middleware `persist`.

```ts
// stores/settingStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  // 1. Bọc store definition trong hàm `persist`
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      // 2. Tên duy nhất cho localStorage key (BẮT BUỘC)
      name: 'user-settings-storage',
    }
  )
);
```

**Xử lý Hydration trong Next.js/SSR:** trì hoãn render UI dùng store cho đến khi component đã mount trên client, tránh lỗi "hydration mismatch".

### 6.6 Xử lý quá trình Hydrat hóa trạng thái

**Vấn đề:** nếu state khởi tạo client không khớp với những gì server đã render → "Hydration Mismatch".

**Giải pháp:** truyền initial state từ Server Component xuống Client Component qua props.

```
Server: ServerComponent lấy dữ liệu (ví dụ initialTodos)
Server -> Client: Truyền initialTodos qua props
Client: ClientComponent dùng initialTodos làm giá trị khởi tạo cho useState
```

```tsx
const [todos, setTodos] = useState(initialTodos);
```

### 6.7 Tổng kết phần 6

- Bắt đầu đơn giản: `useState` → React Context nếu cần chia sẻ.
- Khi phức tạp: Zustand (đơn giản) hoặc Redux Toolkit (mạnh mẽ, hệ sinh thái).
- Luôn đặt Provider (Context, Redux, Recoil) trong Client Component.

---

## 7. Authentication & Authorization

### 7.1 Các khái niệm cốt lõi

**Xác thực (Authentication):** "Bạn là ai?" — xác minh danh tính (username/password, mạng xã hội...). Ví dụ: đăng nhập Gmail.

**Phân quyền (Authorization):** "Bạn được phép làm gì?" — xác định quyền truy cập. Ví dụ: chỉ admin mới vào được admin dashboard.

### 7.2 Cài đặt NextAuth.js trong App Router

**Ưu điểm:** hỗ trợ đa dạng Providers (Google, GitHub, Credentials...), giảm boilerplate, tự quản lý session & cookie bảo mật, tích hợp sâu App Router.

**Luồng đăng nhập (sequence):**

```
User -> Client: Click "Sign In with Google"
Client -> Server: gọi signIn('google')
Server -> Provider: redirect đến trang đăng nhập Google
Provider -> User: yêu cầu xác thực
User -> Provider: đăng nhập thành công
Provider -> Server: gửi trả authorization code
Server -> Provider: đổi code lấy access token
Server -> Server: tạo session, lưu cookie
Server -> Client: trả session
Client -> User: hiển thị "Signed in"
```

```bash
npm install next-auth
```

```ts
// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      // ... configuration for username/password login
    })
  ],
  // pages: { signIn: '/login' }, // Custom sign-in page
})

export { handler as GET, handler as POST }
```

```tsx
// components/SomeComponent.tsx (Server Component)
import { auth } from "@/auth" // Assuming auth.ts is the config file

export default async function SomeComponent() {
  const session = await auth(); // Get session on the server
  if (session) {
    return <p>Signed in as {session.user?.email}</p>
  }
  return <p>Not signed in</p>
}
```

### 7.3 Xây dựng Xác thực tùy chỉnh với Server Actions

**Khi nào dùng:** hệ thống xác thực nội bộ (không OAuth), cần tích hợp sâu DB, không muốn phụ thuộc thư viện ngoài.

**Cách tiếp cận:** form đăng nhập gọi Server Action → kiểm tra DB, hash password → tạo session (ví dụ `iron-session`) → lưu cookie `httpOnly`.

```
Luồng: User submits form -> Server Action -> Kiểm tra DB
  -> Tạo session data -> Mã hóa & tạo cookie httpOnly
  -> Set cookie vào browser -> Redirect đến dashboard
```

```ts
// app/login/actions.ts
'use server'

import { sealData } from 'iron-session/edge';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const email = formData.get('email');
  // 1. Get user from DB
  // const user = await getUserByEmail(email);

  // 2. Verify password (e.g., using bcrypt.compare)
  // const isValid = await compare(password, user.password);

  // Assume successful authentication
  const user = { id: 1, email, isAdmin: true };

  // 3. Create a secure session
  const session = await sealData(user, {
    password: process.env.SECRET_COOKIE_PASSWORD!,
  });

  // 4. Set the cookie
  cookies().set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  });

  // 5. Redirect
  redirect('/dashboard');
}
```

### 7.4 Triển khai Xác thực JWT & Bảo mật API

JWT gồm 3 phần: **Header, Payload, Signature**. Chữ ký đảm bảo token không bị giả mạo.

**Luồng bảo mật API với JWT:**

```
Client -> AuthServer: gửi username/password
AuthServer -> Client: trả JWT (nếu hợp lệ)
Client: lưu JWT (localStorage/cookie)

Loop (mỗi request tới API bảo vệ):
  Client -> API: gửi request kèm Authorization: Bearer <token>
  API: verify chữ ký JWT
    - valid   -> trả dữ liệu thành công
    - invalid -> trả lỗi 401 Unauthorized
```

```ts
// app/api/secure-data/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    console.log('JWT Payload:', payload);

    return NextResponse.json({
      data: `Secret data for user ID: ${payload.sub}`,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}
```

### 7.5 Kiểm soát truy cập dựa trên vai trò (RBAC)

**RBAC:** hạn chế quyền truy cập dựa trên vai trò (admin, editor, user).

**Cách triển khai:**
- **Middleware (`middleware.ts`):** "gatekeeper" chạy trước khi request được xử lý — lý tưởng để kiểm tra vai trò & redirect.
- **Layouts:** áp dụng cho nhóm route liền kề, kiểm tra quyền tại cấp Layout.

**Luồng phân quyền với Middleware:**

```
Gửi request đến /admin
  -> Middleware lấy session/token từ request
  -> Không có session -> redirect /login
  -> Có session -> lấy role
    -> Role không khớp -> redirect /unauthorized
    -> Role hợp lệ -> Allow request to proceed
```

```ts
// middleware.ts (place in the root directory)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getIronSession } from 'iron-session/edge';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const session = await getIronSession(req, res, {
    cookieName: 'session',
    password: process.env.SECRET_COOKIE_PASSWORD!,
  });

  const { user } = session;

  // Nếu vào trang admin nhưng không phải admin
  if (req.nextUrl.pathname.startsWith('/admin') && user?.isAdmin !== true) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Nếu chưa đăng nhập nhưng vào trang bảo vệ
  if (req.nextUrl.pathname.startsWith('/dashboard') && !user) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*'],
};
```

### 7.6 Tổng kết phần 7

- Authentication: "Bạn là ai" / Authorization: "Bạn làm được gì".
- NextAuth.js: mạnh mẽ, phổ biến, đa nền tảng.
- Custom Auth: Server Actions + mã hóa Cookie (`iron-session`).
- JWT: bảo mật API Route Handlers.
- RBAC + Middleware: chặn/cho phép truy cập theo vai trò.

---

## 8. Testing Next.js Application

### 8.1 Giới thiệu & Mục tiêu

**Tại sao Testing quan trọng?**
- Ensure Quality — phát hiện lỗi sớm.
- Increase Confidence — tự tin refactor.
- Living Documentation — test mô tả cách hoạt động của code.
- Improve Architecture — code testable thường có kiến trúc tốt hơn.

**Nội dung:** Unit Testing (Jest), Integration Testing (RTL), E2E Testing (Cypress), Backend Testing (API Routes & Server Actions).

### 8.2 Kim tự tháp Kiểm thử

```
        /\
       /E2E\        <- Ít nhất, chậm, đắt
      /------\
     /Integr. \     <- Vừa phải
    /----------\
   /  Unit Tests \  <- Nhiều nhất, nhanh, rẻ
  /----------------\
```

- **Unit Tests:** kiểm thử hàm/component riêng lẻ, cô lập. Nhanh, rẻ.
- **Integration Tests:** kiểm thử tương tác giữa nhiều đơn vị.
- **E2E Tests:** kiểm thử toàn luồng, mô phỏng người dùng thật. Chậm, đắt.

### 8.3 Kiểm thử Đơn vị với Jest

**Công cụ:** Jest + React Testing Library (RTL).

**Quy trình:** Test File → Jest Runner → Render Component → Simulate Interaction → Assert Result.

**8.3.1 Ví dụ Client Component:**

```tsx
'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

```tsx
// Counter.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  it('should render initial count and increment on click', () => {
    render(<Counter />);

    const countElement = screen.getByText(/Count: 0/i);
    const button = screen.getByRole('button', { name: /Increment/i });

    expect(countElement).toBeInTheDocument();

    fireEvent.click(button);
    // expect updated state...
  });
});
```

**8.3.2 Ví dụ Server Component:**

```tsx
// UserProfile.tsx — Server Component without 'use client'
type User = { id: number; name: string; email: string };

export default async function UserProfile({ userId }: { userId: number }) {
  const fetchUser = async (id: number): Promise<User> => {
    return { id, name: 'Leanne Graham', email: 'Sincere@april.biz' };
  };

  const user = await fetchUser(userId);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

```tsx
// UserProfile.test.tsx
// Note: chỉ test UI render đúng với dữ liệu cung cấp, không test data fetching thật.
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

// TypeScript báo lỗi vì truyền async component vào render — dùng mẹo:
const Resolved = async ({ children }: { children: React.ReactNode }) => await children;

describe('UserProfile Server Component', () => {
  it('renders user data correctly', async () => {
    render(<Resolved>{UserProfile({ userId: 1 })}</Resolved>);

    const nameElement = await screen.findByRole('heading', { name: /Leanne Graham/i });
    const emailElement = await screen.findByText(/Sincere@april.biz/i);

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });
});
```

### 8.4 Kiểm thử Tích hợp với React Testing Library

**Mục tiêu:** kiểm thử nhiều component hoạt động cùng nhau (ví dụ: form + thông báo thành công).

**Quy trình:** Test File → Render Page (nhiều component) → Simulate User Flow → Assert Final State.

```tsx
// NewsletterForm.tsx
'use client';

export default function NewsletterForm({ setSuccess }: { setSuccess: (success: boolean) => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>
  );
}
```

```tsx
// page.tsx
'use client';
import { useState } from 'react';
import NewsletterForm from './NewsletterForm';

export default function Home() {
  const [success, setSuccess] = useState(false);
  return (
    <main>
      <h1>Join our Newsletter</h1>
      {success ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <NewsletterForm setSuccess={setSuccess} />
      )}
    </main>
  );
}
```

```tsx
// Home.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './page';

describe('Newsletter Subscription Flow', () => {
  it('shows a success message after form submission', () => {
    render(<Home />);

    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(subscribeButton);

    const successMessage = screen.getByText(/Thank you for subscribing!/i);
    expect(successMessage).toBeInTheDocument();

    expect(emailInput).not.toBeInTheDocument();
  });
});
```

### 8.5 Kiểm thử Đầu cuối với Cypress

**Mục tiêu:** mô phỏng người dùng thật, kiểm thử toàn bộ ứng dụng trên trình duyệt thực.

**Quy trình:** Cypress Runner → Controls Real Browser → Visits Page → Clicks/Types/Interacts → Asserts Content.

```ts
// cypress/e2e/navigation.cy.ts
describe('Page Navigation', () => {
  it('should navigate from home to the about page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="about"]').click();

    cy.url().should('include', '/about');

    cy.get('h1').contains('About Us');
  });
});
```

**Cách chạy:**

```bash
npm run dev
npx cypress open
```

### 8.6 Kiểm thử API Routes và Server Actions

**Công cụ:** Jest + `node-mocks-http`.

**Quy trình:** Test File → Calls API Handler → Provide Mock Request → Assert Mock Response.

```ts
// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello, World!' });
}
```

```ts
// hello.test.ts
import { GET } from '@/app/api/hello/route';
import { NextRequest } from 'next/server';

describe('API Route: /api/hello', () => {
  it('should return a hello world message', async () => {
    const request = new NextRequest('http://localhost/api/hello');
    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ message: 'Hello, World!' });
  });
});
```

```ts
// actions.ts — Server Action to test
'use server';

const db = {
  items: [] as string[],
  addItem: async (item: string) => {
    db.items.push(item);
    return { success: true };
  },
};

export async function createItem(formData: FormData) {
  const item = formData.get('item')?.toString();

  if (!item) {
    return { success: false, error: 'Item is required' };
  }

  return await db.addItem(item);
}
```

```ts
// actions.test.ts
import { createItem } from './actions';

describe('Server Action: createItem', () => {
  it('should return an error if item is missing', async () => {
    const formData = new FormData();
    const result = await createItem(formData);

    expect(result).toEqual({ success: false, error: 'Item is required' });
  });

  it('should add an item successfully', async () => {
    const formData = new FormData();
    formData.append('item', 'New Test Item');

    const result = await createItem(formData);

    expect(result).toEqual({ success: true });
  });
});
```

### 8.7 Tổng kết phần 8

| Loại test | Khi nào dùng | Mục tiêu |
|---|---|---|
| **Unit** (Jest, RTL) | Component/hàm riêng lẻ | Đảm bảo logic nội bộ chính xác |
| **Integration** (Jest, RTL) | Luồng nhỏ, nhiều component | Đảm bảo giao tiếp chính xác |
| **E2E** (Cypress) | Luồng nghiệp vụ quan trọng | Đảm bảo hệ thống hoạt động end-to-end |
| **Backend** (Jest) | API Routes & Server Actions | Đảm bảo logic backend chính xác |

---

## 9. Deploying and Hosting Next.js Applications

### 9.1 Triển khai App Router lên Vercel

**Vercel:** nền tảng đám mây tạo bởi nhà phát triển Next.js.

**Tại sao chọn Vercel?**
- Zero-Configuration — tự nhận diện & build dự án.
- Performance Optimization — Global CDN, cache, tối ưu ảnh tự động.
- Full App Router Support — Server Components, Server Actions, Route Handlers.
- Seamless Git Integration — tự động deploy mỗi lần push.

**Sơ đồ triển khai:**

```
Developer: viết code local -> git push lên GitHub
Vercel: lắng nghe Webhooks -> pull code mới -> next build -> deploy lên Global CDN
End-User: truy cập trang từ vị trí gần nhất
```

**Các bước triển khai:**

1. Push code lên Git Provider (GitHub/GitLab/Bitbucket).
2. Đăng ký/đăng nhập vercel.com bằng tài khoản Git.
3. Import Project → "Add New..." → "Project" → chọn repo → "Import".
4. Cấu hình (tùy chọn): thêm Environment Variables nếu cần.
5. Nhấn "Deploy" → nhận URL công khai sau vài phút.

### 9.2 CI/CD với Netlify và các nền tảng khác

**CI (Continuous Integration):** thường xuyên merge code, verify bằng build + test tự động.

**CD (Continuous Deployment):** tự động deploy mọi thay đổi qua CI lên production.

**Lợi ích:** giảm sai sót con người, tăng tốc phát hành, quy trình nhất quán.

**Nền tảng phổ biến:** Netlify, AWS Amplify, Google Firebase Hosting, Azure Static Web Apps, Render.

**Sơ đồ CI/CD với Netlify:**

```
Push to main -> Triggers Deploy to Production
Create Pull Request -> Triggers Deploy Preview (bản xem trước để review)
```

**Cấu hình `netlify.toml`:**

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  # NEXT_PUBLIC_API_URL = "https://api.example.com"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 9.3 Đóng gói ứng dụng bằng Docker

**Docker:** đóng gói ứng dụng + dependencies vào "container" — đơn vị phần mềm gọn nhẹ, độc lập.

**Lợi ích:** Consistency (chạy giống nhau mọi môi trường), Portability (dễ di chuyển giữa cloud), Isolation (không xung đột), Scalability (nhân bản dễ dàng, kết hợp Kubernetes).

**Kiến trúc:**

```
Your Server / Cloud VM
└── Docker Engine
    └── My Next.js Container
        ├── Next.js Application (.next)
        ├── Node.js Runtime
        ├── Production Dependencies (node_modules)
        └── OS Libraries (from base image)
```

**Dockerfile (multi-stage build):**

```dockerfile
# --- Giai đoạn 1: Build ---
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Giai đoạn 2: Production ---
FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm install --only=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
```

**Chạy:**

```bash
docker build -t my-nextjs-app .
docker run -p 3000:3000 my-nextjs-app
```

### 9.4 Serverless và Edge Functions

**Serverless:** nhà cung cấp (Vercel, AWS) tự quản lý tài nguyên; bạn chỉ viết & deploy functions. Ví dụ: Route Handlers thường triển khai dạng Serverless Functions.

**Edge Functions:** Serverless Functions triển khai trên CDN toàn cầu, gần người dùng nhất để giảm độ trễ. Ví dụ: Middleware.

**So sánh:**

```
Truyền thống/Serverless (Tập trung):
  User (VN) -> Request -> Server (US-West) -> Response -> User (VN)
  => Độ trễ cao

Edge Functions (Phân tán):
  User (VN) -> Request -> Edge Node (Singapore) -> Response -> User (VN)
  => Độ trễ rất thấp
```

```ts
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { geo } = request
  const country = geo?.country || 'N/A'

  if (country === 'XX') {
    return new NextResponse('Access denied from your country.', { status: 403 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
```

---

## 10. Scalability Patterns and Best Practices

### 10.1 Tổng quan về khả năng mở rộng

**Vertical Scaling:** tăng sức mạnh 1 máy chủ (CPU, RAM). Đơn giản, nhưng giới hạn vật lý, chi phí cao, single point of failure.

**Horizontal Scaling:** thêm nhiều máy chủ. Linh hoạt, chịu lỗi tốt, nhưng phức tạp quản lý/đồng bộ.

### 10.2 Tổ chức mã nguồn: Cấu trúc theo Module

Nguyên tắc: co-locate các file liên quan đến 1 tính năng (UI, logic, API route).

```
/src
├── /app
│   ├── /api
│   │   └── /products
│   │       └── route.ts
│   ├── /products
│   │   ├── /_components
│   │   │   └── product-card.tsx
│   │   ├── /[id]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── /components
│   └── /ui
├── /lib
└── /services
```

### 10.3 Tính tái sử dụng: Layouts và Templates

**Layouts:** UI chia sẻ chung, giữ state, không re-render khi điều hướng. Lý tưởng cho header/sidebar/footer.

**Templates:** tương tự Layouts nhưng tạo instance mới cho mỗi trang con — hữu ích khi cần chạy lại `useEffect` mỗi lần truy cập.

```jsx
<Layout>
  {/* Header, Sidebar, Footer — không re-render */}
  <Template key={route}>
    {children} {/* re-renders */}
  </Template>
</Layout>
```

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <DashboardSidebar />
      {children}
    </section>
  )
}
```

### 10.4 Kiến trúc: Microservices và API Gateways

**Microservices:** chia ứng dụng lớn thành các dịch vụ nhỏ, độc lập, mỗi dịch vụ quản lý 1 lĩnh vực (users, products, orders). Lợi ích: dễ phát triển, triển khai độc lập, linh hoạt công nghệ, chịu lỗi tốt.

**API Gateway:** điểm truy cập duy nhất cho client, định tuyến request đến microservice tương ứng. Nhiệm vụ: Authentication, rate limiting, logging, routing.

**Ví dụ luồng:**

```
User -> https://myapp.com/api/users/1
  -> API Gateway (xác thực token) -> route đến User Service
  -> User Service truy vấn DB -> trả kết quả về Gateway
  -> Gateway trả response về User
```

### 10.5 Hiệu suất: CDN và Chiến lược Bộ nhớ đệm

**CDN:** mạng máy chủ toàn cầu cache bản sao tài nguyên tĩnh (ảnh, JS, CSS) — phục vụ từ máy chủ gần nhất.

**Các lớp cache:**
- **Browser Cache:** trên máy người dùng.
- **CDN/Edge Cache:** tại vị trí edge của mạng lưới.
- **Server-Side Cache:** cho query DB, API calls (Redis, Memcached).

```ts
// In a Next.js Route Handler or Server Component
import { unstable_cache } from 'next/cache';
import { db } from '@/lib/db';

const getProducts = unstable_cache(
  async () => db.product.findMany(), // Expensive function
  ['products'], // Cache key
  { revalidate: 3600 } // Cache expires after 1 hour
);
```

### 10.6 Cơ sở dữ liệu: Các kỹ thuật mở rộng

- **Read Replicas:** WRITE đến DB chính, READ phân bổ đều cho các bản sao — hiệu quả cho ứng dụng read-heavy.
- **Sharding:** phân chia dữ liệu ngang trên nhiều DB (ví dụ: shard 1 = user A-M, shard 2 = user N-Z).
- **Connection Pooling:** dùng pool kết nối sẵn thay vì tạo mới mỗi request — tránh quá tải DB khi nhiều serverless functions chạy song song. Prisma, Neon, Supabase tích hợp sẵn.

### 10.7 Tổng kết phần 10

- Tổ chức module giúp dễ bảo trì, mở rộng.
- Layouts giảm lặp code, cải thiện điều hướng.
- Microservices + API Gateway: quản lý/triển khai độc lập, an toàn.
- CDN & Caching: tăng tốc toàn cầu, giảm tải server.
- Database Scaling: Read Replicas, Sharding, Connection Pooling.

---

## 11. Internationalization and Localization

### 11.1 Cài đặt i18n trong Next.js App Router

Next.js hỗ trợ sẵn định tuyến i18n mà không cần thư viện ngoài.

**Cấu trúc thư mục:** dùng route động `[lang]` chứa tất cả các trang.

**Middleware:** phát hiện ngôn ngữ ưu tiên (header `Accept-Language`) và redirect đến URL có tiền tố locale.

```
/
├── /app
│   └── /[lang]/ ...
├── /dictionaries
│   ├── en.json
│   └── vi.json
├── /i18n-config.ts       # Centralized i18n configuration
└── middleware.ts          # Handles language routing logic
```

```ts
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
```

### 11.2 Quản lý nội dung đa ngôn ngữ động

Lưu chuỗi văn bản trong file JSON, dùng dynamic `import()` để chỉ tải file ngôn ngữ cần thiết (code-splitting).

```ts
// lib/dictionary.ts
import 'server-only';
import type { Locale } from '@/i18n-config';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  vi: () => import('@/dictionaries/vi.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
```

```tsx
// app/[lang]/page.tsx
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang); // Load dictionary on the server
  return <button>{dict.products.addToCart}</button>;
}
```

### 11.3 Triển khai bố cục từ phải sang trái (RTL)

Tiếng Ả Rập (ar), tiếng Do Thái (he) yêu cầu RTL. Thêm `dir="rtl"` vào `<html>`; dùng CSS Logical Properties (`margin-inline-start`, `text-align: start`).

```tsx
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}
```

### 11.4 Chuyển đổi ngôn ngữ và Định tuyến theo khu vực

Dùng `usePathname` để lấy đường dẫn hiện tại và thay thế locale segment.

```
Luồng: /en/products -> nhấp "Tiếng Việt" -> link /vi/products -> render lại với lang="vi"
```

```tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, Locale } from '@/i18n-config';

export default function LanguageSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
      {i18n.locales.map((locale) => {
        const isCurrent = pathName.startsWith(`/${locale}`);
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              style={{ fontWeight: isCurrent ? 'bold' : 'normal', textDecoration: 'none' }}
            >
              {locale.toUpperCase()}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
```

### 11.5 Tổng kết phần 11

- Cấu trúc `[lang]`: nền tảng cho i18n routing.
- Middleware: tự động nhận diện & chuyển hướng theo locale.
- Server Components + Dynamic Imports: tải file dịch tối ưu.
- `dir` & CSS Logical Properties: hỗ trợ RTL chính xác.
- Language Switcher: can thiệp pathname để đổi ngôn ngữ.

---

## 12. Redux With Next.js (App Router)

### 12.1 Khi nào nên dùng Redux?

Cân nhắc dùng khi:
- **Complex and Global State:** state cần chia sẻ giữa nhiều component không quan hệ cha-con.
- **Complicated State Update Logic:** logic cập nhật phức tạp, cần cấu trúc rõ ràng (actions/reducers).
- **Cần Middleware:** xử lý async (API calls), logging, side effects nhất quán (`createAsyncThunk`).
- **Predictable State:** cần single source of truth + Redux DevTools.

```
Decision Tree: Redux with Next.js App Router

App có state phức tạp?
  No  -> Dùng useState, useReducer, Context API
  Yes -> Cần share state qua nhiều component?
           No  -> Pass props hoặc Context API
           Yes -> Cân nhắc dùng Redux
```

### 12.2 Các thư viện bắt buộc và Cài đặt

```bash
npm install @reduxjs/toolkit react-redux
```

- `@reduxjs/toolkit`: bộ công cụ chính thức.
- `react-redux`: kết nối store với React component.
- `redux`: thư viện lõi (dependency của toolkit).

### 12.3 Cấu trúc thư mục đề xuất

```
nextjs-redux-app/
├── package.json
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/
└── lib/
    ├── redux/
    │   ├── store.ts
    │   ├── provider.tsx
    │   └── features/
    │       └── counter/
    │           └── counterSlice.ts
```

### 12.4 Cấu hình Store sử dụng Redux Toolkit

```ts
// lib/redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
// Import other reducers here

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      // Add other reducers here
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
```

### 12.5 Tạo các Async Slices với `createAsyncThunk`

`createAsyncThunk` xử lý hành động bất đồng bộ, tự tạo 3 trạng thái action: `pending`, `fulfilled`, `rejected`.

```
Component Dispatches Action
  -> createAsyncThunk executes payload creator
    -> Makes API Call -> API returns a result
      -> Thunk dispatches fulfilled or rejected action
```

```ts
// features/counter/counterSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Create an async thunk to fetch a random amount
export const fetchIncrementAmount = createAsyncThunk(
  'counter/fetchIncrementAmount',
  async (amount: number) => {
    const response = await new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 1000)
    );
    return response.data;
  }
);
```

### 12.6 Xử lý Async Thunks trong Slices

Dùng `extraReducers` để lắng nghe trạng thái `pending`/`fulfilled`/`rejected`.

```ts
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  reducers: {
    // Synchronous reducers...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncrementAmount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIncrementAmount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value += action.payload; // Update state with data from API
      })
      .addCase(fetchIncrementAmount.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
```

### 12.7 Kết nối Redux Store với Next.js App Router

App Router ưu tiên Server Component — không dùng Provider trực tiếp trong `layout.tsx` gốc. Tạo `StoreProvider` là Client Component.

```tsx
// lib/redux/provider.tsx
'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './store'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
```

```tsx
// app/layout.tsx
import StoreProvider from '../lib/redux/provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
```

### 12.8 Sử dụng Redux trong Server và Client Components

**Client Components:** dùng `useSelector`/`useDispatch` như bình thường.

**Server Components:** không truy cập trực tiếp store (client-side state). **Pattern:** fetch initial data trong Server Component → truyền qua props cho Client Component → Client Component dispatch để khởi tạo Redux nếu cần.

```
Server Component --fetches data--> API
Server Component --passes props--> Client Component
Client Component --dispatches to--> Redux Store
```

### 12.9 Sử dụng Redux với Server Actions

**Quy trình:**
1. Client Component gọi Server Action.
2. Server Action thực thi logic trên máy chủ (ví dụ ghi DB).
3. Server Action trả về dữ liệu.
4. Client Component dùng dữ liệu trả về để dispatch action cập nhật Redux store.

```ts
// app/actions.ts
'use server'
import { revalidatePath } from 'next/cache'

export async function updateUser(data: any) {
  // Logic to update user on the server...
  const updatedUser = { name: 'New Name' }; // Mock returned data
  revalidatePath('/'); // Revalidate cache if needed
  return updatedUser;
}
```

```tsx
// app/some-client-component.tsx
'use client'
import { useDispatch } from 'react-redux'
import { updateUser as updateUserAction } from './actions'
import { userSlice } from '../lib/redux/features/userSlice'

function UserProfile() {
  const dispatch = useDispatch();

  const handleUpdate = async () => {
    const updatedUser = await updateUserAction({ id: 1 });
    // Use the returned data to update the Redux store
    dispatch(userSlice.actions.setUser(updatedUser));
  }

  return <button onClick={handleUpdate}>Update User</button>;
}
```

### 12.10 Tổng kết phần 12

- Chỉ dùng Redux cho state toàn cục, phức tạp, chia sẻ nhiều component.
- Cài đặt: `@reduxjs/toolkit` + `react-redux`.
- Tách logic Redux vào thư mục riêng (`lib/redux`).
- Dùng Client Component (`StoreProvider`) để cung cấp store trong `RootLayout`.
- Server Components: fetch data → truyền props → Client Components.
- Server Actions: gọi action, chờ phản hồi, dispatch kết quả vào store.

---

## 13. SEO Optimization for Next.js

### 13.1 Quản lý Metadata và Thẻ Head

`head.tsx` đã được thay bằng object `metadata`. Export từ `layout.tsx`/`page.tsx`; dùng `generateMetadata` cho giá trị động.

**Lợi ích:** SSR (bot crawler thấy ngay), Colocation (SEO nằm cạnh page), Dynamic (tự động theo dữ liệu fetch).

```tsx
// app/products/[id]/page.tsx
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
}

// Function to generate metadata dynamically
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Fetch product data
  const product = await fetch(`https://api.example.com/products/${params.id}`).then((res) => res.json())

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.imageUrl],
    },
  }
}

export default function ProductPage({ params }: Props) {
  return <h1>Product {params.id}</h1>
}
```

### 13.2 Tạo Sitemap Động

Thêm `sitemap.ts` vào `app/`, export hàm mặc định trả về mảng URL.

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next'

interface Post {
  id: string;
  updatedAt: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    {
      url: 'https://acme.com',
      lastModified: new Date(),
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
    },
  ];

  // Fetch dynamic routes (e.g., blog posts)
  const posts: Post[] = await fetch('https://api.example.com/posts').then((res) => res.json());

  const dynamicRoutes = posts.map((post) => ({
    url: `https://acme.com/blog/${post.id}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
```

### 13.3 Triển khai Dữ liệu có Cấu trúc với JSON-LD

Dữ liệu có cấu trúc (JSON-LD) giúp công cụ tìm kiếm hiểu nội dung và kích hoạt rich snippets (xếp hạng, giá cả, FAQ...) — cải thiện CTR.

Thêm trực tiếp vào Server Components bằng cách render thẻ `<script type="application/ld+json">`.

### 13.4 Tổng kết phần 13

- **Metadata** là chìa khóa: dùng `metadata` object và `generateMetadata`.
- **Sitemaps** hướng dẫn crawlers: `sitemap.ts` tự động tạo sitemap toàn diện.
- **JSON-LD** nâng cao kết quả tìm kiếm với rich snippets.
- **Hiệu suất chính là SEO:** Server Components, Streaming, Image Optimization giúp hiệu suất mobile hàng đầu.

---

## 14. Performance & Optimization (Nâng cao)

### 14.1 Phân tách mã & Import động

`next/dynamic` cho phép "tải lười" (lazy load) component nặng (thư viện biểu đồ, trình soạn thảo...) không cần thiết ở lần tải đầu — giảm bundle size, cải thiện Time to Interactive (TTI).

```
Initial Load: Lightweight Main JS Bundle (Fast Load)
After User Interaction: Heavy JS Chunk (Lazy Load after Interaction)
```

```tsx
// app/dashboard/page.tsx
'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'

// Tải lười component HeavyChart
const HeavyChart = dynamic(() => import('../components/HeavyChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false // Không render component này ở server
})

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false)

  return (
    <div>
      <h1>Main Dashboard</h1>
      <button onClick={() => setShowChart(true)}>Show Revenue Chart</button>
      {showChart && <HeavyChart />}
    </div>
  )
}
```

### 14.2 Tối ưu hóa hình ảnh với `next/image`

```tsx
import Image from 'next/image'
import heroImage from '../public/hero.png'

export default function HomePage() {
  return (
    <div>
      {/* priority: ưu tiên tải hình quan trọng (LCP) */}
      <Image
        src={heroImage}
        alt="Hero section image"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
```

### 14.3 Tối ưu hóa Font chữ với `next/font`

Giải quyết layout shift và request mạng thừa. **Self-hosting:** tải font từ Google Fonts tại build time, lưu cùng tài nguyên khác — loại bỏ request đến server Google. **Không gây xê dịch bố cục.** **Preloading:** tự thêm thẻ `preload` vào `<head>`.

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

### 14.4 Bộ nhớ đệm với `fetch`

- `cache: 'force-cache'` (mặc định): cache vô thời hạn — tốt cho dữ liệu ít/không đổi.
- `cache: 'no-store'`: luôn fetch mới — cho dữ liệu động.
- `next: { revalidate: number }` (ISR): cache theo thời gian, tự fetch lại nền.

```ts
async function Page() {
  const staticData = await fetch('https://...', { cache: 'force-cache' });
  const dynamicData = await fetch('https://...', { cache: 'no-store' });
  const revalidatedData = await fetch('https://...', {
    next: { revalidate: 10 }
  });

  return <div>...</div>
}
```

**Bộ nhớ đệm theo lớp với CDN (Vercel):**

- **Data Cache:** cache phía server cho kết quả fetch, điều khiển bởi `cache`/`revalidate`.
- **Full Route Cache:** trang render hoàn toàn bởi Server Components (không `no-store`/`cookies()`) được cache tại CDN.
- **CDN/Edge Cache:** gần người dùng nhất, phục vụ tài nguyên tĩnh + trang đã cache toàn cầu.

### 14.5 Công cụ phân tích Bundle

`@next/bundle-analyzer` trực quan hóa kích thước bundle — xác định thư viện lớn nhất, module thừa/trùng lặp, cơ hội tối ưu.

```js
// next.config.mjs
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Các cấu hình khác...
}

export default withBundleAnalyzer(nextConfig)
```

```bash
# package.json script
"analyze": "cross-env ANALYZE=true next build"

npm run analyze
```

### 14.6 Tổng kết phần 14

- Tải lười component nặng với `next/dynamic`.
- `next/image` xử lý tối ưu hóa, lazy loading, CDN — dùng `priority` cho LCP.
- `next/font` tránh layout shift, tối ưu tải trang.
- Chọn chiến lược cache fetch phù hợp cho từng loại dữ liệu.
- Phân tích bundle thường xuyên khi thêm dependencies lớn.

---

## 15. Advanced Next.js Features and Patterns

### 15.1 Sử dụng Middleware cho Custom Server Logic

Middleware chạy code trước khi request hoàn tất, trên Edge Functions của Vercel — gần người dùng, cực nhanh.

**Use cases:** Authentication (bảo vệ route qua session cookie), A/B Testing, Localization, Bot Protection.

```ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Nếu vào dashboard mà không có token, redirect login
  if (request.nextUrl.pathname.startsWith('/dashboard')
      && !request.cookies.has('token')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*',
}
```

### 15.2 Xây dựng máy chủ tùy chỉnh

**"Escape hatch"** — hạn chế sử dụng vì làm phức tạp deployment và vô hiệu hóa tính năng tối ưu của Next.js. Ưu tiên Middleware/Route Handlers.

**Khi nào cân nhắc:** WebSocket Integration, Complex Proxying, tích hợp Express cũ.

```js
// Ví dụ đơn giản hóa — yêu cầu express + next
const express = require('express');
const next = require('next');
const { createServer } = require('http');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/custom-route', (req, res) => {
    return res.json({ message: 'This is a custom route!' });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  createServer(server).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
```

### 15.3 Xuất HTML tĩnh & Hỗ trợ Serverless

Xuất thành tệp HTML/CSS/JS tĩnh, không cần server Node.js. Lý tưởng cho portfolio, blog, marketing sites, documentation.

**Hạn chế:** không API Routes, không Middleware, không ISR, dynamic routes cần `generateStaticParams`.

```js
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // nếu host tĩnh không hỗ trợ tối ưu ảnh
  },
};

export default nextConfig;
```

### 15.4 Tạo các tiện ích API có thể tái sử dụng

Thay vì mẫu "API Middleware" cũ, dùng hàm bậc cao (higher-order functions) bao bọc Route Handler — clean, DRY, testable. Phù hợp cho: Authentication, Input Validation, Error Handling & Logging.

```ts
// lib/api-utils.ts
import { type NextRequest, NextResponse } from 'next/server';

type RouteHandler = (req: NextRequest, params: any) => Promise<NextResponse>;

// Hàm nhận handler và trả về handler mới có logic auth
export function withAuthentication(handler: RouteHandler): RouteHandler {
  return async (req: NextRequest, params: any) => {
    const sessionToken = req.headers.get('Authorization');

    if (sessionToken !== 'Bearer my-secret-token') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Nếu authorized, gọi handler gốc
    return handler(req, params);
  };
}
```

```ts
// app/api/protected/route.ts
import { withAuthentication } from '@/lib/api-utils';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Logic thực tế của route
async function handler(req: NextRequest, params: any) {
  return NextResponse.json({ message: 'Success' });
}

// Bọc handler bằng tiện ích xác thực
export const GET = withAuthentication(handler);
```

### 15.5 Tổng kết phần 15

- **Middleware dành cho Edge:** logic toàn cục chạy trước render (auth, redirects, A/B testing).
- **Custom Servers hiếm khi dùng:** chỉ cho nhu cầu cụ thể như WebSockets.
- **Static Export:** tăng tốc, bảo mật, dễ mở rộng cho trang tĩnh; hiểu rõ hạn chế.
- **Tiện ích API bậc cao:** giữ Route Handlers sạch, tái sử dụng, single responsibility.

---

## Tổng kết chung

Tài liệu này bao quát toàn bộ vòng đời phát triển ứng dụng Next.js với App Router:

1. **Nền tảng:** cấu trúc `app/`, routing, Server/Client Components.
2. **Routing nâng cao:** dynamic, nested, catch-all routes, điều hướng.
3. **Data Fetching:** Server Components, SSG, SSR streaming, client-side, API Routes.
4. **Hiệu suất:** Image, code splitting, Suspense, caching, ISR, Core Web Vitals.
5. **Styling:** CSS Modules, Sass, styled-components, Tailwind CSS.
6. **State Management:** Context, Redux Toolkit, Zustand, Recoil, persistence, hydration.
7. **Auth:** NextAuth.js, custom auth với Server Actions, JWT, RBAC.
8. **Testing:** Unit (Jest/RTL), Integration, E2E (Cypress), Backend testing.
9. **Deployment:** Vercel, Netlify/CI-CD, Docker, Serverless/Edge Functions.
10. **Scalability:** tổ chức module, layouts, microservices, CDN, database scaling.
11. **i18n:** routing đa ngôn ngữ, dictionary động, RTL, language switcher.
12. **Redux:** tích hợp sâu với App Router, async thunks, Server Actions.
13. **SEO:** metadata động, sitemap, JSON-LD.
14. **Tối ưu nâng cao:** dynamic import, font optimization, bundle analysis.
15. **Tính năng nâng cao:** Middleware, custom server, static export, API utilities tái sử dụng.