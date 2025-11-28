// src/utils/animations.js

export function initAnimations() {
  const elements = document.querySelectorAll("[data-anim]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const anim = entry.target.dataset.anim;
          entry.target.classList.add(`anim-${anim}`);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}

/* === ANIMACIONES CSS INYECTADAS === */
const style = document.createElement("style");
style.innerHTML = `
/* FAD IN */
.anim-fade {
  opacity: 0;
  animation: fadeAnim 1s ease forwards;
}
@keyframes fadeAnim {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* SLIDE UP */
.anim-slide {
  opacity: 0;
  transform: translateY(40px);
  animation: slideAnim 0.9s ease forwards;
}
@keyframes slideAnim {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ZOOM IN */
.anim-zoom {
  opacity: 0;
  transform: scale(0.7);
  animation: zoomAnim 0.9s ease forwards;
}
@keyframes zoomAnim {
  from { opacity: 0; transform: scale(0.7); }
  to { opacity: 1; transform: scale(1); }
}

/* ROTATE IN */
.anim-rotate {
  opacity: 0;
  transform: rotate(-8deg);
  animation: rotateAnim 0.8s ease forwards;
}
@keyframes rotateAnim {
  from { opacity: 0; transform: rotate(-8deg); }
  to { opacity: 1; transform: rotate(0deg); }
}
`;

document.head.appendChild(style);
