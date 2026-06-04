/* cursor-trail.js — subtle warm glitter trail.
 * - Single fullscreen canvas, fixed, pointer-events: none.
 * - Disabled on touch / coarse pointer and when reduced motion is set.
 * - 2–4 particles per qualifying mousemove, capped at 60 onscreen.
 * - Particles drift gently downward with a soft radial-gradient glow
 *   and fade over 600–900ms before being recycled.
 */
(function () {
  if (typeof window === 'undefined') return;
  if (matchMedia('(pointer: coarse)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText =
    'position:fixed;left:0;top:0;width:100%;height:100%;' +
    'pointer-events:none;z-index:9999;';
  // Inject as soon as <body> exists.
  var attach = function () {
    (document.body || document.documentElement).appendChild(canvas);
  };
  if (document.body) attach();
  else document.addEventListener('DOMContentLoaded', attach);

  var ctx = canvas.getContext('2d');
  var dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    canvas.width  = Math.floor(window.innerWidth  * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  // Warm, soft gold palette — champagne / antique / classic. 'r,g,b' strings.
  var palette = ['212,175,55', '201,169,97', '229,199,107'];

  var MAX = 60;
  var particles = [];
  var lastX = null, lastY = null;

  window.addEventListener('mousemove', function (e) {
    var x = e.clientX, y = e.clientY;
    if (lastX === null) { lastX = x; lastY = y; return; }
    var dx = x - lastX, dy = y - lastY;
    var dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 3) return;            // ignore micro-jitter
    lastX = x; lastY = y;

    var count = 2 + (Math.random() * 3) | 0; // 2–4
    for (var i = 0; i < count; i++) {
      if (particles.length >= MAX) particles.shift();
      particles.push({
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
        vx: (Math.random() - 0.5) * 0.5,
        vy: 0.12 + Math.random() * 0.45,        // gentle settle
        r:  0.6 + Math.random() * 1.6,           // 0.6–2.2 px core
        life: 0,
        max:  600 + Math.random() * 300,         // 600–900 ms
        color: palette[(Math.random() * palette.length) | 0],
        alpha: 0.6 + Math.random() * 0.2,        // 60–80%
      });
    }
  }, { passive: true });

  // Pause when tab is hidden.
  var running = true;
  document.addEventListener('visibilitychange', function () {
    running = !document.hidden;
    if (running) { lastT = performance.now(); requestAnimationFrame(frame); }
  });

  var lastT = performance.now();
  function frame(now) {
    if (!running) return;
    var dt = Math.min(now - lastT, 48);
    lastT = now;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (var i = particles.length - 1; i >= 0; i--) {
      var p = particles[i];
      p.life += dt;
      if (p.life >= p.max) { particles.splice(i, 1); continue; }
      p.x += p.vx;
      p.y += p.vy;
      // Gentle ease-out fade.
      var k = 1 - p.life / p.max;
      var a = p.alpha * k * k;
      var R = p.r * 3.2;
      var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, R);
      g.addColorStop(0,   'rgba(' + p.color + ',' + a + ')');
      g.addColorStop(0.4, 'rgba(' + p.color + ',' + (a * 0.45) + ')');
      g.addColorStop(1,   'rgba(' + p.color + ',0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, R, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
