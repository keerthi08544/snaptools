import React from "react";

const ORANGE = "#f15a29";
const INK = "#161616";
const HOUSE_IMG = "/snapshop-house.png";  // top-right house photo
const ROOM_IMG = "/snapshop-room.png";    // living-room photo (gradient placeholder shows if missing)

/* ---------------- icons ---------------- */
const LogoMark = ({ s = 30 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M3 11 12 4l9 7" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="9.5" y="14" width="5" height="6" rx="1" fill={ORANGE} /><circle cx="13.4" cy="17" r="0.7" fill="#fff" />
  </svg>
);
const Globe = ({ s = 17, c = "#1a1a1a" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7">
    <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" strokeLinecap="round" />
  </svg>
);
const Calendar = ({ s = 17, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" /><line x1="3.5" y1="9.5" x2="20.5" y2="9.5" /><line x1="8" y1="3" x2="8" y2="6.5" /><line x1="16" y1="3" x2="16" y2="6.5" />
  </svg>
);
const Dots3 = ({ c = "#1a1a1a" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={c}><circle cx="12" cy="5" r="1.7" /><circle cx="12" cy="12" r="1.7" /><circle cx="12" cy="19" r="1.7" /></svg>
);
const Lock = ({ s = 12, c = "#9a958a" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);
const Handshake = ({ s = 26, c = ORANGE }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 17 8.5 14.5a1.8 1.8 0 0 1 0-2.6l3-3 2.6 1 3.4-3" /><path d="m12.5 11 3 3" /><path d="M2 8.5 6 5.5l5 2" /><path d="M22 8.5 18 5.5" /><path d="m14 16 1.5 1.5" />
  </svg>
);
const HouseSwap = ({ s = 30, c = INK }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 8.5 5.5 6l3 2.5V12h-6z" /><path d="M15.5 18 18.5 15.5l3 2.5V21.5h-6z" />
    <path d="M11 8.6a5.4 5.4 0 0 1 4.9 5.4" stroke={ORANGE} /><polyline points="13.4 14.6 16.1 14 15.6 11.3" stroke={ORANGE} />
    <path d="M13 15.4a5.4 5.4 0 0 1-4.9-5.4" stroke={ORANGE} /><polyline points="10.6 9.4 7.9 10 8.4 12.7" stroke={ORANGE} />
  </svg>
);
const Shield = ({ s = 30, c = INK }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 5v6c0 4.6 3.3 8 8 9 4.7-1 8-4.4 8-9V5z" /><polyline points="9 12 11 14 15 9.5" stroke={ORANGE} strokeWidth="2" />
  </svg>
);
const Pin = ({ s = 30, c = INK }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.4" fill={ORANGE} stroke="none" />
  </svg>
);
const People = ({ s = 30, c = INK }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7.5" r="2.8" /><path d="M6.5 18a5.5 5.5 0 0 1 11 0" />
    <circle cx="4.5" cy="9" r="2" stroke={ORANGE} /><path d="M1 17.5a3.8 3.8 0 0 1 4-3.3" stroke={ORANGE} />
    <circle cx="19.5" cy="9" r="2" stroke={ORANGE} /><path d="M23 17.5a3.8 3.8 0 0 0-4-3.3" stroke={ORANGE} />
  </svg>
);

/* ---------------- data ---------------- */
const MATCHES = [
  { title: "Vintage Dining Set (6 chairs)", price: "$450", dist: "1.2 miles away", note: "Matches your dining area specs", img: "/match-chair.png" },
  { title: "IKEA Kallax Shelf", price: "$40", dist: "1.5 miles away", note: "Fits your home office", img: "/match-shelf.png" },
  { title: "Queen Bed Frame & Mattress", price: "$300", dist: "5.8 miles away", note: "Ready for new bedroom", img: "/match-sofa.png" },
];
const TAGS = [
  { name: "Mid-century Sofa", price: "$250", pickup: "Pickup by Oct 15", className: "left-[30%] top-[28%]" },
  { name: "Arc Floor Lamp", price: "$60", pickup: "Pickup by Oct 12", className: "right-[6%] top-[12%]" },
  { name: "Marble Coffee Table", price: "$120", pickup: "Pickup by Oct 10", className: "left-[6%] bottom-[7%]" },
  { name: "Armchair", price: "$80", pickup: "Pickup by Oct 12", className: "right-[5%] bottom-[10%]" },
];
const FEATURES = [
  { Icon: HouseSwap, title: "Mover-to-Mover Transactions", sub: "Connect with buyers and sellers who are actively moving." },
  { Icon: Shield, title: "Verified & Pre-qualified Members", sub: "Every participant is verified by their life event." },
  { Icon: Pin, title: "25-Mile Hyperlocal Matching", sub: "Find items that fit your new home within a 25-mile radius." },
  { Icon: People, title: "Community Driven", sub: "A trusted marketplace built for real estate transitions." },
];

const Dots = ({ rows = 6, cols = 6, className = "", op = 0.5 }) => (
  <svg className={className} viewBox={`0 0 ${cols * 15} ${rows * 15}`} fill={ORANGE}>
    {Array.from({ length: rows }).map((_, r) => Array.from({ length: cols }).map((_, c) => (
      <circle key={`${r}-${c}`} cx={5 + c * 15} cy={5 + r * 15} r="2.6" opacity={op * (1 - Math.hypot(c - cols / 2, r) / (cols + 1))} />
    )))}
  </svg>
);

const Tag = ({ name, price, pickup, className }) => (
  <div className={`absolute z-20 rounded-xl bg-white shadow-[0_8px_28px_rgba(0,0,0,0.18)] px-3.5 py-2 ${className}`}>
    <p className="flex items-center gap-1.5 text-[12px] font-bold text-[#1a1a1a]"><span className="w-1.5 h-1.5 rounded-full" style={{ background: ORANGE }} />{name}</p>
    <p className="text-[14px] font-extrabold text-[#1a1a1a] mt-0.5">{price}</p>
    <p className="text-[10.5px] text-[#9a958a]">{pickup}</p>
  </div>
);

const MatchesCard = ({ className = "" }) => (
  <div className={`rounded-2xl bg-white border border-[#efe7dc] shadow-[0_12px_36px_rgba(0,0,0,0.07)] p-3.5 ${className}`}>
    <p className="text-[11px] font-bold tracking-[0.03em] text-[#1a1a1a] mb-2">MATCHES WITHIN <span style={{ color: ORANGE }}>25 MILES</span></p>
    <div className="flex flex-col">
      {MATCHES.map((m, i) => (
        <div key={m.title} className={`flex items-center gap-2.5 py-2.5 ${i > 0 ? "border-t border-[#f1eae0]" : ""}`}>
          <img src={m.img} alt="" className="w-11 h-11 rounded-lg shrink-0 object-cover" />
          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-bold text-[#1a1a1a] leading-tight">{m.title}</p>
            <p className="text-[11px] mt-0.5"><span className="font-bold" style={{ color: ORANGE }}>{m.price}</span> <span className="text-[#9a958a]">· {m.dist}</span></p>
            <p className="text-[10.5px] text-[#9a958a] mt-0.5">{m.note}</p>
          </div>
          <button className="text-[11px] font-semibold text-white bg-[#1a1a1a] rounded-md px-2.5 py-1.5 shrink-0">View</button>
        </div>
      ))}
    </div>
  </div>
);

const ConveyCard = ({ className = "" }) => (
  <div className={`rounded-2xl bg-white border border-[#efe7dc] shadow-[0_12px_36px_rgba(0,0,0,0.07)] p-5 ${className}`}>
    <p className="text-[10px] font-bold tracking-[0.12em] mb-2.5" style={{ color: ORANGE }}>LIST OR OFFER IN</p>
    <span className="flex items-center justify-center w-11 h-11 rounded-full border-2 mb-3" style={{ borderColor: ORANGE }}><Handshake s={24} /></span>
    <p className="text-[16px] font-bold text-[#1a1a1a] mb-1.5 leading-tight">Convey With Sale Mode</p>
    <p className="text-[12px] text-[#7a766c] leading-relaxed">Offer items as part of the purchase negotiation — turning a moving headache into a deal-closing sweetener.</p>
  </div>
);

const Connector = ({ flip = false }) => (
  <svg className="w-9 h-12 overflow-visible" viewBox="0 0 36 48" fill="none" stroke={ORANGE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M2 24 C 18 24, 22 16, 32 12" strokeDasharray="2 7" /><polyline points="25 8 34 11 29 18" />
  </svg>
);

export default function SnapShop() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden font-sans bg-white">
      <Dots className="absolute top-[150px] left-[60px] w-[140px] h-[140px] z-0" rows={6} cols={6} />
      <Dots className="absolute top-[360px] right-[60px] w-[120px] h-[120px] z-0" rows={5} cols={5} op={0.4} />
      {/* faint wavy texture bottom corners */}
      <svg className="absolute bottom-0 left-0 w-[280px] h-[200px] z-0 opacity-30" viewBox="0 0 280 200" fill="none" stroke="#f3c9b6" strokeWidth="1.5">
        {[0, 1, 2, 3].map((i) => <path key={i} d={`M-10 ${120 + i * 22} C 60 ${100 + i * 22}, 140 ${150 + i * 22}, 290 ${110 + i * 22}`} />)}
      </svg>

      <div className="relative z-10 max-w-[1320px] mx-auto px-12 pt-8 pb-10">
        {/* NAV */}
        <nav className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-[25px] font-extrabold tracking-tight" style={{ color: INK }}>
            <LogoMark s={32} /> <span>Snap<span style={{ color: ORANGE }}>Shop</span></span>
          </div>
          <a href="https://www.snaphomz.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-full text-[14px] font-semibold text-[#1a1a1a] shadow-sm border border-[#eee2d6]">
            <Globe s={16} /> snaphomz.com
          </a>
        </nav>

        {/* TOP REGION — hero left, house right, cards overlapping below */}
        <div className="relative" style={{ height: "700px" }}>
          {/* HERO (left) */}
          <div className="absolute left-0 top-3 w-[500px] z-10">
            <h1 className="text-[46px] leading-[1.06] font-extrabold tracking-tight" style={{ color: INK }}>
              The Marketplace for Homes in <span style={{ color: ORANGE }}>Transition<span style={{ color: INK }}>.</span></span>
            </h1>
            <p className="text-[15px] text-[#4a463f] leading-relaxed mt-4 mb-6 max-w-[440px]">
              List what you won't take. Find what fits your next home. Everything is
              timed around real moves — not random listings. Matched nearby, exactly
              when you need it.
            </p>
            <button className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-bold text-white shadow-lg" style={{ background: ORANGE }}>
              <Calendar s={16} /> Coming Soon
            </button>
          </div>

          {/* HOUSE PHOTO (top-right) */}
          <div className="absolute right-0 top-0 w-[660px] h-[336px] rounded-3xl overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.12)] z-0">
            <img src={HOUSE_IMG} alt="Home for sale" className="w-full h-full object-cover" style={{ objectPosition: "50% 60%" }} />
          </div>

          {/* MATCHES CARD (left, below hero) */}
          <MatchesCard className="absolute left-0 top-[372px] w-[292px] z-20" />

          {/* BROWSER WINDOW (center, overlapping house bottom) */}
          <div className="absolute left-[318px] top-[288px] w-[548px] z-30 rounded-2xl bg-white border border-[#ece4d8] shadow-[0_24px_64px_rgba(0,0,0,0.14)] overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-2.5">
              <span className="flex gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" /><span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" /><span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" /></span>
              <span className="flex-1 flex items-center justify-center gap-2 text-[12px] text-[#7a766c] bg-[#f3efe9] rounded-full py-1.5"><Lock /> snapshop.snaphomz.com</span>
              <Dots3 />
            </div>
            <div className="relative m-2.5 mt-0 rounded-xl overflow-hidden h-[360px]"
              style={{ background: "linear-gradient(135deg, #efe6da 0%, #e3d6c6 50%, #d8c8b6 100%)" }}>
              <img src={ROOM_IMG} alt="Living room" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              {TAGS.map((t) => <Tag key={t.name} {...t} />)}
            </div>
          </div>

          {/* CONVEY CARD (right, below house) */}
          <ConveyCard className="absolute right-0 top-[372px] w-[262px] z-20" />

          {/* dashed connectors */}
          <div className="absolute left-[296px] top-[430px] z-40"><Connector /></div>
          <div className="absolute right-[268px] top-[440px] z-40"><Connector flip /></div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="grid grid-cols-4 gap-6 mt-2">
          {FEATURES.map(({ Icon, title, sub }) => (
            <div key={title} className="rounded-2xl border border-[#ece4d8] px-6 py-7 text-center flex flex-col items-center">
              <Icon s={30} />
              <p className="text-[15px] font-bold text-[#1a1a1a] mt-3.5 mb-2 leading-tight">{title}</p>
              <p className="text-[12.5px] text-[#7a766c] leading-relaxed">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
