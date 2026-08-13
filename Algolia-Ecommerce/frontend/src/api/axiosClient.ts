import axios from 'axios';
import { API_BASE_URL } from '@/utils/constants';

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 60000,
});

// KHÔNG dùng interceptor unwrap data ở đây nữa,
// để mỗi API tự quyết định lấy .data hay full response (cần header)
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosClient;