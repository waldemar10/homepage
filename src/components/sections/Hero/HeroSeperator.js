import React from "react";
import Arrow from "../../common/Arrows";
import Circle from "../../common/Circles";
const HeroSeperator = () => {
  const color1 = "var(--font-color-light)";
  return (
    <div className="hero__arrows-seperator">
      <svg
        width="1200px"
        height="100px"
        viewBox={`0 0 ${1200} ${100}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Arrow
          x1={25}
          y1={25}
          length={600}
          withCircles
          dashed
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={400}
          y1={55}
          length={400}
          withCircles
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={900}
          y1={85}
          length={400}
          withArrow
          color={color1}
          strokeWidth={2}
        />
        <Circle
          x1={15}
          y1={35}
          radius={50}
          color={color1}
          dashed
          strokeWidth={2}
        />
        <Circle
          x1={1170}
          y1={-30}
          radius={30}
          color={color1}
          dashed
          strokeWidth={2}
        />
      </svg>
    </div>
  );
};
export default HeroSeperator;
