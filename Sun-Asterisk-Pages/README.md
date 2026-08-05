# Sun* Asterisk Homepage

Trang chủ Sun* Asterisk được xây dựng theo dạng static site, sử dụng HTML, Tailwind CSS và JavaScript thuần. Nội dung trang được tách thành các component riêng trong `Sun-Asterisk-Pages/src/components`, sau đó được ghép và hiển thị qua `index.html`.

## Giới thiệu

Project này là bài thực hành dựng giao diện trang chủ Sun* với các section chính như header, hero, service, project, partner, career, about, news và footer.

## Công nghệ sử dụng

- HTML5
- Tailwind CSS
- JavaScript thuần
- `live-server` để chạy local
- `concurrently` để chạy song song server và watcher CSS

## Cấu trúc chính

- `index.html`: điểm vào của trang chủ
- `Sun-Asterisk-Pages/src/components`: các component HTML theo từng section
- `Sun-Asterisk-Pages/src/css/input.css`: file input cho Tailwind
- `Sun-Asterisk-Pages/src/css/output.css`: CSS đã build
- `Sun-Asterisk-Pages/src/js`: các script xử lý UI, slider, menu và animation
- `Sun-Asterisk-Pages/src/assets`: hình ảnh, font và video

## Cách chạy dự án

Yêu cầu đã cài Node.js và npm.

```bash
npm install
npm run dev
```

Lệnh `dev` sẽ chạy song song:

- `npm run watch:css`: tự động build CSS khi có thay đổi
- `npm run serve`: mở site bằng `live-server`

## Các lệnh hữu ích

- `npm run watch:css`: theo dõi và build lại CSS trong lúc phát triển
- `npm run build:css`: build CSS tối ưu cho bản cuối
- `npm run serve`: mở project bằng `live-server`
- `npm run dev`: chạy đồng thời server và CSS watcher

## Ghi chú

- Trang chủ được ghép từ nhiều file component, nên khi chỉnh nội dung cần kiểm tra đồng bộ giữa HTML, CSS và JS.
- Nếu thay đổi class Tailwind trong các component, hãy chạy lại `npm run watch:css` hoặc `npm run build:css`.

## Link deploy: https://it-training-sun-asterisk.vercel.app/
