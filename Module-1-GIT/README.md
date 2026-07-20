# Tổng hợp kiến thức về Git

Bài viết này tổng hợp các kiến thức cơ bản và nâng cao về Git, giúp bạn hiểu rõ cách quản lý mã nguồn và làm việc nhóm hiệu quả.

---

## Bài 1: Git Introduction

### 1. Tổng quan về Git
- **Git là gì**: Đây là một Hệ thống quản lý phiên bản phân tán (Distributed Version Control System - DVCS).
- **Mục đích**: Giúp theo dõi lịch sử chỉnh sửa mã nguồn, quản lý các phiên bản của dự án, và cho phép nhiều người cùng làm việc (làm việc nhóm) trên cùng một dự án một cách an toàn mà không bị ghi đè hay mất code.

### 2. Sự khác biệt giữa Git và GitHub
- **Git**: Là công cụ (phần mềm) lõi được cài đặt trên máy tính cá nhân (Local) của mỗi lập trình viên để quản lý phiên bản cục bộ.
- **GitHub**: Là một dịch vụ máy chủ trên nền web (Remote) để lưu trữ các kho chứa (repository) Git.
- **Mối quan hệ**: GitHub đóng vai trò là trung tâm lưu trữ trực tuyến. Các lập trình viên sử dụng Git trên máy cá nhân để kết nối, đẩy code lên (`push`) và tải code về (`pull`) từ GitHub, giúp quá trình làm việc nhóm và đồng bộ hóa diễn ra dễ dàng.

### 3. Cài đặt và cấu hình Git
Sau khi tải và cài đặt Git, bước quan trọng đầu tiên là phải cấu hình thông tin người dùng (User Identity). Điều này giúp Git biết ai là người đã thực hiện các thay đổi (commit).

Các câu lệnh cấu hình cơ bản thường là:
```bash
git config --global user.name "Tên của bạn"
git config --global user.email "Email của bạn"
```

### 4. Cách xem trợ giúp - Git Help
Hướng dẫn cách tra cứu tài liệu và cú pháp của các lệnh Git ngay trên terminal.
- **Cú pháp thường dùng**: `git help <tên_lệnh>` hoặc `git <tên_lệnh> --help`.

---

## Bài 2: Git Basics

### 1. Quy trình làm việc cơ bản (The Basic Workflow)
Mọi thay đổi trên máy tính của bạn sẽ đi qua 3 giai đoạn (trạng thái) chính:
1. **Working Directory (Thư mục làm việc)**: Nơi bạn viết code, thêm, sửa hoặc xóa file vật lý.
2. **Staging Area (Khu vực chuẩn bị)**: Nơi bạn chọn các file (đã chỉnh sửa) để chuẩn bị đóng gói chúng lại.
   - *Lệnh sử dụng*: `git add <tên_file>` hoặc `git add .` (để thêm tất cả).
3. **Local Repository (Kho chứa cục bộ)**: Nơi ghi lại lịch sử các gói thay đổi (commit). 
   - *Lệnh sử dụng*: `git commit`.

### 2. Quản lý các thay đổi (Commit nâng cao)
Lệnh `git commit` dùng để lưu lại một "bản chụp" (snapshot) các thay đổi từ Staging Area vào Local Repository.

- `git commit -m "tin_nhắn"`: Lệnh cơ bản nhất, dùng để commit những file đã được đưa vào Staging Area.
- `git commit -a -m "tin_nhắn"`:
  - **Tác dụng**: Tự động add các file bị thay đổi và commit chúng trong một lệnh duy nhất.
  - **Lưu ý**: Chỉ áp dụng cho các file đã được Git theo dõi (tracked files). Bỏ qua các file hoàn toàn mới (untracked files).
- `git commit --amend` hoặc `git commit --amend -a`:
  - **Tác dụng**: Cho phép ghi đè (sửa đổi) commit cuối cùng.
  - **Trường hợp sử dụng**: Hữu ích khi gõ sai commit message hoặc quên chưa add một file nào đó.

### 3. Đẩy code lên máy chủ (Push & Upstream)
Sau khi đã lưu thay đổi ở Local Repository, bạn cần đẩy (`push`) lên GitHub/GitLab.

- `git push`: Đẩy các commit mới ở nhánh hiện tại lên máy chủ (remote).
- `git push --set-upstream origin [tên_nhánh]` (hoặc `git push -u origin [tên_nhánh]`):
  - **Tác dụng**: Đẩy code lên và đồng thời thiết lập mối liên kết (tracking) giữa nhánh trên máy (local) và nhánh trên máy chủ (remote).
  - **Trường hợp sử dụng**: Dùng khi vừa tạo một nhánh mới hoàn toàn và muốn đẩy lên Remote lần đầu tiên.

### 4. Loại bỏ file và Hủy theo dõi (Remove / Untrack)
- `git rm <file>`: Xóa file khỏi thư mục làm việc (mất file vật lý) và xóa khỏi hệ thống theo dõi của Git.
- `git rm -r --cached <thư_mục_hoặc_file>`:
  - **Tác dụng**: Xóa file/thư mục khỏi sự quản lý của Git (untrack), nhưng vẫn giữ lại file vật lý trên máy tính.
  - **Trường hợp sử dụng**: Khi lỡ commit thư mục nặng (`node_modules`) hoặc file chứa mật khẩu. Thêm tên nó vào `.gitignore` sau khi chạy lệnh. (Thêm `-f` thành `-rf` để ép buộc xóa).

### 5. File .gitignore và Các ký tự đặc biệt
File `.gitignore` chứa danh sách các file/thư mục mà bạn không muốn Git quản lý.
Các ký tự đặc biệt thường dùng:
- `*`: Khớp với 0 hoặc nhiều ký tự. Ví dụ: `*.log` (Bỏ qua tất cả file có đuôi .log).
- `/`: 
  - Cuối (ví dụ: `build/`): Bỏ qua thư mục build và mọi thứ bên trong.
  - Đầu (ví dụ: `/todo.txt`): Chỉ bỏ qua file todo.txt ở đúng thư mục gốc.
- `?`: Khớp với đúng 1 ký tự bất kỳ. Ví dụ: `test?.txt`.
- `[]`: Khớp với 1 ký tự nằm trong khoảng chỉ định. Ví dụ: `temp[0-9].txt`.
- `!`: Phủ định lại một quy tắc. 
  - Ví dụ: 
    ```gitignore
    *.log
    !server.log
    ```

---

## Bài 3: Git Branch

### 1. Bản chất của Branch (Nhánh) là gì?
- **Khái niệm**: Nhánh trong Git thực chất là một con trỏ (pointer) linh hoạt chỉ đến một commit cụ thể. Nhánh mặc định thường là `main` (hoặc `master`).
- **Con trỏ HEAD**: Git sử dụng con trỏ đặc biệt tên là `HEAD` để biết bạn đang đứng ở nhánh nào.
- **Tại sao phải dùng Branch?**: Giống như việc tạo ra các "vũ trụ song song", cho phép bạn làm tính năng mới hoặc sửa lỗi mà không ảnh hưởng code chính.

### 2. Quản lý nhánh (Xem, Tạo, Xóa, Đổi tên)
- `git branch`: Liệt kê tất cả các nhánh ở Local. Nhánh đang đứng có dấu `*` màu xanh.
- `git branch -a`: Liệt kê toàn bộ nhánh ở cả Local và Remote.
- `git branch <tên_nhánh_mới>`: Tạo nhánh mới từ commit hiện tại, nhưng không chuyển sang nhánh đó.
- `git branch -m <tên_mới>`: Đổi tên nhánh hiện tại đang đứng.
- `git branch -d <tên_nhánh>`: Xóa một nhánh (nếu code đã được merge).
- `git branch -D <tên_nhánh>`: Ép buộc xóa nhánh bất chấp việc code đã gộp hay chưa.

### 3. Chuyển đổi và Tạo nhánh nhanh
Để làm việc trên một nhánh, bạn phải di chuyển `HEAD` sang nhánh đó.
- `git checkout <tên_nhánh>`: Chuyển sang nhánh đã có.
- `git checkout -b <tên_nhánh_mới>`: Vừa tạo nhánh mới vừa chuyển sang nhánh đó.
> **Lưu ý**: Từ Git 2.23, có thể dùng `git switch <tên_nhánh>` và `git switch -c <tên_nhánh_mới>` thay cho `checkout` để ngữ nghĩa rõ ràng hơn.

---

## Bài 4: Git rebase, git merge

### 1. Gộp nhánh (Merging)
Quy trình gộp chuẩn khi hoàn thành tính năng ở nhánh phụ:
1. Chuyển về nhánh đích: `git checkout main`
2. Kéo nhánh phụ vào: `git merge <tên_nhánh_phụ>`

**Các kiểu Merge**:
- **Fast-forward Merge**: Nếu nhánh main không có thêm commit mới từ lúc rẽ nhánh, Git chỉ trượt con trỏ main tiến lên.
- **3-way Merge (Merge commit)**: Nếu cả 2 nhánh đều có commit mới, Git tạo ra một "merge commit" để nối 2 nhánh.

### 2. Xử lý xung đột (Merge Conflict)
Xảy ra khi 2 nhánh cùng chỉnh sửa vào cùng một dòng code trong cùng một file.
- **Dấu hiệu**: Báo `CONFLICT`. File lỗi có các ký tự `<<<<<<< HEAD`, `=======`, `>>>>>>> [tên_nhánh]`.
- **Cách giải quyết**:
  1. Mở file bị conflict bằng Editor (VS Code, IntelliJ...).
  2. Chỉnh sửa logic và xóa các ký tự đánh dấu.
  3. Chạy `git add <file_đã_sửa>`.
  4. Chạy `git commit` để hoàn tất.

### 3. Gộp code bằng Rebase (Nâng cao)
- `git rebase <nhánh_gốc>`: Bứng rễ nhánh hiện tại và "cấy" nối tiếp vào đỉnh nhánh gốc.
- **Ưu điểm**: Lịch sử commit thẳng tắp, không sinh ra "merge commit".
- **Luật bất thành văn (Golden Rule)**: KHÔNG BAO GIỜ dùng rebase trên nhánh public. Chỉ dùng để dọn dẹp lịch sử ở nhánh cá nhân.

---

## Bài 5: Git pull, git fetch

### 1. Git Fetch (Tải về an toàn)
- **Khái niệm**: Kết nối remote, kiểm tra thay đổi mới và tải về.
- **Đặc điểm cốt lõi**: Rất an toàn. Không đụng chạm Working Directory, không tự động merge. Lưu vào nhánh theo dõi ẩn (vd: `origin/main`).
- **Mục đích**: Nhìn lén/kiểm tra trước khi quyết định gộp.
- **Các lệnh**:
  - `git fetch`: Tải toàn bộ thông tin mới từ remote mặc định.
  - `git fetch origin <tên_nhánh>`: Tải dữ liệu của một nhánh cụ thể.
  - `git fetch --all`: Tải từ tất cả máy chủ.

### 2. Git Pull (Tải về và Gộp tự động)
- **Khái niệm**: Tải code về và lập tức tự động gộp (merge) vào nhánh hiện tại.
- **Bản chất**: `git pull = git fetch + git merge`
- **Đặc điểm**: Tiện lợi nhưng có rủi ro gây Conflict nếu cùng sửa một file.
- **Các lệnh**: `git pull`, `git pull origin <tên_nhánh>`.

### 3. Phân biệt nhanh Git Fetch và Git Pull

| Tiêu chí | `git fetch` | `git pull` |
| :--- | :--- | :--- |
| **Hành động tải code** | Có | Có |
| **Hành động gộp (Merge)** | Không | Có (Tự động) |
| **Ảnh hưởng đến file đang mở**| Không thay đổi gì | Có thể làm đổi code hoặc gây Conflict |
| **Mức độ an toàn** | Rất an toàn | Cần cẩn thận nếu đang có code chưa commit |
| **Khi nào nên dùng?** | Kiểm tra code mới trước, review code | Đồng bộ ngay code mới nhất để làm tiếp |

### 4. Nâng cao: Git Pull với Rebase
- `git pull --rebase`
- **Bản chất**: `fetch + rebase` (thay vì fetch + merge).
- **Tác dụng**: Lấy commit mới trên máy chủ làm nền, nhấc các commit chưa push của bạn cấy lên trên, giúp lịch sử thẳng tắp dễ đọc.