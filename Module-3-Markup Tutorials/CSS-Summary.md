# Tổng Hợp Kiến Thức CSS

Tài liệu này tổng hợp các kiến thức cơ bản và nâng cao về CSS, bao gồm lý thuyết và các ví dụ minh họa cho từng phần.

---

## 1. Giới thiệu về CSS
CSS (Cascading Style Sheets) là ngôn ngữ dùng để định dạng và tạo kiểu cho các phần tử HTML trên trang web. CSS giúp tách biệt giữa nội dung (HTML) và cách hiển thị (layout, màu sắc, phông chữ).

**Ví dụ cú pháp cơ bản:**
```css
/* Selector { property: value; } */
body {
    background-color: lightblue;
    font-family: Arial, sans-serif;
}
```

---

## 2. Bộ chọn CSS (CSS Selectors)
Bộ chọn được sử dụng để "tìm" (chọn) các phần tử HTML mà bạn muốn định dạng.

*   **Bộ chọn phần tử (Element):** Chọn tất cả các thẻ cùng loại.
*   **Bộ chọn ID (ID):** Chọn phần tử có id cụ thể (dùng dấu `#`).
*   **Bộ chọn Lớp (Class):** Chọn các phần tử có class cụ thể (dùng dấu `.`).
*   **Bộ chọn toàn cục (Universal):** Chọn tất cả phần tử (dùng dấu `*`).
*   **Bộ chọn nhóm (Grouping):** Chọn nhiều phần tử cùng lúc (ngăn cách bằng dấu `,`).

**Ví dụ:**
```css
/* Element Selector */
p { color: blue; }

/* ID Selector */
#header { text-align: center; }

/* Class Selector */
.highlight { background-color: yellow; }

/* Grouping Selector */
h1, h2, h3 { font-weight: bold; }
```

---

## 3. CSS Properties (Thuộc tính CSS)

### 3.1 CSS Colors
CSS hỗ trợ nhiều cách đặt màu sắc cho các thành phần khác nhau: Background (Nền), Text (Chữ), Border (Viền).

**Ví dụ:**
```css
/* CSS Background Color */
.box {
    background-color: #f0f0f0;
}

/* CSS Text Color */
h1 {
    color: red;
}

/* CSS Border Color */
.box {
    border: 2px solid green;
}
```

### 3.2 CSS Width và Height
Xác định chiều rộng và chiều cao của phần tử.

**Ví dụ:**
```css
.container {
    width: 100%;
    max-width: 1200px;
    height: 300px;
}
```

### 3.3 CSS Position
Thuộc tính `position` chỉ định phương pháp định vị phần tử: `static`, `relative`, `fixed`, `absolute` hoặc `sticky`.

**Ví dụ:**
```css
.relative-box {
    position: relative;
    top: 20px;
    left: 10px;
}

.absolute-box {
    position: absolute;
    top: 0;
    right: 0;
}
```

### 3.4 CSS Text
Định dạng văn bản: căn lề, trang trí chữ, khoảng cách, biến đổi chữ.

**Ví dụ:**
```css
p.text-style {
    text-align: justify;
    text-decoration: underline;
    text-transform: uppercase;
    letter-spacing: 2px;
}
```

### 3.5 CSS Pseudo-classes (Lớp giả)
Định dạng một trạng thái đặc biệt của phần tử (ví dụ: khi di chuột qua, hoặc các liên kết đã truy cập).

**Ví dụ:**
```css
/* Khi hover chuột vào link */
a:hover {
    color: orange;
}

/* Chọn phần tử p đầu tiên */
p:first-child {
    font-weight: bold;
}
```

### 3.6 CSS Margin và Padding
*   **Margin:** Khoảng cách bên ngoài viền (border) của phần tử.
*   **Padding:** Khoảng cách bên trong, giữa nội dung và viền của phần tử.

**Ví dụ:**
```css
.box-model {
    margin: 20px auto; /* Trên/Dưới 20px, Trái/Phải tự động căn giữa */
    padding: 15px 30px; /* Trên/Dưới 15px, Trái/Phải 30px */
}
```

### 3.7 CSS Responsive
Sử dụng Media Queries để thay đổi giao diện theo kích thước màn hình thiết bị.

**Ví dụ:**
```css
/* Áp dụng khi màn hình có chiều rộng tối đa là 768px */
@media screen and (max-width: 768px) {
    .container {
        width: 100%;
        padding: 10px;
    }
}
```

---

## 4. CSS Units (Đơn vị CSS)

### 4.1 Absolute Length (Chiều dài tuyệt đối)
Kích thước cố định, không thay đổi (thường dùng cho in ấn). Bao gồm: `cm`, `mm`, `in`, `px`, `pt`, `pc`.

**Ví dụ:**
```css
h1 {
    font-size: 24px;
    margin-bottom: 0.5cm;
}
```

### 4.2 Relative Length (Chiều dài tương đối)
Kích thước thay đổi dựa trên một phần tử khác (như phần tử cha, hoặc kích thước viewport). Bao gồm: `em`, `rem`, `vw`, `vh`, `%`.

**Ví dụ:**
```css
.box {
    width: 50%; /* 50% so với phần tử cha */
    font-size: 1.2rem; /* 1.2 lần font-size của thẻ html */
    height: 100vh; /* 100% chiều cao của viewport */
}
```

---

## 5. CSS3
CSS3 mang đến nhiều tính năng đồ họa và bộ chọn mạnh mẽ hơn.

### 5.1 Các bộ chọn CSS3 (CSS3 Selectors)
Cho phép chọn phần tử theo thuộc tính, cấu trúc DOM một cách chi tiết hơn.

**Ví dụ:**
```css
/* Chọn tất cả thẻ input có type là "text" */
input[type="text"] {
    background-color: #f1f1f1;
}

/* Chọn phần tử theo thứ tự */
li:nth-child(even) {
    background: #ccc;
}
```

### 5.2 Lớp giả CSS3 (CSS3 Pseudo-classes)
Bổ sung thêm nhiều lớp giả hữu ích.

**Ví dụ:**
```css
/* Chọn phần tử p cuối cùng */
p:last-of-type {
    margin-bottom: 0;
}

/* Chọn các phần tử input không bị disable */
input:enabled {
    border: 1px solid blue;
}
```

### 5.3 CSS3 Colors (RGBA, HSL, HSLA, Opacity)
*   **RGBA:** Red, Green, Blue + Alpha (độ trong suốt).
*   **HSL/HSLA:** Hue (sắc thái), Saturation (độ bão hòa), Lightness (độ sáng) + Alpha.
*   **Opacity:** Độ mờ của toàn bộ phần tử.

**Ví dụ:**
```css
.box-rgba { background-color: rgba(255, 0, 0, 0.5); /* Đỏ mờ 50% */ }
.box-hsla { background-color: hsla(120, 100%, 50%, 0.3); /* Xanh lá mờ 30% */ }
.transparent-box {
    background-color: blue;
    opacity: 0.6; /* Làm mờ cả nền và nội dung bên trong */
}
```

### 5.4 Shadow (Bóng đổ)
*   **Box Shadow:** Tạo bóng cho khối (phần tử).
*   **Text Shadow:** Tạo bóng cho văn bản.

**Ví dụ:**
```css
.card {
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}

h1 {
    /* offset-x | offset-y | blur-radius | color */
    text-shadow: 2px 2px 5px red;
}
```

### 5.5 Gradients (Màu chuyển sắc)
*   **Linear Gradients:** Chuyển màu theo đường thẳng.
*   **Radial Gradients:** Chuyển màu từ tâm tỏa ra.
*   **Repeat Radial Gradients:** Lặp lại màu chuyển sắc từ tâm.

**Ví dụ:**
```css
/* Linear Gradient: Từ trên xuống dưới */
.linear-bg {
    background: linear-gradient(to right, red, yellow);
}

/* Radial Gradient: Từ tâm tỏa ra */
.radial-bg {
    background: radial-gradient(circle, white, green);
}

/* Repeating Radial Gradient */
.repeat-radial-bg {
    background: repeating-radial-gradient(red, red 10px, yellow 10px, yellow 20px);
}
```

### 5.6 Multiple Background (Nhiều ảnh nền)
CSS3 cho phép sử dụng nhiều hình nền trên cùng một phần tử.

**Ví dụ:**
```css
.multi-bg {
    background-image: url("flower.png"), url("paper.jpg");
    background-position: right bottom, left top;
    background-repeat: no-repeat, repeat;
    padding: 15px;
}