import React from "react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80";
const ROOF_IMG =
  "https://images.unsplash.com/photo-1632933664370-3a78f1d3e9a3?w=800&q=80";
const HVAC_IMG =
  "https://images.unsplash.com/photo-1635274602170-f01e1cdd1e9c?w=800&q=80";
const FOUNDATION_IMG =
  "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80";

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

const FeatureCard = ({ image, title, children }) => (
  <div className="relative rounded-2xl overflow-hidden h-[340px] shadow-sm">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute top-4 left-4 right-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md px-4 py-3">
      <h3 className="text-white text-xl font-medium">{title}</h3>
    </div>
    <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md px-4 py-3 text-white text-sm">
      {children}
    </div>
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
          <div className="flex items-center gap-10 text-[15px] text-[#1a1a1a]">
            <a href="#" className="hover:underline">How It Works</a>
            <a href="#" className="hover:underline">Features</a>
            <a href="#" className="hover:underline">Pricing</a>
          </div>
          <button className="flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 rounded-full text-[15px]">
            Contact Us <ArrowUpRight size={14} />
          </button>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-2 gap-10 items-start mb-12">
          <div className="pt-4">
            <h1
              className="text-[76px] leading-[0.95] text-[#1a1a1a] mb-8 font-normal"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Inspection Came<br />Back Brutal?
            </h1>
            <p className="text-[16px] text-[#3a3a3a] leading-relaxed mb-8 max-w-md">
              A seller's guidance tool for navigating the inspection response —
              without overstepping your agent.
            </p>
            <button className="flex items-center gap-2 bg-[#1a1a1a] text-white px-7 py-4 rounded-full text-[15px]">
              Get Started Today <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden h-[360px]">
            <img src={HERO_IMG} alt="Modern house" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <FeatureCard image={ROOF_IMG} title="Roof Wear & Tear">
            <div className="flex justify-end gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-blue-400/70 text-white text-xs">● Average</span>
              <span className="px-3 py-1 rounded-full bg-orange-400/70 text-white text-xs">● Badget</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span>Condition:</span><span>78% (Average)</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span>Issues:</span><span>2 Minor</span>
            </div>
          </FeatureCard>

          <FeatureCard image={HVAC_IMG} title="HVAC System">
            <div className="flex justify-between py-0.5">
              <span>Efficiency:</span><span>92%</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span>Last Service:</span><span>2023</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span>Status:</span><span>Needs Repair (Critical)</span>
            </div>
          </FeatureCard>

          <FeatureCard image={FOUNDATION_IMG} title="Foundation Integrity">
            <div className="flex justify-between py-0.5">
              <span>Stability:</span><span>98%</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span>Cracks:</span><span>None</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span>Status:</span><span>Major Issue (Requires Attention)</span>
            </div>
          </FeatureCard>
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-between text-[13px] text-[#3a3a3a] pt-4">
          <div>© 2024 SnapJustify. All rights reserved.</div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          <div className="flex items-center gap-4 text-[#1a1a1a]">
            <a href="#"><FacebookIcon /></a>
            <a href="#"><XIcon /></a>
            <a href="#"><InstagramIcon /></a>
          </div>
        </footer>
      </div>
    </div>
  );
}
