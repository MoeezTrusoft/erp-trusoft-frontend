import { UserCog, MoreVertical } from 'lucide-react';
import { useState } from 'react';

const stages = [
  { label: 'Applied',     value: 420 },
  { label: 'Screened',    value: 210 },
  { label: 'Interviewed', value: 85  },
  { label: 'Offered',     value: 30  },
  { label: 'Hired',       value: 24  },
];

const palette = [
  { front: '#035F5B', depth: '#012e2b', shine: '#0a7570' },
  { front: '#0B7A72', depth: '#065550', shine: '#13938a' },
  { front: '#20A397', depth: '#137065', shine: '#2dc4b6' },
  { front: '#4ECCC4', depth: '#2ea39c', shine: '#72dfd8' },
  { front: '#64E2D3', depth: '#3fbdb5', shine: '#8aeee6' },
];

/**
 * One 3-D extruded trapezoid funnel stage rendered in SVG.
 *
 * Each stage is:
 *   1. A trapezoidal FRONT face (main color)
 *   2. A bottom DEPTH face (darker) for 3-D illusion
 *   3. Two white CHEVRON cutouts on left & right sides
 *   4. A thin TOP highlight strip for the bevel look
 */
function FunnelStage({ index }) {
  const { label, value } = stages[index];
  const { front, depth, shine } = palette[index];

  const W      = 340;   // viewBox width
  const H      = 58;    // front-face height
  const D      = 12;    // 3-D depth extrusion downward
  const STEP   = 24;    // narrowing per stage on each side
  const CHEV   = 22;    // chevron notch half-width (how deep the V is)

  // Trapezoid top-left / top-right / bottom-left / bottom-right
  const tL = STEP * index;
  const tR = W - STEP * index;
  const bL = STEP * (index + 1);
  const bR = W - STEP * (index + 1);

  const midY = H / 2;

  // ── Front face: full trapezoid ──────────────────────────────────────────
  const front_path = `M ${tL} 0 L ${tR} 0 L ${bR} ${H} L ${bL} ${H} Z`;

  // ── 3-D depth face (below front face, extruded downward) ───────────────
  // connects bottom of front face to a shifted quad D px down
  const depth_path = `M ${bL} ${H} L ${bR} ${H} L ${bR} ${H + D} L ${bL} ${H + D} Z`;

  // ── Top shine bevel (thin strip along the top edge) ────────────────────
  const bevel = 5;
  const shine_path = `M ${tL} 0 L ${tR} 0 L ${tR - bevel} ${bevel} L ${tL + bevel} ${bevel} Z`;

  // ── Chevron cutouts (white triangles on each side) ──────────────────────
  // Left chevron: triangle pointing RIGHT, cut from the left side of the trapezoid
  const chev_L = `M ${tL} 0 L ${tL + CHEV} ${midY} L ${bL} ${H} Z`;
  // Right chevron: triangle pointing LEFT, cut from the right side
  const chev_R = `M ${tR} 0 L ${tR - CHEV} ${midY} L ${bR} ${H} Z`;

  // ── Label x positioning (after left chevron notch + padding) ───────────
  const labelX = tL + CHEV + 12;
  const valueX = tR - CHEV - 8;

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${W} ${H + D}`}
      style={{ display: 'block', overflow: 'visible' }}
    >
      <defs>
        {/* Subtle gradient on the front face for dimension */}
        <linearGradient id={`fg-${index}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={shine} stopOpacity="0.35" />
          <stop offset="100%" stopColor={front} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 3-D depth extrusion */}
      <path d={depth_path} fill={depth} stroke="none" />

      {/* Front face */}
      <path d={front_path} fill={front} stroke="none" />

      {/* Gradient overlay for 3-D roundness */}
      <path d={front_path} fill={`url(#fg-${index})`} stroke="none" />

      {/* Top bevel highlight */}
      <path d={shine_path} fill={shine} opacity="0.45" stroke="none" />

      {/* Chevron cutouts */}
      <path d={chev_L} fill="white" stroke="none" />
      <path d={chev_R} fill="white" stroke="none" />

      {/* Stage label */}
      <text
        x={labelX}
        y={midY}
        dominantBaseline="middle"
        fontSize="13"
        fontWeight="500"
        fill="white"
        fontFamily="Poppins, sans-serif"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {label}
      </text>

      {/* Stage value */}
      <text
        x={valueX}
        y={midY}
        textAnchor="end"
        dominantBaseline="middle"
        fontSize="27"
        fontWeight="700"
        fill="white"
        fontFamily="Poppins, sans-serif"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {value}
      </text>
    </svg>
  );
}

export default function HiringOverviewWidget() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        padding: '24px 20px 24px',
        display: 'flex',
        flexDirection: 'column',
        width: '440px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
        fontFamily: 'Poppins, sans-serif',
        boxSizing: 'border-box',
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '18px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
          <UserCog size={24} color="#035F5B" style={{ flexShrink: 0 }} />
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '22px',
              fontWeight: 500,
              color: '#035F5B',
              margin: 0,
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
          >
            Hiring Overview
          </h2>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df', marginLeft: '8px' }} />
        </div>

       
      </div>

      {/* ── 3-D Funnel ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {stages.map((_, i) => (
          <FunnelStage key={i} index={i} />
        ))}
      </div>
    </div>
  );
}