import React, { useEffect } from "react";

export default function GlobalSpotlight({ gridRef, glowColor = "132,0,255" }) {
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const moveGlow = (e) => {
      const rect = grid.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      grid.style.setProperty("--glow-x", `${x}px`);
      grid.style.setProperty("--glow-y", `${y}px`);
      grid.style.setProperty("--glow-intensity", 1);
    };

    grid.addEventListener("mousemove", moveGlow);
    grid.addEventListener("mouseleave", () =>
      grid.style.setProperty("--glow-intensity", 0)
    );

    return () => {
      grid.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return null;
}
