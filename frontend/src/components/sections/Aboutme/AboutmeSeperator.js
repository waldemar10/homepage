import React from "react";
import Arrow from "../../common/Arrows";
import Circle from "../../common/Circles";

const AboutmeSeperator = ({ dimensions }) => {
  const color1 = "var(--arrow-color-1)";
  const color2 = "var(--arrow-color-3)";
  return (
    <div className="aboutme__arrows-seperator">
      <svg
        width="1200px"
        height="100px"
        viewBox={`0 0 ${1200} ${100}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Arrow
          x1={dimensions.width * -0.1}
          y1={dimensions.height * 0.55}
          length={dimensions.width * 0.6}
          withCircles
          color={color1}
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * -0.1}
          y1={dimensions.height * 0.15}
          length={dimensions.width * 0.25}
          withCircles
          color={color1}
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * -0.1}
          y1={dimensions.height * 0.35}
          length={dimensions.width * 0.4}
          withCircles
          color={color2}
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * 0.5}
          y1={dimensions.height * 0.1}
          length={dimensions.width * 0.3}
          withCircles
          color={color2}
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * 0.9}
          y1={dimensions.height * 0.55}
          length={dimensions.width * 0.5}
          withCircles
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.75}
          y1={dimensions.height * 0.85}
          length={dimensions.width * 0.5}
          withArrow
          color={color2}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * -0.1}
          y1={dimensions.height * 0.76}
          length={dimensions.width * 0.25}
          withArrow
          color={color2}
          strokeWidth={2}
          dashed
        />

        <Circle
          x1={dimensions.width * 0.6}
          y1={dimensions.height * 0.25}
          radius={dimensions.width * 0.025}
          color={color1}
          dashed
          strokeWidth={2}
          animation
        />
      </svg>
    </div>
  );
};

export default AboutmeSeperator;
