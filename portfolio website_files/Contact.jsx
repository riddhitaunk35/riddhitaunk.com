/* global React */
// Contact — four overlapping outlined circles in a diagonal cluster.
// SVG renders visuals (circles, lines, dots, labels). Native HTML <a>
// elements are overlaid in matching positions so the browser handles
// mailto:/tel:/external links natively. Hovering an overlay toggles
// the matching SVG group's "is-active" class so the line + dot + label
// + value fade in for that circle only.
//
// ─── Edit your real details below ────────────────────────────────
// Each orb's `href` is a real anchor target. Swap the placeholder
// values for your real ones — nothing else needs to change.

function ContactPage() {
  const sage = "#837D69";
  const VBW = 1400;
  const VBH = 800;

  const orbs = [
    {
      id: "number",
      label: "NUMBER",
      value: ["+44 7747 136000", "+91 84489 45572"],
      href: "tel:+447747136000", // ← editable: tel: link
      cx: 700, cy: 210, r: 180,
      dot: { x: 520, y: 210 },
      lineEnd: { x: 90, y: 210 },
      labelAnchor: "end",
      labelX: 90, labelY: 198,
      valueX: 90, valueY: 224,
      valueLineHeight: 22,
    },
    {
      id: "email",
      label: "EMAIL",
      value: ["riddhitaunk35@gmail.com"],
      href: "mailto:riddhitaunk35@gmail.com", // ← editable: mailto: link
      cx: 900, cy: 420, r: 195,
      dot: { x: 1095, y: 420 },
      lineEnd: { x: 1310, y: 420 },
      labelAnchor: "start",
      labelX: 1310, labelY: 408,
      valueX: 1310, valueY: 434,
      valueLineHeight: 22,
    },
    {
      id: "linkedin",
      label: "LINKEDIN",
      value: ["Riddhi Taunk"],
      href: "https://www.linkedin.com/in/riddhi-taunk-126a97346", // ← editable
      cx: 1080, cy: 620, r: 180,
      dot: { x: 1260, y: 620 },
      lineEnd: { x: 1380, y: 620 },
      labelAnchor: "start",
      labelX: 1380, labelY: 608,
      valueX: 1380, valueY: 634,
      valueLineHeight: 22,
    },
    {
      id: "insta",
      label: "INSTAGRAM",
      value: ["@riddhitaunkk"],
      href: "https://www.instagram.com/riddhitaunkk/", // ← editable
      cx: 800, cy: 600, r: 175,
      dot: { x: 625, y: 600 },
      lineEnd: { x: 90, y: 600 },
      labelAnchor: "end",
      labelX: 90, labelY: 588,
      valueX: 90, valueY: 614,
      valueLineHeight: 22,
    },
  ];

  const [hoveredId, setHoveredId] = React.useState(null);

  return (
    <main className="contact-page">
      <section className="page-head wrap">
        <div className="label">Contact</div>
        <h1 className="page-title">Let's <em>talk</em>.</h1>
      </section>
      <div className="contact-canvas-wrap">
        <div className="contact-canvas">
          <svg
            viewBox={"0 0 " + VBW + " " + VBH}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true">
            {orbs.map((o) =>
            <g
              key={o.id}
              className={
              "contact-orb contact-orb--" + o.id + (
              hoveredId === o.id ? " is-active" : "")}>

                {/* Soft brighten inside the circle */}
                <circle
                cx={o.cx} cy={o.cy} r={o.r - 2}
                fill={sage}
                className="orb-fill" />
                {/* Outline */}
                <circle
                cx={o.cx} cy={o.cy} r={o.r}
                fill="none"
                stroke={sage}
                strokeWidth="1.5" />
                {/* Connector line */}
                <line
                x1={o.dot.x} y1={o.dot.y}
                x2={o.lineEnd.x} y2={o.lineEnd.y}
                stroke={sage}
                strokeWidth="1"
                className="orb-line" />
                {/* Edge dot */}
                <circle
                cx={o.dot.x} cy={o.dot.y} r="4"
                fill={sage}
                className="orb-dot" />
                {/* Label (caps) */}
                <text
                x={o.labelX} y={o.labelY}
                textAnchor={o.labelAnchor}
                fill={sage}
                className="orb-label">
                  {o.label}
                </text>
                {/* Value(s) */}
                {o.value.map((line, i) =>
              <text
                key={i}
                x={o.valueX}
                y={o.valueY + i * o.valueLineHeight}
                textAnchor={o.labelAnchor}
                fill={sage}
                className="orb-value">
                    {line}
                  </text>
              )}
              </g>
            )}
          </svg>

          {/* HTML anchor overlays — real browser-native links. */}
          {orbs.map((o) => {
            const isExternal = o.href.startsWith("http");
            const left = (o.cx - o.r) / VBW * 100;
            const top = (o.cy - o.r) / VBH * 100;
            const w = o.r * 2 / VBW * 100;
            const h = o.r * 2 / VBH * 100;
            return (
              <a
                key={o.id}
                href={o.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="contact-orb-link"
                style={{ left: left + "%", top: top + "%", width: w + "%", height: h + "%" }}
                aria-label={o.label}
                onMouseEnter={() => setHoveredId(o.id)}
                onMouseLeave={() => setHoveredId((h) => h === o.id ? null : h)}
                onFocus={() => setHoveredId(o.id)}
                onBlur={() => setHoveredId((h) => h === o.id ? null : h)}>
                <span>{o.label}</span>
              </a>);

          })}
        </div>
      </div>

      <p className="contact-cta">hover over the circles</p>
    </main>);

}

window.ContactPage = ContactPage;
