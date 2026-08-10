/**
 * Format giá tiền theo kiểu $499.99 hoặc $1,299.99 (khớp UI trong ảnh)
 */
export function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Rút gọn mô tả sản phẩm, thêm "..." nếu vượt quá độ dài cho phép
 */
export function truncateText(text: string, maxLength: number = 80): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}

/**
 * Format tên category từ dạng "computers-tablets" -> "COMPUTERS & TABLETS"
 * (phòng trường hợp db.json lưu category dạng slug)
 */
export function formatCategoryLabel(category: string): string {
  return category.replace(/-/g, ' ').toUpperCase();
}