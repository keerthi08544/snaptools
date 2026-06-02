import React from "react";
import compsImg from "../assets/comps.png";

const HOUSE = "https://loremflickr.com/600/400/luxury,modern,house,exterior/all?lock=";

const ArrowUpRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="40" height="40" viewBox="0 0 44 44" fill="none">
      <defs>
        <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8a3d" />
          <stop offset="100%" stopColor="#ff4f1f" />
        </linearGradient>
      </defs>
      <path d="M22 4 L38 13 L38 31 L22 40 L6 31 L6 13 Z" fill="url(#lg2)" />
      <path d="M16 16 h12 v4 h-8 v3 h8 v9 h-12 v-4 h8 v-3 h-8 z" fill="white" />
    </svg>
    <div className="text-[#1a1a1a] font-extrabold tracking-tight text-[26px]">SnapComps</div>
  </div>
);

const IconGrid = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#ff5722">
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
);
const IconChart = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff5722" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 17 9 11 13 15 21 7" />
    <polyline points="14 7 21 7 21 14" />
  </svg>
);
const IconPdf = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);
const IconLink = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7 0l4-4a5 5 0 0 0-7-7l-1 1" />
    <path d="M14 11a5 5 0 0 0-7 0l-4 4a5 5 0 0 0 7 7l1-1" />
  </svg>
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

const CompCard = ({ image, address, city, price, similarity, accent }) => (
  <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.10)] border border-neutral-100 overflow-hidden w-[200px]">
    <img src={image} alt={address} className="w-full h-[100px] object-cover" />
    <div className="px-3 py-2">
      <div className="text-[12px] font-bold text-[#1a1a1a] leading-tight">{address}</div>
      <div className="text-[10px] text-[#9a9a9a]">{city}</div>
      <div className={`text-[16px] font-extrabold ${accent || "text-[#1a1a1a]"} mt-1`}>{price}</div>
      <div className="text-[10px] text-emerald-600 font-bold">↗ {similarity} Similarity</div>
    </div>
  </div>
);

const SubjectCard = () => (
  <div className="bg-white rounded-2xl shadow-2xl border-2 border-orange-200 overflow-hidden w-[280px] relative">
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ff8a3d] to-[#ff4f1f] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10 whitespace-nowrap">
      ★ SUBJECT PROPERTY
    </div>
    <img src={HOUSE + "9001"} alt="Subject" className="w-full h-[140px] object-cover" />
    <div className="px-4 py-3">
      <div className="text-[14px] font-bold text-[#1a1a1a]">1421 Crestview Drive</div>
      <div className="text-[11px] text-[#9a9a9a]">Beverly Hills, CA 90210</div>
      <div className="text-[11px] text-[#9a9a9a] mt-2">Estimated Value</div>
      <div className="text-[26px] font-extrabold text-[#ff5722] leading-tight">$4,820,000</div>
      <div className="text-[11px] text-emerald-600 font-bold mt-1">↗ 98% Confidence Score</div>
    </div>
  </div>
);

const ConfidenceCircle = () => (
  <div className="relative w-[120px] h-[120px]">
    <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
      <circle cx="60" cy="60" r="50" stroke="#fde6da" strokeWidth="10" fill="none" />
      <circle cx="60" cy="60" r="50" stroke="#ff5722" strokeWidth="10" fill="none"
        strokeDasharray={`${0.94 * 314} 314`} strokeLinecap="round" />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="text-[28px] font-extrabold text-[#ff5722] leading-none">94%</div>
      <div className="text-[9px] text-[#9a9a9a] font-semibold uppercase">Confidence</div>
    </div>
  </div>
);

export default function SnapComps() {
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

        <div className="grid grid-cols-[1fr_1.9fr] gap-8 items-center">
          {/* Left */}
          <div className="pt-2">
            <h1
              className="text-[60px] leading-[1.02] text-[#1a1a1a] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              The CMA Engine<br />
              That{" "}
              <span className="text-[#ff5722]" style={{ fontWeight: 600 }}>
                Wins Listings.
              </span>
              <br />
              Not Just<br />
              Calculates Values.
            </h1>
            <div className="w-14 h-[3px] bg-[#ff5722] rounded-full mb-5" />
            <p className="text-[16px] text-[#1a1a1a] leading-relaxed mb-8 max-w-[500px]">
              We capture what truly matters. Our CMA engine analyzes 40+ similarity factors across eight properties
              to deliver regression-adjusted values with confidence you can present.
              <br />
              <br />
              Create stunning, branded CMAs in 30 seconds and share interactive reports that help sellers explore
              comps and build conviction in your price recommendation.
            </p>

            <FeatureRow icon={<IconGrid />} title="40+ Similarity Dimensions" desc="Bedrooms, baths, lot size, finish quality and more." />
            <FeatureRow icon={<IconChart />} title="Regression-Adjusted Pricing" desc="Statistical pricing that's defensible to any seller." />
            <FeatureRow icon={<IconPdf />} title="Branded CMA PDFs" desc="Beautiful one-click exports with your logo and brand." />
            <FeatureRow icon={<IconLink />} title="Active Seller Links" desc="Shareable interactive reports for sellers and clients." />

            <div className="mt-2 inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 rounded-full text-[14px]">
              Coming Soon <span>✨</span>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <img src={compsImg} alt="Comps analysis" className="w-full h-auto block" />
          </div>
        </div>

        <footer className="text-[12px] text-[#9a9a9a] mt-6">
          © 2026 SnapComps. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
