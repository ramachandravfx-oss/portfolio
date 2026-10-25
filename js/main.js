/* ==========================================================================
   RAMA CHANDRA — SENIOR VIDEO & PHOTO EDITOR | MAIN APP LOGIC
   Theme: Neo-Luxe Creative Darkroom
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. DATA: PHOTO & VIDEO PROJECTS
  // -------------------------------------------------------------------------
  const PROJECTS = [
    {
      id: 'beauty-retouch-vogue',
      title: 'Vogue Haute Horlogerie — Editorial Skin Retouching',
      category: 'photo-retouch',
      categoryLabel: 'High-End Beauty Retouch',
      mediaType: 'photo',
      client: 'Vogue & Luxury Timepieces',
      year: '2024',
      duration: '61MP RAW',
      role: 'Master Retoucher & Colorist',
      views: 'Featured Cover',
      retention: 'Flawless Micro-Texture',
      software: ['Photoshop CC', 'Camera RAW', 'Frequency Sep', 'Dodge & Burn'],
      thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://www.youtube.com/embed/1v0Os1BGcLI?autoplay=1&rel=0',
      summary: 'High-end beauty and macro skin retouching using 16-bit Frequency Separation, dual-curve Dodge & Burn, and precise color grading preserving natural epidermal pores.',
      challenge: 'Heavy studio strobe glare, subtle blemishes, and flyaway hair strays while strictly avoiding the "plastic blurred" look.',
      solution: 'Separated low-frequency tonal transitions from high-frequency pore textures. Executed pixel-level non-destructive Dodge & Burn on 50% neutral gray layers with soft light blending.'
    },
    {
      id: 'suman-tv-special',
      title: 'Suman TV Network — Investigative Master Cut',
      category: 'broadcast',
      categoryLabel: 'Broadcast & Documentary',
      mediaType: 'video',
      client: 'Suman TV Media Network',
      year: '2024',
      duration: '14:20',
      role: 'Lead Post-Production Editor & Colorist',
      views: '14.2M+ Views',
      retention: '64% Watch Time',
      software: ['Premiere Pro', 'DaVinci Resolve', 'Photoshop Key Art'],
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://www.youtube.com/embed/1v0Os1BGcLI?autoplay=1&rel=0',
      summary: 'High-stakes documentary edit balancing 6 multi-camera angles, archival photo restoration in Photoshop, and broadcast gamma grading for India’s top media network.',
      challenge: 'Uncalibrated multi-camera footage and damaged archival photographs requiring restoration within a 24-hour broadcast deadline.',
      solution: 'Restored archival stills in Photoshop using generative fill and content-aware cleanup; conformed video in Premiere Pro with ACES broadcast color compliance.'
    },
    {
      id: 'cybernetic-3d-reveal',
      title: 'Cybernetic Horizon — 3D Product & Matte Composite',
      category: 'vfx',
      categoryLabel: '3D CGI & Photoshop Matte',
      mediaType: 'video',
      client: 'NovaTech Hardware Labs',
      year: '2024',
      duration: '01:45',
      role: '3D Modeler & Photoshop Compositor',
      views: '2.8M+ Views',
      retention: '88% Retention',
      software: ['3ds Max', 'Photoshop CC', 'After Effects', 'V-Ray'],
      thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://www.youtube.com/embed/mJ8f9tRJD9E?autoplay=1&rel=0',
      summary: 'Photorealistic 3D hard-surface modeling in 3ds Max composited with intricate digital matte painting and chromatic aberration grading in Photoshop.',
      challenge: 'Seamlessly marrying CGI render passes with real-world photographic textures and specular reflections.',
      solution: 'Extracted Cryptomatte layers into Photoshop for precision color balancing, depth map atmospheric haze, and anamorphic flare bloom.'
    },
    {
      id: 'commercial-product-retouch',
      title: 'Luxe Chrono & Perfume — Commercial Product Retouch',
      category: 'photo-retouch',
      categoryLabel: 'Commercial Product Retouch',
      mediaType: 'photo',
      client: 'Maison d’Or Paris',
      year: '2024',
      duration: 'Ultra HD Print',
      role: 'Lead Commercial Retoucher',
      views: 'Global Billboard',
      retention: 'Sub-Pixel Precision',
      software: ['Photoshop CC', 'Pen Tool Pathing', 'Specular Grading'],
      thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://www.youtube.com/embed/1v0Os1BGcLI?autoplay=1&rel=0',
      summary: 'Comprehensive commercial product cleanup: Pen Tool vector clipping, glass reflection reconstruction, chromatic fringing removal, and luxury gold hue harmonization.',
      challenge: 'Intricate glass dust specs, unwanted studio softbox reflections, and micro scratches on polished metallic bezels.',
      solution: 'Re-painted reflection horizons with custom gradient fills, matched specular edge highlights, and rendered synthetic caustics for an irresistible print hero shot.'
    },
    {
      id: 'viral-velocity-shorts',
      title: 'Viral Velocity — High-Retention Shorts & Key Art',
      category: 'retention',
      categoryLabel: 'Retention Video & Thumbnails',
      mediaType: 'video',
      client: 'Top-Tier Digital Creators',
      year: '2024',
      duration: '00:58',
      role: 'Retention Specialist & Thumbnail Artist',
      views: '82.5M+ Views',
      retention: '114% Retention',
      software: ['Premiere Pro', 'Photoshop CC', 'After Effects'],
      thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://www.youtube.com/embed/yMsyoX4O3gk?autoplay=1&rel=0',
      summary: 'Engineered for viral retention: psychological sub-second cut rhythm, paired with high-CTR click-tested YouTube thumbnails designed in Photoshop.',
      challenge: 'Viewer drop-off in the first 2 seconds combined with low YouTube click-through rates under 5%.',
      solution: 'Crafted hyper-vibrant 3D-depth thumbnails in Photoshop achieving a 14.8% CTR, followed by an explosive multi-sound hook in Premiere Pro.'
    },
    {
      id: 'movie-poster-composite',
      title: 'Neon Odyssey — Cinematic Movie Poster & Matte Painting',
      category: 'photo-retouch',
      categoryLabel: 'Digital Matte Composite',
      mediaType: 'photo',
      client: 'Apex Cinema Arts',
      year: '2023',
      duration: '8K Master Print',
      role: 'Key Art Designer & Retoucher',
      views: 'Theatrical Release',
      retention: '45+ Composite Layers',
      software: ['Photoshop CC', 'Camera RAW', 'Digital Painting'],
      thumbnail: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://www.youtube.com/embed/mJ8f9tRJD9E?autoplay=1&rel=0',
      summary: 'Seamless composite of 14 separate RAW photos, volumetric atmospheric smoke, perspective lighting matching, and custom cinematic typography.',
      challenge: 'Merging disparate lighting angles and differing focal lengths into a single unified key art theatrical one-sheet.',
      solution: 'Re-lit actor plates with custom color dodge and screen blend curves in Photoshop, painting directional rim light to match ambient neon signs.'
    },
    {
      id: 'neon-echo-music-video',
      title: 'Neon Echo — Cyberpunk Music Video',
      category: 'commercials',
      categoryLabel: 'Music Video & Color Grading',
      mediaType: 'video',
      client: 'Orbit Records & Artists',
      year: '2023',
      duration: '03:45',
      role: 'Lead Creative Editor & Colorist',
      views: '12.4M+ Views',
      retention: '82% Retention',
      software: ['Premiere Pro', 'After Effects', 'Photoshop Cover'],
      thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://www.youtube.com/embed/1v0Os1BGcLI?autoplay=1&rel=0',
      summary: 'Beat-synchronized speed ramping, stylized rotoscoped glitch typography, and neon dual-tone color grading matched to synth rhythms.',
      challenge: 'Harmonizing footage from 4 different camera rigs shot across multiple night concert locations.',
      solution: 'Applied custom Photoshop color-lookup profiles across DaVinci and Premiere, ensuring uniform contrast and neon saturation.'
    },
    {
      id: 'suman-tv-political',
      title: 'Suman TV Network — Breaking Political Exposé',
      category: 'broadcast',
      categoryLabel: 'Broadcast & Documentary',
      mediaType: 'video',
      client: 'Suman TV Media Network',
      year: '2024',
      duration: '18:45',
      role: 'Supervising Editor & Key Art Lead',
      views: '9.8M+ Views',
      retention: '71% Retention',
      software: ['Premiere Pro', 'Photoshop CC', 'Audition'],
      thumbnail: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://www.youtube.com/embed/mJ8f9tRJD9E?autoplay=1&rel=0',
      summary: 'Rapid-turnaround prime-time broadcast cut with 2.5D parallax document animation and dramatic photo restoration.',
      challenge: 'Restoring low-resolution historic newspaper clippings and photographs for high-definition 4K broadcast.',
      solution: 'Upscaled and re-textured images in Photoshop using high-pass sharpening and grain matching before 3D camera mapping.'
    }
  ];

  // -------------------------------------------------------------------------
  // 2. AUDIO SFX SYNTHESIZER (DARKROOM & SHUTTER SOUNDS)
  // -------------------------------------------------------------------------
  let audioCtx = null;
  let isSfxMuted = false;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
  }

  function playSfx(type) {
    if (isSfxMuted) return;
    try {
      if (!audioCtx) initAudio();
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;

      if (type === 'shutter') {
        // High-end camera shutter click
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(2400, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.05);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'brush') {
        // Soft Photoshop brush stroke swoosh
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.09);
      } else if (type === 'click') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.03);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'whoosh') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.1);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.13);
      }
    } catch (e) {
      // Audio autoplay policy
    }
  }
  window.playSfx = playSfx;

  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      isSfxMuted = !isSfxMuted;
      showToast(isSfxMuted ? '🔇 Studio Audio Muted' : '🔊 Studio Audio Active');
      if (!isSfxMuted) playSfx('shutter');
    });
  }

  // -------------------------------------------------------------------------
  // 3. INTERACTIVE BEFORE / AFTER RETOUCHING SPLIT VIEWER
  // -------------------------------------------------------------------------
  const splitViewer = document.getElementById('split-viewer-card');
  const splitAfter = document.getElementById('split-image-after');
  const splitHandle = document.getElementById('split-handle');
  let isSplitDragging = false;

  function updateSplitPosition(clientX) {
    if (!splitViewer || !splitAfter || !splitHandle) return;
    const rect = splitViewer.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    let percentage = (offsetX / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));

    splitAfter.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
    splitHandle.style.left = `${percentage}%`;
  }

  if (splitViewer) {
    splitViewer.addEventListener('mousedown', (e) => {
      isSplitDragging = true;
      updateSplitPosition(e.clientX);
      playSfx('brush');
    });
    window.addEventListener('mousemove', (e) => {
      if (isSplitDragging) {
        updateSplitPosition(e.clientX);
      }
    });
    window.addEventListener('mouseup', () => {
      if (isSplitDragging) {
        isSplitDragging = false;
        playSfx('click');
      }
    });
    // Touch support for mobile
    splitViewer.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        updateSplitPosition(e.touches[0].clientX);
      }
    }, { passive: true });
  }

  // -------------------------------------------------------------------------
  // 4. PHOTOSHOP TOOL PALETTE SWITCHER
  // -------------------------------------------------------------------------
  const psToolBtns = document.querySelectorAll('.ps-tool-btn');
  psToolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      psToolBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const toolName = btn.getAttribute('data-tool');
      playSfx('shutter');
      showToast(`🎯 Photoshop Tool Selected: ${toolName}`);

      // Change cursor icon mode
      if (cursor) {
        cursor.classList.remove('brush-mode', 'razor-mode');
        if (toolName.includes('Brush') || toolName.includes('Stamp')) {
          cursor.classList.add('brush-mode');
        } else if (toolName.includes('Razor')) {
          cursor.classList.add('razor-mode');
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // 5. CUSTOM RETOUCHING CURSOR
  // -------------------------------------------------------------------------
  const cursor = document.getElementById('custom-cursor');
  const cursorDot = document.getElementById('custom-cursor-dot');
  let mouseX = -100, mouseY = -100;
  let cursorX = -100, cursorY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    if (cursor) {
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    }
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  function attachCursorHover() {
    const hoverables = document.querySelectorAll('button, a, .bento-card, .ps-layer-item, .nle-clip, input, select, textarea');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursor) cursor.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        if (cursor) cursor.classList.remove('hovering');
      });
    });
  }
  attachCursorHover();

  // -------------------------------------------------------------------------
  // 6. DUAL WORKSPACE TABS: PHOTOSHOP LAYERS VS NLE TIMELINE
  // -------------------------------------------------------------------------
  const tabPsLayers = document.getElementById('tab-ps-layers');
  const tabNleTimeline = document.getElementById('tab-nle-timeline');
  const viewPsLayers = document.getElementById('view-ps-layers');
  const viewNleTimeline = document.getElementById('view-nle-timeline');

  if (tabPsLayers && tabNleTimeline && viewPsLayers && viewNleTimeline) {
    tabPsLayers.addEventListener('click', () => {
      tabPsLayers.classList.add('active');
      tabNleTimeline.classList.remove('active');
      viewPsLayers.classList.add('active');
      viewNleTimeline.classList.remove('active');
      playSfx('shutter');
    });

    tabNleTimeline.addEventListener('click', () => {
      tabNleTimeline.classList.add('active');
      tabPsLayers.classList.remove('active');
      viewNleTimeline.classList.add('active');
      viewPsLayers.classList.remove('active');
      playSfx('click');
    });
  }

  // Interactive Photoshop Layer Inspection
  const psLayerItems = document.querySelectorAll('.ps-layer-item');
  psLayerItems.forEach(item => {
    item.addEventListener('click', () => {
      const name = item.getAttribute('data-layer-name');
      const desc = item.getAttribute('data-layer-desc');
      playSfx('brush');
      showToast(`🎨 Layer: ${name} — ${desc}`);
    });
  });

  // -------------------------------------------------------------------------
  // 7. BENTO GRID PROJECT RENDERING & FILTERING
  // -------------------------------------------------------------------------
  const bentoContainer = document.getElementById('bento-grid-container');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderProjects(filterCategory = 'all') {
    if (!bentoContainer) return;
    bentoContainer.innerHTML = '';

    const filtered = filterCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === filterCategory);

    filtered.forEach((p, idx) => {
      let colSpan = 'bento-span-4';
      if (idx === 0) colSpan = 'bento-span-8';
      else if (idx === 1) colSpan = 'bento-span-4';
      else if (idx === 2) colSpan = 'bento-span-6';
      else if (idx === 3) colSpan = 'bento-span-6';
      else if (idx === 4) colSpan = 'bento-span-4';
      else if (idx === 5) colSpan = 'bento-span-4';
      else if (idx === 6) colSpan = 'bento-span-4';
      else colSpan = 'bento-span-12';

      const card = document.createElement('div');
      card.className = `bento-card ${colSpan}`;
      card.setAttribute('data-id', p.id);

      const isPhoto = p.mediaType === 'photo';

      card.innerHTML = `
        <div class="bento-thumb">
          <img src="${p.thumbnail}" alt="${p.title}" loading="lazy" />
          <div class="bento-badge-top">
            <span class="category-pill ${isPhoto ? 'photo-badge' : ''}">${p.categoryLabel}</span>
            <span class="type-indicator">${isPhoto ? '📷 RAW Photo' : '▶ Video Edit'}</span>
          </div>
          <div class="bento-play-hint">
            <span class="play-btn-pill">
              ${isPhoto 
                ? '🔍 Inspect Retouch Layers' 
                : '▶ Watch Edit Breakdown'}
            </span>
          </div>
        </div>
        <div class="bento-content">
          <div class="bento-meta-row">
            <span class="bento-client">${p.client}</span>
            <span>${p.year} &bull; ${p.role}</span>
          </div>
          <h3 class="bento-title">${p.title}</h3>
          <p class="bento-summary">${p.summary}</p>
          <div class="bento-footer">
            <div class="bento-tags">
              ${p.software.map(s => `<span class="bento-tag">${s}</span>`).join('')}
            </div>
            <span style="color: var(--accent-ps-blue); font-weight: 600;">View Details &rarr;</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        playSfx(isPhoto ? 'shutter' : 'click');
        openCinemaModal(p.id);
      });

      bentoContainer.appendChild(card);
    });

    attachCursorHover();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      playSfx('click');
      renderProjects(cat);
    });
  });

  renderProjects('all');

  // -------------------------------------------------------------------------
  // 8. MODAL CASE STUDY
  // -------------------------------------------------------------------------
  const cinemaModal = document.getElementById('cinema-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalVideoFrame = document.getElementById('modal-video-frame');
  const modalTitle = document.getElementById('modal-video-title');
  const modalMetaContainer = document.getElementById('modal-meta-chips');
  const modalChallengeText = document.getElementById('modal-challenge-text');
  const modalSolutionText = document.getElementById('modal-solution-text');

  function openCinemaModal(projectId) {
    const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
    if (!cinemaModal) return;

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalVideoFrame) modalVideoFrame.src = project.videoUrl;

    if (modalMetaContainer) {
      modalMetaContainer.innerHTML = `
        <span style="background: rgba(49, 168, 255, 0.15); color: var(--accent-ps-blue); border: 1px solid var(--accent-ps-blue); padding: 0.3rem 0.6rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.72rem;">${project.categoryLabel}</span>
        <span style="background: rgba(255, 255, 255, 0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.72rem;">Client: ${project.client}</span>
        <span style="background: rgba(255, 255, 255, 0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.72rem;">Role: ${project.role}</span>
        <span style="background: rgba(255, 255, 255, 0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.72rem;">Metrics: ${project.views}</span>
        ${project.software.map(s => `<span style="background: rgba(255, 255, 255, 0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.72rem;">${s}</span>`).join('')}
      `;
    }

    if (modalChallengeText) modalChallengeText.textContent = project.challenge;
    if (modalSolutionText) modalSolutionText.textContent = project.solution;

    // Pause soundtrack when modal video opens
    pauseSoundtrack();

    cinemaModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    playSfx('whoosh');
  }

  function closeCinemaModal() {
    if (!cinemaModal) return;
    cinemaModal.classList.remove('open');
    if (modalVideoFrame) modalVideoFrame.src = '';
    document.body.style.overflow = '';
    playSfx('click');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCinemaModal);
  if (cinemaModal) {
    cinemaModal.addEventListener('click', (e) => {
      if (e.target === cinemaModal) closeCinemaModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (cinemaModal && cinemaModal.classList.contains('open')) closeCinemaModal();
      if (window.toggleZeroG) window.toggleZeroG(false);
    }
  });

  document.querySelectorAll('.trigger-showreel-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCinemaModal('beauty-retouch-vogue');
    });
  });

  // -------------------------------------------------------------------------
  // 9. ANIMATED METRICS
  // -------------------------------------------------------------------------
  const metricValues = document.querySelectorAll('.metric-val-num');
  let metricsDone = false;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !metricsDone) {
        metricsDone = true;
        metricValues.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10);
          const dur = 1600;
          const start = performance.now();

          function step(now) {
            const progress = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(ease * target).toLocaleString();
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target.toLocaleString();
          }
          requestAnimationFrame(step);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.getElementById('metrics-section');
  if (metricsSection) obs.observe(metricsSection);

  // -------------------------------------------------------------------------
  // 10. BOOKING FORM
  // -------------------------------------------------------------------------
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const service = document.getElementById('form-project-type')?.value;
      const budget = document.getElementById('form-budget')?.value;
      const message = document.getElementById('form-message')?.value.trim();

      if (!name || !email || !message) {
        showToast('⚠️ Please complete all required fields.');
        return;
      }

      playSfx('shutter');
      showToast('🎉 Inquiring with Rama Chandra! Launching email...');

      const subject = encodeURIComponent(`Project Inquiry [${service}] from ${name}`);
      const body = encodeURIComponent(
        `Hi Rama,\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Service Requested: ${service}\n` +
        `Budget/Timeline: ${budget}\n\n` +
        `Project Scope:\n${message}\n\n` +
        `Looking forward to collaborating!`
      );

      setTimeout(() => {
        window.location.href = `mailto:ramachandra.vfx@gmail.com?subject=${subject}&body=${body}`;
      }, 700);

      bookingForm.reset();
    });
  }

  // -------------------------------------------------------------------------
  // 11. TOAST SYSTEM
  // -------------------------------------------------------------------------
  const toast = document.getElementById('toast-notice');
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3800);
  }
  window.showToast = showToast;

  // -------------------------------------------------------------------------
  // 12. CINEMATIC BACKGROUND SOUNDTRACK CONTROLLER
  // -------------------------------------------------------------------------
  const bgAudio = new Audio('assets/audio/soundtrack.mp3');
  bgAudio.loop = true;
  bgAudio.volume = 0.75;
  let isSoundtrackPlaying = false;

  const playerDiscBtn = document.getElementById('music-player-toggle');
  const scrubberWrap = document.getElementById('music-scrubber-wrap');
  const scrubberFill = document.getElementById('music-scrubber-fill');
  const playerTimeDisplay = document.getElementById('music-time-display');
  const heroSoundtrackBtns = document.querySelectorAll('.hero-soundtrack-trigger');

  function toggleSoundtrack() {
    if (isSoundtrackPlaying) {
      pauseSoundtrack();
    } else {
      playSoundtrack();
    }
  }

  function playSoundtrack() {
    bgAudio.play().then(() => {
      isSoundtrackPlaying = true;
      if (playerDiscBtn) {
        playerDiscBtn.classList.add('playing');
        playerDiscBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
      }
      showToast('🎵 Playing: AAYAA SHER — Cinematic Edit Soundtrack');
      playSfx('shutter');
    }).catch(() => {
      // Browser autoplay policy handler
      showToast('⚠️ Click play again to start the soundtrack.');
    });
  }

  function pauseSoundtrack() {
    if (!isSoundtrackPlaying) return;
    bgAudio.pause();
    isSoundtrackPlaying = false;
    if (playerDiscBtn) {
      playerDiscBtn.classList.remove('playing');
      playerDiscBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
    }
    showToast('⏸ Soundtrack Paused');
  }

  if (playerDiscBtn) {
    playerDiscBtn.addEventListener('click', toggleSoundtrack);
  }

  heroSoundtrackBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleSoundtrack();
    });
  });

  bgAudio.addEventListener('timeupdate', () => {
    if (!bgAudio.duration) return;
    const pct = (bgAudio.currentTime / bgAudio.duration) * 100;
    if (scrubberFill) scrubberFill.style.width = `${pct}%`;

    const formatTime = (secs) => {
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    if (playerTimeDisplay) {
      playerTimeDisplay.textContent = `${formatTime(bgAudio.currentTime)} / ${formatTime(bgAudio.duration)}`;
    }
  });

  if (scrubberWrap) {
    scrubberWrap.addEventListener('click', (e) => {
      const rect = scrubberWrap.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = clickX / rect.width;
      if (bgAudio.duration) {
        bgAudio.currentTime = pct * bgAudio.duration;
        if (!isSoundtrackPlaying) playSoundtrack();
      }
    });
  }

  // Header scroll
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 40) siteHeader.classList.add('scrolled');
      else siteHeader.classList.remove('scrolled');
    }
  });
});
