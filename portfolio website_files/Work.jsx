/* global React */
// Work — horizontal strip gallery layout.
// All projects in a single row, small number label above each tall image.

const WORK_PROJECTS = [
  { num: "01", slug: "vocal-for-local", title: "Vocal for Local", img: "assets/images/vocal-for-local-cover.jpg", page: "work/vocal-for-local.html" },
  { num: "02", slug: "ergonomics", title: "Physical Ergonomics", img: "assets/images/ergonomics-cover.jpg", page: "work/physical-ergonomics.html" },
  { num: "03", slug: "sound-as-structure", title: "Sound as Structural Element", img: "assets/images/sound-cover.jpg", page: "work/sound-as-structure.html" },
  { num: "04", slug: "making-as-enquiry", title: "Making as Enquiry", img: "assets/images/making-enquiry-cover.jpg", page: "work/making-as-enquiry.html" },
  { num: "05", slug: "photography", title: "Photography", img: "assets/images/photography-cover.jpg", page: "gallery.html" },
];

const stripStyles = {
  outer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 80px)',
    padding: 'clamp(3rem, 8vh, 6rem) clamp(2rem, 5vw, 5rem)',
    maxWidth: '1600px',
    margin: '0 auto',
  },
  row: {
    display: 'flex',
    gap: 'clamp(1rem, 2.2vw, 2.5rem)',
    alignItems: 'flex-start',
  },
  card: {
    flex: '1 1 0',
    minWidth: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
  },
  num: {
    fontFamily: 'var(--mono)',
    fontSize: '0.8125rem',
    letterSpacing: '0.18em',
    color: 'var(--muted)',
    marginBottom: '0.6rem',
    fontWeight: 700,
  },
  imgWrap: {
    overflow: 'hidden',
    backgroundColor: 'var(--paper-2)',
    borderRadius: '3px',
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
    aspectRatio: '3 / 4',
    objectFit: 'cover',
    display: 'block',
    filter: 'grayscale(1) contrast(1.04)',
    transition: 'filter 0.6s ease-in-out, transform 1.1s var(--ease)',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.15)',
    transition: 'opacity 0.6s ease-in-out',
    pointerEvents: 'none',
    zIndex: 1,
  },
  hoverName: {
    position: 'absolute',
    bottom: '24px',
    left: '24px',
    right: '24px',
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(1.2rem, 2vw, 1.75rem)',
    fontWeight: 600,
    color: '#fff',
    zIndex: 2,
    opacity: 0,
    transform: 'translateY(8px)',
    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
    pointerEvents: 'none',
    textShadow: '0 1px 6px rgba(0,0,0,0.4)',
    lineHeight: 1.2,
  },
};

function WorkCard({ p, onNav }) {
  return (
    <a
      href={p.page}
      style={stripStyles.card}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector('img');
        const ov = e.currentTarget.querySelector('[data-overlay]');
        const nm = e.currentTarget.querySelector('[data-hovername]');
        if (img) { img.style.filter = 'grayscale(0) contrast(1) blur(4px)'; img.style.transform = 'scale(1.05)'; }
        if (ov) ov.style.opacity = '0';
        if (nm) { nm.style.opacity = '1'; nm.style.transform = 'translateY(0)'; }
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector('img');
        const ov = e.currentTarget.querySelector('[data-overlay]');
        const nm = e.currentTarget.querySelector('[data-hovername]');
        if (img) { img.style.filter = 'grayscale(1) contrast(1.04)'; img.style.transform = 'scale(1)'; }
        if (ov) ov.style.opacity = '1';
        if (nm) { nm.style.opacity = '0'; nm.style.transform = 'translateY(8px)'; }
      }}
    >
      <p style={stripStyles.num}>{p.num}</p>
      <div style={stripStyles.imgWrap}>
        <div data-overlay="" style={stripStyles.overlay}></div>
        <span data-hovername="" style={stripStyles.hoverName}>{p.title}</span>
        <img src={p.img} alt={p.title} loading="lazy" style={stripStyles.img} />
      </div>
    </a>
  );
}

function WorkPage({ onNavProject }) {
  return (
    <main>
      <section className="page-head wrap">
        <div className="label">Work</div>
        <h1 className="page-title">Selected <em>projects</em>.</h1>
      </section>
      <div className="work-strip-outer" style={stripStyles.outer}>
        <div className="work-strip-row" style={stripStyles.row}>
          {WORK_PROJECTS.map((p) => (
            <WorkCard p={p} key={p.num} onNav={onNavProject} />
          ))}
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { WorkPage, WorkCard, WORK_PROJECTS });
