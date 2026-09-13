import { useEffect, useRef } from "react";
import "./CherryBlossom.css";

const PETAL_COUNT = 55;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function CherryBlossom() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const petals = [];

    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = document.createElement("span");

      petal.className = "floating-petal";

      petal.style.setProperty("--x", `${random(-5, 105)}%`);
      petal.style.setProperty("--size", `${random(5, 11)}px`);

      // 6 seconds movement + 6 seconds pause
      petal.style.setProperty("--delay", `${random(-12, 0)}s`);

      petal.style.setProperty("--drift", `${random(-140, 140)}px`);
      petal.style.setProperty("--rotation", `${random(0, 360)}deg`);
      petal.style.setProperty("--opacity", random(0.35, 0.85));

      container.appendChild(petal);
      petals.push(petal);
    }

    return () => {
      petals.forEach((petal) => petal.remove());
    };
  }, []);

  return <div className="petal-canvas" ref={containerRef} />;
}