import React from "react";
import Arrow from "../../common/Arrows";

const HeroArrows = ({ isMobile, isMobileSmall, dimensions }) => {
  const color1 = "var(--arrow-color-1)";
  const color2 = "var(--arrow-color-2)";
  const ArrowSvgDesktop = () => {
    return (
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Arrow
          x1={dimensions.width * 0.4}
          y1={dimensions.height * -0.1}
          length={dimensions.width * 0.25}
          angle={45}
          withArrow
          dashed
          color={color2}
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * 0.5}
          y1={dimensions.height * 0.8}
          length={dimensions.width * 0.55}
          angle={45}
          withCircles
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.9}
          y1={dimensions.height * 0.92}
          length={dimensions.width * 0.25}
          angle={45}
          withArrow
          color={color2}
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * 0.75}
          y1={dimensions.height * -0.1}
          length={dimensions.width * 0.21}
          angle={45}
          withCircles
          color={color2}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.6}
          y1={dimensions.height * -0.05}
          length={dimensions.width * 0.1}
          angle={45}
          withCircles
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.7}
          y1={dimensions.height * 0.9}
          length={dimensions.width * 0.25}
          angle={45}
          withArrow
          dashed
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.4}
          y1={dimensions.height * 0.9}
          length={500}
          angle={45}
          withCircles
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.5}
          y1={dimensions.height * 0.93}
          length={500}
          angle={45}
          withCircles
          color={color2}
          strokeWidth={2}
        />
      </svg>
    );
  };
  const ArrowSvgMobile = () => {
    return (
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Arrow
          x1={dimensions.width * -0.1}
          y1={dimensions.height * 0.1}
          length={dimensions.width * 0.35}
          angle={45}
          withArrow
          dashed
          color={color2}
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * 0.8}
          y1={dimensions.height * 0.73}
          length={dimensions.width * 0.55}
          angle={45}
          withCircles
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.83}
          y1={dimensions.height * 0.62}
          length={dimensions.width * 0.45}
          angle={45}
          withArrow
          color={color2}
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * -0.05}
          y1={dimensions.height * 0.55}
          length={dimensions.width * 0.35}
          angle={45}
          withCircles
          color={color2}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * -0.1}
          y1={dimensions.height * 0.59}
          length={dimensions.width * 0.3}
          angle={45}
          withCircles
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.7}
          y1={dimensions.height * 0.76}
          length={dimensions.width * 0.2}
          angle={45}
          withArrow
          dashed
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.9}
          y1={dimensions.height * 0.3}
          length={500}
          angle={45}
          withCircles
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.96}
          y1={dimensions.height * 0.6}
          length={500}
          angle={45}
          withCircles
          color={color2}
          strokeWidth={2}
        />
      </svg>
    );
  };
  const ArrowSvgMobileSmall = () => {
    return (
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Arrow
          x1={dimensions.width * -0.15}
          y1={dimensions.height * 0.1}
          length={dimensions.width * 0.35}
          angle={45}
          withArrow
          dashed
          color={color2}
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * 0.8}
          y1={dimensions.height * 0.66}
          length={dimensions.width * 0.55}
          angle={45}
          withCircles
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.83}
          y1={dimensions.height * 0.62}
          length={dimensions.width * 0.45}
          angle={45}
          withArrow
          color={color2}
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * -0.05}
          y1={dimensions.height * 0.55}
          length={dimensions.width * 0.35}
          angle={45}
          withCircles
          color={color2}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * -0.1}
          y1={dimensions.height * 0.49}
          length={dimensions.width * 0.3}
          angle={45}
          withCircles
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * -0.1}
          y1={dimensions.height * 0.58}
          length={dimensions.width * 0.25}
          angle={45}
          withArrow
          dashed
          color={color2}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.92}
          y1={dimensions.height * 0.2}
          length={500}
          angle={45}
          withCircles
          color={color1}
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.96}
          y1={dimensions.height * 0.6}
          length={500}
          angle={45}
          withCircles
          color={color2}
          strokeWidth={2}
        />
      </svg>
    );
  };
  return (
    <div className="hero__arrows">
      {!isMobile && <ArrowSvgDesktop />}
      {isMobile &&
        (isMobileSmall ? <ArrowSvgMobileSmall /> : <ArrowSvgMobile />)}
    </div>
  );
};
export default HeroArrows;
