import { useEffect, useState, useRef } from "react";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;
    const increment = target / steps;

    const counter = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), target));
      if (start >= target) clearInterval(counter);
    }, interval);

    return () => clearInterval(counter);
  }, [isVisible, target]);

  return <h1 ref={ref}>+ {count.toLocaleString()}</h1>;
};

export default Counter;
