import { useEffect, useState } from "react";
import Icon from "./Icon";
import { heroImages } from "../data";
import { useLang } from "../i18n";

// Auto-advances every 5 seconds; the timer restarts whenever the slide changes
// (including after a manual click), like the original.
export default function HeroSlideshow() {
  const { t, isAr } = useLang();
  const [current, setCurrent] = useState(0);
  const count = heroImages.length;
  const goTo = (i) => setCurrent((i + count) % count);

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % count), 5000);
    return () => clearInterval(id);
  }, [current, count]);

  return (
    <>
      <div id="hero-slideshow" className="absolute inset-0">
        {heroImages.map((src, i) => (
          <img key={i} src={src} alt={t("ToothTown Dental Center")} className={"hero-slide" + (i === current ? " active" : "")} />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>

      <button onClick={() => goTo(current - 1)} aria-label={t("Previous photo")} className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-md backdrop-blur transition hover:bg-white">
        <Icon name="chevron-left" />
      </button>
      <button onClick={() => goTo(current + 1)} aria-label={t("Next photo")} className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-md backdrop-blur transition hover:bg-white">
        <Icon name="chevron-right" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, i) => (
          <button key={i} className={"hero-dot" + (i === current ? " active" : "")} aria-label={(isAr ? "الانتقال إلى الصورة " : "Go to photo ") + (i + 1)} onClick={() => goTo(i)} />
        ))}
      </div>
    </>
  );
}
