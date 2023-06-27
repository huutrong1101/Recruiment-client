# Giới thiệu

Ứng dụng được xây dựng trên [Vite](https://vitejs.dev).

# Sử dụng

## Trước sử dụng

- Cài đặt tất cả package cần thiết bằng

```
npm install
```

nếu dùng yarn, có thể dùng

```
yarn install
```

## Mô tả script

Trong project, cơ bản sẽ có các script

- `yarn run dev` dùng để chạy server trên development
- `yarn run build` dùng để compile app hoàn chỉnh
- `yarn run preview` dùng để preview app đã compile

# Lưu ý

## Contribution

Tất cả code khi commit, message phải được commit theo quy tắc [như sau](https://www.conventionalcommits.org/en/v1.0.0/).
Khi muốn tạo branch mới, nội dung của branch phải có định dạng

```
<action>/<full-action-name>
```

Với

- `<action>` có thể là
  - **feat**: nếu như muốn thêm tính năng mới
  - **fix**: dùng để sửa code đã publish
  - **refactor**: dùng để sửa tên, biến, hay những thứ linh tinh khác
  - **other**: không thuộc danh mục trên
- `<full-action-name>`: tên của thứ muốn thêm, bớt, sửa hoặc xoá.

### Ví dụ:

Nếu muốn thêm một tính năng **ghi nhớ đăng nhập** vào trang **đăng nhập**, ta có thể dùng.

```
feat/remember-sign-in
```

Nếu muốn sửa mục **InputField** trong trang **đăng ký**.

```
fix/register-input-field
```

### Những lưu ý

- Dấu cách thay bằng dấu **(-)** gạch ngang.
- Nếu không biết đặt tên thì hãy hỏi cho team ngay, không tự ý đặt tên.
- Không commit code bừa bãi, chỉ chắc chắn rằng sẽ commit source sau khi đã **hoàn thành unit test** và **xem lại (preview) code** và **clean up code** trước khi commit.
- **TUYỆT ĐỐI** không push code lên **main**, phải tạo branch trước khi push lên, sau đó merge lại.
