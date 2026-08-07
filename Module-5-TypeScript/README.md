# TypeScript Sharing – Demo Code

Bộ code được tổ chức theo 8 phần kiến thức trong mục lục của slide:
1. Tổng quan về TypeScript
2. Trình biên dịch và cấu hình
3. Type System
4. Function
5. Class và Interface
6. Các kiểu nâng cao và Generics
7. Decorator
8. Modules và Namespace

Không tạo cấu trúc project/thư mục phức tạp; mỗi phần là một file `.ts` độc lập.

## Cách dùng

Có thể chạy từng file bằng:

    npx ts-node <file>.ts

Hoặc compile:

    tsc <file>.ts

Riêng Decorator cần chú ý cấu hình `experimentalDecorators` theo nội dung file.

## Cách demo trong buổi sharing

Với mỗi phần:
1. Demo code chính theo kiến thức trên slide.
2. Sau đó chuyển sang phần `⚠️ LƯU Ý THỰC TẾ`.
3. Bỏ comment ở các dòng `❌` để cố tình tạo lỗi.
4. Cho thấy lỗi compile hoặc runtime.
5. Giải thích cách xử lý để tránh lỗi khi làm dự án thực tế.

Lưu ý: code trong các file là code demo được xây dựng lại từ các khái niệm trên slide, không phải bản trích nguyên văn code từ slide.
