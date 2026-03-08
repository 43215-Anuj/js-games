/**
 * restyle_atlas.js
 * Repaints key game sprites in block-vs-ball/assets/atlas/atlas-0.png
 * with a futuristic neon aesthetic. The JSON coordinates are kept
 * exactly as-is — only the pixel colors inside each sprite change.
 *
 * Sprites repainted:
 *   b_10  (80x80) at x:591, y:144  → Electric Cyan block
 *   b_20  (80x80) at x:591, y:230  → Neon Purple block
 *   b_30  (80x80) at x:485, y:256  → Neon Pink block
 *   b_40  (80x80) at x:483, y:342  → Electric Blue+Gold block
 *   ball_01 (40x40) at x:449, y:537 → Glowing white-core plasma ball
 *   ufo   (71x38) at x:449, y:493  → Neon blue UFO shooter
 *   trajectory (40x600) at x:680, y:4 → Purple dotted trail
 *   bonus (40x40) at x:495, y:537  → Gold star bonus ball
 */

const sharp = require('sharp');
const path  = require('path');
const fs    = require('fs');

const ATLAS = path.join(__dirname, 'block-vs-ball/assets/atlas/atlas-0.png');
const OUT   = path.join(__dirname, 'block-vs-ball/assets/atlas/atlas-0.png');
const BACKUP= path.join(__dirname, 'block-vs-ball/assets/atlas/atlas-0-original.png');

// ── Helpers ─────────────────────────────────────────────

/** Lerp between two values */
function lerp(a, b, t) { return a + (b - a) * t; }

/** Clamp 0-255 */
function clamp(v) { return Math.max(0, Math.min(255, Math.round(v))); }

/**
 * Paint a rectangular region of a raw RGBA buffer.
 * painter(x, y, w, h) → { r, g, b, a }  where x,y are local to region
 */
function paintRegion(buf, atlasW, rx, ry, rw, rh, painter) {
  for (let y = 0; y < rh; y++) {
    for (let x = 0; x < rw; x++) {
      const px  = rx + x;
      const py  = ry + y;
      const idx = (py * atlasW + px) * 4;
      const c   = painter(x, y, rw, rh);
      if (c === null) continue; // transparent / skip
      buf[idx]   = clamp(c.r);
      buf[idx+1] = clamp(c.g);
      buf[idx+2] = clamp(c.b);
      buf[idx+3] = c.a !== undefined ? clamp(c.a) : 255;
    }
  }
}

/** Distance from center of w×h tile, normalized 0→1 */
function distFromCenter(x, y, w, h) {
  const cx = (w - 1) / 2, cy = (h - 1) / 2;
  return Math.sqrt(((x - cx) / cx) ** 2 + ((y - cy) / cy) ** 2);
}

/**
 * Rounded-rect mask: returns alpha 0-255.
 * r = corner radius in pixels.
 */
function roundedRectAlpha(x, y, w, h, r) {
  const x1 = r, x2 = w - r - 1;
  const y1 = r, y2 = h - r - 1;
  if (x >= x1 && x <= x2 && y >= y1 && y <= y2) return 255;
  if (x <  x1 && y <  y1) { const dx=x-x1, dy=y-y1; return Math.sqrt(dx*dx+dy*dy) <= r ? 255 : 0; }
  if (x >  x2 && y <  y1) { const dx=x-x2, dy=y-y1; return Math.sqrt(dx*dx+dy*dy) <= r ? 255 : 0; }
  if (x <  x1 && y >  y2) { const dx=x-x1, dy=y-y2; return Math.sqrt(dx*dx+dy*dy) <= r ? 255 : 0; }
  if (x >  x2 && y >  y2) { const dx=x-x2, dy=y-y2; return Math.sqrt(dx*dx+dy*dy) <= r ? 255 : 0; }
  if (x >= x1 && x <= x2) return 255;
  if (y >= y1 && y <= y2) return 255;
  return 0;
}

/** Circle mask */
function circleAlpha(x, y, w, h) {
  const cx = (w-1)/2, cy = (h-1)/2, r = Math.min(cx, cy);
  return Math.sqrt((x-cx)**2 + (y-cy)**2) <= r ? 255 : 0;
}

// ── Block painters ───────────────────────────────────────

/**
 * Futuristic block painter.
 * c1 = edge/glow color, c2 = inner color, accent = inner line color
 */
function blockPainter(c1, c2, accent, glowAlpha = 80) {
  return (x, y, w, h) => {
    const a = roundedRectAlpha(x, y, w, h, 10);
    if (a === 0) return { r:0, g:0, b:0, a:0 };

    const nx = x / (w - 1);  // 0→1 horizontal
    const ny = y / (h - 1);  // 0→1 vertical
    const d  = distFromCenter(x, y, w, h);

    // Border (2px outer ring)
    const border = (x <= 2 || x >= w-3 || y <= 2 || y >= h-3);

    // Inner glow gradient (diagonal)
    const t = (nx + ny) / 2;

    let r = lerp(c2.r, c1.r, t * 0.7);
    let g = lerp(c2.g, c1.g, t * 0.7);
    let b = lerp(c2.b, c1.b, t * 0.7);

    if (border) {
      // Bright neon border
      r = lerp(r, c1.r, 0.9);
      g = lerp(g, c1.g, 0.9);
      b = lerp(b, c1.b, 0.9);
    }

    // Scan-line effect (every 8px, dim slightly)
    if ((y % 8) < 1) {
      r *= 0.7; g *= 0.7; b *= 0.7;
    }

    // Top-left shine highlight
    if (x < w * 0.35 && y < h * 0.35) {
      const shine = (1 - nx/0.35) * (1 - ny/0.35) * 0.3;
      r = lerp(r, 255, shine);
      g = lerp(g, 255, shine);
      b = lerp(b, 255, shine);
    }

    // Inner thin accent line (circuit trace)
    if ((x === 6 || x === w-7) && y > 8 && y < h-8) {
      r = accent.r; g = accent.g; b = accent.b;
    }
    if ((y === 6 || y === h-7) && x > 8 && x < w-8) {
      r = accent.r; g = accent.g; b = accent.b;
    }

    return { r, g, b, a };
  };
}

// ── Ball painter (glowing plasma) ────────────────────────

function ballPainter(cCore, cOuter) {
  return (x, y, w, h) => {
    const a = circleAlpha(x, y, w, h);
    if (a === 0) return { r:0, g:0, b:0, a:0 };

    const d = distFromCenter(x, y, w, h);
    // Core is white-hot, outer is neon color
    const t = Math.min(d, 1);
    const shine = Math.max(0, 1 - d * 1.5);

    let r = lerp(255, cOuter.r, t);
    let g = lerp(255, cOuter.g, t);
    let b = lerp(255, cOuter.b, t);

    // Add specular highlight (top-left)
    const cx = (w-1)/2, cy = (h-1)/2;
    const hx = cx * 0.35, hy = cy * 0.35;
    const hd = Math.sqrt((x - hx)**2 + (y - hy)**2) / (Math.min(w,h)*0.3);
    const spec = Math.max(0, 1 - hd) ** 3 * 0.9;
    r = lerp(r, 255, spec);
    g = lerp(g, 255, spec);
    b = lerp(b, 255, spec);

    return { r, g, b, a };
  };
}

// ── UFO painter ──────────────────────────────────────────

function ufoPainter(cBody, cGlow) {
  return (x, y, w, h) => {
    // UFO is landscape oval (71x38)
    const cx = (w-1)/2, cy = (h-1)/2;
    const rx = cx * 0.95, ry = cy * 0.95;
    const inEllipse = ((x-cx)/rx)**2 + ((y-cy)/ry)**2 <= 1;
    if (!inEllipse) return { r:0, g:0, b:0, a:0 };

    const d = Math.sqrt(((x-cx)/rx)**2 + ((y-cy)/ry)**2);
    const t = d;

    // Dome (top half) is lighter
    const isTop = y < cy;
    let r = lerp(isTop ? 200 : cBody.r, cBody.r, t);
    let g = lerp(isTop ? 230 : cBody.g, cBody.g, t);
    let b = lerp(isTop ? 255 : cBody.b, cBody.b, t);

    // Neon rim
    if (d > 0.88) {
      r = lerp(r, cGlow.r, (d - 0.88) / 0.12 * 2);
      g = lerp(g, cGlow.g, (d - 0.88) / 0.12 * 2);
      b = lerp(b, cGlow.b, (d - 0.88) / 0.12 * 2);
    }

    // Specular
    const hd = Math.sqrt((x - cx*0.6)**2 + (y - cy*0.5)**2) / (w * 0.25);
    const spec = Math.max(0, 1 - hd) ** 3 * 0.7;
    r = lerp(r, 255, spec);
    g = lerp(g, 255, spec);
    b = lerp(b, 255, spec);

    return { r, g, b, a: 255 };
  };
}

// ── Trajectory painter (neon dots) ───────────────────────

function trajectoryPainter(cDot) {
  return (x, y, w, h) => {
    // Dots every 16px vertically, 8px diameter
    const dotSpacing = 16;
    const dotRadius  = 5;
    const dotY = (y % dotSpacing);
    const cx   = w / 2;
    const localY = dotY - dotSpacing / 2;
    const dist = Math.sqrt((x - cx) ** 2 + localY ** 2);
    if (dist > dotRadius) return { r:0, g:0, b:0, a:0 };

    // Soft glow
    const t = dist / dotRadius;
    const alpha = Math.round((1 - t * t) * 220);
    return { r: cDot.r, g: cDot.g, b: cDot.b, a: alpha };
  };
}

// ── Bonus ball painter ───────────────────────────────────

function bonusPainter() {
  return (x, y, w, h) => {
    const a = circleAlpha(x, y, w, h);
    if (a === 0) return { r:0, g:0, b:0, a:0 };

    const d = distFromCenter(x, y, w, h);
    // Gold-orange plasma ball
    const r = lerp(255, 255, d);
    const g = lerp(255, 140, d);
    const b = lerp(200, 0, d);

    const cx = (w-1)/2, cy = (h-1)/2;
    const hd = Math.sqrt((x-cx*0.5)**2 + (y-cy*0.5)**2) / (w*0.3);
    const spec = Math.max(0, 1-hd)**3 * 0.8;

    return {
      r: lerp(r, 255, spec),
      g: lerp(g, 255, spec),
      b: lerp(b, 255, spec),
      a
    };
  };
}

// ── Main ─────────────────────────────────────────────────

async function main() {
  // Backup original if not already done
  if (!fs.existsSync(BACKUP)) {
    fs.copyFileSync(ATLAS, BACKUP);
    console.log('✓ Backup created:', BACKUP);
  }

  const img    = sharp(ATLAS);
  const meta   = await img.metadata();
  const W      = meta.width;
  const H      = meta.height;

  // Get raw RGBA buffer
  const { data } = await img.raw().toBuffer({ resolveWithObject: true });
  const buf = Buffer.from(data);

  console.log(`Atlas: ${W}×${H}, ${buf.length} bytes`);

  // ── BLOCKS ────────────────────────────────────────────────────────────

  // b_10 (80x80) @ 591,144  → Electric Cyan
  paintRegion(buf, W, 591, 144, 80, 80,
    blockPainter(
      { r: 0, g: 245, b: 255 },    // c1 border/glow  = cyan
      { r: 0, g:  80, b: 120 },    // c2 body         = dark teal
      { r: 0, g: 200, b: 255 }     // accent line     = bright cyan
    )
  );

  // b_20 (80x80) @ 591,230  → Neon Purple / Violet
  paintRegion(buf, W, 591, 230, 80, 80,
    blockPainter(
      { r: 170, g:  0, b: 255 },   // c1 = electric purple
      { r:  50, g:  0, b:  90 },   // c2 = deep purple body
      { r: 200, g: 80, b: 255 }    // accent = bright violet
    )
  );

  // b_30 (80x80) @ 485,256  → Hot Pink / Magenta
  paintRegion(buf, W, 485, 256, 80, 80,
    blockPainter(
      { r: 255, g:  20, b: 150 },  // c1 = hot pink
      { r:  80, g:   0, b:  50 },  // c2 = deep magenta body
      { r: 255, g: 100, b: 200 }   // accent = bright pink
    )
  );

  // b_40 (80x80) @ 483,342  → Electric Blue
  paintRegion(buf, W, 483, 342, 80, 80,
    blockPainter(
      { r:  20, g: 100, b: 255 },  // c1 = electric blue
      { r:   0, g:  20, b:  80 },  // c2 = deep navy body
      { r:  80, g: 180, b: 255 }   // accent = light blue
    )
  );

  // ── BALL ──────────────────────────────────────────────────────────────

  // ball_01 (40x40) @ 449,537  → Glowing white plasma ball with cyan core
  paintRegion(buf, W, 449, 537, 40, 40,
    ballPainter(
      { r: 255, g: 255, b: 255 },  // core
      { r:   0, g: 220, b: 255 }   // outer = cyan
    )
  );

  // ── BONUS ─────────────────────────────────────────────────────────────

  // bonus (40x40) @ 495,537  → Gold plasma ball
  paintRegion(buf, W, 495, 537, 40, 40, bonusPainter());

  // ── UFO shooter ───────────────────────────────────────────────────────

  // ufo (71x38) @ 449,493  → Neon blue UFO
  paintRegion(buf, W, 449, 493, 71, 38,
    ufoPainter(
      { r:  30, g: 130, b: 200 },  // body color
      { r:   0, g: 240, b: 255 }   // rim glow
    )
  );

  // ── TRAJECTORY dots ───────────────────────────────────────────────────

  // trajectory (40x600) @ 680,4  → electric purple dots
  paintRegion(buf, W, 680, 4, 40, 600,
    trajectoryPainter({ r: 180, g: 80, b: 255 })
  );

  // ── Write output ──────────────────────────────────────────────────────

  await sharp(buf, { raw: { width: W, height: H, channels: 4 } })
    .png()
    .toFile(OUT);

  console.log('✓ Done! Futuristic atlas saved to:', OUT);
}

main().catch(err => { console.error(err); process.exit(1); });
