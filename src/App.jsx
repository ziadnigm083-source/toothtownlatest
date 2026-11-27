import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { useRevealObserver } from "./hooks/useReveal";
import { useScrollEffects } from "./hooks/useScrollEffects";
import { orthodonticServices, pediatricServices } from "./data";

import Home from "./pages/Home";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import AdultServices from "./pages/AdultServices";
import ToneServicesPage from "./pages/ToneServicesPage";
import FirstVisit from "./pages/FirstVisit";
import FAQ from "./pages/FAQ";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import LocationsOverview from "./pages/LocationsOverview";
import LocationPage from "./pages/LocationPage";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

// Per-clinic page details (subtitle and accent colour differ in the original).
const locationPages = [
  { label: "Alexandria • Sporting", sub: "Alexandria, Egypt", tone: "blue", url: "https://maps.app.goo.gl/Re8ov62UAiHvLhW59", hotline: "0120 0730773", hours: ["Sat–Thu • 10:00 AM – 10:00 PM", "Friday • 2:00 PM – 8:00 PM"], photos: Array.from({ length: 15 }, (_, i) => `/images/sporting/${String(i + 1).padStart(2, "0")}.jpg`) },
  { label: "Alexandria • Agamy", sub: "Egypt", tone: "pink", url: "https://maps.app.goo.gl/xL2FuwEAjUoLwMKi6", hotline: "0127 7993838", hours: ["Sat–Thu • 10:00 AM – 10:00 PM", "Friday • 2:00 PM – 10:00 PM"] },
  { label: "Alexandria • Victoria", sub: "Egypt", tone: "yellow", url: "https://maps.app.goo.gl/g8LHfCERs3qAtEwz6?g_st=ic", hotline: "0120 5006001", hours: ["Sat–Thu • 10:00 AM – 10:00 PM", "Friday • 3:00 PM – 9:00 PM"] },
  { label: "Cairo • Dokki", sub: "Egypt", tone: "orange", url: "https://maps.app.goo.gl/hvZnfSMh8Uzv3pBH6", hotline: "0112 9988110", hours: ["Sat–Thu • 10:00 AM – 10:00 PM", "Friday • 2:00 PM – 8:00 PM"], photos: [1, 2, 4, 5, 6].map((i) => `/images/dokki/${String(i).padStart(2, "0")}.jpg`) },
  { label: "New Cairo • FamBam", sub: "Egypt", tone: "green", url: "https://maps.app.goo.gl/ckRKc7LmGDcmc6L76", hotline: "0122 2385969", hours: ["Sat–Thu • 10:00 AM – 10:00 PM", "Friday • 2:00 PM – 10:00 PM"], photos: Array.from({ length: 7 }, (_, i) => `/images/fambam/${String(i + 1).padStart(2, "0")}.jpg`) },
];


const pagePaths = {
  "Home": "/",
  "About": "/about",
  "Why Us": "/why-us",
  "Adult Services": "/adult-services",
  "Pediatric": "/pediatric",
  "Orthodontics": "/orthodontics",
  "First Visit": "/first-visit",
  "FAQ": "/faq",
  "Team": "/team",
  "Gallery": "/gallery",
  "Locations-Overview": "/locations",
  "Alexandria • Sporting": "/locations/alexandria-sporting",
  "Alexandria • Agamy": "/locations/alexandria-agamy",
  "Alexandria • Victoria": "/locations/alexandria-victoria",
  "Cairo • Dokki": "/locations/cairo-dokki",
  "New Cairo • FamBam": "/locations/new-cairo-fambam",
  "Reviews": "/reviews",
  "Contact Us": "/contact",
};

const pathTabs = Object.fromEntries(
  Object.entries(pagePaths).map(([tab, path]) => [path, tab])
);

function tabFromPath(pathname) {
  return pathTabs[pathname.replace(/\/+$/, "") || "/"] || "Home";
}

export default function App() {
  const [activeTab, setActiveTab] = useState(() => tabFromPath(window.location.pathname));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // which desktop dropdown is open
  const observeRevealIn = useRevealObserver();
  useScrollEffects();

  const setTab = useCallback(
    (tab) => {
      setActiveTab(tab);
      const nextPath = pagePaths[tab] || "/";
      if (window.location.pathname !== nextPath) {
        window.history.pushState({ tab }, "", nextPath);
      }
      setMobileOpen(false);
      setOpenMenu(null);
      window.scrollTo({ top: 0, behavior: "auto" });
      requestAnimationFrame(() => observeRevealIn());
    },
    [observeRevealIn]
  );

  // Keep the selected page in sync with browser Back and Forward buttons.
  useEffect(() => {
    const handlePopState = () => {
      setActiveTab(tabFromPath(window.location.pathname));
      setMobileOpen(false);
      setOpenMenu(null);
      window.scrollTo({ top: 0, behavior: "auto" });
      requestAnimationFrame(() => observeRevealIn());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [observeRevealIn]);

  // Keep the page behind the mobile menu from scrolling while the menu itself
  // remains independently scrollable on touch devices.
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  // Clicking anywhere closes any open dropdown.
  useEffect(() => {
    const close = () => setOpenMenu(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const is = (tab) => activeTab === tab;

  return (
    <>
      <Header
        activeTab={activeTab}
        setTab={setTab}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Home active={is("Home")} setTab={setTab} />
        <About active={is("About")} />
        <WhyUs active={is("Why Us")} />
        <AdultServices active={is("Adult Services")} />
        <ToneServicesPage
          active={is("Pediatric")}
          title="Big care for little teeth"
          intro="From the very first tooth to a teenager's confident grin — we've got every stage covered."
          list={pediatricServices}
        />
        <ToneServicesPage
          active={is("Orthodontics")}
          eyebrow="Orthodontics"
          title="Straighter smiles, every step of the way"
          intro="From first evaluation to your last retainer check — orthodontic care built around comfort and confidence."
          list={orthodonticServices}
        />
        <FirstVisit active={is("First Visit")} />
        <FAQ active={is("FAQ")} />
        <Team active={is("Team")} />
        <Gallery active={is("Gallery")} />
        <LocationsOverview active={is("Locations-Overview")} />
        {locationPages.map((loc) => (
          <LocationPage key={loc.label} active={is(loc.label)} {...loc} />
        ))}
        <Reviews active={is("Reviews")} />
        <Contact active={is("Contact Us")} />
      </main>

      <Footer activeTab={activeTab} setTab={setTab} />
      <WhatsAppButton />
    </>
  );
}
