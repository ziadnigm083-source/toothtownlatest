import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ar } from "./ar";

const STORAGE_KEY = "toothtown-lang";
const LangContext = createContext(null);

function readSavedLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") return saved;
  } catch (e) { /* storage can be blocked; fall back to English */ }
  return "en";
}

// Arabic count words: 1 = singular, 2 = dual, 3-10 = plural, 11+ = singular accusative.
const AGO_UNITS = {
  day: ["يوم", "يومين", "أيام", "يومًا"],
  week: ["أسبوع", "أسبوعين", "أسابيع", "أسبوعًا"],
  month: ["شهر", "شهرين", "أشهر", "شهرًا"],
  year: ["سنة", "سنتين", "سنوات", "سنة"],
};

function arAgo(text) {
  const m = /^(a|an|\d+)\s+(day|week|month|year)s?\s+ago$/i.exec((text || "").trim());
  if (!m) return text;
  const n = m[1].toLowerCase() === "a" || m[1].toLowerCase() === "an" ? 1 : parseInt(m[1], 10);
  const forms = AGO_UNITS[m[2].toLowerCase()];
  if (n === 1) return `منذ ${forms[0]}`;
  if (n === 2) return `منذ ${forms[1]}`;
  if (n <= 10) return `منذ ${n} ${forms[2]}`;
  return `منذ ${n} ${forms[3]}`;
}

// "Sat–Thu • 10:00 AM – 10:00 PM"  ->  "السبت إلى الخميس • من 10:00 ص إلى 10:00 م"
function arHours(text) {
  const m = /^(Sat–Thu|Friday)\s*•\s*(\d{1,2}:\d{2})\s*(AM|PM)\s*[–-]\s*(\d{1,2}:\d{2})\s*(AM|PM)$/.exec((text || "").trim());
  if (!m) return text;
  const days = m[1] === "Friday" ? "الجمعة" : "السبت إلى الخميس";
  const ampm = (v) => (v === "AM" ? "ص" : "م");
  return `${days} • من ${m[2]} ${ampm(m[3])} إلى ${m[4]} ${ampm(m[5])}`;
}

// "6 photos" -> "6 صور" (3-10 use the plural, 11+ the singular form).
function arPhotos(n) {
  if (n === 1) return "صورة واحدة";
  if (n === 2) return "صورتان";
  return n <= 10 ? `${n} صور` : `${n} صورة`;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readSavedLang);
  const isAr = lang === "ar";

  // Keep <html lang/dir>, the tab title and the saved choice in sync.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", isAr ? "rtl" : "ltr");
    document.title = isAr ? "ToothTown مركز طب الأسنان | الإسكندرية والقاهرة، مصر" : "ToothTown Dental Center | Alexandria & Cairo, Egypt";
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }, [lang, isAr]);

  const t = useCallback((text) => (isAr && ar[text] !== undefined ? ar[text] : text), [isAr]);
  const tAgo = useCallback((text) => (isAr ? arAgo(text) : text), [isAr]);
  const tHours = useCallback((text) => (isAr ? arHours(text) : text), [isAr]);
  const tPhotos = useCallback((n) => (isAr ? arPhotos(n) : `${n} photos`), [isAr]);
  const toggleLang = useCallback(() => setLang((l) => (l === "ar" ? "en" : "ar")), []);

  const value = useMemo(
    () => ({ lang, isAr, dir: isAr ? "rtl" : "ltr", t, tAgo, tHours, tPhotos, toggleLang }),
    [lang, isAr, t, tAgo, tHours, tPhotos, toggleLang]
  );
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
