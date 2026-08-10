import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Kiểm tra lại index.html có <div id="root"> chưa.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);