import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, key, state } = useLocation();

  useEffect(() => {
    const preserveScroll = Boolean(
      (state as { preserveScroll?: boolean } | null)?.preserveScroll
    );

    if (preserveScroll && !hash) {
      return;
    }

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let frameId = 0;

    const scrollToTarget = () => {
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        return;
      }

      if (attempts < 90) {
        attempts += 1;
        frameId = window.requestAnimationFrame(scrollToTarget);
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    frameId = window.requestAnimationFrame(scrollToTarget);

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, hash, key, state]);

  return null;
}
