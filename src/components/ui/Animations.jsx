import React, { useEffect } from "react";

const Animations = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            // Se vuelve a ocultar cuando sales → vuelve a animar al entrar
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <style>
      {`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease-out;
        }

        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}
    </style>
  );
};

export default Animations;
