import { useEffect, useRef } from "react";
import bgImage from "../assets/photo_2025-05-22_20-51-23.jpg";

export default function HireMeSection() {
  const bgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const background = bgRef.current;

      if (!container || !background) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visibleRatio = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);
      const maxTranslate = 80; // maximum upward shift in vh
      const translateY = visibleRatio * maxTranslate;

      background.style.transform = `translateY(-${translateY}vh)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] xl:h-[45vh] overflow-hidden z-10"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-[100vh] bg-cover bg-center will-change-transform transition-transform duration-300 ease-out"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          May I help you with something?{" "}
          <span className="text-[#FFD700]">Hire me now.</span>
        </h2>
        <button className="border border-white px-4 sm:px-6 py-2 text-white hover:bg-white hover:text-black transition font-semibold text-sm sm:text-base">
          HIRE ME
        </button>
      </div>
    </div>
  );
}
