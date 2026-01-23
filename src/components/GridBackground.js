// src/components/GridBackground.js
"use client";

import { useEffect, useState } from "react";

export default function GridBackground() {
  const [blinkingCell, setBlinkingCell] = useState(null);

  useEffect(() => {
    // 1. Function to pick a random grid cell
    const blink = () => {
      // The grid is 24px x 24px. We calculate how many cells fit on screen.
      const cols = Math.floor(window.innerWidth / 24);
      const rows = Math.floor(window.innerHeight / 24);

      // Pick a random X and Y coordinate
      const randomX = Math.floor(Math.random() * cols) * 24;
      const randomY = Math.floor(Math.random() * rows) * 24;

      // Set the blinking cell state
      setBlinkingCell({ x: randomX, y: randomY });
    };

    // 2. Run this every 1000ms (1 second)
    const intervalId = setInterval(blink, 1000);

    // Cleanup when leaving the page
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* 1. The Static Grid Lines */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>

      {/* 2. The Blinking Cell */}
      {blinkingCell && (
        <div
          key={`${blinkingCell.x}-${blinkingCell.y}`} // Key forces React to restart animation on change
          className="absolute w-[23px] h-[23px] bg-gradient-to-br from-purple-500 to-pink-500 animate-blink shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          style={{
            left: `${blinkingCell.x}px`,
            top: `${blinkingCell.y}px`,
          }}
        ></div>
      )}
    </div>
  );
}