import React from "react";
import hypeImg from "../assets/hype.png";

const GOLD = "#b88a3d";

const ArrowUpRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Play = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="6 4 20 12 6 20" />
  </svg>
);

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="40" height="40" viewBox="0 0 44 44" fill="none">
      <defs>
        <linearGradient id="gh" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e9c876" />
          <stop offset="100%" stopColor="#b88a3d" />
        </linearGradient>
      </defs>
      <path d="M22 4 L38 13 L38 31 L22 40 L6 31 L6 13 Z" fill="url(#gh)" />
      <path d="M14 14 h6 v6 h4 v-6 h6 v16 h-6 v-6 h-4 v6 h-6 z" fill="white" />
    </svg>
    <div className="text-[#1a1a1a] font-extrabold tracking-tight text-[26px]">SnapHype</div>
  </div>
);

const IconMotion = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polygon points="10 9 16 12 10 15" fill={GOLD} />
  </svg>
);
const IconMusic = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);
const IconType = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 7 4 4 20 4 20 7" />
    <line x1="9" y1="20" x2="15" y2="20" />
    <line x1="12" y1="4" x2="12" y2="20" />
  </svg>
);
const IconAB = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4 L8 16 L11 4" />
    <path d="M14 4 h4 a2 2 0 0 1 0 4 h-4 z" />
    <path d="M14 8 h5 a2 2 0 0 1 0 4 h-5 z" />
  </svg>
);

const Feature = ({ icon, label }) => (
  <div className="flex flex-col items-center text-center gap-2">
    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-amber-100 flex items-center justify-center">
      {icon}
    </div>
    <div className="text-[12px] text-[#1a1a1a] font-medium leading-tight max-w-[110px]">{label}</div>
  </div>
);

export default function SnapHype() {
  return (
    <div className="min-h-screen bg-[#fdfaf8] font-sans text-[#1a1a1a]">
      <div className="px-10 py-7 max-w-[1600px] mx-auto">
        {/* Header */}
        <nav className="flex items-center justify-between mb-5">
          <Logo />
          <a
            href="https://snaphomz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1a1612] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold hover:opacity-90 shadow-md"
          >
            Early Access <ArrowUpRight size={13} />
          </a>
        </nav>

        <div className="grid grid-cols-[1fr_1.4fr] gap-10 items-center">
          {/* Left */}
          <div>
            <h1
              className="text-[56px] leading-[1.05] mb-5 text-[#1a1a1a]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Cinematic Listing Films.<br />
              For Homes That<br />
              <span style={{ color: GOLD, fontStyle: "italic", fontWeight: 500 }}>
                Deserve More
              </span>
              <br />
              Than a Reel.
            </h1>
            <p className="text-[15px] text-[#4a4a4a] leading-relaxed mb-8 max-w-[480px]">
              Premium video generation built specifically for luxury and high-end listings. We turn your photography
              into cinematic property films with editorial-quality motion, refined typography, and licensed soundtracks
              scored to the cuts.
            </p>

            <div className="grid grid-cols-4 gap-4 mb-8 max-w-[480px]">
              <Feature icon={<IconMotion />} label="Cinematic Motion" />
              <Feature icon={<IconMusic />} label="Licensed Soundtracks" />
              <Feature icon={<IconType />} label="Refined Typography" />
              <Feature icon={<IconAB />} label="3 Variations A/B Test" />
            </div>

            <div className="flex items-center gap-3 mb-8">
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, #e9c876, #b88a3d)` }}
              >
                Coming Soon
              </button>
            </div>

            <div className="flex items-center gap-3">
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <img
              src={hypeImg}
              alt="SnapHype editor"
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

        <footer className="text-[12px] text-[#9a9a9a] mt-10">
          © 2026 SnapHype. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
