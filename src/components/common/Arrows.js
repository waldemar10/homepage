import React from "react";

const Arrow = ({
  withArrow = false,
  withCircles = false,
  dashed = false,
  animation = false,
  x1 = 0,
  y1 = 0,
  length = 300,
  angle = 0,
  color = "black",
  strokeWidth = 4,
}) => {
  const randomDelay = Math.random() * 5;
  const randomDuration = 5 + Math.random() * 4;

  const animationStyle = {
    animationDelay: `${randomDelay}s`,
    animationDuration: `${randomDuration}s`,
  };

  const radian = (angle * Math.PI) / 180;

  const arrowSize = strokeWidth * 6;
  const circleRadius = strokeWidth * 2;

  const x2 = x1 + length * Math.cos(radian);
  const y2 = y1 + length * Math.sin(radian);
  const x1_adj = x1 + (withArrow ? (arrowSize / 2) * Math.cos(radian) : 0);
  const y1_adj = y1 + (withArrow ? (arrowSize / 2) * Math.sin(radian) : 0);

  const x2_adj = x2 - (withArrow ? (arrowSize / 2) * Math.cos(radian) : 0);
  const y2_adj = y2 - (withArrow ? (arrowSize / 2) * Math.sin(radian) : 0);

  const arrowX1 = x2 - arrowSize * Math.cos(radian - Math.PI / 6);
  const arrowY1 = y2 - arrowSize * Math.sin(radian - Math.PI / 6);
  const arrowX2 = x2 - arrowSize * Math.cos(radian + Math.PI / 6);
  const arrowY2 = y2 - arrowSize * Math.sin(radian + Math.PI / 6);

  const arrowX1Start = x1 + arrowSize * Math.cos(radian - Math.PI / 6);
  const arrowY1Start = y1 + arrowSize * Math.sin(radian - Math.PI / 6);
  const arrowX2Start = x1 + arrowSize * Math.cos(radian + Math.PI / 6);
  const arrowY2Start = y1 + arrowSize * Math.sin(radian + Math.PI / 6);

  const strokeDasharray = dashed ? "5,5" : "0";

  return (
    <svg
      style={animationStyle}
      className={animation ? "arrows__animation" : ""}>
      <line
        x1={x1_adj}
        y1={y1_adj}
        x2={x2_adj}
        y2={y2_adj}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
      />

      {withArrow && (
        <>
          <polygon
            points={`${x2},${y2} ${arrowX1},${arrowY1} ${arrowX2},${arrowY2}`}
            fill={color}
          />
          <polygon
            points={`${x1},${y1} ${arrowX1Start},${arrowY1Start} ${arrowX2Start},${arrowY2Start}`}
            fill={color}
          />
        </>
      )}

      {withCircles && (
        <>
          <circle cx={x1_adj} cy={y1_adj} r={circleRadius} fill={color} />
          <circle cx={x2_adj} cy={y2_adj} r={circleRadius} fill={color} />
        </>
      )}
    </svg>
  );
};

export default Arrow;
