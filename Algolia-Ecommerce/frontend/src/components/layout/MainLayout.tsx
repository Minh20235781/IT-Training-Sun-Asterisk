import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function MainLayout() {
  return (
    <div className="app-layout">
      <main className="app-layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}