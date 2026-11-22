import { useCallback, useEffect } from "react";

// ---- Scroll-reveal: same behaviour as the original page --------------------
// Elements with the "reveal" class fade/slide in once they get a data-in-view
// attribute. (A data attribute is used instead of a class so React re-renders
// of the element's className can never wipe it out.)

/** Props for an element that should animate in, staggered by its position. */
export function rv(index, className = "") {
  return {
    className: (className + " reveal").trim(),
    style: { transitionDelay: Math.min(index, 6) * 70 + "ms" },
  };
}

function isRevealVisible(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 1.1 && rect.bottom > -100;
}

function checkReveals() {
  document.querySelectorAll(".reveal:not([data-in-view])").forEach((el) => {
    if (isRevealVisible(el)) {
      el.setAttribute("data-in-view", "");
      // After the staggered entrance has finished, switch to fast hover motion (see motion.css).
      setTimeout(() => el.setAttribute("data-revealed", ""), 1200);
    }
  });
}

let ticking = false;
function scheduleRevealCheck() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    checkReveals();
    ticking = false;
  });
}

const activePolls = new Set();
function pollReveals(duration, interval = 150) {
  const start = Date.now();
  const id = setInterval(() => {
    checkReveals();
    if (Date.now() - start > duration) {
      clearInterval(id);
      activePolls.delete(id);
    }
  }, interval);
  activePolls.add(id);
}

/** Call once in <App/>. Returns a function to run after every tab change. */
export function useRevealObserver() {
  useEffect(() => {
    const onLoad = () => pollReveals(2500);
    window.addEventListener("scroll", scheduleRevealCheck, { passive: true });
    window.addEventListener("resize", scheduleRevealCheck);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);

    scheduleRevealCheck();
    pollReveals(2000);

    return () => {
      window.removeEventListener("scroll", scheduleRevealCheck);
      window.removeEventListener("resize", scheduleRevealCheck);
      window.removeEventListener("load", onLoad);
      activePolls.forEach(clearInterval);
      activePolls.clear();
    };
  }, []);

  return useCallback(() => {
    scheduleRevealCheck();
    pollReveals(1000);
  }, []);
}
