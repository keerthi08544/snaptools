import React from "react";

const ORANGE = "#f15a29";
const ORANGE_DEEP = "#e2541d";
const NAVY = "#2b3a55";
const GREEN = "#1f9d55";
const RED = "#d4493a";
const HOUSE_IMG = "/listing-house.png";
const BUILDINGS_IMG = "/listing-buildings.png";

/* ---------------- icons ---------------- */
const LogoMark = ({ s = 34 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <circle cx="10.5" cy="10.5" r="7" stroke="#1a1a1a" strokeWidth="2" />
    <line x1="20.5" y1="20.5" x2="15.6" y2="15.6" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" />
    <polyline points="7.2 11 9.6 13.4 14.2 8.2" fill="none" stroke={ORANGE} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Globe = ({ s = 17, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" strokeLinecap="round" />
  </svg>
);
const Arrow = ({ s = 14, c = ORANGE }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" />
  </svg>
);
const Sparkle = ({ s = 22, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M12 2.5l1.8 5.4 5.4 1.8-5.4 1.8L12 17l-1.8-5.5L4.8 9.7l5.4-1.8z" />
    <path d="M18.5 14l.8 2.3 2.3.8-2.3.8-.8 2.3-.8-2.3-2.3-.8 2.3-.8z" opacity="0.9" />
  </svg>
);
const EyeIcon = ({ s = 22, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="2.8" />
  </svg>
);
const LockIcon = ({ s = 22, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="10.5" width="14" height="9.5" rx="2.2" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" /><circle cx="12" cy="15" r="1.3" fill={c} stroke="none" />
  </svg>
);
const People = ({ s = 22, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8.5" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><circle cx="16.5" cy="7.5" r="2.4" /><path d="M16.5 12.5a5 5 0 0 1 4 6.5" />
  </svg>
);
const Shield = ({ s = 20, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><polyline points="9 12 11 14 15 9.5" />
  </svg>
);
const Back = ({ s = 18, c = "#1a1a1a" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="20" y1="12" x2="5" y2="12" /><polyline points="11 6 5 12 11 18" />
  </svg>
);
const Check = ({ s = 16, c = ORANGE }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke={c} strokeWidth="2" />
    <polyline points="7.5 12.5 10.5 15.5 16.5 8.5" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Up = ({ s = 12, c = GREEN }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="5" /><polyline points="6 11 12 5 18 11" />
  </svg>
);
const Down = ({ s = 12, c = RED }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="4" x2="12" y2="19" /><polyline points="6 13 12 19 18 13" />
  </svg>
);
const RocketUp = ({ s = 26, c = ORANGE }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 17 9 11 13 15 21 6" /><polyline points="15 6 21 6 21 12" />
  </svg>
);

/* dashed connector arrow */
const Connector = ({ flip = false }) => (
  <svg width="96" height="130" viewBox="0 0 96 130" fill="none" className="overflow-visible" style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M4 14 C 60 16, 78 70, 86 108" stroke="#4a4a4a" strokeWidth="2.4" strokeDasharray="2 8" strokeLinecap="round" />
    <polyline points="77 98 88 110 74 114" fill="none" stroke="#4a4a4a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* score ring */
const ScoreRing = ({ value = 87, s = 84 }) => {
  const r = 42, c = 2 * Math.PI * r, off = c * (1 - value / 100);
  return (
    <svg width={s} height={s} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r={r} fill="none" stroke="#f0e8e0" strokeWidth="8" />
      <circle cx="50" cy="50" r={r} fill="none" stroke={ORANGE} strokeWidth="8" strokeLinecap="round"
        strokeDasharray={c} strokeDashoffset={off} transform="rotate(-90 50 50)" />
      <text x="50" y="60" textAnchor="middle" fill="#1a1a1a" fontSize="30" fontWeight="700">{value}</text>
    </svg>
  );
};

/* ---------------- data ---------------- */
const LEFT_CARDS = [
  { Icon: Sparkle, title: "AI Listing Score", sub: "Get an unbiased score across 50+ performance signals." },
  { Icon: EyeIcon, title: "14-Day Forecast", sub: "See projected views and offer likelihood for the first 14 days." },
];
const FORECAST = [
  { label: "Views", num: "2,450", delta: "12%", dir: "up" },
  { label: "Saves", num: "185", delta: "8%", dir: "down" },
  { label: "Showings", num: "32", delta: "15%", dir: "up" },
  { label: "Offer Likelihood", num: "68%", delta: "High", dir: "up" },
];
const STRENGTHS = [
  { label: "Photo Quality", tag: "Excellent" },
  { label: "Pricing vs Comps", tag: "Strong" },
];
const STATS = [
  { num: "2.6x", label: "More Views" },
  { num: "31%", label: "More Saves" },
  { num: "24%", label: "Faster Offers" },
  { num: "Higher", label: "Sale Price", icon: true },
];

const Badge = ({ Icon }) => (
  <span className="flex items-center justify-center w-12 h-12 rounded-2xl shrink-0 shadow-md" style={{ background: ORANGE }}>
    <Icon s={24} />
  </span>
);
const Avatar = ({ from, to }) => (
  <span className="w-9 h-9 rounded-full border-2 border-white shadow" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }} />
);

export default function ListingAudit() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden font-sans"
      style={{ background: "radial-gradient(120% 90% at 80% 10%, #fde4d6 0%, #faf3ec 42%, #f7f1e9 100%)" }}>

      {/* real house photo on the far left (in front of the dark bar) */}
      <div className="absolute left-0 bottom-[88px] w-[275px] h-[520px] z-30 pointer-events-none">
        <img src={HOUSE_IMG} alt="Modern home at dusk" className="w-full h-full object-cover rounded-r-[22px] shadow-2xl"
          style={{ objectPosition: "40% 46%" }} />
      </div>
      {/* real city skyline on the right (faint, peachy) */}
      <div className="absolute right-0 top-[360px] w-[42%] max-w-[640px] h-[520px] z-0 pointer-events-none">
        <img src={BUILDINGS_IMG} alt="" className="w-full h-full object-cover"
          style={{
            objectPosition: "50% 28%",
            opacity: 0.4,
            filter: "saturate(0.55) brightness(1.06)",
            WebkitMaskImage: "linear-gradient(to left, #000 24%, transparent 100%), linear-gradient(to bottom, #000 80%, transparent 100%)",
            maskImage: "linear-gradient(to left, #000 24%, transparent 100%), linear-gradient(to bottom, #000 80%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }} />
      </div>
      {/* rising orange line top-right */}
      <svg className="absolute top-0 right-0 w-[42%] max-w-[640px] h-[420px] z-0 pointer-events-none" viewBox="0 0 600 420" fill="none">
        <path d="M-20 380 C 180 380, 300 200, 420 150 S 600 40, 640 10" stroke={ORANGE} strokeWidth="3" strokeLinecap="round" opacity="0.85" />
        <circle cx="420" cy="150" r="9" fill="#fff" stroke={ORANGE} strokeWidth="4" />
        <circle cx="560" cy="55" r="7" fill={ORANGE} />
      </svg>
      {/* halftone dots left */}
      <svg className="absolute top-[120px] left-0 w-[160px] h-[320px] z-0 pointer-events-none" viewBox="0 0 100 200" fill={ORANGE} opacity="0.18">
        {Array.from({ length: 8 }).map((_, r) => Array.from({ length: 5 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={6 + c * 12} cy={6 + r * 14} r={2.4 - Math.min(c, r) * 0.18} />
        )))}
      </svg>

      <div className="relative z-10 max-w-[1500px] mx-auto px-14 pt-7 pb-8">
        {/* NAV */}
        <nav className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2.5 text-[27px] font-extrabold tracking-tight text-[#1a1a1a]">
            <LogoMark /> Listing<span style={{ color: ORANGE }}>Audit</span>
          </div>
          <a href="https://www.snaphomz.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-white px-7 py-3.5 rounded-full text-[16px] font-semibold shadow-lg" style={{ background: ORANGE }}>
            <Globe /> snaphomz.com
          </a>
        </nav>

        {/* HERO */}
        <div className="text-center max-w-[860px] mx-auto mb-6">
          <h1 className="text-[58px] leading-[1.05] font-extrabold text-[#161616]">Pre-Flight Check Your Listing.</h1>
          <h1 className="text-[58px] leading-[1.05] font-extrabold" style={{ color: ORANGE }}>Predict Its First 14 Days.</h1>
          <h1 className="text-[58px] leading-[1.05] font-extrabold text-[#161616] mb-4">Or Host It Privately.</h1>
          <p className="text-[19px] leading-relaxed mb-6" style={{ color: NAVY }}>
            AI scores your listing across 50+ signals before launch.<br />
            Predict views, saves, showings, and offers for the first 14 days.
          </p>
          <button className="inline-flex items-center gap-2.5 rounded-full px-9 py-4 text-[18px] font-bold text-white shadow-lg" style={{ background: ORANGE }}>
            <span className="text-[19px]">🚀</span> Coming Soon
          </button>
        </div>

        {/* SHOWCASE: cards + phone */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-start pt-4">
          {/* left cards + connectors */}
          <div className="flex flex-col gap-7 items-end pr-2">
            {LEFT_CARDS.map((c, i) => (
              <div key={c.title} className="relative flex items-center">
                <div className="flex items-start gap-4 rounded-3xl bg-white shadow-xl px-6 py-5 w-[300px]">
                  <Badge Icon={c.Icon} />
                  <div>
                    <p className="text-[17px] font-bold text-[#1a1a1a] mb-1">{c.title}</p>
                    <p className="text-[14px] text-[#7a766c] leading-snug">{c.sub}</p>
                  </div>
                </div>
                <div className="absolute -right-[78px] top-6"><Connector /></div>
              </div>
            ))}
          </div>

          {/* PHONE */}
          <div className="relative z-10 w-[330px] h-[640px] rounded-[46px] bg-[#0d0d0d] p-[11px] shadow-2xl">
            <div className="relative w-full h-full rounded-[36px] bg-white overflow-hidden">
              {/* dynamic island */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[110px] h-[30px] rounded-full bg-[#0d0d0d] z-20" />
              {/* status bar */}
              <div className="flex items-center justify-between px-7 pt-3.5 text-[12px] font-semibold text-[#1a1a1a]">
                <span>9:41</span>
                <span className="flex items-center gap-1">
                  <svg width="17" height="11" viewBox="0 0 17 11" fill="#1a1a1a"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="2.5" width="3" height="8.5" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/></svg>
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="none" stroke="#1a1a1a" strokeWidth="1.4"><path d="M1 4a10 10 0 0 1 14 0M3.5 6.5a6 6 0 0 1 9 0M6 9a2.5 2.5 0 0 1 4 0" strokeLinecap="round"/></svg>
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><rect x="1" y="1" width="19" height="10" rx="2.5" stroke="#1a1a1a" strokeWidth="1.2"/><rect x="2.5" y="2.5" width="15" height="7" rx="1.2" fill="#1a1a1a"/><rect x="21" y="4" width="1.8" height="4" rx="0.9" fill="#1a1a1a"/></svg>
                </span>
              </div>

              {/* screen content */}
              <div className="px-5 pt-5 pb-4 overflow-y-auto h-[calc(100%-44px)]">
                <div className="flex items-center gap-3 mb-3">
                  <Back />
                  <p className="text-[17px] font-bold text-[#1a1a1a]">123 Oak Street</p>
                  <span className="ml-auto text-[12px] font-semibold text-[#8a857a] bg-[#f1ede5] px-2.5 py-1 rounded-md">Draft</span>
                </div>

                {/* tabs */}
                <div className="flex items-center gap-6 border-b border-[#eee6db] mb-4">
                  <button className="pb-2 text-[14px] font-bold border-b-2" style={{ color: ORANGE, borderColor: ORANGE }}>Audit Score</button>
                  <button className="pb-2 text-[14px] font-medium text-[#9a958a]">14-Day Forecast</button>
                </div>

                {/* score */}
                <div className="flex items-center gap-4 mb-2">
                  <ScoreRing value={87} s={82} />
                  <div>
                    <p className="text-[15px] font-bold text-[#1a1a1a]">Listing Score</p>
                    <p className="text-[13px] text-[#6b6b6b] leading-snug mt-0.5">Great! Your listing is launch-ready.</p>
                  </div>
                </div>
                <a className="inline-flex items-center gap-1.5 text-[13.5px] font-bold mb-4" style={{ color: ORANGE }}>View Full Report <Arrow s={13} /></a>

                {/* forecast */}
                <p className="text-[14px] font-bold text-[#1a1a1a] mb-1">14-Day Performance Forecast</p>
                <p className="flex items-center gap-1.5 text-[12px] font-semibold mb-3" style={{ color: ORANGE }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: ORANGE }} /> Moderate Confidence
                </p>
                <div className="grid grid-cols-4 gap-2 mb-5">
                  {FORECAST.map((f) => (
                    <div key={f.label} className="flex flex-col">
                      <p className="text-[10.5px] text-[#9a958a] leading-tight h-[30px]">{f.label}</p>
                      <p className="text-[18px] font-bold text-[#1a1a1a] leading-none">{f.num}</p>
                      <p className="flex items-center gap-0.5 text-[11px] font-semibold mt-1" style={{ color: f.dir === "up" ? GREEN : RED }}>
                        {f.dir === "up" ? <Up /> : <Down />}{f.delta}
                      </p>
                    </div>
                  ))}
                </div>

                {/* strengths */}
                <p className="text-[14px] font-bold text-[#1a1a1a] mb-2">Top Strengths</p>
                <div className="flex flex-col gap-2.5">
                  {STRENGTHS.map((st) => (
                    <div key={st.label} className="flex items-center">
                      <Check s={16} /><span className="ml-2 text-[13.5px] text-[#3a3a3a]">{st.label}</span>
                      <span className="ml-auto text-[13px] font-bold" style={{ color: GREEN }}>{st.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* right cards + connectors */}
          <div className="flex flex-col gap-7 items-start pl-2">
            {/* Private Listing Mode */}
            <div className="relative flex items-center">
              <div className="absolute -left-[78px] top-6"><Connector flip /></div>
              <div className="rounded-3xl bg-white shadow-xl px-6 py-5 w-[300px]">
                <div className="flex items-start gap-4">
                  <Badge Icon={LockIcon} />
                  <div>
                    <p className="text-[17px] font-bold text-[#1a1a1a] mb-1">Private Listing Mode</p>
                    <p className="text-[14px] text-[#7a766c] leading-snug">Host privately with a shareable link and view-tracking analytics.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 bg-[#f7f3ec] rounded-2xl px-3 py-2.5">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl" style={{ background: ORANGE }}><Shield s={18} /></span>
                  <div className="flex -space-x-2.5">
                    <Avatar from="#f0a98c" to="#c76b4a" /><Avatar from="#8fb0d6" to="#4f6f96" /><Avatar from="#e0a0b0" to="#a85f72" />
                  </div>
                </div>
              </div>
            </div>
            {/* Agent-to-Seller Share */}
            <div className="relative flex items-center">
              <div className="absolute -left-[78px] top-6"><Connector flip /></div>
              <div className="flex items-start gap-4 rounded-3xl bg-white shadow-xl px-6 py-5 w-[300px]">
                <Badge Icon={People} />
                <div>
                  <p className="text-[17px] font-bold text-[#1a1a1a] mb-1">Agent-to-Seller Share</p>
                  <p className="text-[14px] text-[#7a766c] leading-snug">Use data to win staging or pricing conversations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WHY IT MATTERS BAR (overlaps the phone bottom) */}
        <div className="relative z-20 flex items-stretch rounded-[26px] overflow-hidden shadow-2xl -mt-28" style={{ background: "#161616" }}>
          <div className="flex items-center gap-3.5 pl-[210px] pr-7 py-6 shrink-0 max-w-[510px]">
            <span className="flex items-center justify-center w-12 h-12 rounded-2xl shrink-0" style={{ background: ORANGE }}><Sparkle s={24} /></span>
            <div className="leading-tight">
              <p className="text-white text-[17px] font-bold">Why It Matters</p>
              <p className="text-[13px] text-[#b9b3a8]">Listings optimized with ListingAudit sell faster and for more.</p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.label} className={`flex flex-col justify-center px-7 py-6 ${i > 0 ? "border-l border-white/10" : ""}`}>
                <p className="text-[34px] font-extrabold leading-none" style={{ color: ORANGE }}>{s.num}</p>
                <p className="text-[14px] font-semibold text-[#e6e2da] mt-1.5 flex items-center gap-2">
                  {s.label}{s.icon && <RocketUp s={22} c={ORANGE} />}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
