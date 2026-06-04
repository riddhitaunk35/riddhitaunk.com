/* global React */
// About — page head, prose + sticky "ledger" colophon column.

function LedgerGroup({ term, items }) {
  return (
    <React.Fragment>
      <dt>{term}</dt>
      {items.map((it, i) => <dd key={i}>{it}</dd>)}
    </React.Fragment>);

}

function AboutPage() {
  return (
    <main>
      <section className="page-head">
        <div className="wrap">
          <p className="label">About</p>
          <h1 className="page-title"><span className="accent">Researcher,</span><br />maker, <em>listener.</em></h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(1rem, 3vh, 2.5rem)" }}>
        <div className="wrap about-grid">
          <div className="prose">
            <p className="lead">I’m Riddhi Taunk, a UX design student who's interested in designing experiences that feel thoughtful, clear and useful.</p>
            <p>I enjoy the balance that UX offers between creativity and logic, and I'm especially drawn to work that starts with listening, questioning and understanding people before jumping onto solutions.</p>
            <p>I've always liked noticing details, the small things that make an experience feel smooth, confusing, welcoming or frustrating. That's the big part why UX feels right for me. It gives me space to think carefully, design with intention and create work that feels both human and purposeful.</p>
            <p>As I continue building my practice, I'm developing a strong foundation in research, interaction design, prototyping and visual communication. I'm interested in making work that is not only visually considered, but also meaningful, accessible and grounded in people it is for.</p>
          </div>

          <aside className="ledger">
            <dl style={{ height: "402px", fontWeight: "400", textAlign: "right", width: "600px" }}>
              <LedgerGroup term="Focus" items={["Community listening & fieldwork", "User research", "Research Synthesis", "Usability Thinking"]} />
              <LedgerGroup term="Affiliation" items={["University of the Arts London", "London, United Kingdom"]} />
              <dt>Resume</dt>
              <dd><a href="assets/Riddhi-Taunk-Resume.pdf" download>Download resume ↓</a></dd>
            </dl>
          </aside>
        </div>
      </section>
    </main>);

}

window.AboutPage = AboutPage;