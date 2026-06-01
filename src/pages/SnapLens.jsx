import React from "react";

const ORANGE = "#f15a29";
const INK = "#161616";
const HOUSE_IMG = "/snaplens-house.png";

/* ---------------- icons ---------------- */
const LogoMark = ({ s = 32 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <rect x="2.5" y="6.5" width="19" height="13.5" rx="3" fill={INK} />
    <path d="M8 6.5l1.1-2a1 1 0 0 1 .87-.5h4.06a1 1 0 0 1 .87.5l1.1 2" stroke={INK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="13.4" r="4.4" fill="#fff" />
    <path d="M12 11l2.4 2v3h-1.6v-1.8h-1.6V16H9.6v-3z" fill={ORANGE} />
  </svg>
);
const Globe = ({ s = 17, c = ORANGE }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" strokeLinecap="round" />
  </svg>
);
const Bolt = ({ s = 18, c = ORANGE }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M13.5 2 4 13.4h6.2L9.2 22 20 9.6h-6.8z" /></svg>
);
const Bell = ({ s = 18, c = ORANGE }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M12 2.2a5.8 5.8 0 0 0-5.8 5.8c0 3.4-1 4.9-1.9 6-.5.6-.1 1.5.7 1.5h14c.8 0 1.2-.9.7-1.5-.9-1.1-1.9-2.6-1.9-6A5.8 5.8 0 0 0 12 2.2z" />
    <path d="M9.8 19.2a2.3 2.3 0 0 0 4.4 0z" />
  </svg>
);
const Walk = ({ s = 18, c = ORANGE }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
  </svg>
);
const Play = ({ s = 15, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M7 5l12 7-12 7z" /></svg>
);
const Flash = ({ s = 19, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M13.5 2 4 13.4h6.2L9.2 22 20 9.6h-6.8z" /></svg>
);
const ImgIcon = ({ s = 19, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.6" /><path d="m21 15-5-5L5 21" />
  </svg>
);

const FEATURES = [
  { Icon: Bolt, title: "Instant Insights", sub: "Camera → Intelligence in seconds" },
  { Icon: Bell, title: "Off-Market Alerts", sub: "Get notified the moment a home lists" },
  { Icon: Walk, title: "Walk Mode", sub: "Scan multiple homes & get a submarket report" },
];

/* floating data badge over the phone */
const Badge = ({ label, value, className = "" }) => (
  <div className={`absolute z-30 rounded-2xl bg-white shadow-[0_14px_44px_rgba(0,0,0,0.18)] px-5 py-3 ${className}`}>
    <p className="text-[12px] font-semibold mb-0.5" style={{ color: ORANGE }}>{label}</p>
    <p className="text-[24px] font-extrabold leading-tight text-[#161616]">{value}</p>
  </div>
);

export default function SnapLens() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden font-sans bg-white">
      <div className="relative z-10 max-w-[1480px] mx-auto px-14 pt-8 pb-10">
        {/* NAV */}
        <nav className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2.5 text-[27px] font-extrabold tracking-tight" style={{ color: INK }}>
            <LogoMark s={34} /> <span>Snap<span style={{ color: ORANGE }}>Lens</span></span>
          </div>
          <a href="https://www.snaphomz.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white px-6 py-3 rounded-full text-[15px] font-semibold text-[#1a1a1a] shadow-sm border-[1.5px]" style={{ borderColor: "#f3c9b6" }}>
            <Globe /> snaphomz.com
          </a>
        </nav>

        {/* MAIN */}
        <div className="grid grid-cols-[minmax(0,520px)_1fr] gap-10 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-[60px] leading-[1.0] font-extrabold tracking-tight" style={{ color: INK }}>Snap Any House.</h1>
            <h1 className="text-[60px] leading-[1.0] font-extrabold tracking-tight" style={{ color: ORANGE }}>Know Everything</h1>
            <h1 className="text-[60px] leading-[1.0] font-extrabold tracking-tight mb-6" style={{ color: INK }}>About It.</h1>
            <p className="text-[17px] leading-relaxed text-[#4a463f] max-w-[480px] mb-9">
              Point your camera at any home — listed or not — and instantly get its
              full intelligence profile: estimated value, last sale price, ownership
              duration, neighborhood comps, and listing status.
            </p>
            <button className="inline-flex items-center gap-3 rounded-full pl-8 pr-5 py-4 text-[17px] font-bold text-white shadow-lg mb-14" style={{ background: ORANGE }}>
              Coming Soon
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/25"><Play /></span>
            </button>

            {/* feature row */}
            <div className="grid grid-cols-3 max-w-[600px]">
              {FEATURES.map(({ Icon, title, sub }, i) => (
                <div key={title} className={`pr-5 ${i > 0 ? "pl-5 border-l border-[#eee2d6]" : ""}`}>
                  <span className="flex items-center justify-center w-10 h-10 rounded-full mb-3" style={{ background: "#fde7dc" }}><Icon s={18} /></span>
                  <p className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">{title}</p>
                  <p className="text-[13px] text-[#8a857a] leading-relaxed">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — AR camera: the house scene extends around the phone */}
          <div className="relative h-[660px] flex items-center justify-center" style={{ transform: "scale(0.92)" }}>
            {/* perspective-quad clip for the house scene (rounded corners) — matches the reference keystone shape */}
            <svg width="0" height="0" className="absolute"><defs>
              <clipPath id="snapHouseClip" clipPathUnits="userSpaceOnUse">
                <path d="M 24.8 7.6 L 575.2 89.4 Q 593 92 592 110 L 571 495 Q 570 513 552 513.7 L 25 534.3 Q 7 535 7 517 L 7 23 Q 7 5 24.8 7.6 Z" />
              </clipPath>
            </defs></svg>
            {/* orange accent shapes behind the scene (subtle) */}
            <div className="absolute z-0 left-[1%] top-[3%] w-[96px] h-[118px] rounded-[26px] rotate-[-8deg]" style={{ background: ORANGE, opacity: 0.95 }} />
            <div className="absolute z-0 right-[1%] bottom-[6%] w-[110px] h-[140px] rounded-[56px_22px_56px_22px]" style={{ background: ORANGE, opacity: 0.95 }} />
            {/* dot grids */}
            <svg className="absolute z-0 right-[2%] top-[8%] w-[120px] h-[120px]" viewBox="0 0 100 100" fill={ORANGE} opacity="0.3">
              {Array.from({ length: 6 }).map((_, r) => Array.from({ length: 6 }).map((_, c) => <circle key={`${r}-${c}`} cx={6 + c * 16} cy={6 + r * 16} r="2.2" />))}
            </svg>
            <svg className="absolute z-0 left-[24%] bottom-[4%] w-[110px] h-[90px]" viewBox="0 0 100 80" fill={ORANGE} opacity="0.3">
              {Array.from({ length: 4 }).map((_, r) => Array.from({ length: 6 }).map((_, c) => <circle key={`${r}-${c}`} cx={6 + c * 16} cy={6 + r * 18} r="2.2" />))}
            </svg>

            {/* house scene — perspective keystone quad (rounded corners), like the reference */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[600px] h-[540px] overflow-hidden"
              style={{ clipPath: "url(#snapHouseClip)" }}>
              <img src={HOUSE_IMG} alt="House through camera" className="w-full h-full object-cover" style={{ objectPosition: "50% 45%" }} />
            </div>

            {/* phone frame — transparent screen reveals the house behind, camera UI on top */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[248px] h-[528px] rounded-[42px] border-[9px] border-[#0d0d0d] shadow-[0_34px_80px_rgba(0,0,0,0.32)]">
              {/* dynamic island */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[78px] h-[22px] rounded-full bg-[#0d0d0d] z-20" />
              {/* viewfinder corner brackets */}
              <div className="absolute inset-5 z-10">
                {["top-0 left-0 border-t-2 border-l-2 rounded-tl-lg", "top-0 right-0 border-t-2 border-r-2 rounded-tr-lg",
                  "bottom-20 left-0 border-b-2 border-l-2 rounded-bl-lg", "bottom-20 right-0 border-b-2 border-r-2 rounded-br-lg"].map((c) => (
                  <span key={c} className={`absolute w-6 h-6 border-white/85 ${c}`} />
                ))}
              </div>
              {/* camera controls (clean, no dark bar) */}
              <div className="absolute bottom-5 inset-x-0 z-20 flex items-center justify-between px-7" style={{ filter: "drop-shadow(0 2px 7px rgba(0,0,0,0.55))" }}>
                <span className="w-8 h-8 rounded-lg overflow-hidden border-2 border-white/85"><img src={HOUSE_IMG} alt="" className="w-full h-full object-cover" /></span>
                <span className="w-14 h-14 rounded-full border-[4px] border-white flex items-center justify-center"><span className="w-10 h-10 rounded-full bg-white" /></span>
                <span className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center"><Flash s={17} /></span>
              </div>
            </div>

            {/* floating data badges */}
            <Badge label="Value (Est.)" value="$1.2M" className="left-[0%] top-[17%]" />
            <Badge label="Last Sold" value="4y ago" className="right-[1%] top-[13%]" />
            <Badge label="Status" value="Off-Market" className="left-[47%] bottom-[31%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
