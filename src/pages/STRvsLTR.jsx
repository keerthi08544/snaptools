import React from "react";
import strImg from "../assets/str.png";

const ArrowUpRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const TrendUp = ({ className = "" }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="3 17 9 11 13 15 21 7" />
    <polyline points="14 7 21 7 21 14" />
  </svg>
);

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8a3d" />
          <stop offset="100%" stopColor="#ff4f1f" />
        </linearGradient>
      </defs>
      <path
        d="M22 4 L38 13 L38 31 L22 40 L6 31 L6 13 Z"
        fill="url(#lg)"
      />
      <path d="M16 16 h12 v4 h-8 v3 h8 v9 h-12 v-4 h8 v-3 h-8 z" fill="white" />
    </svg>
    <div className="text-[#1a1a1a] font-extrabold tracking-[0.04em] text-[28px]">STRVSLTR</div>
  </div>
);

const FeatureRow = ({ icon, title, desc }) => (
  <div className="flex items-start gap-5 mb-6">
    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-orange-100 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <div className="text-[20px] font-bold text-[#1a1a1a]">{title}</div>
      <div className="text-[15px] text-[#6b6b6b] mt-1 leading-snug max-w-[400px]">{desc}</div>
    </div>
  </div>
);

const IconBars = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="#ff5722">
    <rect x="3" y="13" width="4" height="8" rx="1" />
    <rect x="10" y="9" width="4" height="12" rx="1" />
    <rect x="17" y="5" width="4" height="16" rx="1" />
  </svg>
);

const IconDoc = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <text x="12" y="17" textAnchor="middle" fontSize="8" fill="#ff5722" stroke="none" fontWeight="bold">$</text>
  </svg>
);

const IconShield = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconTrend = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff5722" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 17 9 11 13 15 21 7" />
    <polyline points="14 7 21 7 21 14" />
  </svg>
);

const StatCard = ({ icon, iconBg, label, sublabel, value, valueColor, irr, badge }) => (
  <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-neutral-100 px-5 py-4 min-w-[230px]">
    {badge && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ff8a3d] to-[#ff4f1f] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
        <span>👑</span> {badge}
      </div>
    )}
    <div className="flex items-start gap-3">
      {icon && (
        <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
          {icon}
        </div>
      )}
      <div>
        <div className="text-[13px] font-bold text-[#1a1a1a] leading-tight">{label}</div>
        {sublabel && <div className="text-[11px] text-[#9a9a9a]">{sublabel}</div>}
      </div>
    </div>
    <div className={`text-[26px] font-extrabold ${valueColor} mt-2`}>{value}</div>
    <div className="text-[11px] text-[#9a9a9a] mt-0.5">5-Year After-Tax Cash Flow</div>
    <div className="flex items-center gap-1 text-emerald-600 text-[12px] font-bold mt-1">
      <TrendUp /> {irr} IRR
    </div>
  </div>
);

export default function STRvsLTR() {
  return (
    <div className="min-h-screen bg-[#fdf8f3] font-sans">
      <div className="px-10 py-7 max-w-[1600px] mx-auto">
        {/* Header */}
        <nav className="flex items-center justify-between mb-6">
          <Logo />
          <a
            href="https://snaphomz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#ff8a3d] to-[#ff4f1f] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold hover:opacity-90 shadow-md"
          >
            Visit Snaphomz <ArrowUpRight size={13} />
          </a>
        </nav>

        {/* Main */}
        <div className="grid grid-cols-[1fr_1.9fr] gap-8 items-center">
          {/* Left */}
          <div className="pt-4">
            <h1
              className="text-[64px] leading-[1.02] text-[#1a1a1a] mb-3 whitespace-nowrap"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              What's This Property<br />
              Worth as an{" "}<br />
              <span className="italic text-[#ff5722]" style={{ fontWeight: 600 }}>
                Investment?
              </span>
            </h1>
            <div className="w-14 h-[3px] bg-[#ff5722] rounded-full mb-5" />
            <p className="text-[16px] text-[#1a1a1a] leading-relaxed mb-8 max-w-[500px]">
              We analyze every realistic income strategy, expenses, taxes, financing, and regulatory risk — to show
              you the 5-year after-tax return and the best path forward.
            </p>

            <FeatureRow
              icon={<IconBars />}
              title="Multiple Income Strategies"
              desc="Airbnb, mid-term, long-term, house hacking, ADU, or owner-occupancy."
            />
            <FeatureRow
              icon={<IconDoc />}
              title="5-Year After-Tax Projections"
              desc="Revenue, expenses, taxes, financing and cash flow."
            />
            <FeatureRow
              icon={<IconShield />}
              title="Regulatory Risk Scoring"
              desc="Real-time tracking of active and proposed STR rules in your city."
            />
            <FeatureRow
              icon={<IconTrend />}
              title="Invest with Confidence"
              desc="See the strategy with the highest risk-adjusted return."
            />

            <div className="mt-2 inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 rounded-full text-[14px]">
              Coming Soon <span>✨</span>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <img
              src={strImg}
              alt="STR analysis"
              className="w-full h-auto block"
              style={{
                mixBlendMode: "multiply",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
                WebkitMaskComposite: "source-in",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
                maskComposite: "intersect",
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-[12px] text-[#9a9a9a] mt-6">
          © 2026 STRVSLTR. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

function Gauge() {
  return (
    <svg width="64" height="40" viewBox="0 0 64 40">
      <defs>
        <linearGradient id="gaugeg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <path
        d="M 6 34 A 26 26 0 0 1 58 34"
        stroke="url(#gaugeg)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <line x1="32" y1="34" x2="20" y2="14" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="34" r="3" fill="#1a1a1a" />
    </svg>
  );
}
