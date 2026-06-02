import React from "react";

const ORANGE = "#e2541d";
const CREAM = "#f4f0e8";
const HOUSE_IMG = "/house.png";

/* ---------------- icons ---------------- */
const Mark = ({ s = 30, house = "#1a1a1a" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    {/* chimney on left roof */}
    <path d="M5.9 8V5.2H7.5V8" stroke={house} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    {/* house outline */}
    <path d="M3 11 12 3.5 21 11v9.5H3z" stroke={house} strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" />
    {/* orange bar-chart inside */}
    <rect x="8.4" y="14.6" width="2" height="4.4" rx="0.4" fill={ORANGE} />
    <rect x="11" y="12.6" width="2" height="6.4" rx="0.4" fill={ORANGE} />
    <rect x="13.6" y="13.7" width="2" height="5.3" rx="0.4" fill={ORANGE} />
  </svg>
);
const Arrow = ({ s = 14, c = ORANGE }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" />
  </svg>
);
const Trend = ({ s = 18, c = ORANGE }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" />
  </svg>
);
const Bank = ({ s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#3a3a3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10 12 4l9 6" /><line x1="4" y1="10" x2="4" y2="19" /><line x1="9" y1="10" x2="9" y2="19" /><line x1="15" y1="10" x2="15" y2="19" /><line x1="20" y1="10" x2="20" y2="19" /><line x1="3" y1="20" x2="21" y2="20" />
  </svg>
);
const Home = ({ s = 22, st = "#1a1a1a", w = 1.8 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={st} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9.5 21v-6h5v6" />
  </svg>
);
const HomeChart = ({ s = 22 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M3.5 10.5 12 3.5l8.5 7V21H3.5z" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="7 16.5 9.8 13.2 12 15 16.5 10" fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="13.8 10 16.5 10 16.5 12.7" fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Pct = ({ s = 22 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#1a1a1a" strokeWidth="1.8" />
    <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="9" cy="9" r="1.7" fill={ORANGE} />
    <circle cx="15" cy="15" r="1.7" fill="#1a1a1a" />
  </svg>
);
const Search = ({ s = 22 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke="#1a1a1a" strokeWidth="1.8" />
    <line x1="21" y1="21" x2="16.2" y2="16.2" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
    <polyline points="7.6 12.6 9.8 9.8 11.8 11.5 14.4 8.2" fill="none" stroke={ORANGE} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const GridI = ({ s = 22 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M7 3.5h6l4.5 4.5V18a2 2 0 0 1-2 2h-3.5" stroke="#1a1a1a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 3.5V9h5" stroke="#1a1a1a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="10" y1="9.6" x2="11.6" y2="9.6" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="10" y1="12.4" x2="14.6" y2="12.4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="3.4" y="12.6" width="8.6" height="8.4" rx="1.4" fill="#ffffff" stroke={ORANGE} strokeWidth="1.7" />
    <line x1="3.4" y1="15.5" x2="12" y2="15.5" stroke={ORANGE} strokeWidth="1.4" />
    <line x1="6.7" y1="12.6" x2="6.7" y2="21" stroke={ORANGE} strokeWidth="1.3" />
    <line x1="9.2" y1="12.6" x2="9.2" y2="21" stroke={ORANGE} strokeWidth="1.3" />
  </svg>
);
const Chip = ({ s = 22 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <rect x="6.5" y="6.5" width="11" height="11" rx="2.2" stroke="#1a1a1a" strokeWidth="1.7" />
    <path d="M10 6.5V4M14 6.5V4M10 17.5V20M14 17.5V20M6.5 10H4M6.5 14H4M17.5 10H20M17.5 14H20" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" />
    <text x="12" y="14.7" textAnchor="middle" fontSize="7.5" fontWeight="700" fontFamily="ui-sans-serif, system-ui, sans-serif" fill="#1a1a1a">Ai</text>
    <path d="M18.8 4.2l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5z" fill={ORANGE} />
  </svg>
);
const Bell = ({ s = 16 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" /><path d="M10.5 20a2 2 0 0 0 3 0" />
  </svg>
);
const Info = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#9a9a9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><line x1="12" y1="11" x2="12" y2="16" /><line x1="12" y1="8" x2="12" y2="8" />
  </svg>
);
const Chevron = ({ s = 16 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#9a9a9a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

/* ---------------- chart ---------------- */
const XS = [70, 134, 198, 262, 326, 390, 454, 518, 582];
const YEARS = [2024, 2025, 2026, 2027, 2028];
const yOf = (v) => 210 - v * 0.5; // $300K=60, $0=210, -$100K=260
const SERIES = [
  { key: "Rent", color: "#ffffff", vals: [0, 24, 46, 74, 92, 120, 138, 168, 185] },
  { key: "Hold", color: "#8f8f8f", vals: [0, -8, -24, -36, -50, -60, -74, -88, -100] },
  { key: "Refinance", color: ORANGE, vals: [8, 46, 80, 128, 158, 206, 240, 292, 330] },
  { key: "Sell", color: "#d0d0d0", vals: [0, 10, 24, 36, 50, 58, 70, 82, 92] },
  { key: "HELOC", color: "#6ea8e0", vals: [0, 16, 34, 48, 64, 80, 100, 116, 132] },
];
const Y_LABELS = [[300, "$300K"], [200, "$200K"], [100, "$100K"], [0, "$0"], [-100, "-$100K"]];
const ProjectionChart = () => (
  <svg viewBox="0 0 640 290" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    {Y_LABELS.map(([v, t]) => (
      <g key={v}>
        <line x1="64" y1={yOf(v)} x2="620" y2={yOf(v)} stroke="#ffffff" strokeOpacity="0.08" />
        <text x="56" y={yOf(v) + 4} fill="#9a9a9a" fontSize="13" textAnchor="end">{t}</text>
      </g>
    ))}
    {SERIES.map((s) => {
      const isR = s.key === "Refinance";
      return (
        <g key={s.key}>
          <polyline fill="none" stroke={s.color} strokeWidth={isR ? 2.8 : 1.8} strokeLinecap="round" strokeLinejoin="round"
            points={s.vals.map((v, i) => `${XS[i]},${yOf(v)}`).join(" ")} />
          {s.vals.map((v, i) => (<circle key={i} cx={XS[i]} cy={yOf(v)} r={isR ? 4 : 3} fill={s.color} />))}
        </g>
      );
    })}
    {YEARS.map((yr, i) => (
      <text key={yr} x={XS[i * 2]} y="282" fill="#9a9a9a" fontSize="13" textAnchor="middle">{yr}</text>
    ))}
  </svg>
);

const FEATURES = [
  { Icon: HomeChart, title: "Rent vs Buy", sub: "Compare lifestyle & financial outcomes", href: "https://rentvsbuy.snaphomz.com" },
  { Icon: Pct, title: "Snap Interest", sub: "Track rates & get smart alerts", href: "https://snapinterest.snaphomz.com" },
  { Icon: Search, title: "Snap Audit", sub: "Analyze deals with AI precision", href: "https://snapaudit.snaphomz.com" },
  { Icon: GridI, title: "SnapPredict", sub: "Forecast your home's value path", href: "https://snappredict.snaphomz.com" },
  { Icon: Chip, title: "SnapDisclosures", sub: "Auto-generate & review disclosures", href: "https://snapdisclosures.snaphomz.com" },
];
const STATS = [
  { num: "$4.2B", label: "EQUITY MODELED", accent: true },
  { num: "12,400+", label: "PROPERTIES ANALYZED", accent: false },
  { num: "5", label: "STRATEGIC PATHS", accent: false },
  { num: "Real-time", label: "MARKET DATA", accent: true },
  { num: "Institutional", label: "ACCURACY", accent: true },
];

export default function SellvsHold() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden font-sans" style={{ background: CREAM }}>
      {/* House (real photo) filling the right; the cards on top are real React/SVG */}
      <div className="absolute top-0 right-0 h-[800px] w-[66%] max-w-[1220px] z-0">
        <img
          src={HOUSE_IMG}
          alt="Modern home at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: "70% 38%",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #000 18%, #000 100%), linear-gradient(to top, transparent 0%, #000 14%, #000 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, #000 18%, #000 100%), linear-gradient(to top, transparent 0%, #000 14%, #000 100%)",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1460px] mx-auto px-14 pt-8 pb-10">
        {/* NAV */}
        <nav className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2.5 text-[26px] font-bold tracking-tight text-[#1a1a1a]">
            <Mark /> SellvsHold
          </div>
        </nav>

        <a href="https://www.snaphomz.com" target="_blank" rel="noopener noreferrer" className="fixed top-6 right-6 z-50 flex items-center gap-2.5 bg-[#161616] text-white px-6 py-3 rounded-full text-[15px] font-medium shadow-lg">
          snaphomz.com <Arrow />
        </a>

        {/* HERO */}
        <div className="relative grid grid-cols-[minmax(0,520px)_1fr] gap-8 items-start">
          {/* left text */}
          <div className="pt-12 pb-10">
            <h1 className="text-[54px] leading-[1.04] font-bold text-[#1a1a1a] mb-1 whitespace-nowrap" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Sell, Hold, Refinance,<br />or Rent It Out?
            </h1>
            <p className="text-[50px] leading-[1.1] italic font-medium mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: ORANGE }}>
              Run the Math.
            </p>
            <p className="text-[19px] text-[#3f3b34] leading-[1.7] mb-10 max-w-[480px]">
              A homeowner equity strategy engine that goes beyond binary choices.
              Model five strategic paths for your property — sell, hold, refinance,
              rent, or tap a HELOC — across interest rates and neighborhood growth,
              with institutional-grade precision and real-time market data.
            </p>
            <button className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-[#1a1a1a] px-8 py-4 text-[14px] font-bold tracking-[0.16em] text-[#1a1a1a] bg-white/40">
              <span className="w-2 h-2 rounded-full" style={{ background: ORANGE }} /> COMING SOON
            </button>
          </div>

          {/* right: glass card stack over the house */}
          <div className="relative h-[560px]">
            <div className="absolute" style={{ left: "2%", top: "9%", width: "84%", height: "78%" }}>
              {/* main projection card */}
              <div className="relative h-full flex flex-col rounded-[24px] border border-white/15 backdrop-blur-sm shadow-2xl px-6 pt-5 pb-4" style={{ background: "rgba(13,13,16,0.60)" }}>
                <div className="mb-2">
                  <h3 className="text-white text-[21px] font-semibold leading-tight">Strategy Projection</h3>
                  <p className="text-[10px] tracking-[0.18em] text-[#9a9a9a] mt-1">5-YEAR OUTLOOK</p>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-1">
                  {SERIES.map((s) => (
                    <span key={s.key} className="flex items-center gap-1.5 text-[12px] text-[#d8d8d8]">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />{s.key}
                    </span>
                  ))}
                </div>
                <div className="flex-1 min-h-0"><ProjectionChart /></div>
                <div className="flex justify-end items-center gap-1.5">
                  <span className="text-[11px] text-[#9a9a9a]">Confidence Score: 0.94</span><Info />
                </div>
              </div>

              {/* MARKET ALPHA */}
              <div className="absolute right-[-8%] top-[-7%] w-[42%] rounded-2xl border border-white/15 backdrop-blur-xl shadow-2xl px-4 py-3.5" style={{ background: "rgba(11,11,13,0.78)" }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] tracking-[0.16em] text-[#9a9a9a]">MARKET ALPHA</span>
                  <Trend s={16} c="#cfcfcf" />
                </div>
                <div className="flex items-end gap-1.5 mb-2.5">
                  <span className="text-white text-[27px] font-bold leading-none">$214K</span>
                  <span className="text-[13px] font-semibold pb-0.5" style={{ color: ORANGE }}>+12.4%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-white/15 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: "72%", background: ORANGE }} />
                  </div>
                  <span className="flex items-center justify-center w-6 h-6 rounded-lg" style={{ background: ORANGE }}>
                    <Home s={13} st="#fff" w={2} />
                  </span>
                </div>
              </div>

              {/* RATE ALERT */}
              <div className="absolute left-[-2%] bottom-[-6%] w-[40%] flex items-center gap-2.5 rounded-2xl bg-white shadow-xl px-3.5 py-2.5">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl shrink-0" style={{ background: "#fbe7dc" }}>
                  <Bell s={15} />
                </span>
                <div className="flex-1">
                  <p className="text-[12px] font-bold text-[#1a1a1a]">RATE ALERT</p>
                  <p className="text-[11px] text-[#6b6b6b] leading-snug">Optimization available in Q3 2024</p>
                </div>
                <Chevron s={15} />
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE ROW */}
        <div className="flex items-stretch rounded-[22px] border border-[#e6dfce] bg-white/95 backdrop-blur shadow-lg overflow-hidden mt-4 mb-10">
          <div className="flex items-center gap-3 bg-[#141414] px-7 py-6 shrink-0">
            <Mark s={30} house={ORANGE} />
            <div className="leading-tight">
              <p className="text-white text-[16px] font-bold">Snaphomz</p>
              <p className="text-[13px] font-medium" style={{ color: ORANGE }}>Multi-Tool Suite</p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-5">
            {FEATURES.map(({ Icon, title, sub, href }, i) => (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                className={`flex items-start gap-3 px-5 py-6 transition-colors hover:bg-[#faf6ee] ${i > 0 ? "border-l border-[#e8e0d0]" : ""}`}>
                <Icon s={28} />
                <div className="leading-snug">
                  <p className="text-[15px] font-bold text-[#1a1a1a]">{title}</p>
                  <p className="text-[12.5px] text-[#7a766c] mt-0.5">{sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-5 mb-6">
          {STATS.map((s, i) => (
            <div key={s.label} className={`text-center px-4 ${i > 0 ? "border-l border-[#ddd3c2]" : ""}`}>
              <p className="text-[34px] font-bold text-[#1a1a1a] leading-none mb-2">{s.num}</p>
              <p className="text-[12px] font-bold tracking-[0.16em]" style={{ color: s.accent ? ORANGE : "#5a564e" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
