import React from "react";
import heroImg from "../assets/top_house.png";
import roofImg from "../assets/Roof-wear.png";
import hvacImg from "../assets/hvac_system.png";
import foundationImg from "../assets/foundation_integrity.png";

const HERO_IMG = heroImg;
const ROOF_IMG = roofImg;
const HVAC_IMG = hvacImg;
const FOUNDATION_IMG = foundationImg;

const ArrowUpRight = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95 0-5.52-4.48-10-10-10z" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const FeatureCard = ({ image, title }) => (
  <div className="rounded-2xl overflow-hidden h-[340px] shadow-sm">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover"
      style={{
        filter: "contrast(1.08) saturate(1.05)",
        imageRendering: "auto",
      }}
    />
  </div>
);

export default function SnapJustify() {
  return (
    <div className="min-h-screen bg-black p-4 font-sans">
      <div className="bg-[#f3efe7] rounded-xl px-12 py-8 max-w-[1280px] mx-auto">
        {/* Nav */}
        <nav className="flex items-center justify-between mb-16">
          <div className="text-3xl font-serif text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            SnapJustify
          </div>
          <a
            href="https://snaphomz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 rounded-full text-[15px] hover:opacity-90"
          >
            Visit Snaphomz <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-2 gap-10 items-start mb-12">
          <div className="pt-4">
            <h1
              className="text-[64px] leading-[1.05] text-[#1a1a1a] mb-8 whitespace-nowrap"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Inspection Came<br />Back Brutal?
            </h1>
            <p className="text-[16px] text-[#3a3a3a] leading-relaxed mb-8 max-w-md">
              Don't panic over a brutal inspection report. Get the facts first.
              Upload your report to SnapJustify for an instant, plain-English
              breakdown of what's critical, what's normal wear-and-tear, and
              what it actually costs to fix. We give you the data and context
              you need to walk.
            </p>
            <button className="flex items-center gap-2 bg-[#1a1a1a] text-white px-7 py-4 rounded-full text-[15px]">
              Coming Soon
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden h-[360px]">
            <img src={HERO_IMG} alt="Modern house" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <FeatureCard image={ROOF_IMG} title="Roof Wear & Tear" />
          <FeatureCard image={HVAC_IMG} title="HVAC System" />
          <FeatureCard image={FOUNDATION_IMG} title="Foundation Integrity" />
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-between text-[13px] text-[#3a3a3a] pt-4">
          <div>© 2026 SnapJustify. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
