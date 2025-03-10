import React from "react";

function Circle({ x1 = 0, y1 = 0, radius = 50, color = "black", strokeWidth = 4, dashed = false, animation = false }) {
  const randomDelay = Math.random() * 5;
  const randomDuration = 6 + Math.random() * 4;

  const animationStyle = {
    animationDelay: `${randomDelay}s`,
    animationDuration: `${randomDuration}s`,
  };

  const strokeDasharray = dashed ? "5,5" : "0";
  const centerX = x1 + radius;
  const centerY = y1 + radius;
  return (
    <svg width={2 * radius + strokeWidth} height={2 * radius + strokeWidth} style={{ overflow: "visible", position: "absolute" }}>
      <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={strokeDasharray}
        className={animation ? "circle__animation" : ""}	
        style={{
            ...animationStyle,
            transformOrigin: `${centerX}px ${centerY}px`, 
          }}
        />
    </svg>
  );
}

export default Circle;
