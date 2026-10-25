/* ==========================================================================
   RAMA CHANDRA PORTFOLIO — ZERO-G / ANTIGRAVITY PHYSICS SIMULATOR
   Updated: Photoshop & Video Post Theme (Matter.js)
   ========================================================================== */

(function () {
  'use strict';

  let engine, world;
  let canvas, ctx;
  let mouseConstraint;
  let bodies = [];
  let isRunning = false;
  let animationFrameId = null;

  const BADGE_ITEMS = [
    { text: 'Adobe Photoshop', color: '#31a8ff', category: 'Photo' },
    { text: 'High-End Retouching', color: '#ffaa00', category: 'Photo' },
    { text: 'Frequency Separation', color: '#31a8ff', category: 'Photo' },
    { text: 'Dodge & Burn Master', color: '#ffaa00', category: 'Photo' },
    { text: 'Adobe Premiere Pro', color: '#9999ff', category: 'Video' },
    { text: 'After Effects', color: '#d8b4fe', category: 'VFX' },
    { text: '3ds Max 3D', color: '#2dd4bf', category: 'CGI' },
    { text: 'DaVinci Resolve', color: '#eab308', category: 'Color' },
    { text: '10+ Years Experience', color: '#10e7b2', category: 'Mastery' },
    { text: '5,000+ Retouched Photos', color: '#ffaa00', category: 'Metric' },
    { text: '500M+ Views', color: '#ff3b69', category: 'Metric' },
    { text: 'Camera RAW Colorist', color: '#31a8ff', category: 'Photo' },
    { text: 'Pen Tool Clipping', color: '#ffaa00', category: 'Photo' },
    { text: 'Suman TV Network', color: '#31a8ff', category: 'Client' },
    { text: 'SMPTE 01:00:24:18', color: '#10e7b2', category: 'Timecode' },
    { text: 'YouTube Key Art & Thumbnails', color: '#ff3b69', category: 'Design' }
  ];

  function initPhysics() {
    const container = document.getElementById('zero-g-canvas-container');
    canvas = document.getElementById('zero-g-canvas');
    if (!container || !canvas || typeof Matter === 'undefined') return;

    ctx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const { Engine, World, Bodies, Mouse, MouseConstraint } = Matter;

    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 0.04;
    world.gravity.x = 0;

    const wallThick = 60;
    const ground = Bodies.rectangle(width / 2, height + wallThick / 2, width * 2, wallThick, { isStatic: true });
    const ceiling = Bodies.rectangle(width / 2, -wallThick / 2, width * 2, wallThick, { isStatic: true });
    const leftWall = Bodies.rectangle(-wallThick / 2, height / 2, wallThick, height * 2, { isStatic: true });
    const rightWall = Bodies.rectangle(width + wallThick / 2, height / 2, wallThick, height * 2, { isStatic: true });

    World.add(world, [ground, ceiling, leftWall, rightWall]);
    spawnBadges();

    const mouse = Mouse.create(canvas);
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    World.add(world, mouseConstraint);
    setupControls();
  }

  function spawnBadges() {
    if (!world || typeof Matter === 'undefined') return;
    const { Bodies, World } = Matter;
    const width = window.innerWidth;
    const height = window.innerHeight;

    BADGE_ITEMS.forEach((item) => {
      const paddingX = 36;
      const textWidth = item.text.length * 8.6 + paddingX;
      const cardHeight = 44;

      const x = Math.random() * (width - 200) + 100;
      const y = Math.random() * (height * 0.6) + 100;

      const body = Bodies.rectangle(x, y, textWidth, cardHeight, {
        chamfer: { radius: 10 },
        restitution: 0.85,
        frictionAir: 0.02,
        density: 0.002
      });

      body.customData = {
        text: item.text,
        color: item.color,
        category: item.category,
        width: textWidth,
        height: cardHeight
      };

      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 6,
        y: (Math.random() - 0.5) * 6
      });

      bodies.push(body);
      World.add(world, body);
    });
  }

  function setupControls() {
    const btnZero = document.getElementById('zg-btn-zero');
    const btnMicro = document.getElementById('zg-btn-micro');
    const btnInvert = document.getElementById('zg-btn-invert');
    const btnEarth = document.getElementById('zg-btn-earth');
    const btnSpawn = document.getElementById('zg-btn-spawn');
    const btnExit = document.getElementById('zg-btn-exit');

    if (btnZero) btnZero.onclick = () => setGravity(0, 0);
    if (btnMicro) btnMicro.onclick = () => setGravity(0, 0.05);
    if (btnInvert) btnInvert.onclick = () => setGravity(0, -0.4);
    if (btnEarth) btnEarth.onclick = () => setGravity(0, 1);
    if (btnSpawn) btnSpawn.onclick = () => spawnSingleRandom();
    if (btnExit) btnExit.onclick = () => toggleZeroG(false);
  }

  function setGravity(x, y) {
    if (!world) return;
    world.gravity.x = x;
    world.gravity.y = y;
    if (window.playSfx) window.playSfx('click');
  }

  function spawnSingleRandom() {
    if (!world || typeof Matter === 'undefined') return;
    const { Bodies, World } = Matter;
    const item = BADGE_ITEMS[Math.floor(Math.random() * BADGE_ITEMS.length)];
    const textWidth = item.text.length * 8.6 + 36;
    const cardHeight = 44;
    const x = window.innerWidth / 2 + (Math.random() - 0.5) * 100;
    const y = 80;

    const body = Bodies.rectangle(x, y, textWidth, cardHeight, {
      chamfer: { radius: 10 },
      restitution: 0.85,
      frictionAir: 0.02,
      density: 0.002
    });
    body.customData = {
      text: item.text,
      color: item.color,
      category: item.category,
      width: textWidth,
      height: cardHeight
    };
    Matter.Body.setVelocity(body, {
      x: (Math.random() - 0.5) * 8,
      y: Math.random() * 5
    });

    bodies.push(body);
    World.add(world, body);
    if (window.playSfx) window.playSfx('whoosh');
  }

  function renderLoop() {
    if (!isRunning) return;

    Matter.Engine.update(engine, 1000 / 60);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Render bodies
    bodies.forEach(body => {
      const { x, y } = body.position;
      const angle = body.angle;
      const data = body.customData;
      if (!data) return;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      const w = data.width;
      const h = data.height;

      // Glow
      ctx.shadowColor = data.color;
      ctx.shadowBlur = 18;

      ctx.fillStyle = '#111624';
      ctx.strokeStyle = data.color;
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      roundRect(ctx, -w / 2, -h / 2, w, h, 8);
      ctx.fill();
      ctx.stroke();

      ctx.shadowBlur = 0;

      // Small category dot
      ctx.fillStyle = data.color;
      ctx.beginPath();
      ctx.arc(-w / 2 + 14, 0, 4, 0, Math.PI * 2);
      ctx.fill();

      // Text
      ctx.fillStyle = '#f6f8fc';
      ctx.font = '600 12px "JetBrains Mono", monospace';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(data.text, -w / 2 + 26, 0);

      ctx.restore();
    });

    animationFrameId = requestAnimationFrame(renderLoop);
  }

  function roundRect(context, x, y, width, height, radius) {
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
  }

  function toggleZeroG(forceState) {
    const container = document.getElementById('zero-g-canvas-container');
    const toggleBtn = document.getElementById('antigravity-toggle');
    if (!container) return;

    const targetState = typeof forceState === 'boolean' ? forceState : !isRunning;

    if (targetState) {
      container.classList.add('active');
      if (toggleBtn) toggleBtn.classList.add('active');
      if (!engine) initPhysics();
      isRunning = true;
      renderLoop();
      if (window.playSfx) window.playSfx('whoosh');
      if (window.showToast) window.showToast('🚀 Zero-G Darkroom Active! Toss & collide Photoshop & Video badges.');
    } else {
      container.classList.remove('active');
      if (toggleBtn) toggleBtn.classList.remove('active');
      isRunning = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (window.playSfx) window.playSfx('click');
    }
  }

  window.addEventListener('resize', () => {
    if (canvas && isRunning) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  });

  window.toggleZeroG = toggleZeroG;

  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('antigravity-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleZeroG();
      });
    }
  });
})();
