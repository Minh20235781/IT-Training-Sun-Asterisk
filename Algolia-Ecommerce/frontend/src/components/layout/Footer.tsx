export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <p>&copy; {new Date().getFullYear()} Algolia Ecommerce Demo. Built for training purposes.</p>
        <nav className="site-footer__links">
          <a href="https://www.algolia.com" target="_blank" rel="noreferrer">
            Algolia
          </a>
          
          <a href="https://www.npmjs.com/package/json-server"
            target="_blank"
            rel="noreferrer"
            >
            json-server
          </a>
        </nav>
      </div>
    </footer>
  );
}