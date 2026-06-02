import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SnapJustify from "./pages/SnapJustify.jsx";
import STRvsLTR from "./pages/STRvsLTR.jsx";
import SnapComps from "./pages/SnapComps.jsx";
import SnapHype from "./pages/SnapHype.jsx";
import SellvsHold from "./pages/SellvsHold.jsx";
import ListingAudit from "./pages/ListingAudit.jsx";
import SnapLens from "./pages/SnapLens.jsx";
import SnapShop from "./pages/SnapShop.jsx";

const pages = [
  { path: "/snapjustify", name: "SnapJustify" },
  { path: "/strvsltr", name: "STRvsLTR" },
  { path: "/snapcomps", name: "SnapComps" },
  { path: "/snaphype", name: "SnapHype" },
  { path: "/sellvshold", name: "SellvsHold" },
  { path: "/listingaudit", name: "ListingAudit" },
  { path: "/snaplens", name: "SnapLens" },
  { path: "/snapshop", name: "SnapShop" },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#fdf8f3] flex flex-col items-center justify-center font-sans p-8">
      <h1
        className="text-[64px] text-[#1a1a1a] mb-10"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, letterSpacing: "-0.02em" }}
      >
        SnapTools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {pages.map((p) => (
          <Link
            key={p.path}
            to={p.path}
            className="bg-white rounded-2xl shadow-md border border-orange-100 px-8 py-10 text-center hover:shadow-xl transition"
          >
            <div className="text-[22px] font-bold text-[#1a1a1a]">{p.name}</div>
            <div className="text-[13px] text-[#ff5722] font-semibold mt-2">View page →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snapjustify" element={<SnapJustify />} />
        <Route path="/strvsltr" element={<STRvsLTR />} />
        <Route path="/snapcomps" element={<SnapComps />} />
        <Route path="/snaphype" element={<SnapHype />} />
        <Route path="/sellvshold" element={<SellvsHold />} />
        <Route path="/listingaudit" element={<ListingAudit />} />
        <Route path="/snaplens" element={<SnapLens />} />
        <Route path="/snapshop" element={<SnapShop />} />
      </Routes>
    </BrowserRouter>
  );
}
