import { useEffect } from "react";

const Animations = () => {
  useEffect(() => {
    const scan = () => {
      const elements = document.querySelectorAll(".reveal:not(.show)");

      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      elements.forEach((el) => observer.observe(el));
    };

    scan();

    const interval = setInterval(scan, 400);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default Animations;
