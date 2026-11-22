import { useEffect } from "react";

// Light scroll polish, run once from <App/>:
//  - sets data-scrolled on <html> after a few pixels of scrolling (header gets a soft shadow)
//  - gently shifts elements marked data-parallax="<speed>" (decorative blobs only)
export function useScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      if (y > 8) root.setAttribute("data-scrolled", "");
      else root.removeAttribute("data-scrolled");
      if (reduce.matches) return;
      document.querySelectorAll("[data-parallax]").forEach((el) => {
        if (!el.offsetParent) return; // its tab is hidden
        const speed = parseFloat(el.dataset.parallax) || 0;
        const shift = Math.max(-80, Math.min(80, y * speed));
        el.style.translate = `0 ${shift.toFixed(1)}px`;
      });
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      root.removeAttribute("data-scrolled");
    };
  }, []);
}
