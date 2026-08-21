# Tổng hợp ReactJS

> Tài liệu tổng hợp đầy đủ và chi tiết về ReactJS: từ khái niệm cơ bản, JSX, Component, State/Event, Styling, Forms, Lists & Keys, Router, Context, Redux, Middleware, cho đến tư duy thiết kế ứng dụng React và làm việc với RESTful API.

---

## Mục lục

1. [Getting Started with ReactJS](#1-getting-started-with-reactjs)
2. [Setting Up Your React Dev Environment Easily](#2-setting-up-your-react-dev-environment-easily)
3. [Exploring JSX and ReactJS Anatomy](#3-exploring-jsx-and-reactjs-anatomy)
4. [Component and Properties](#4-component-and-properties)
5. [Styling in React](#5-styling-in-react)
6. [State & Event](#6-state--event)
7. [Side effects](#7-side-effects)
8. [React Forms](#8-react-forms)
9. [Lists and Keys](#9-lists-and-keys)
10. [Creating Complex Components](#10-creating-complex-components)
11. [AJAX, Router, SSR](#11-ajax-router-ssr)
12. [Making Your Component Reusable](#12-making-your-component-reusable)
13. [Context](#13-context)
14. [Reacting with Redux](#14-reacting-with-redux)
15. [Thinking in React](#15-thinking-in-react)
16. [Interacting with RESTful APIs](#16-interacting-with-restful-apis)
17. [Middleware and Redux-thunk, Redux-saga](#17-middleware-and-redux-thunk-redux-saga)

---

## 1. Getting Started with ReactJS

### 1.1 Giới thiệu về ReactJS

- **Bản chất:** ReactJS là một thư viện JavaScript được tạo ra bởi Facebook và Instagram.
- **Cơ chế hoạt động:** Sử dụng khái niệm **Virtual DOM** (bản sao nhẹ, đại diện cho DOM thực tế) để kết xuất (render) có chọn lọc các thành phần dựa trên sự thay đổi của trạng thái (state).
- **Vai trò:** Dù là thư viện, ReactJS thường được coi là chữ **V (View)** trong mô hình kiến trúc **MVC** (Model-View-Controller).
- **Mục đích sử dụng:** Xây dựng các **Ứng dụng trang đơn** (Single Page Application - SPA).

### 1.2 Virtual DOM (Mô hình Đối tượng Tài liệu Ảo)

Trong React, ứng với mỗi đối tượng DOM thật, sẽ có một "đối tượng DOM ảo" tương ứng — một bản đại diện nhẹ (lightweight copy) của DOM thật.

**Cơ chế hoạt động:** Thay vì cập nhật trực tiếp lên Real DOM (tốn kém hiệu năng), React thao tác trên Virtual DOM. Khi dữ liệu ứng dụng thay đổi:

1. React tạo ra một cây Virtual DOM mới.
2. So sánh nó với cây cũ (diffing) để tìm ra điểm khác biệt.
3. Chỉ cập nhật những phần thực sự thay đổi lên Real DOM.

```
DOM
  ↑
React Virtual DOM
  ↑↓
JavaScript Logic
```

### 1.3 MVC (Model-View-Controller)

Luồng hoạt động của mô hình MVC:

- **Browser (Trình duyệt):** Người dùng thao tác, gửi yêu cầu (HTTP Request) đến hệ thống.
- **Controller (Bộ điều khiển):** Trung gian, tiếp nhận yêu cầu, truyền tham số thực thi sang Model.
- **Model (Mô hình dữ liệu):** Xử lý logic nghiệp vụ, tương tác cơ sở dữ liệu, trả về mảng dữ liệu kết quả.
- **View (Giao diện):** Nhận dữ liệu đã xử lý, kết xuất thành GUI, gửi phản hồi (HTTP Response) về Browser.

> ReactJS thường đảm nhiệm vai trò chữ "V" - View trong mô hình này.

### 1.4 Ứng dụng trang đơn (SPA)

- **Regular Website (trang web đa trang truyền thống):** Mỗi khi chuyển trang, trình duyệt phải yêu cầu và tải lại toàn bộ trang từ máy chủ → hiện tượng chớp màn hình.
- **Single Page App (SPA):** Trình duyệt chỉ tải cấu trúc trang một lần. Khi thao tác, hệ thống chỉ lấy thêm dữ liệu cần thiết và cập nhật một phần giao diện, không tải lại toàn trang → trải nghiệm mượt mà như ứng dụng desktop/mobile.

### 1.5 Những ai sử dụng ReactJS?

Các công ty công nghệ lớn sử dụng React minh chứng cho độ phổ biến và ổn định: **Instagram**, **PayPal**, **Yahoo!**, **Atlassian**.

### 1.6 Tải xuống ReactJS - Các tài liệu React

| Đường dẫn | Mô tả |
|---|---|
| https://react.dev/ | Trang tài liệu chính thức của React |
| https://github.com/facebook/react/ | Kho mã nguồn mở chính thức của React (Facebook/Meta) |
| https://github.com/enaqx/awesome-react | Kho tổng hợp thư viện, công cụ, tài nguyên hệ sinh thái React |

### 1.7 Các công cụ

**Trình soạn thảo văn bản (Code Editor) phổ biến:**

- Vim -- http://www.vim.org/download.php
- Emacs Editor -- https://www.gnu.org/software/emacs/
- Atom -- https://atom.io/
- Brackets -- http://brackets.io/
- VS Code -- https://code.visualstudio.com/ (được ưa chuộng nhất hiện nay cho React)

**Tiện ích mở rộng trên Chrome:**

- Chrome Web Store
- **React Developer Tools** — cực kỳ quan trọng, giúp inspect, xem cấu trúc component, debug ứng dụng React ngay trên trình duyệt.
- Chrome Developer Tools

### 1.8 Tại sao nên sử dụng ReactJS?

React đứng trong hàng ngũ các công cụ xây dựng UI phổ biến nhất hiện nay, thường được so sánh với **Vue.js** và **Riot.js**.

### 1.9 Tổng kết

- React là một thư viện JavaScript dùng để xây dựng giao diện người dùng (user interfaces).
- React được sử dụng để xây dựng các ứng dụng trang đơn (SPA).
- React cho phép tạo ra các thành phần giao diện (UI components) có thể tái sử dụng.

---

## 2. Setting Up Your React Dev Environment Easily

### 2.1 Làm quen với Create React

Thiết lập môi trường phát triển sao cho quá trình chuyển đổi từ JSX sang JS được xử lý như một phần của quá trình build. Trình duyệt sẽ tải ứng dụng và xử lý tệp JavaScript đã được chuyển đổi (và tối ưu hóa).

```
Code Editor → (Node, Webpack, Babel) → Browser
      JSX ─────────────────────────────► JS
```

### 2.2 Bước 1: Tạo dự án Vite

Sử dụng công cụ **Vite** từ command line, dùng **yarn** để cài đặt và chạy scripts.

```bash
yarn create vite
```

Lệnh này chạy tệp thực thi Vite từ npm registry, cấu hình công cụ scaffold cho môi trường React local, sau đó mở menu dòng lệnh để thiết lập dự án và chọn ngôn ngữ.

```
Output
yarn create v1.22.10
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Installed "create-vite@2.9.0" with binaries:
- create-vite
- cva
? Project name: » vite-project
```

Các bước tiếp theo: nhập tên dự án → chọn framework **React** → chọn ngôn ngữ **JavaScript** hoặc **TypeScript** → Vite cài đặt dependencies qua Yarn.

### 2.3 Bước 2: Khởi động máy chủ phát triển

```bash
yarn run dev
```

Mở trình duyệt tại `http://localhost:5173` sẽ thấy giao diện mặc định "Vite + React".

### 2.4 Bước 3: Xem trước ứng dụng từ điện thoại di động

Mặc định Vite không đưa app ra mạng nội bộ. Để xem trên điện thoại:

1. Dừng server hiện tại (`CTRL+C`).
2. Chạy lại với cờ `--host`:

```bash
yarn run dev --host
```

Kết quả:

```
VITE v4.0.4 ready in 747 ms
➜ Local:   http://localhost:5173/
➜ Network: http://your_ip_address:5173/
➜ press h to show help
```

### 2.5 Bước 4: Sử dụng Tailwind CSS với Vite và React

```bash
yarn add tailwindcss
```

Tạo `tailwind.config.js`:

```js
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // hoặc 'media' hoặc 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

### 2.6 Tổng kết

`create-react-app` (hay Vite) ẩn đi rất nhiều sự phức tạp liên quan đến việc tinh chỉnh Node, Babel, webpack. Đó là điểm mạnh lớn nhất, đồng thời cũng là điểm yếu lớn nhất — vì nó "che giấu" cấu hình bên dưới.

---

## 3. Exploring JSX and ReactJS Anatomy

### 3.1 JSX là gì?

JSX là một cú pháp mở rộng của JavaScript, có hình thức tương tự XML, dùng để xây dựng các UI components trong ReactJS.

```js
// JSX
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello World</div>;
  }
});

// tương đương JS thuần
var HelloMessage = React.createClass({
  displayName: "HelloMessage",
  render: function() {
    return React.createElement("div", null, "Hello World");
  }
});
```

**ReactElement:** là API cốt lõi của React, không có phương thức nào. Được tạo bằng `React.createElement`. ReactElement được gọi là Virtual DOM, không giống DOM element thật.

```
<elementname> Content here </elementname>
     ↑             ↑              ↑
 Opening tag     Content      Closing tag
```

### 3.2 Tại sao lại sử dụng JSX?

- JSX bổ sung tính năng viết thẻ HTML ngay bên trong JavaScript.
- Nếu tách biệt logic hiển thị / template / business code như MVC truyền thống → code lớn, khó bảo trì.
- JSX như một middleware chuyển đổi markup thành đối tượng mà React xử lý được.
- JSX giúp tăng tốc độ phát triển front-end.

```js
// tutorial10.js
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
```

### 3.3 Các công cụ để chuyển đổi JSX

```bash
npm i babel-plugin-transform-react-jsx
npm install -g react-tools
```

Ví dụ chuyển đổi:

```js
// In (JSX)
var profile = <div>
  <img src="avatar.png" className="profile" />
  <h3>{[user.firstName, user.lastName].join(' ')}</h3>
</div>;

// Out (JS)
var profile = React.createElement("div", null,
  React.createElement("img", { src: "avatar.png", className: "profile" }),
  React.createElement("h3", null, [user.firstName, user.lastName].join(' '))
);
```

### 3.4 Cấu trúc của ReactJS

**Đặt tên component** theo quy tắc **PascalCase** (viết hoa chữ cái đầu mỗi từ) — vừa là chuẩn phổ biến, vừa giúp phân biệt với biến khác.

```jsx
function Hello(props) {
  return <div>Hello {props.name}</div>;
}
```

**Render một component:**

```
QUÁ TRÌNH RENDER → TÍNH TOÁN SỰ KHÁC BIỆT TRÊN VIRTUAL DOM → CẬP NHẬT DOM THỰC
```

```jsx
ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);
```

**Số lượng phần tử gốc tối đa:** phương thức render chỉ trả về **một node duy nhất**. Nếu có nhiều thẻ, phải bọc trong một thẻ bao ngoài (div, span,...).

```jsx
function Hello() {
  return (
    <div>
      <h1>Hello React</h1>
      <h2>Have a good day!</h2>
    </div>
  );
}
```

**Component con (Children):**

```jsx
function Hello(props) {
  return <div>Hello {props.name} {props.children}</div>;
}

ReactDOM.render(
  <Hello name="World"> children text </Hello>,
  document.getElementById('container')
);
```

**Các thuộc tính được hỗ trợ:**

- `class` → viết thành `className`
- `for` → viết thành `htmlFor`
- Các thuộc tính tùy chỉnh `data-*`, `aria-*` đều được hỗ trợ.

### 3.5 Học JSX và những điều cần lưu ý

**Biểu thức:** đặt mã JavaScript trong cặp `{ }`.

```js
var label = '2 + 2';
var inputType = 'input';

// Note how I use JavaScript expressions/values via {} intermingled among JSX
var reactNode = <label>{label} = <input type={inputType} value={2+2} /></label>;
```

**Thuộc tính (props):** định nghĩa bằng cặp tên-giá trị trong biểu thức JSX (giống XML rồi chuyển thành HTML).

```
Opening Tag   Attribute Name   Attribute Value
    ↓               ↓                ↓
<Image style={{height:100, width:100}}
       source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
/>
    ↑
Self Closing Tag
```

**Truyền thuộc tính qua nhiều cấp component lồng nhau:**

```jsx
function Display(props) {
  return (
    <div>
      <p>{props.color}</p>
      <p>{props.num}</p>
      <p>{props.size}</p>
    </div>
  );
}

function Label(props) {
  return (
    <Display color={props.color}
             num={props.num}
             size={props.size} />
  );
}

function Shirt(props) {
  return (
    <div>
      <Label
        color={props.color}
        num={props.num}
        size={props.size} />
    </div>
  );
}

ReactDOM.render(
  <div>
    <Shirt color="steelblue" num="3.14" size="medium" />
  </div>,
  document.querySelector("#container")
);
```

```
DOMReact.render()
      ↓
    Shirt
      ↓
    Label
      ↓
   Display
```

`Shirt` phụ thuộc kết quả đầu ra của `Label`, `Label` lại phụ thuộc kết quả của `Display`.

**Các cú pháp khác:**

- **Mutating properties** (nên tránh):

```js
var component = <HelloMessage />
component.props.name = 'Testing'
```

- **Chú thích (Comments)** trong JSX: `{/* nội dung */}`
- **Khai báo lớp CSS:** dùng `className` thay vì `class`

```jsx
<button className="btn btn-over"></button>
```

### 3.6 Tổng kết

JSX là gì, cú pháp và lý do cần thiết. JSX giúp việc xây dựng component nhanh chóng và dễ đọc hơn.

---

## 4. Component and Properties

### 4.1 Component là gì?

Component cho phép chia nhỏ UI thành các phần độc lập, có thể tái sử dụng và xử lý/quản lý riêng biệt.

```
        render
         ╱  ╲
    state    props
    context   lifecycle events
```

### 4.2 Phân loại component

**Functional Components (dạng hàm):** nhận vào một object `props` duy nhất, trả về một React element.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**ES6 class:**

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

> Cho đến khi cần các tính năng bổ sung của class, ưu tiên functional components vì tính ngắn gọn.

### 4.3 Hiển thị component

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Các bước xảy ra:

1. Gọi `root.render()` với `<Welcome name="Sara"/>`.
2. React gọi component `Welcome` với props `{name: 'Sara'}`.
3. `Welcome` trả về `<h1>Hello, Sara</h1>`.
4. React DOM cập nhật DOM để hiển thị chính xác.

> **Lưu ý:** Luôn bắt đầu tên component bằng chữ cái viết hoa. Chữ thường → hiểu là thẻ DOM thông thường.

### 4.4 Thuộc tính của Component

**Properties:** Component có thể tùy chỉnh bằng các tham số khởi tạo gọi là **props**. Props **không thể bị thay đổi** một khi component đã render.

```
color="purple" size="large"
        ↓
color={this.props.color} size={this.props.size}
        ↓
color={this.props.color} size={this.props.size}
```

**Luồng dữ liệu với props:** truyền dữ liệu đến các component lồng nhau thông qua props — nguyên tắc cơ bản của React.

### 4.5 Hiển thị dữ liệu trong một component ReactJS

Ví dụ: hiển thị danh sách "Facebook User's list of likes" với các card thông tin (Astronomy, Richard Dawkins, Neil deGrasse Tyson, Carl Sagan).

### 4.6 Tổng kết

Truyền props cho component, render UI dựa trên đó, và làm cho component cha giao tiếp với component con — cấu hình Facebook Open-Graph API, tích hợp đăng nhập, render phản hồi API thành các component nhỏ hơn.

---

## 5. Styling in React

### 5.1 Hiển thị một số nguyên âm

```jsx
function Letter({ children }) {
  return <div>{children}</div>;
}
ReactDOM.render(
  <div>
    <Letter>A</Letter>
    <Letter>E</Letter>
    <Letter>I</Letter>
    <Letter>O</Letter>
    <Letter>U</Letter>
  </div>,
  destination
);
```

Ban đầu (chưa CSS) các chữ cái hiển thị đơn điệu, xếp dọc từ trên xuống. Sau khi định dạng: xếp hàng ngang, nằm trong hộp màu vàng đều nhau.

### 5.2 Sử dụng CSS thông thường trong React

React cuối cùng cũng xuất ra thẻ HTML thông thường, nên mọi kiến thức CSS đã học đều áp dụng được nguyên vẹn.

### 5.3 Tìm hiểu về mã HTML được sinh ra

```
Parent render:                    Final DOM:
<div>                             <div id="container">
  <Letter>A</Letter>                <div>
  <Letter>E</Letter>                  <div>A</div>
  <Letter>I</Letter>                  <div>E</div>
  <Letter>O</Letter>                  <div>I</div>
  <Letter>U</Letter>                  <div>O</div>
</div>                                <div>U</div>
                                     </div>
                                   </div>
```

```jsx
<div>
  {props.children}
</div>
```

### 5.4 Định dạng bằng Class

Gán class `letter` (bằng `className="letter"`) cho các div con → viết file CSS riêng, gọi `.letter` để style.

### 5.5 Tạo kiểu theo phong cách React (Inline Styles)

React thiên về **inline styles** thay vì file CSS rời — mục tiêu là biến Component thành "hộp đen" (little black boxes) tái sử dụng cao, không phụ thuộc file CSS ngoài.

```jsx
function Letter({ children }) {
  return <div>{children}</div>;
}
```

### 5.6 Tạo đối tượng Style

Quy tắc chuyển CSS → JS inline style object:

- **Thuộc tính một từ** (padding, margin, color): giữ nguyên.
- **Thuộc tính nhiều từ** (có gạch ngang): chuyển sang **camelCase**. Ví dụ: `background-color` → `backgroundColor`, `font-family` → `fontFamily`, `border-radius` → `borderRadius`.

```jsx
function Letter({ children }) {
  const letterStyle = {
    padding: 10,
    margin: 10,
    backgroundColor: "#FFDE00",
    color: "#333",
    display: "inline-block",
    fontFamily: "monospace",
    fontSize: 32,
    textAlign: "center",
  };
  return <div style={letterStyle}>{children}</div>;
}
ReactDOM.render(
  <div>
    <Letter>A</Letter>
    <Letter>B</Letter>
    <Letter>I</Letter>
    <Letter>O</Letter>
    <Letter>U</Letter>
  </div>,
  destination
);
```

### 5.7 Thực hành áp dụng kiểu dáng

Áp dụng màu sắc động cho từng chữ cái qua props:

```jsx
ReactDOM.render(
  <div>
    <Letter bgcolor="#58B3FF">A</Letter>
    <Letter bgcolor="#FF605F">E</Letter>
    <Letter bgcolor="#FFD52E">I</Letter>
    <Letter bgcolor="#49DD8E">O</Letter>
    <Letter bgcolor="#AE99FF">U</Letter>
  </div>,
  destination
);
```

Bên trong component, đặt `backgroundColor: this.props.bgColor` trong `letterStyle`.

### 5.8 Tổng kết

- React khuyến khích **inline styles** ngay trong JavaScript thay vì CSS truyền thống.
- JSX cho phép khai báo toàn bộ UI trong JavaScript với cú pháp giống HTML.
- Kỹ thuật tách biệt HTML/CSS/JS truyền thống hợp lý cho trang tài liệu, nhưng không hoàn toàn phù hợp với "ứng dụng web" hiện đại (component lồng ghép, tái sử dụng liên tục).
- Cần chọn lọc phương pháp hợp lý cho từng tình huống dự án.

---

## 6. State & Event

### 6.1 Thuộc tính (Props) so với Trạng thái (State)

| Props | State |
|---|---|
| Được khai báo khi component được tạo ra | Được khai báo bên trong định nghĩa (thân) component |
| Read-only, không thể sửa đổi từ bên trong component nhận nó | Có thể thay đổi bất đồng bộ, cập nhật qua `setState()` / `useState` |

### 6.2 Thêm một biến trạng thái (useState)

```js
import { useState } from 'react';

const [index, setIndex] = useState(0);
```

`[ ]` là **phân rã mảng** (array destructuring). `useState` luôn trả về mảng 2 phần tử: biến giá trị hiện tại (`index`) và hàm cập nhật (`setIndex`).

```js
function handleClick() {
  setIndex(index + 1);
}
```

### 6.3 Quá trình Render và Commit

Ẩn dụ nhà bếp — 3 bước:

1. **Triggering a render:** kích hoạt render (order xuống bếp).
2. **Rendering the component:** kết xuất component (đầu bếp nấu ăn).
3. **Committing to the DOM:** ghi nhận vào DOM (đặt món lên bàn).

### 6.4 Trạng thái như một bản chụp nhanh (Snapshot)

Khi React re-render:

1. Gọi lại hàm component.
2. Hàm trả về JSX mới (snapshot).
3. React cập nhật màn hình khớp với snapshot đó.

> Giá trị của State trong một lần render cụ thể là **cố định** — không thay đổi bất ngờ giữa chừng trong lần render đó.

### 6.5 Xếp hàng các Cập nhật Trạng thái (Batching)

React chờ toàn bộ code trong event handler chạy xong mới xử lý cập nhật state (giống người bồi bàn đợi gọi hết món rồi mới mang order xuống bếp).

**Cập nhật nhiều lần:** dùng **updater function** thay vì giá trị trực tiếp:

```js
setNumber(n => n + 1); // thay vì setNumber(number + 1)
setNumber(n => n + 1);
setNumber(n => n + 1);
```

React đưa các hàm này vào **hàng đợi (queue)** xử lý tuần tự.

### 6.6 Cập nhật Object trong State

- **Không thay đổi trực tiếp** (do not mutate) thuộc tính của object trong state.
- Tạo object mới (hoặc bản sao) rồi cập nhật state với bản sao đó.
- Dùng **object spread `...`**:

```js
setPerson({
  ...person, // Copy the old fields
  firstName: e.target.value // But override this one
});
```

### 6.7 Cập nhật Array trong State

**Tính bất biến (Immutable):** coi array trong state là bất biến.

| | avoid (mutates array) | prefer (returns new array) |
|---|---|---|
| adding | push, unshift | concat, `[...arr]` spread |
| removing | pop, shift, splice | filter, slice |
| replacing | splice, `arr[i] = ...` | map |
| sorting | reverse, sort | copy array first, rồi sort |

### 6.8 Ví dụ thực hành

Kết hợp State và Props xây dựng component xử lý thay đổi nội dung input (`Value input: abc`).

### 6.9 Hệ sinh thái sự kiện

**SyntheticEvent:** wrapper xuyên trình duyệt, đảm bảo sự kiện hoạt động đồng nhất trên mọi browser. Có API tương tự sự kiện gốc: `stopPropagation()`, `preventDefault()`.

**Phân loại sự kiện phổ biến** (viết theo camelCase):

- **Form events:** `onChange`, `onInput`, `onSubmit`...
- **Mouse events:** `onClick`, `onDoubleClick`, `onDrag`, `onDrop`, `onMouseEnter`, `onMouseLeave`...

**Thuộc tính/phương thức của SyntheticEvent:**

```
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
DOMEventTarget target
number timeStamp
string type
```

### 6.10 Tái sử dụng sự kiện

Cơ chế **pooled**: sự kiện bị **nullified** ngay sau khi callback chạy xong → không truy cập được trong tác vụ bất đồng bộ (setTimeout, gọi API).

**Cách giải quyết:**

1. **(Khuyên dùng)** Trích xuất thuộc tính cần vào biến tạm trước khi chạy tác vụ bất đồng bộ.
2. Gọi `event.persist()` để gỡ sự kiện khỏi cơ chế tái sử dụng.

```jsx
import React, { useState } from 'react';
function ClickComponent() {
  const [clickEvent, setClickEvent] = useState(null);
  const [eventType, setEventType] = useState('');
  const handleClick = (event) => {
    console.log(event); // => nullified object
    console.log(event.type); // => "click"
    const eventTypeTemp = event.type; // => "click"
    setTimeout(() => {
      console.log(event.type); // => null
      console.log(eventTypeTemp); // => "click"
    }, 0);
    setEventType(eventTypeTemp); // OK
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Last event type: {eventType}</p>
    </div>
  );
}
export default ClickComponent;
```

### 6.11 Xử lý sự kiện

Luồng tương tác: **User (Input)** → **Events** → **State** (event.target.value) → **View** (Changed view).

Ví dụ **Controlled Component**:

```jsx
const { useState } = React;
function App() {
  const [input, setInput] = useState('');
  function formUpdate(event) {
    setInput(event.target.value);
  }
  return (
    <div className="form-group container">
      <label>Controlled Form Input</label>
      <input
        type="text"
        className="form-control"
        aria-describedby="emailHelp"
        placeholder="Update input here"
        value={input}
        onChange={formUpdate}
      />
      <large className="form-text text-muted">{input}</large>
    </div>
  );
}
const destination = document.querySelector("#container");
ReactDOM.render(<App />, destination);
```

### 6.12 Ví dụ minh họa form

Ứng dụng "TutsPlus - React Form Tutorial" nhập First Name/Last Name → hiển thị "Your full name is Roy Agasthyan" — ví dụ tiêu biểu của Controlled Component kết hợp State và Event.

### 6.13 Tổng kết

2 nguyên lý thiết kế cốt lõi:

- **Cơ chế Re-render:** tạo cảm giác toàn bộ ứng dụng render lại mỗi khi có cập nhật.
- **Tối ưu hiệu suất bằng Virtual DOM:** React nhanh vì không tương tác trực tiếp DOM thật, dùng diff algorithm để chỉ cập nhật phần thay đổi.

---

## 7. Side effects

### 7.1 Synchronizing with Effects

Một số component cần đồng bộ hóa với hệ thống bên ngoài (điều khiển component không phải React, kết nối server, gửi analytics log...). **Effects** cho phép chạy mã sau khi render hoàn tất.

### 7.2 Cách viết một Effect (3 bước)

1. **Declare an Effect:** mặc định Effect chạy lại sau mỗi lần commit.
2. **Specify the Effect dependencies:** chỉ chạy lại khi thực sự cần thiết.
3. **Add cleanup if needed:** trả về cleanup function để dừng/hoàn tác.

```jsx
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Code here will run after *every* render
  });
  return <div />;
}
```

**Specify dependencies:**

```jsx
useEffect(() => {
  // ...
}, []);
```

```jsx
useEffect(() => {
  if (isPlaying) {
    // Biến được sử dụng ở đây...
  } else {
    // ...
  }
}, [isPlaying]); // ...nên nó phải được khai báo ở đây!
```

**Cleanup function:**

```jsx
useEffect(() => {
  function handleScroll(e) {
    console.log(window.scrollX, window.scrollY);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

> Trong development, React chạy Effect 2 lần để kiểm tra (add → remove → add lại) — tại một thời điểm chỉ có một subscription hoạt động, hành vi giống production.

### 7.3 Các phiên bản ES khác trong React

**ECMAScript (ES):** đặc tả ngôn ngữ kịch bản được chuẩn hóa bởi Ecma International (ECMA-262, ISO/IEC 16262), giúp các nền tảng triển khai JavaScript đồng nhất.

**Features ES6:**

- Block-Scoped Constructs `let` và `const`
- Arrow Function
- Rest Parameter
- Destructuring Assignment
- Default Parameters
- Template Literals
- Multi-line String
- Enhanced Object Literals
- Promises
- Classes

### 7.4 Tổng kết

Vòng đời (lifecycle) của một React component, các giai đoạn khác nhau, cách React render dựa trên thuật toán diffing (deltas giữa virtual DOM và actual DOM). Cách React.js hỗ trợ ECMAScript.

---

## 8. React Forms

### 8.1 Giới thiệu

Phần tử form trong HTML tự nhiên lưu giữ **state nội bộ**:

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

### 8.2 Các component được kiểm soát (Controlled Components)

Trong React, mutable state được lưu trong `state` của component, chỉ cập nhật qua `setState()` (hoặc `useState`).

```jsx
import React, { useState } from 'react';

function NameForm() {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    alert('A name was submitted: ' + value);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default NameForm;
```

### 8.3 Thẻ textarea

Trong HTML, `<textarea>` xác định nội dung qua children. Trong React dùng thuộc tính `value` thay thế.

```jsx
import React, { useState } from 'react';
function EssayForm() {
  const [value, setValue] = useState('Hãy viết một bài luận về phần tử DOM mà bạn yêu thích.');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    alert('Một bài luận đã được gửi: ' + value);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Bài luận:
        <textarea value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Gửi" />
    </form>
  );
}
export default EssayForm;
```

### 8.4 Thẻ select

```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

Trong React, dùng `value` trên thẻ `select` gốc thay vì `selected` — thuận lợi hơn cho controlled component.

```jsx
<select value={value} onChange={onChange}>
  {options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
</select>
```

> **Lưu ý:** có thể truyền một mảng vào `value` để chọn nhiều tùy chọn: `<select multiple={true} value={['B', 'C']}>`.

### 8.5 Thẻ input kiểu file

`<input type="file">` — giá trị chỉ đọc (read-only) → là **uncontrolled component** trong React.

### 8.6 Giá trị Null trong Input được kiểm soát

Chỉ định `value` sẽ ngăn người dùng thay đổi input trừ khi cho phép. Nếu input vẫn chỉnh sửa được dù đã set `value`, có thể đã vô tình đặt thành `undefined`/`null`.

```js
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```

### 8.7 Form action

```jsx
export default function Search() {
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }
  return (
    <form action={search}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
  );
}
```

### 8.8 Xử lý nhiều kiểu gửi biểu mẫu

```jsx
export default function Search() {
  function publish(formData) {
    const content = formData.get("content");
    const button = formData.get("button");
    alert(`'${content}' was published with the '${button}' button`);
  }
  function save(formData) {
    const content = formData.get("content");
    alert(`Your draft of '${content}' has been saved!`);
  }
  return (
    <form action={publish}>
      <textarea name="content" rows={4} cols={40} />
      <br />
      <button type="submit" name="button" value="submit">Publish</button>
      <button formAction={save}>Save draft</button>
    </form>
  );
}
```

### 8.9 Các thông tin khác

- **Giải pháp thay thế cho Controlled Components:** khi các controlled component trở nên tẻ nhạt (viết handler cho mọi thay đổi) → tìm hiểu **uncontrolled components**.
- **Giải pháp toàn diện:** **Formik** — thư viện validation, theo dõi field, xử lý submit; vẫn dựa trên nguyên tắc controlled components.

### 8.10 Tổng kết

Form giữ hành vi mặc định của HTML form (chuyển hướng trang khi submit) nếu muốn. Cách tiêu chuẩn để xử lý form trong React là **controlled components**.

---

## 9. Lists and Keys

### 9.1 Hiển thị nhiều Component

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

### 9.2 Component danh sách cơ bản

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

Thêm khóa (key) cho mục trong danh sách:

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
```

### 9.3 Khóa (Keys)

Keys giúp React nhận dạng mục nào đã thay đổi/thêm/xóa, cung cấp danh tính ổn định cho các phần tử trong mảng.

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

Cách tốt nhất: dùng **chuỗi nhận diện duy nhất** — thường là ID từ dữ liệu.

```jsx
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

### 9.4 Trích xuất các Component với Keys

Keys chỉ có ý nghĩa trong bối cảnh của **mảng bao quanh**. Giữ key trên phần tử `<ListItem/>` trong mảng, không đặt trên `<li>` bên trong chính ListItem.

```jsx
// ❌ Sai — Wrong! There is no need to specify the key here:
function ListItem(props) {
  const value = props.value;
  return (
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // ❌ Sai — Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>{listItems}</ul>
  );
}
```

### 9.5 Nhúng hàm map() vào trong JSX

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```

### 9.6 Tổng kết

- Danh sách có thể tiêu tốn hiệu năng, cần sử dụng cẩn thận.
- Đảm bảo mỗi mục có **khóa duy nhất**.
- Không nên dùng **chỉ số (index)** làm khóa trừ khi chắc chắn danh sách tĩnh.
- **Không bao giờ** dùng khóa không ổn định như `Math.random()`.
- Khóa không ổn định → suy giảm hiệu năng, hành vi không mong muốn.

---

## 10. Creating Complex Components

### 10.1 Từ Hình ảnh trực quan đến Component

Trong thực tế, yêu cầu triển khai React thường phức tạp hơn nhiều so với danh sách tên/nguyên âm đơn giản — dựa trên bản phác thảo, sơ đồ, ảnh chụp màn hình, bản comp thiết kế.

### 10.2 Xác định các Thành phần Trực quan Chính

Ví dụ: tạo lại một thẻ (card) màu bằng React — 2 bước:

1. **B1:** Xác định các thành phần trực quan chính.
2. **B2:** Xác định xem các component sẽ là gì.

Thẻ có hai vùng: hình vuông màu (không thể chia nhỏ thêm) và vùng trắng chứa mã màu hex (có thể tách nhãn khỏi vùng bao quanh).

### 10.3 Xác định các Component

- **Card:** container bên ngoài.
- **Square:** hiển thị màu sắc.
- **Label:** nhãn mã màu (vùng trắng bao quanh không trở thành component riêng).

```
FilterableComponent hierarchy:
Card
 ├── Square
 └── Label
```

### 10.4 Tạo các Component

```jsx
import React from 'react';
// Component: Square
const Square = () => {
  return (
    <br />
  );
};
// Component: Label
const Label = () => {
  return (
    <br />
  );
};
// Component: Card
const Card = () => {
  return (
    <br />
  );
};
```

### 10.5 Component Card

```jsx
function Card() {
  const cardStyle = {
    height: 200,
    width: 150,
    padding: 0,
    backgroundColor: "#FFF",
    boxShadow: "0px 0px 5px #666",
    margin: '10px'
  };
  return (
    <div style={cardStyle}>
    </div>
  );
}
root.render(
  <div style={{ display: 'flex' }}>
    <Card />
  </div>
);
```

### 10.6 Component Square

```jsx
function Square() {
  const squareStyle = {
    height: 150,
    backgroundColor: "#FF6663",
    borderRadius: '5px'
  };
  return (
    <div style={squareStyle}></div>
  );
}
```

### 10.7 Component Label

```jsx
function Label() {
  const labelStyle = {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    padding: "13px 0 0 0",
    margin: 0,
    textAlign: 'center',
    color: '#333'
  };
  return (
    <p style={labelStyle}>#FF6663</p>
  );
}
```

### 10.8 Tại sao Khả năng Kết hợp Component lại tuyệt vời?

Markup HTML thô sinh ra không biết component nào chịu trách nhiệm việc gì, không quan tâm khả năng kết hợp component hay việc truyền thuộc tính màu từ cha xuống con — trong khi cấu trúc component giải quyết rõ ràng vấn đề đó.

```html
<div id="container">
  <div>
    <div style="height: 200px; width: 150px; padding: 0px;
                background-color: rgb(255,255,255);
                box-shadow: rgb(102,102,102) 0px 0px 5px;">
      <div style="height: 150px; background-color: rgb(255,102,99);"></div>
      <p style="font-family: sans-serif; font-weight: bold;
                padding: 13px; margin: 0px;">
        #FF6663</p>
    </div>
  </div>
</div>
```

### 10.9 Tổng kết

Xác định component chỉ là một phần bài toán — phần còn lại là mang lại sức sống cho component (state, event, data flow). Với kinh nghiệm, có thể giảm bớt sự cứng nhắc của cách tiếp cận hai bước này.

---

## 11. AJAX, Router, SSR

### 11.1 Cơ bản về React Routes

**Giới thiệu:** React Router giúp UI đồng bộ với URL, có API đơn giản: lazy code loading, dynamic route matching, location transition handling.

```
http://localhost:3000/         index.html
http://localhost:3000/about  →  <BrowserRouter>
http://localhost:3000/topics       ↓
                              / , /about, /topics
                          Home / About / Topics Component <Route>
```

### 11.2 React-router

- **react-router:** thành phần cốt lõi định tuyến.
- **react-router-dom:** thành phần cho trình duyệt.
- **react-router-native:** thành phần cho React Native.

### 11.3 Installation

```bash
npx create-react-router@latest --template remix-run/react-router-templates/<template-name>
```

### 11.4 Tạo Router và Render

```jsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
```

### 11.5 Các tuyến đường lồng nhau

```jsx
createBrowserRouter([
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      { index: true, Component: Home },
      { path: "settings", Component: Settings },
    ],
  },
]);
```

```jsx
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* will either be <Home> or <Settings> */}
      <Outlet />
    </div>
  );
}
```

### 11.6 Các tuyến đường bố cục

Bỏ qua `path` trong route → tạo Nested Routes mới mà không thêm đoạn URL:

```jsx
createBrowserRouter([
  {
    // no path on this parent route, just the component
    Component: MarketingLayout,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: Contact },
    ],
  },
  {
    path: "projects",
    children: [
      { index: true, Component: ProjectsHome },
      {
        // again, no path, just a component for the layout
        Component: ProjectLayout,
        children: [
          { path: ":pid", Component: Project },
          { path: ":pid/edit", Component: EditProject },
        ],
      },
    ],
  },
]);
```

### 11.7 Các phân đoạn động

Phân đoạn bắt đầu bằng `:` → **phân đoạn động**, được cung cấp dưới dạng `params`.

```jsx
{
  path: "teams/:teamId",
  loader: async ({ params }) => {
    // params are available in loaders/actions
    let team = await fetchTeam(params.teamId);
    return { name: team.name };
  },
  Component: Team,
}
```

### 11.8 `<Prompt>`

Nhắc nhở người dùng trước khi điều hướng rời trang.

```jsx
import { Prompt } from 'react-router'

<Prompt
  when={formIsHalfFilledOut}
  message="Are you sure you want to leave?"
/>
```

- `message: string` — thông báo cố định.
- `message: func` — nhận `location` tiếp theo và `action`, trả về string hoặc `true`.

```jsx
<Prompt
  message={location =>
    location.pathname.startsWith("/app")
      ? true
      : `Are you sure you want to go to ${location.pathname}?`
  }
/>
```

- `when: bool` — bật/tắt điều hướng có điều kiện.

### 11.9 `<Redirect>`

Điều hướng đến vị trí mới, ghi đè vị trí hiện tại trong history stack (giống HTTP 3xx).

```jsx
import { Route, Redirect } from 'react-router'
<Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <PublicHomePage/>
  )
)}/>
```

Props chính:

- `to: string` — URL đích.
- `to: object` — `{ pathname, search, state }`.
- `from: string` — chỉ dùng trong `<Switch>`.
- `exact: bool` — khớp chính xác đường dẫn.
- `push: bool` — đẩy mục mới vào history stack thay vì ghi đè.

```jsx
<Redirect
  to={{
    pathname: "/login",
    search: "?utm=your+face",
    state: { referrer: currentLocation }
  }}
/>
```

### 11.10 `<Switch>`

Render component `<Route>`/`<Redirect>` **đầu tiên khớp** với vị trí hiện tại (độc quyền — exclusively), khác với các `<Route>` thông thường (render tất cả route khớp — inclusively).

```jsx
import { Switch, Route } from 'react-router'
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
```

### 11.11 Hiểu và sử dụng Links

```jsx
import { Link } from 'react-router-dom'
const Nav = () => (
  <Link to='/'>Home</Link>
)
```

`to` nhận string hoặc location object:

```jsx
<Link to={{
  pathname: '/me',
  search: '?sort=asc',
  hash: '#hash',
  state: { fromHome: true }
}} />
```

### 11.12 `<Link>` với `<NavLink>`

`NavLink` là lớp con của `Link`, bổ sung styling khi liên kết đang active:

```jsx
import { NavLink } from 'react-router-dom'

<NavLink
  to="/me"
  activeStyle=
  activeClassName="selected">
  My Profile
</NavLink>
```

### 11.13 Kết xuất phía máy chủ (Server-Side Rendering)

**Khái niệm:** SSR tạo toàn bộ HTML cho trang ngay trên server, gửi trang kết xuất hoàn chỉnh đến trình duyệt (kỹ thuật đưa SPA vốn chạy client-side lên chạy trên server).

**Cách hoạt động:**

```
Browser request → Server render (HTML + JS) → Page viewable
       → Browser executes React → Page interactable
```

**Ưu điểm (PROS):**

- SEO nhất quán.
- Hiệu suất: tải trang ban đầu nhanh.
- Hoạt động tốt với crawlers, SMO.

**Nhược điểm (CONS):**

- Yêu cầu thường xuyên (frequent requests).
- TTFB (Time to First Byte) chậm hơn.
- Kiến trúc phức tạp (Universal approach).

**Phương pháp triển khai:**

1. Kết xuất ban đầu trên server.
2. Gửi HTML định dạng đầy đủ.
3. Thực thi JavaScript.
4. React tiếp quản (Hydrate).

**Thách thức:** Routing giữa Server/Browser, dùng Redux trên server, Data Fetching.

### 11.14 Tổng kết

Định tuyến (routing) là khái niệm quan trọng của front-end — React Router v4+ theo phương pháp **declarative routing**.

AJAX cho phép lấy dữ liệu, cập nhật UI mà không tải lại trang — dùng `XMLHttpRequest` (phức tạp, có thể bọc lại hoặc dùng jQuery) hoặc **Fetch API** hiện đại (dùng polyfill nếu cần hỗ trợ trình duyệt cũ).

---

## 12. Making Your Component Reusable

### 12.1 Understanding Mixins

Câu hỏi phổ biến của người mới học React: "Làm thế nào để chia sẻ mã nguồn giữa nhiều component?"

```
   ┌───┐  ┌───┐  ┌───┐
   │   │  │   │  │   │
   └─┬─┘  └─┬─┘  └─┬─┘
     └──────┼──────┘
         ┌──┴──┐
         │     │      React Mixin
         └─────┘
```

### 12.2 Component bậc cao trong ECMA6 (HOC)

```
OriginalProps & ExternalProps → ExternalProps → [HOC: State → HOC Logic] → InjectedProps → Component
                                       └────────── OriginalProps ──────────────┘
```

### 12.3 Các loại xác thực khác nhau trong React

**Validations:** ngăn chặn người dùng nhập dữ liệu sai sớm nhất có thể (ví dụ: "Password is a required field").

**Validating props:** `PropTypes` cung cấp các trình xác thực (validators). Khi giá trị không hợp lệ → cảnh báo trên console (chỉ kiểm tra ở development mode vì lý do hiệu suất).

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ name }) => {
  return (
    <h1>Hello, {name}</h1>
  );
};

Greeting.propTypes = {
  name: PropTypes.string
};

Greeting.defaultProps = {
  name: 'Guest'
};

export default Greeting;
```

### 12.4 Cấu trúc của một React component

1. Khai báo dữ liệu của component (declaredData)
2. Kiểu thuộc tính (propType)
3. Phương thức vòng đời của component (Component lifecycle method)
4. Bên trong mỗi phương thức vòng đời này
5. Phương thức kết xuất (Render method)

### 12.5 Tổng kết

- Phát triển component có thể tái sử dụng (Mixins, trước ES6) và **Higher Order Components** (từ React 0.13, hỗ trợ ES6, không còn hỗ trợ Mixins).
- Validations là phần không thể thiếu, đặc biệt với dữ liệu đầu vào người dùng (form).
- Cấu trúc chung của một React component.

---

## 13. Context

### 13.1 Khi nào nên sử dụng Context

Context chia sẻ dữ liệu "toàn cục" cho cây component: thông tin user đã đăng nhập, theme, ngôn ngữ ưu tiên.

**Vấn đề "prop drilling":**

```jsx
function Button({ theme }) {
  const style = {
    backgroundColor: theme === 'dark' ? '#333' : '#FFF',
    color: theme === 'dark' ? '#FFF' : '#333',
    border: '1px solid #666',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer'
  };
  return <button style={style}>Themed Button</button>;
}
const ThemedButton = ({ theme }) => {
  return <Button theme={theme} />;
};
const Toolbar = ({ theme }) => {
  return (
    <div>
      <ThemedButton theme={theme} />
    </div>
  );
};
const App = () => {
  return <Toolbar theme="dark" />;
};
export default App;
```

**Giải quyết bằng Context:**

```jsx
import React, { useContext } from 'react';
const Button = ({ theme }) => {
  const style = {
    backgroundColor: theme === 'dark' ? '#333' : '#FFF',
    color: theme === 'dark' ? '#FFF' : '#333',
    border: '1px solid #666',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer'
  };
  return <button style={style}>Themed Button</button>;
};
const ThemeContext = React.createContext('light');

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return <Button theme={theme} />;
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
};
export default App;
```

### 13.2 Trước khi sử dụng Context

Context chủ yếu dùng khi dữ liệu cần truy cập bởi nhiều component ở nhiều cấp lồng ghép khác nhau. Hãy dùng **hạn chế** vì làm việc tái sử dụng component khó hơn.

**Kỹ thuật "component composition"** thường đơn giản hơn nếu chỉ tránh truyền vài props qua nhiều cấp:

```jsx
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... which renders ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... which renders ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
```

Truyền thẳng component `Avatar` xuống, các component trung gian không cần biết về `user`/`avatarSize`:

```jsx
function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// Now, we have:
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout userLink={...} />
// ... which renders ...
<NavigationBar userLink={...} />
// ... which renders ...
{props.userLink}
```

Có thể truyền nhiều children, hoặc nhiều "slots" riêng biệt:

```jsx
function Page(props) {
  const user = props.user;
  const content = <Feed user={user} />;
  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    </NavigationBar>
  );
  return (
    <PageLayout
      topBar={topBar}
      content={content}
    />
  );
}
```

### 13.3 API

**React.createContext**

```js
const MyContext = React.createContext(defaultValue);
```

Tạo đối tượng Context. `defaultValue` chỉ dùng khi không có Provider nào khớp phía trên trong cây (hữu ích khi test độc lập). Lưu ý: truyền `undefined` cho Provider **không** khiến component con dùng `defaultValue`.

**useContext**

Truyền dữ liệu xuống cây component mà không cần props qua component trung gian; thường kết hợp tạo provider + hook lấy giá trị.

```ts
const ThemeContext = createContext<Theme>("system");
const useGetTheme = () => useContext(ThemeContext);
```

### 13.4 Tổng kết

- Dùng Context khi cây component phát triển lớn theo chiều dọc và cần truyền props cho con mà không làm phiền component ở giữa.
- Dùng Context để quản lý state nâng cao bằng React Hooks, truyền state + hàm cập nhật đi khắp ứng dụng → tạo global state.

---

## 14. Reacting with Redux

### 14.1 Vấn đề Redux giải quyết

```
Without Redux:                    With Redux:
    ●                                 Store ⇄
   ╱ ╲                               ╱  │  ╲
  ●   ●                             ●   ●   ●
 ╱ ╲                               ╱ ╲ ╱ ╲
●   ●                             ●   ●   ●
```

**Component initiating change** — không dùng Redux thì dữ liệu phải truyền lên/xuống qua toàn bộ cấu trúc phân cấp.

### 14.2 Redux là gì?

Redux là một **vùng chứa trạng thái có thể dự đoán được** (predictable state container) cho ứng dụng JavaScript — dùng phổ biến với React, nhưng cũng dùng được với Angular, Vue.js, vanilla JS.

**Actions:** gói thông tin (payload) gửi dữ liệu đến store — nguồn cung cấp thông tin duy nhất.

**Reducers:** chỉ định cách state thay đổi để phản hồi action. Action chỉ mô tả **những gì đã xảy ra**, không mô tả cách state thay đổi.

```
DISPATCH {current state} {action} → REDUCER → NEW STATE → STORE
```

**Store:** chứa toàn bộ cây trạng thái ứng dụng. Cách duy nhất thay đổi state bên trong là **dispatch** một action, kích hoạt root reducer tính toán state mới.

```
Actions ⇄ Dispatcher
   ↑           ↓
 View    Reducer (R, R, R) → State
(React                          │
Components)  ←───────────────────┘
```

### 14.3 Sử dụng Redux Toolkit

**Cài đặt:**

```bash
npm i @reduxjs/toolkit react-redux
```

**Tạo Store:**

```js
export const store = configureStore({
  reducer: {
    someFeature: someFeatureReducer,
  },
});
```

**Reducers & Slices:**

```js
export const someSlice = createSlice({
  name: "someFeature",
  initialState,
  reducers: {
    someAction: (state) => {
      state.someValue = "something";
    },
    anotherAction: (state) => {
      state.someOtherValue = "something else";
    },
  },
});
```

```js
export const store = configureStore({
  reducer: {
    someFeature: someSlice.reducer,
    ...
  },
});
```

**Cung cấp store cho các component React:**

```jsx
<Provider store={store}>
  <SomeComponent />
  <AnotherComponent />
</Provider>
```

**Truy cập store từ component (useSelector):**

```js
const someValue = useSelector(
  (state: RootState) => state.someFeature.someValue
);
```

**Dispatch actions (useDispatch):**

```jsx
const dispatch = useDispatch();
return (
  <button onClick={() => dispatch(someSlice.actions.someAction())}>
    Some button
  </button>
);
```

### 14.4 Kết luận

Redux khắc phục một số thiếu sót mà React coi là lợi thế (luồng dữ liệu luân chuyển). Tuy nhiên Redux **không hoàn hảo** — không phải mọi bài toán liên quan dữ liệu đều cần Redux. Đôi khi thêm Redux làm tăng độ phức tạp không cần thiết.

---

## 15. Thinking in React

### 15.1 Bắt đầu với một bản thiết kế (Mock)

Từ một JSON API và bản thiết kế (mock) từ designer — ví dụ bảng sản phẩm có Search box, checkbox "Only show products in stock", cột Name/Price theo danh mục (Sporting Goods, Electronics).

```json
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
```

### 15.2 Bước 1: Chia nhỏ giao diện người dùng thành Cấu trúc phân cấp Component

5 component:

- **FilterableProductTable** (màu cam): chứa toàn bộ ví dụ.
- **SearchBar** (màu xanh dương): nhận tất cả dữ liệu đầu vào của người dùng.
- **ProductTable** (màu xanh lá): hiển thị và lọc tập hợp dữ liệu.
- **ProductCategoryRow** (màu ngọc lam): hiển thị tiêu đề cho mỗi danh mục.
- **ProductRow** (màu đỏ): hiển thị một hàng cho mỗi sản phẩm.

**Cấu trúc phân cấp:**

```
FilterableProductTable
 ├── SearchBar
 └── ProductTable
      ├── ProductCategoryRow
      └── ProductRow
```

### 15.3 Bước 2: Xây dựng một phiên bản tĩnh trong React

Xây dựng các component tái sử dụng component khác, truyền dữ liệu qua **props**. **Đừng dùng state** cho phiên bản tĩnh — state chỉ dành cho tính tương tác (dữ liệu thay đổi theo thời gian).

> **Props vs State:** đọc kỹ tài liệu chính thức nếu chưa chắc chắn về sự khác biệt.

### 15.4 Bước 3: Xác định biểu diễn State tối thiểu (nhưng đầy đủ) của UI

Các phần dữ liệu:

- Danh sách sản phẩm ban đầu
- Đoạn text tìm kiếm người dùng nhập
- Giá trị checkbox
- Danh sách sản phẩm đã lọc

**3 câu hỏi xác định state:**

1. Nó có được truyền từ component cha qua props không? → có thể **không phải** state.
2. Nó có không đổi theo thời gian không? → có thể **không phải** state.
3. Có thể tính toán dựa trên state/props khác không? → **không phải** state.

### 15.5 Bước 4: Xác định vị trí đặt State của bạn

Cốt lõi React: **luồng dữ liệu một chiều** (one-way data flow) đi xuống theo cấu trúc phân cấp.

**Các bước xác định:**

1. Xác định mọi component hiển thị thứ gì đó dựa trên state đó.
2. Tìm một **component cha chung** (nằm trên tất cả component cần state đó).
3. Component cha chung đó (hoặc component cao hơn) sở hữu state.
4. Nếu không tìm được component hợp lý → tạo component mới chỉ để lưu state.

### 15.6 Bước 5: Thêm luồng dữ liệu ngược

Khi người dùng thay đổi form → cập nhật state phản ánh input. Vì component chỉ nên cập nhật state của chính mình, `FilterableProductTable` truyền **callback** cho `SearchBar`. Dùng sự kiện `onChange` để nhận thông báo — callback gọi `setState()`, ứng dụng cập nhật.

### 15.7 Tổng kết

Code được **đọc** nhiều hơn được **viết**. Đoạn code rõ ràng, mang tính mô-đun (modular) rất dễ đọc. Khi xây dựng thư viện component lớn, sự rõ ràng và tính mô-đun này càng đáng trân trọng — nhờ tái sử dụng code, số dòng code sẽ giảm dần.

---

## 16. Interacting with RESTful APIs

### 16.1 RESTful API là gì?

Phong cách kiến trúc API sử dụng các yêu cầu HTTP để truy cập, sử dụng dữ liệu: **GET**, **PUT**, **POST**, **DELETE** — tương ứng đọc (reading), cập nhật (updating), tạo mới (creating), xóa (deleting).

```
Client ⇄ REST API ⇄ Server
```

### 16.2 Các thành phần chính của RESTful API

- **Client:** đoạn mã/ứng dụng yêu cầu tài nguyên từ server.
- **Server:** đoạn mã/ứng dụng kiểm soát tài nguyên, phản hồi yêu cầu.
- **Resource:** dữ liệu/nội dung (văn bản, video, hình ảnh) server kiểm soát và cung cấp.

**Yêu cầu HTTP gồm 4 phần chính:**

- **HTTP method:** GET, PUT, POST, DELETE...
- **Endpoint:** vị trí lưu trữ tài nguyên.
- **Header:** thông tin chi tiết cho lời gọi/phản hồi.
- **Body:** dữ liệu gửi/nhận.

**Ánh xạ HTTP method ↔ CRUD:**

| Method | Thao tác |
|---|---|
| POST | Create (Tạo mới) |
| GET | Read (Đọc/Lấy dữ liệu) |
| PUT | Update (Cập nhật toàn bộ) |
| PATCH | Update (Cập nhật một phần) |
| DELETE | Delete (Xóa) |

### 16.3 Lợi ích của RESTful API

- **Simplicity:** dùng phương thức HTTP phổ biến, dễ thiết kế/triển khai/sử dụng.
- **Independence:** độc lập nền tảng, dùng bất kỳ ngôn ngữ lập trình nào.
- **Flexible:** hỗ trợ nhiều định dạng (JSON, XML, plain text).
- **Scalable:** stateless → hỗ trợ horizontal scaling.
- **Cacheable:** hỗ trợ caching.
- **Secure:** bảo mật qua Open Authorization.
- **Compatible:** versioning hợp lý, tương thích ngược.

### 16.4 Ví dụ về một RESTful endpoint

```
GET https://api.example.com/users/1234
```

Mẫu URL phổ biến:

- `/users` — Quản lý tài khoản người dùng
- `/posts` — Truy cập bài đăng blog
- `/posts/{postId}` — Xử lý chi tiết một bài đăng
- `/reports?type=sales` — Lọc danh sách báo cáo

### 16.5 Tạo một RESTful API (JSON Server)

```bash
npm i -D json-server@0.17.4
```

Tạo `db.json`:

```json
{
  "posts": [
    {
      "title": "Getting started with fetch",
      "description": "How to interact with backend APIs using fetch",
      "id": 1
    },
    {
      "title": "Getting started with useEffect",
      "description": "How to use React's useEffect hook for interacting with backend APIs",
      "id": 2
    }
  ]
}
```

Thêm script trong `package.json`:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "server": "json-server --watch db.json --port 3001"
}
```

```bash
npm run server
```

### 16.6 Cài đặt Axios

```bash
npm install axios
```

### 16.7 Sử dụng hook useEffect với Axios

```jsx
import axios from "axios";

function App() {
  const [postData, setPostData] = useState([]);

  const fetchPostsData = async () => {
    const response = await axios.get("http://localhost:3001/posts");
    setPostData(response.data);
  };

  useEffect(() => {
    fetchPostsData();
  }, []);

  console.log(postData);
}
```

### 16.8 Kết luận

RESTful API mang lại phương pháp đơn giản nhưng mạnh mẽ để xây dựng dịch vụ web có khả năng mở rộng. Kiến trúc xoay quanh tài nguyên trung tâm, truy xuất qua HTTP method tiêu chuẩn — giúp phát triển ứng dụng kết nối dễ dàng hơn. REST là cốt lõi của API hiện đại, linh hoạt theo thời gian.

---

## 17. Middleware and Redux-thunk, Redux-saga

### 17.1 Middleware là gì?

Đoạn mã trung gian giữa yêu cầu (request) và phản hồi (response). Nhận yêu cầu, thực thi lệnh tương ứng, phản hồi hoặc chuyển tiếp cho middleware khác trong hàng đợi. Xử lý dữ liệu, dịch vụ ứng dụng, nhắn tin, xác thực, quản lý API.

### 17.2 Middleware trong Redux

Điểm trung gian nằm giữa lúc dispatch action và trước khi reducer nhận được action.

```
dispatch action → middleware → reducer
```

```
Actions ⇄ API
   ↑        ↑
 View  Middlewares → Dispatcher → Reducer (R,R,R) → State
                          Store
```

### 17.3 Giới thiệu Redux Thunk

**Redux-Thunk:** middleware cho phép viết **action creators** trả về một **hàm** thay vì object action. Hàm nhận `dispatch` và `getState` của store làm đối số → cho phép dispatch nhiều action, thực hiện thao tác bất đồng bộ, truy cập state hiện tại.

```js
// gửi (dispatching) các hàm thunk
const thunkFunction = (dispatch, getState) => {
  // Viết logic ở đây, có thể gửi các action hoặc đọc state
}
store.dispatch(thunkFunction)
```

```js
export const fetchTodoById = todoId => async dispatch => {
  const response = await client.get(`/fakeApi/todo/${todoId}`)
  dispatch(todosLoaded(response.todos))
}
```

Dispatch action creator:

```jsx
function TodoComponent({ todoId }) {
  const dispatch = useDispatch()

  const onFetchClicked = () => {
    // Calls the thunk action creator, and passes the thunk function to dispatch
    dispatch(fetchTodoById(todoId))
  }
}
```

**Các trường hợp sử dụng phổ biến:**

- Chuyển logic phức tạp ra khỏi component.
- Thực hiện yêu cầu bất đồng bộ (async requests).
- Viết logic dispatch nhiều action liên tiếp/theo thời gian.
- Truy cập `getState` để đưa ra quyết định hoặc gộp thêm giá trị state vào action.

### 17.4 Giới thiệu Redux Saga

**redux-saga:** thư viện giúp quản lý **side effects** (tác vụ bất đồng bộ như fetch data, truy cập cache trình duyệt) dễ quản lý, thực thi hiệu quả, dễ test, xử lý lỗi tốt hơn.

**Mô hình tư duy:** một saga giống như một **thread** chạy ngầm riêng biệt, chỉ chịu trách nhiệm xử lý side effects.

```
Redux Saga ⇄ IO (APIs, Console, DB)
    │  call, apply
  Sagas (□ □ □ □) ⇄ call, apply, fork, spawn, join, cancel
    │  put, select, take
  Redux Store
```

### 17.5 Ví dụ Hello Sagas

```ts
// sagas.ts
export function* helloSaga() {
  console.log('Hello Sagas!')
}
```

Để chạy Saga:

1. Tạo Saga middleware kèm danh sách Saga.
2. Kết nối Saga middleware với Redux store.

```js
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './sagas'

// Tạo saga middleware
const sagaMiddleware = createSagaMiddleware()

// Kết nối vào store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// Chạy saga
sagaMiddleware.run(helloSaga)
```

### 17.6 Kết luận

Middleware là một trong những thành phần quan trọng nhất trong dự án cần xử lý side effects hoặc làm việc với server. Có nhiều thư viện middleware Redux: `redux-saga`, `redux-thunk`, `redux-promise`... Redux-thunk và Redux-saga là các thư viện phổ biến giúp sử dụng middleware dễ dàng, đơn giản.
