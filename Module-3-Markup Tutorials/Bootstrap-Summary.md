# Tổng Hợp Kiến Thức Bootstrap

Tài liệu này tổng hợp toàn diện các kiến thức về Bootstrap (phiên bản Bootstrap 5 mới nhất), từ phần giới thiệu, hệ thống bố cục, nội dung, các thành phần giao diện đến việc sử dụng các tính năng JavaScript.

---

## 1. Introduction Bootstrap (Giới thiệu về Bootstrap)
Bootstrap là một trong những framework HTML, CSS và JS phổ biến nhất thế giới để phát triển các trang web đáp ứng (responsive), thân thiện với thiết bị di động (mobile-first).

*   **Đặc điểm nổi bật:**
    *   **Mobile-first:** Các kiểu dáng mặc định được thiết kế cho thiết bị di động, sau đó mở rộng ra các màn hình lớn hơn bằng các media queries.
    *   **Responsive Grid System:** Hệ thống lưới linh hoạt dựa trên flexbox giúp bố trí nội dung dễ dàng trên mọi thiết bị.
    *   **Pre-built Components:** Cung cấp sẵn hàng loạt thành phần như nút bấm, modal, alert, navbar... giúp tiết kiệm thời gian thiết kế.
    *   **Sass support:** Dễ dàng tùy biến thông qua các biến (variables) Sass.
*   **Cách tích hợp cơ bản (CDN):**
    ```html
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bootstrap Demo</title>
        <!-- Bootstrap CSS CDN -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <h1>Xin chào Bootstrap!</h1>
        
        <!-- Bootstrap JS Bundle CDN (đặt trước thẻ đóng body) -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    ```

---

## 2. Working with Layout (Làm việc với Bố cục)
Bố cục trong Bootstrap được xây dựng dựa trên hệ thống lưới (Grid system), container và các lớp tiện ích khoảng cách (Spacing utilities).

### 2.1 Containers
Containers là thành phần cơ bản nhất trong Bootstrap, dùng để chứa, đệm và căn giữa nội dung trong một thiết bị hoặc viewport.
*   `.container`: Cung cấp container có chiều rộng cố định thích ứng theo từng breakpoint.
*   `.container-fluid`: Container có chiều rộng 100% trên mọi kích thước màn hình.

### 2.2 Grid System (Hệ thống lưới)
Hệ thống lưới sử dụng một loạt các container, hàng (`.row`) và cột (`.col`) để căn chỉnh và bố trí nội dung. Nó được chia thành hệ thống 12 cột.
*   Các breakpoint: `sm` (≥576px), `md` (≥768px), `lg` (≥992px), `xl` (≥1200px), `xxl` (≥1400px).

**Ví dụ code bố cục lưới:**
```html
<div class="container my-4">
    <div class="row">
        <div class="col-md-8 bg-light p-3 border">
            Cội nội dung chính (8 cột trên màn hình md trở lên)
        </div>
        <div class="col-md-4 bg-secondary text-white p-3">
            Cột sidebar (4 cột)
        </div>
    </div>
</div>
```

---

## 3. Working with Contents (Làm việc với Nội dung)
Phần này định dạng cách hiển thị các nội dung cơ bản bên trong trang web như Typography (Kiểu chữ), Tables (Bảng) và Images (Hình ảnh).

### 3.1 Typography
Bootstrap định dạng lại các thẻ heading (`<h1>` đến `<h6>`), đoạn văn (`<p>`), và cung cấp các lớp hiển thị (Display headings) để tạo điểm nhấn.
*   Các lớp `.display-1` đến `.display-6` giúp tiêu đề lớn hơn và nổi bật hơn so với thẻ heading thông thường.

### 3.2 Tables (Bảng)
Bootstrap cung cấp giao diện bảng đẹp mắt, gọn gàng chỉ với một vài lớp CSS cơ bản.
*   `.table`: Thiết lập kiểu cơ bản cho bảng.
*   `.table-striped`: Tạo hiệu ứng sọc ngang cho các hàng.
*   `.table-hover`: Hiệu ứng đổi màu khi rê chuột vào hàng.
*   `.table-dark`: Bảng nền tối.

**Ví dụ code Table:**
```html
<table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>anv@example.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Trần Thị B</td>
            <td>ttb@example.com</td>
        </tr>
    </tbody>
</table>
```

---

## 4. Playing with Components (Sử dụng các Thành phần giao diện)
Bootstrap cung cấp hàng chục thành phần giao diện sẵn sàng sử dụng (như Buttons, Navbars, Cards, Modals, Alerts).

### 4.1 Buttons (Nút bấm)
Sử dụng các lớp `.btn` kết hợp với màu sắc (`.btn-primary`, `.btn-success`, `.btn-outline-danger`).

### 4.2 Cards (Thẻ nội dung)
Card là một container chứa nội dung linh hoạt, có thể bao gồm hình ảnh, tiêu đề, văn bản, liên kết và các nút.

**Ví dụ code Card:**
```html
<div class="card" style="width: 18rem;">
    <img src="card-img.jpg" class="card-img-top" alt="Hình ảnh thẻ">
    <div class="card-body">
        <h5 class="card-title">Tiêu đề Card</h5>
        <p class="card-text">Một vài đoạn văn bản mô tả nội dung bên trong card.</p>
        <a href="#" class="btn btn-primary">Đi đến đâu đó</a>
    </div>
</div>
```

---

## 5. Extending Bootstrap with JavaScript Plugin (Mở rộng Bootstrap bằng các Plugin JavaScript)
Bootstrap tích hợp sẵn nhiều plugin JavaScript mạnh mẽ cho phép tạo các hiệu ứng tương tác mà không cần viết code JS thủ công. Bạn có thể kích hoạt chúng thông qua **Data Attributes** (ví dụ: `data-bs-toggle="..."`) hoặc thông qua **JavaScript API**.

Các plugin phổ biến:
*   **Modal:** Hộp thoại popup tương tác.
*   **Dropdown:** Menu thả xuống.
*   **Collapse / Accordion:** Ẩn/hiện nội dung linh hoạt.
*   **Carousel:** Thanh trượt hình ảnh (slider).
*   **Tooltip / Popover:** Gợi ý thông tin khi di chuột.

**Ví dụ code sử dụng Bootstrap Modal (thông qua Data Attributes):**
```html
<!-- Nút kích hoạt Modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Mở hộp thoại Modal
</button>

<!-- Cấu trúc Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Tiêu đề Modal</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Nội dung chi tiết hiển thị bên trong hộp thoại modal...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-primary">Lưu thay đổi</button>
            </div>
        </div>
    </div>
</div>
```
