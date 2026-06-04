/* global React */
// Full-bleed scrolling marquee + site footer.

function Ticker() {
  const items = [
    "Community Listening", "Fieldwork", "Embodied Research",
    "Tactile Design", "Observations", "Human Behaviour",
  ];
  const Group = () => (
    <div className="ticker__group">
      {items.map((t, i) => <span className="ticker__item" key={i}>{t}</span>)}
    </div>
  );
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track"><Group /><Group /></div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="footer-cta">Let&rsquo;s work together</p>
            <a className="footer-mail" href="mailto:riddhitaunk35@gmail.com">
              <span>riddhitaunk35@gmail.com</span>
            </a>
          </div>
          <div className="footer-meta">
            <p>UX Design Researcher</p>
            <p>UAL — London, UK</p>
            <p>© 2026 Riddhi Taunk</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Ticker, SiteFooter });
