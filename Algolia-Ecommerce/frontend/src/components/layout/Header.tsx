import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <Link to="/" className="site-header__logo">
          <span className="site-header__logo-icon">@</span>
          algolia
        </Link>

        <nav className="site-header__nav">
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  );
}