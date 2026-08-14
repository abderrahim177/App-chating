import React from 'react';

export default function AmazanLogo({ className = "w-36 h-auto" }) {
  return (
    <div className={`flex items-center justify-start ${className}`}>
      <svg
        viewBox="0 0 1000 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto transition-all duration-300"
      >
        <defs>
          {/* Light Mode Gradient: ألوان غامقة مقروءة على الخلفيات البيضاء */}
          <linearGradient id="metalGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="35%" stopColor="#334155" />
            <stop offset="70%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Dark Mode Gradient: ألوان ناصعة ومضيئة للخلفيات الغامقة */}
          <linearGradient id="metalGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="35%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>

          {/* Pencil Wood Gradient */}
          <linearGradient id="woodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>

          {/* Shaving Wood Fan Gradient */}
          <linearGradient id="shavingWood" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          {/* Dynamic Drop Shadows */}
          <filter id="shadowLight" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.15" floodColor="#000000" />
          </filter>

          <filter id="shadowDark" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.6" floodColor="#000000" />
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodOpacity="0.2" floodColor="#38bdf8" />
          </filter>
        </defs>

        {/* CSS Styles Responsive to Light & Dark Modes */}
        <style>{`
          /* Default: Light Mode Style (كتابة سوداء/داكنة) */
          .metal-text {
            stroke: url(#metalGradLight);
            filter: url(#shadowLight);
            transition: all 0.3s ease;
          }
          .sharpener-box {
            fill: #ffffff;
            stroke: #94a3b8;
            fill-opacity: 0.9;
            transition: all 0.3s ease;
          }
          .sharpener-screw {
            fill: #0f172a;
            transition: all 0.3s ease;
          }

          /* Dark Mode Overrides (كتابة بيضاء/مضيئة) */
          .dark .metal-text {
            stroke: url(#metalGradDark);
            filter: url(#shadowDark);
          }
          .dark .sharpener-box {
            fill: #1e293b;
            stroke: #334155;
            fill-opacity: 0.8;
          }
          .dark .sharpener-screw {
            fill: #e2e8f0;
          }
        `}</style>

        {/* ================= BACKGROUND PENCIL SHAVINGS ================= */}
        
        {/* Top Left Spiral Shaving */}
        <g transform="translate(90, 25) scale(0.85)">
          <path
            d="M 30,50 A 35,35 0 1,1 80,80 A 25,25 0 1,1 50,40"
            fill="none"
            stroke="url(#shavingWood)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M 25,48 A 38,38 0 1,1 85,82"
            fill="none"
            stroke="#b45309"
            strokeWidth="3"
            strokeDasharray="4 3"
          />
        </g>

        {/* Top Right Spiral Shaving */}
        <g transform="translate(820, 15) scale(0.9)">
          <path
            d="M 30,50 A 35,35 0 1,1 80,80 A 25,25 0 1,1 50,40"
            fill="none"
            stroke="url(#shavingWood)"
            strokeWidth="15"
            strokeLinecap="round"
          />
        </g>

        {/* Bottom Fan Shaving */}
        <g transform="translate(220, 195) scale(0.85)">
          <path
            d="M 10,10 Q 50,-20 90,10 Q 60,50 10,10 Z"
            fill="url(#shavingWood)"
            stroke="#78350f"
            strokeWidth="1"
          />
        </g>

        {/* ================= REALISTIC PENCIL ================= */}
        <g transform="translate(50, 180)">
          {/* Pencil Shaft */}
          <rect x="0" y="0" width="380" height="13" rx="2" fill="url(#woodGrad)" />
          <line x1="0" y1="4" x2="380" y2="4" stroke="#fef3c7" strokeWidth="1" opacity="0.6" />
          {/* Sharpened Tip */}
          <polygon points="380,0 420,6.5 380,13" fill="#fde68a" />
          {/* Lead Tip */}
          <polygon points="408,3.5 420,6.5 408,9.5" fill="#1f2937" />
        </g>

        {/* ================= METALLIC TEXT: AMAZANCHAT ================= */}
        
        {/* A */}
        <g transform="translate(60, 65)">
          <path
            className="metal-text"
            d="M 15,100 L 45,15 L 75,100 M 28,68 L 62,68"
            fill="none"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle className="sharpener-screw" cx="45" cy="20" r="4" />
        </g>

        {/* M */}
        <g transform="translate(150, 65)">
          <path
            className="metal-text"
            d="M 10,100 L 10,15 L 45,65 L 80,15 L 80,100"
            fill="none"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* A */}
        <g transform="translate(245, 65)">
          <path
            className="metal-text"
            d="M 15,100 L 45,15 L 75,100 M 28,68 L 62,68"
            fill="none"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Z (Sharpener Body) */}
        <g transform="translate(340, 50)">
          {/* Clear Plastic/Metal Sharpener Body */}
          <rect
            className="sharpener-box"
            x="0"
            y="0"
            width="90"
            height="115"
            rx="16"
            strokeWidth="2.5"
          />
          {/* Z Metallic Shape Inside */}
          <path
            className="metal-text"
            d="M 20,25 L 70,25 L 20,90 L 70,90"
            fill="none"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Screws */}
          <circle className="sharpener-screw" cx="22" cy="25" r="4.5" />
          <circle className="sharpener-screw" cx="68" cy="90" r="4.5" />
        </g>

        {/* A */}
        <g transform="translate(445, 65)">
          <path
            className="metal-text"
            d="M 15,100 L 45,15 L 75,100 M 28,68 L 62,68"
            fill="none"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* N */}
        <g transform="translate(535, 65)">
          <path
            className="metal-text"
            d="M 15,100 L 15,15 L 70,100 L 70,15"
            fill="none"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* C */}
        <g transform="translate(640, 65)">
          <path
            className="metal-text"
            d="M 70,30 C 60,10 25,10 20,55 C 15,95 60,100 70,80"
            fill="none"
            strokeWidth="16"
            strokeLinecap="round"
          />
        </g>

        {/* H */}
        <g transform="translate(725, 65)">
          <path
            className="metal-text"
            d="M 15,15 L 15,100 M 15,58 L 65,58 M 65,15 L 65,100"
            fill="none"
            strokeWidth="15"
            strokeLinecap="round"
          />
        </g>

        {/* A */}
        <g transform="translate(805, 65)">
          <path
            className="metal-text"
            d="M 15,100 L 45,15 L 75,100 M 28,68 L 62,68"
            fill="none"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* T */}
        <g transform="translate(895, 65)">
          <path
            className="metal-text"
            d="M 10,15 L 70,15 M 40,15 L 40,100"
            fill="none"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <circle className="sharpener-screw" cx="40" cy="15" r="4" />
        </g>

      </svg>
    </div>
  );
}