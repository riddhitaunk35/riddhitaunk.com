/* global React */
// ProjectPage — individual project detail view.
// Renders a full editorial case-study layout for each project slug.

const PROJECT_DATA = {
  "vocal-for-local": {
    title: ["Vocal for ", "Local"],
    cat: "Community Listening",
    meta: "2024 · MIT Alandi, Pune · Group Project",
    lede: "Street vendors in Pune were quietly losing customers as shopping moved online. Through conversations and market observations, we mapped what that shift actually cost the people living it.",
    body: [
      "The project began with weeks of fieldwork in Pune's local markets — sitting with vendors, observing daily routines, and listening to stories that rarely get documented. We used participatory mapping to trace how digital commerce was reshaping physical neighborhoods.",
      "Our research revealed that the shift wasn't just economic. Vendors were losing social connections, daily rhythms, and a sense of place. We synthesised these findings into a framework that local organisations could use to advocate for market preservation."
    ],
    img: "assets/images/vocal-for-local.jpg",
    imgs: ["assets/images/vocal-for-local.jpg"]
  },
  "ergonomics": {
    title: ["Physical ", "Ergonomics"],
    cat: "Tactile Design · Human Behaviour",
    meta: "2024 · MIT Alandi, Pune · Group Project",
    lede: "Garland makers absorb real physical harm from repetitive work. Using RULA and REBA assessments alongside fieldwork, we prototyped a rethought vending stall built around their bodies.",
    body: [
      "Garland-making is deeply physical — the repetitive motions of stringing flowers cause chronic strain in wrists, shoulders and backs. We spent time with artisans, documenting their postures and pain points using ergonomic assessment tools.",
      "The redesigned stall prototype considered height, reach, and rest positions. Every dimension was tested with the makers themselves, iterating through cardboard and bamboo mockups before arriving at a final form that reduced strain without disrupting their craft."
    ],
    img: "assets/images/physical-ergonomics.jpg",
    imgs: ["assets/images/physical-ergonomics.jpg"]
  },
  "sound-as-structure": {
    title: ["Sound as ", "Structure"],
    cat: "Sensory Environments",
    meta: "2025 · UAL London College of Communication · Researcher",
    lede: "Sound shapes how well people think — but nobody treats it that way. I tracked sound levels across university spaces and visualised what's usually invisible.",
    body: [
      "Libraries, corridors, canteens, studios — each space in a university has a distinct acoustic character, yet none were designed with sound in mind. I carried a decibel meter through dozens of spaces over several weeks, building a dataset nobody had collected.",
      "The resulting visualisations made the invisible legible: heatmaps of noise, timelines of quiet, overlays showing how sound levels correlated with reported concentration and wellbeing. The work was exhibited as an installation that let visitors hear the data."
    ],
    img: "assets/images/sound-as-structure.jpg",
    imgs: ["assets/images/sound-as-structure.jpg"]
  },
  "making-as-enquiry": {
    title: ["Making as ", "Enquiry"],
    cat: "Participatory Research · Fieldwork",
    meta: "2026 · UAL London College of Communication · Group Project",
    lede: "What if wayfinding worked through touch instead of sight? We prototyped a tactile navigation system through material experiments and iterative making.",
    body: [
      "The project questioned a basic assumption: that navigation must be visual. We began with material explorations — testing textures, ridges, and thermal contrasts that could communicate direction and proximity through touch alone.",
      "Working with visually impaired participants, we iterated rapidly through prototypes. Each session produced new insights about how people build mental maps through non-visual cues. The final system combined floor textures with handrail patterns to create an intuitive, eyes-free navigation experience."
    ],
    img: "assets/images/making-as-enquiry.jpg",
    imgs: ["assets/images/making-as-enquiry.jpg"]
  },
  "photography": {
    title: ["Photo", "graphy"],
    cat: "Documentary · Fieldwork",
    meta: "2023–2025 · India · Personal Work",
    lede: "A collection of documentary photographs from fieldwork across Indian markets, workshops, and streets — capturing the textures of everyday commerce and craft.",
    body: [
      "These photographs were taken during various research projects and personal explorations across Pune, Mumbai, and surrounding towns. They document the visual culture of small businesses, market stalls, and artisan workshops.",
      "The work sits at the intersection of research and personal practice — each image is both evidence and appreciation, recording details that might otherwise go unnoticed: hand-painted signage, carefully arranged displays, the postures of daily labour."
    ],
    img: "assets/images/mamta-mart.png",
    imgs: ["assets/images/mamta-mart.png", "assets/images/raj-electronics.png"]
  }
};

const PROJECT_ORDER = [
  'vocal-for-local', 'ergonomics', 'sound-as-structure', 'making-as-enquiry', 'photography'
];
const PROJECT_NAMES = {
  'vocal-for-local': 'Vocal for Local',
  'ergonomics': 'Physical Ergonomics',
  'sound-as-structure': 'Sound as Structure',
  'making-as-enquiry': 'Making as Enquiry',
  'photography': 'Photography',
};

const projNavStyles = {
  bar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '40px var(--gutter)',
    maxWidth: 'var(--maxw)',
    margin: '0 auto',
    borderTop: '1px solid #ddd',
  },
  btn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    textAlign: 'left',
    maxWidth: '45%',
  },
  btnRight: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    textAlign: 'right',
    maxWidth: '45%',
    marginLeft: 'auto',
  },
  label: {
    fontFamily: 'var(--mono)',
    fontSize: '0.8125rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    marginBottom: '0.4rem',
    display: 'block',
  },
  name: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
    fontWeight: 400,
    color: 'var(--ink)',
    lineHeight: 1.3,
    display: 'block',
    transition: 'color 0.3s var(--ease)',
  },
};

function ProjectNav({ slug, onNavigate }) {
  const idx = PROJECT_ORDER.indexOf(slug);
  const prev = idx > 0 ? PROJECT_ORDER[idx - 1] : null;
  const next = idx < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[idx + 1] : null;

  return (
    <div style={projNavStyles.bar}>
      {prev ? (
        <button style={projNavStyles.btn} onClick={() => onNavigate(prev)}
          onMouseEnter={(e) => e.currentTarget.querySelector('[data-name]').style.color = 'var(--muted)'}
          onMouseLeave={(e) => e.currentTarget.querySelector('[data-name]').style.color = 'var(--ink)'}>
          <span style={projNavStyles.label}>Previous Project</span>
          <span data-name="" style={projNavStyles.name}>← {PROJECT_NAMES[prev]}</span>
        </button>
      ) : <div></div>}
      {next ? (
        <button style={projNavStyles.btnRight} onClick={() => onNavigate(next)}
          onMouseEnter={(e) => e.currentTarget.querySelector('[data-name]').style.color = 'var(--muted)'}
          onMouseLeave={(e) => e.currentTarget.querySelector('[data-name]').style.color = 'var(--ink)'}>
          <span style={projNavStyles.label}>Next Project</span>
          <span data-name="" style={projNavStyles.name}>{PROJECT_NAMES[next]} →</span>
        </button>
      ) : <div></div>}
    </div>
  );
}

const projStyles = {
  back: {
    fontFamily: 'var(--mono)',
    fontSize: '0.875rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '0',
    transition: 'color 0.3s var(--ease)',
  },
  header: {
    padding: 'clamp(4rem, 10vh, 8rem) var(--gutter) clamp(2rem, 4vh, 3rem)',
    maxWidth: 'var(--maxw)',
    margin: '0 auto',
  },
  cat: {
    fontFamily: 'var(--mono)',
    fontSize: '0.8125rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    marginBottom: '1rem',
  },
  title: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
    fontWeight: 400,
    lineHeight: 0.92,
    letterSpacing: '-0.03em',
    margin: '0 0 1.5rem',
  },
  meta: {
    fontFamily: 'var(--mono)',
    fontSize: '0.8125rem',
    letterSpacing: '0.12em',
    color: 'var(--muted)',
    textTransform: 'uppercase',
    marginBottom: '2rem',
  },
  heroImg: {
    width: '100%',
    maxHeight: '65vh',
    objectFit: 'cover',
    display: 'block',
  },
  content: {
    padding: 'clamp(2rem, 5vh, 4rem) var(--gutter)',
    maxWidth: 'var(--maxw)',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'clamp(2rem, 4vw, 4rem)',
  },
  lede: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(1.125rem, 1.6vw, 1.4rem)',
    lineHeight: 1.55,
    fontWeight: 400,
    margin: 0,
  },
  bodyCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  bodyP: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
    lineHeight: 1.65,
    color: 'var(--ink)',
    margin: 0,
  },
  gallery: {
    padding: 'clamp(2rem, 5vh, 4rem) var(--gutter)',
    maxWidth: 'var(--maxw)',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(1rem, 2vw, 2rem)',
  },
  galleryImg: {
    width: '100%',
    objectFit: 'cover',
    border: '1px solid var(--line)',
    display: 'block',
  },
};

function ProjectPage({ slug, onBack, onNavigate }) {
  const d = PROJECT_DATA[slug];
  if (!d) return null;

  return (
    <main>
      <div style={projStyles.header}>
        <button style={projStyles.back} onClick={onBack}
          onMouseEnter={(e) => e.target.style.color = 'var(--ink)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}>
          ← Back
        </button>
        <p style={{ ...projStyles.cat, marginTop: '2rem' }}>{d.cat}</p>
        <h1 style={projStyles.title}>
          {d.title[0]}<span className="accent">{d.title[1]}</span>
        </h1>
        <p style={projStyles.meta}>{d.meta}</p>
      </div>

      <div style={{ padding: '0 var(--gutter)', maxWidth: 'var(--maxw)', margin: '0 auto' }}>
        <img src={d.img} alt={d.title.join('')} style={projStyles.heroImg} />
      </div>

      <div className="proj-content" style={projStyles.content}>
        <p style={projStyles.lede}>{d.lede}</p>
        <div style={projStyles.bodyCol}>
          {d.body.map((p, i) => <p key={i} style={projStyles.bodyP}>{p}</p>)}
        </div>
      </div>

      {d.imgs.length > 1 && (
        <div style={projStyles.gallery}>
          {d.imgs.slice(1).map((src, i) => (
            <img key={i} src={src} alt="" style={projStyles.galleryImg} />
          ))}
        </div>
      )}

      <div style={{ padding: 'clamp(3rem, 6vh, 5rem) var(--gutter)', maxWidth: 'var(--maxw)', margin: '0 auto', borderTop: '1px solid var(--line)' }}>
        <button style={projStyles.back} onClick={onBack}
          onMouseEnter={(e) => e.target.style.color = 'var(--ink)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}>
          ← Back to Work
        </button>
      </div>

      <ProjectNav slug={slug} onNavigate={onNavigate} />
    </main>
  );
}

Object.assign(window, { ProjectPage, ProjectNav, PROJECT_DATA, PROJECT_ORDER, PROJECT_NAMES });
