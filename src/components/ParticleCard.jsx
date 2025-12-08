import React, { useRef } from "react";
import { gsap } from "gsap";

export default function ParticleCard({
  children,
  className,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  particleCount = 10,
}) {
  const cardRef = useRef();

  // Tilt Effect
  const handleMouseMove = (e) => {
    if (!enableTilt) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotateX: -y / 20,
      rotateY: x / 20,
      duration: 0.25,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  // Particles
  const handleClick = (e) => {
    if (!clickEffect) return;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.background = "#8a00ff";
      particle.style.width = "6px";
      particle.style.height = "6px";

      const x = e.clientX;
      const y = e.clientY;

      particle.style.left = x + "px";
      particle.style.top = y + "px";

      document.body.appendChild(particle);

      gsap.to(particle, {
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        opacity: 0,
        duration: 0.8,
        onComplete: () => particle.remove(),
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className={`magic-bento-card magic-bento-card--border-glow ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
