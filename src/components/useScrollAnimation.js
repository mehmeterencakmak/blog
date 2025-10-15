import { useEffect } from "react";

export default function useScrollAnimation(selector = ".post-target") {
  useEffect(() => {
    const targets = document.querySelectorAll(selector);
    const options = { threshold: 0.3 };

    const callback = (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("active", entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(callback, options);
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
}