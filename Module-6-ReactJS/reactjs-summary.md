# Tổng hợp kiến thức ReactJS

Tài liệu này tóm tắt các khái niệm quan trọng khi làm việc với ReactJS. Mỗi phần gồm định nghĩa, nguyên tắc và ví dụ ngắn.

## 1. Getting Started with ReactJS

- React là thư viện UI do Facebook phát triển, tập trung vào xây dựng giao diện bằng component.
- Key ideas: component-based, declarative, unidirectional data flow.
- Cài nhanh bằng `create-react-app`, `Vite` hoặc tích hợp vào project hiện có.

Ví dụ khởi tạo nhanh với Vite:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

## 2. Setting Up Your React Dev Environment Easily

- Tools: Node.js, npm/yarn/pnpm, editor (VS Code), ESLint, Prettier, TypeScript (tuỳ chọn).
- Dev server: Vite (nhanh), Create React App, Next.js (kèm SSR).
- Extensions hữu ích: ESLint, Prettier, React Developer Tools (Chrome), TypeScript language support.
- Tổ chức project: `src/components`, `src/pages`, `src/hooks`, `src/utils`, `src/services`.

## 3. Exploring JSX and the ReactJS Anatomy

- JSX: cú pháp nhúng HTML trong JavaScript. Trông giống HTML nhưng là biểu diễn gọi `React.createElement`.
- Lưu ý: dùng `className` thay vì `class`, `htmlFor` thay vì `for`.
- JSX có thể nhúng biểu thức JS: `{expression}`.

Ví dụ:

```jsx
function Hello({ name }) {
  return <div className="greeting">Xin chào, {name}!</div>;
}
```

## 4. Component and Properties

- Component dạng hàm (Function Component) và class component (ít dùng mới).
- Props: dữ liệu được truyền từ component cha xuống con, immutable trong con.
- Default props và prop-types (hoặc TypeScript) để kiểm tra kiểu.

Ví dụ component nhận props:

```jsx
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
```

## 5. Styling in React

- Options:
  - CSS files (global)
  - CSS Modules (`Component.module.css`) để tránh tên trùng
  - Styled-components / Emotion (CSS-in-JS)
  - Tailwind CSS (utility-first)
- Lưu ý: scoping, theming, và performance (critical CSS).

Ví dụ CSS Module:

```jsx
import styles from './Card.module.css';

function Card() {
  return <div className={styles.card}>Nội dung</div>;
}
```

## 6. State & Event

- `useState` để lưu state trong function component.
- Events: synthetic events của React, ví dụ `onClick`, `onChange`.
- State updates có thể bất đồng bộ; dùng callback nếu phụ thuộc vào state cũ.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 1)}>Thêm</button>
    </div>
  );
}
```

## 7. Side Effects

- `useEffect` dùng để chạy side-effects (fetch, subscriptions, DOM manipulations).
- Quy tắc: chỉ dùng hooks ở top-level, không gọi trong điều kiện.
- Clean-up function trả về trong `useEffect` để huỷ subscriptions.

Ví dụ fetch dữ liệu:

```jsx
import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let mounted = true;
    fetch('/api/users')
      .then(r => r.json())
      .then(data => { if (mounted) setUsers(data); });
    return () => { mounted = false; };
  }, []);
  return <div>{users.length} users</div>;
}
```

## 8. React Forms

- Có 2 kiểu: controlled và uncontrolled components.
- Controlled: value được bind với state, dễ validate và quản lý.
- Uncontrolled: dùng ref để đọc giá trị, ít code hơn cho form đơn giản.

Ví dụ controlled form:

```jsx
function Login() {
  const [email, setEmail] = useState('');
  const handleSubmit = e => { e.preventDefault(); /* xử lý */ };
  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Đăng nhập</button>
    </form>
  );
}
```

## 9. Lists and Keys

- Khi render danh sách, luôn cung cấp `key` duy nhất cho mỗi item.
- Key giúp React tối ưu việc tái sử dụng DOM nodes; không dùng chỉ số mảng khi có thể thay đổi thứ tự.

```jsx
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```

## 10. Creating Complex Components

- Tách component nhỏ, rõ ràng trách nhiệm (single responsibility).
- Composition over inheritance — dùng children, render props, hoặc hooks để chia sẻ logic.
- Performance: memoization (`React.memo`, `useMemo`, `useCallback`) khi cần.

Ví dụ composition:

```jsx
function Modal({ children, onClose }) {
  return (
    <div className="overlay">
      <div className="modal">{children}<button onClick={onClose}>Close</button></div>
    </div>
  );
}
```

## 11. Router, SSR

- Router: dùng `react-router-dom` cho SPA routing. Khái niệm: `BrowserRouter`, `Routes`, `Route`, `Link`, `useParams`, `useNavigate`.
- SSR (Server-Side Rendering): Next.js là framework phổ biến cho SSR, SSG (static-site generation).
- SSR giúp SEO và time-to-first-render tốt hơn.

Ví dụ cơ bản `react-router`:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 12. Making Your Component Reusable

- Thiết kế API rõ ràng: props có tên tốt, ít phụ thuộc vào implementation details.
- Expose callback props (`onSomething`) và composability (`children`, render props).
- Document props và prop types / TypeScript interfaces.

## 13. Context

- `React.createContext` cung cấp cách truyền dữ liệu cho nhiều component mà không cần prop drilling.
- Dùng `Context.Provider` để đưa value, `useContext` để tiêu thụ.
- Tránh lạm dụng Context cho state thường xuyên thay đổi (có thể gây re-render lớn).

```jsx
const ThemeContext = React.createContext('light');

function App(){
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(){
  const theme = useContext(ThemeContext);
  return <div className={theme}>...</div>;
}
```

## 14. Reacting with Redux

- Redux là state container cho ứng dụng lớn cần predictable state management.
- Core: `store`, `reducers`, `actions`. Dùng `@reduxjs/toolkit` (RTK) để viết ít boilerplate hơn.
- Kết nối với React: `react-redux` cung cấp `Provider`, `useDispatch`, `useSelector`.

Ví dụ RTK slice:

```js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

## 15. Thinking in React

- Bước: 1) Break UI into components, 2) Build static version, 3) Identify minimal state, 4) Add inverse data flow (top-down), 5) Lift state up khi cần.
- Nguyên tắc: state nên ở component gần nhất dùng nó, tránh duplication.

## 16. RESTful APIs with React

- Patterns: fetch/axios trong `useEffect`, custom hooks (`useFetch`, `useAxios`) để tái sử dụng logic.
- Xử lý loading, success, error states; debounce, caching cơ bản.

Ví dụ custom hook:

```jsx
import { useState, useEffect } from 'react';

function useFetch(url){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{
    let canceled=false;
    fetch(url)
      .then(r=>r.json())
      .then(d=>{ if(!canceled){ setData(d); setLoading(false); } })
      .catch(e=>{ if(!canceled){ setError(e); setLoading(false); } });
    return ()=>{ canceled=true; };
  },[url]);
  return { data, loading, error };
}
```

## 17. Middleware and Redux-thunk, Redux-saga

- Middleware: phần mở rộng cho Redux dispatch pipeline (ví dụ logging, async).
- `redux-thunk`: middleware phổ biến cho async action bằng cách trả về function thay vì action object.
- `redux-saga`: dùng generator functions để xử lý side-effects phức tạp (saga watchers/workers), dễ test hơn ở quy mô lớn.

Ví dụ thunk:

```js
export const fetchUsers = () => async dispatch => {
  dispatch(usersLoading());
  try {
    const res = await fetch('/api/users');
    const data = await res.json();
    dispatch(usersReceived(data));
  } catch (err) {
    dispatch(usersFailed(err.toString()));
  }
};
```

Ví dụ saga (ý tưởng):

```js
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchUsers() {
  try {
    const users = yield call(fetch, '/api/users');
    const data = yield users.json();
    yield put({ type: 'USERS_RECEIVED', payload: data });
  } catch (e) {
    yield put({ type: 'USERS_FAILED', message: e.message });
  }
}

function* mySaga() {
  yield takeEvery('USERS_REQUESTED', fetchUsers);
}
```

---

Kết luận ngắn: tập trung vào componentization, hooks, và unidirectional data flow. Dùng tools hiện đại (Vite, RTK, React Query / SWR cho data fetching) để giảm boilerplate và tăng năng suất.
