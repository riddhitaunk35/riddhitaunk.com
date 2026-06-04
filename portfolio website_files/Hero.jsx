/* global React */
// Hero — split layout: editorial intro left, interactive aerial-crowd right.
// Hovering a hotspot reveals a pinned "index card"; hovering the panel
// restores the photo's color. Data-driven from PROJECTS.

const HERO_PROJECTS = [
{
  pos: "tl", slug: "vocal-for-local", cat: "Community Listening", title: "Vocal for Local",
  page: "work/vocal-for-local.html",
  meta: "2024 · MIT Alandi, Pune · Group Project",
  text: "Street vendors in Pune were quietly losing customers as shopping moved online. Through conversations and market observations, we mapped what that shift actually cost the people living it.",
  img: "assets/images/vocal-for-local.jpg"
},
{
  pos: "tr", slug: "ergonomics", cat: "Project 02 / Research", title: "Physical Ergonomics",
  page: "work/physical-ergonomics.html",
  meta: "Alandi · Nov 2023 · 2 weeks",
  text: "An ergonomic study of garland makers in Alandi — making visible the physical risks embedded in a craft that the discipline had never measured.",
  img: "images/ergo/home-card.jpg"
},
{
  pos: "cl", slug: "sound-as-structure", cat: "Sensory Environments", title: "Sound as Structure",
  page: "work/sound-as-structure.html",
  meta: "2025 · UAL London College of Communication · Researcher",
  text: "Sound shapes how well people think — but nobody treats it that way. I tracked sound levels across university spaces and visualised what’s usually invisible.",
  img: "assets/images/sound-as-structure.jpg"
},
{
  pos: "br", slug: "making-as-enquiry", cat: "Observational Research", title: "Making as Enquiry",
  page: "work/making-as-enquiry.html",
  meta: "2026 · UAL London College of Communication · Group Project",
  text: "What if wayfinding worked through touch instead of sight? We prototyped a tactile navigation system through material experiments and iterative making.",
  img: "assets/images/making-as-enquiry.jpg"
}];


function Paperclip() {
  return (
    <svg className="card__clip" width="20" height="40" viewBox="0 0 20 40" fill="none"
    stroke="#a39c90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 11v17a6 6 0 0 1-12 0V9a4 4 0 0 1 8 0v18a2 2 0 0 1-4 0V12" />
    </svg>);

}

function Hotspot({ p }) {
  return (
    <div className={"hotspot hotspot--" + p.pos} tabIndex={0} aria-label={"Project: " + p.title}>
      <span className="hotspot__pulse" aria-hidden="true"></span>
      <a className="card" href={p.page} aria-label={"View case study: " + p.title}>
        <Paperclip />
        <p className="card__cat">{p.cat}</p>
        <h3 className="card__title">{p.title}</h3>
        <p className="card__meta">{p.meta}</p>
        <p className="card__text">{p.text}</p>
        <span className="card__img-link">
          <img className="card__img" src={p.img} alt={p.title} loading="lazy" />
        </span>
        <span className="card__view"
        style={{
          display: 'block', marginTop: '0.75rem',
          fontFamily: 'var(--mono)', fontSize: '0.8125rem',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--muted)', transition: 'color 0.3s var(--ease)'
        }}>
          View Project →</span>
      </a>

    </div>);

}

function Hero() {
  return (
    <section className="hero" style={{ textAlign: "left" }}>
      <div className="hero__left">
        <h1 className="hero__title reveal d1" style={{ textAlign: "left", margin: "0px", borderWidth: "0px", borderStyle: "solid", padding: "0px" }}>Hi, <span className="accent">I&rsquo;m</span> Riddhi&nbsp;Taunk.</h1>
        <p className="hero__kicker reveal d2" style={{ color: "rgb(127, 125, 102)" }}>UX Design Student at UAL London</p>
        <p className="hero__intro reveal d3" style={{ fontFamily: "Times" }}>My practice is built around one belief: that good design starts before any sketching happens. It starts with listening.</p>
      </div>

      <div className="hero__right reveal d3">
        <div className="hero__crowd-wrap">
          <img className="hero__crowd" src="assets/images/crowd-figures.png"
          alt="Aerial black-and-white photograph of a crowd of people" />
          {HERO_PROJECTS.map((p) => <Hotspot p={p} key={p.pos} />)}
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '0.8125rem',
            textTransform: 'uppercase',
            position: 'absolute', bottom: '24px', right: '0',
            whiteSpace: 'nowrap', margin: '0', letterSpacing: "2.5px", width: "565px", height: "150px", color: "rgb(128, 126, 104)"
          }}>Click on the dots to view</p>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Hero, HERO_PROJECTS });