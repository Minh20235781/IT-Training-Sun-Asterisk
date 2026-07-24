# Tổng Hợp Kiến Thức HTML

Tài liệu này tổng hợp các kiến thức từ cơ bản đến nâng cao về HTML, bao gồm lý thuyết, cấu trúc và các ví dụ minh họa chi tiết cho từng phần.

---

## 1. Giới thiệu HTML

### 1.1 Lịch sử HTML
HTML (HyperText Markup Language) được tạo ra bởi Tim Berners-Lee vào năm 1989. Từ phiên bản đầu tiên, HTML đã trải qua nhiều lần nâng cấp, và phiên bản hiện tại đang được sử dụng phổ biến nhất là HTML5 (phát hành năm 2014), mang lại nhiều tính năng mới hỗ trợ đa phương tiện và cấu trúc ngữ nghĩa tốt hơn.

### 1.2 Cấu trúc cơ bản của một trang HTML
Một tài liệu HTML luôn có một cấu trúc chuẩn bao gồm khai báo phiên bản và các phần tử gốc, phần đầu (head) và phần thân (body).

**Ví dụ cấu trúc chuẩn:**
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Tiêu đề trang web</title>
</head>
<body>
    <h1>Chào mừng đến với trang web của tôi</h1>
    <p>Đây là một đoạn văn bản.</p>
</body>
</html>
```

### 1.3 Trình soạn thảo HTML
Bạn có thể viết HTML bằng các trình soạn thảo văn bản đơn giản như Notepad (Windows) hoặc TextEdit (Mac). Tuy nhiên, các lập trình viên thường dùng các trình soạn thảo chuyên nghiệp (IDE/Code Editor) như **Visual Studio Code**, **Sublime Text**, hoặc **Notepad++** để có các tính năng hỗ trợ như tô màu cú pháp (syntax highlighting) và tự động hoàn thành mã.

---

## 2. HTML Tags (Các thẻ HTML)

### Khái niệm
Các thẻ HTML (Tags) được dùng để định dạng các nội dung khác nhau trên trang web. Hầu hết các thẻ đều có **thẻ mở** (`<tenthe>`) và **thẻ đóng** (`</tenthe>`), bao bọc nội dung ở giữa.

### 2.1 HTML Paragraph (Đoạn văn bản)
Sử dụng thẻ `<p>` để định nghĩa một đoạn văn.

**Ví dụ:**
```html
<p>Đây là đoạn văn bản thứ nhất.</p>
<p>Đây là đoạn văn bản thứ hai.</p>
```

### 2.2 HTML Links (Liên kết)
Sử dụng thẻ `<a>` để tạo các đường link liên kết.

**Ví dụ:**
```html
<a href="https://www.google.com" target="_blank">Truy cập Google</a>
```

### 2.3 HTML Images (Hình ảnh)
Sử dụng thẻ `<img>` để chèn hình ảnh. Đây là thẻ rỗng (không có thẻ đóng).

**Ví dụ:**
```html
<img src="hinhanh.jpg" alt="Mô tả hình ảnh" width="300" height="200">
```

### 2.4 HTML Tables (Bảng)
Dùng để tạo bảng dữ liệu. Sử dụng `<table>`, `<tr>` (hàng), `<th>` (tiêu đề cột), và `<td>` (ô dữ liệu).

**Ví dụ:**
```html
<table border="1">
    <tr>
        <th>Họ tên</th>
        <th>Tuổi</th>
    </tr>
    <tr>
        <td>Nguyễn Văn A</td>
        <td>25</td>
    </tr>
</table>
```

### 2.5 Danh sách HTML (Lists)
*   **Danh sách không thứ tự (Unordered List):** Dùng thẻ `<ul>` và `<li>`.
*   **Danh sách có thứ tự (Ordered List):** Dùng thẻ `<ol>` và `<li>`.

**Ví dụ:**
```html
<!-- Danh sách không thứ tự -->
<ul>
    <li>Cà phê</li>
    <li>Trà</li>
</ul>

<!-- Danh sách có thứ tự -->
<ol>
    <li>Bước 1</li>
    <li>Bước 2</li>
</ol>
```

### 2.6 Phần tử &lt;input&gt;
Thẻ `<input>` được sử dụng trong các biểu mẫu (forms) để nhận dữ liệu từ người dùng.

**Ví dụ:**
```html
<label for="username">Tên đăng nhập:</label>
<input type="text" id="username" name="username" placeholder="Nhập tên...">
<input type="submit" value="Gửi">
```

### 2.7 Phần tử khối (Block-level)
Phần tử khối luôn bắt đầu trên một dòng mới và chiếm toàn bộ chiều rộng có thể. Ví dụ: `<div>`, `<p>`, `<h1>` đến `<h6>`, `<form>`.

**Ví dụ:**
```html
<div style="background-color: lightgrey;">
    <h2>Tiêu đề trong phần tử div</h2>
    <p>Nội dung này là block-level, chiếm trọn 1 dòng.</p>
</div>
```

### 2.8 Phần tử nội dòng (Inline)
Phần tử nội dòng không bắt đầu dòng mới và chỉ chiếm chiều rộng bằng với nội dung của nó. Ví dụ: `<span>`, `<a>`, `<img>`, `<strong>`.

**Ví dụ:**
```html
<p>Đây là một đoạn văn có chứa <span style="color: red;">phần tử nội dòng</span> bên trong.</p>
```

---

## 3. HTML Semantics (HTML Ngữ nghĩa)

Phần tử ngữ nghĩa là những thẻ mang ý nghĩa rõ ràng cho cả lập trình viên và trình duyệt về nội dung chứa bên trong nó (ví dụ: `<form>`, `<table>`, `<article>`), trái ngược với các thẻ không có ngữ nghĩa như `<div>` hay `<span>`.

### 3.1 Phần tử &lt;section&gt;
Dùng để nhóm các nội dung có liên quan lại với nhau trong một trang.

**Ví dụ:**
```html
<section>
    <h2>Tin tức thể thao</h2>
    <p>Cập nhật kết quả các trận đấu bóng đá mới nhất.</p>
</section>
```

### 3.2 Phần tử &lt;article&gt;
Đại diện cho một bài viết hoàn chỉnh, độc lập và có thể được tái sử dụng (như một bài đăng blog, bài báo).

**Ví dụ:**
```html
<article>
    <h2>Cách học lập trình Web</h2>
    <p>Lập trình web bắt đầu từ HTML, CSS và JavaScript...</p>
</article>
```

### 3.3 Phần tử &lt;header&gt;
Chứa nội dung giới thiệu, tiêu đề trang hoặc thanh điều hướng.

**Ví dụ:**
```html
<header>
    <h1>Logo Website</h1>
    <nav>
        <a href="#home">Trang chủ</a> | <a href="#about">Giới thiệu</a>
    </nav>
</header>
```

### 3.4 Phần tử &lt;footer&gt;
Chứa thông tin ở phần chân trang hoặc chân của một vùng (section), thường bao gồm bản quyền, liên hệ.

**Ví dụ:**
```html
<footer>
    <p>&copy; 2026 Bản quyền thuộc về Công ty XYZ.</p>
    <a href="mailto:contact@xyz.com">Liên hệ chúng tôi</a>
</footer>
```

### 3.5 Tại sao sử dụng phần tử ngữ nghĩa?
*   **Tốt cho SEO (Tối ưu hóa công cụ tìm kiếm):** Giúp Google và các công cụ tìm kiếm hiểu rõ hơn cấu trúc và nội dung quan trọng của trang web.
*   **Accessibility (Khả năng tiếp cận):** Các trình đọc màn hình (screen readers) cho người khiếm thị có thể dựa vào các thẻ này để đọc trang web hợp lý hơn.
*   **Code dễ đọc và bảo trì:** Giúp lập trình viên dễ dàng nhận diện bố cục trang web (đâu là header, đâu là footer) thay vì nhìn vào một "rừng" thẻ `<div>`.

---

## 4. HTML Attributes (Thuộc tính HTML)

### Khái niệm
Thuộc tính HTML cung cấp thông tin bổ sung cho các phần tử HTML. Thuộc tính luôn được quy định trong **thẻ mở** và thường đi theo cặp `name="value"`.

### 4.1 Thuộc tính href
Dùng trong thẻ `<a>` để chỉ định địa chỉ (URL) của trang web hoặc file cần liên kết tới.

**Ví dụ:**
```html
<a href="https://vi.wikipedia.org/">Bách khoa toàn thư</a>
```

### 4.2 Thuộc tính src
Dùng trong các thẻ như `<img>`, `<audio>`, `<video>`, `<script>` để chỉ định đường dẫn (nguồn) tới file.

**Ví dụ:**
```html
<img src="logo.png">
```

### 4.3 Thuộc tính alt
Chỉ định văn bản thay thế cho thẻ `<img>` nếu hình ảnh không thể hiển thị (do lỗi mạng hoặc đường dẫn sai), đồng thời giúp ích rất nhiều cho SEO và trình đọc màn hình.

**Ví dụ:**
```html
<img src="error-image.jpg" alt="Đây là văn bản hiển thị khi ảnh bị lỗi">
```

### 4.4 Thuộc tính class
Được sử dụng để định nghĩa một lớp cho phần tử HTML. Thuộc tính này thường được dùng trỏ tới class trong file CSS hoặc JavaScript để thực hiện các thao tác định dạng, thay đổi. Một class có thể dùng chung cho nhiều phần tử.

**Ví dụ:**
```html
<p class="text-highlight padding-large">Đoạn văn này sử dụng 2 class.</p>
```

### 4.5 Thuộc tính id
Chỉ định một định danh **duy nhất** (không được trùng lặp) cho một phần tử HTML trên toàn bộ trang. Dùng để làm neo liên kết (anchor link) hoặc thao tác chọn phần tử cụ thể trong CSS/JS.

**Ví dụ:**
```html
<h1 id="main-title">Tiêu đề chính của trang</h1>
```