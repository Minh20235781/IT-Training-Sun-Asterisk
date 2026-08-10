import { useState, useEffect } from 'react';

/**
 * Trả về giá trị đã debounce sau `delay` ms.
 * Dùng cho input search để tránh gọi API mỗi lần gõ phím.
 */
export function useDebounce<T>(value: T, delay = 400): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Hủy timer cũ nếu value thay đổi trước khi hết delay
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}