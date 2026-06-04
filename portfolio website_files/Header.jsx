/* global React */
// Site header — serif wordmark, mono nav, sticky + blur.
// Client-side nav: calls onNav('home'|'work'|'about'|'contact'); `page` marks current.
function SiteHeader({ page, onNav }) {
  const link = (key, label) =>
    <a
      href={"#" + key}
      className={`nav__link ${page === key ? "is-active" : ""}`}
      aria-current={page === key ? "page" : undefined}
      onClick={(e) => { e.preventDefault(); onNav(key); }}>
      {label}
    </a>;

  return (
    <header className="site-header">
      <div className="wrap">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); onNav("home"); }} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <img src="assets/logo/green-logo.png" alt="Rt" style={{ display: 'block', width: '65px', height: '50px', objectFit: 'cover' }} />
        </a>
        <nav className="nav" aria-label="Primary">
          {link("work", "Work")}
          {link("about", "About")}
          {link("contact", "Contact")}
        </nav>
        <span className="header-index">London · 2026</span>
      </div>
    </header>);

}

window.SiteHeader = SiteHeader;