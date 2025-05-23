import { useEffect, useRef } from "react";
import fireGif from "/9PrC-unscreen.gif"; // Adjust path if needed

export default function SparkCursor() {
  const fireRef = useRef(null);

  useEffect(() => {
    const sparks = [];

    const createSpark = (x, y) => {
      const spark = document.createElement("div");
      spark.className = "fire-spark";
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;

      document.body.appendChild(spark);
      sparks.push(spark);

      setTimeout(() => {
        spark.remove();
        sparks.shift();
      }, 500);
    };

    const moveHandler = (e) => {
      createSpark(e.clientX, e.clientY);
      if (fireRef.current) {
        fireRef.current.style.left = `${e.clientX}px`;
        fireRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
      sparks.forEach((s) => s.remove());
    };
  }, []);

  return (
    <>
      <img
        ref={fireRef}
        src={fireGif}
        alt="fire cursor"
        className="fire-cursor-img"
      />
    </>
  );
}
