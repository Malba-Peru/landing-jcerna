import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
    const imageRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current || !containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const isMobile = window.innerWidth <= 768;

            // Desktop más fuerte, mobile más suave
            const speed = isMobile ? 0.30 : -0.45;
            const offset = rect.top * speed;

            imageRef.current.style.transform = `translateY(${offset}px) scale(1.2)`;
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div ref={containerRef} className="background-wrapper">
            <img
                ref={imageRef}
                src="/images/path.webp" // CAMBIA AQUÍ
                alt="background"
                className="background-image"
            />
        </div>
    );
}