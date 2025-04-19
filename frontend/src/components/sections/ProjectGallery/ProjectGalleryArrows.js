import React from "react";
import Arrow from "../../common/Arrows";

const ProjectGalleryArrows = ({ dimensions }) => {
  const color1 = "var(--arrow-color-1)";
  const color2 = "var(--arrow-color-2)";

  return (
    <svg
      className="project-gallery__arrows"
      width={dimensions.width}
      height={dimensions.height}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Arrow
        x1={dimensions.width * -0.05}
        y1={dimensions.height * 0.1}
        angle={45}
        length={dimensions.width * 0.2}
        withCircles
        color={color1}
        strokeWidth={2}
      />
      <Arrow
        x1={dimensions.width * -0.035}
        y1={dimensions.height * 0.08}
        angle={45}
        length={dimensions.width * 0.1}
        withArrow
        dashed
        color={color1}
        strokeWidth={2}
      />
      <Arrow
        x1={dimensions.width * -0.1}
        y1={dimensions.height * 0.105}
        angle={45}
        length={dimensions.width * 0.2}
        withArrow
        color={color2}
        strokeWidth={2}
      />

      <Arrow
        x1={dimensions.width * -0.05}
        y1={dimensions.height * 0.4}
        angle={45}
        length={dimensions.width * 0.23}
        withCircles
        color={color2}
        strokeWidth={2}
      />
      <Arrow
        x1={dimensions.width * -0.035}
        y1={dimensions.height * 0.5}
        angle={45}
        length={dimensions.width * 0.12}
        withArrow
        dashed
        color={color1}
        strokeWidth={2}
      />
      <Arrow
        x1={dimensions.width * -0.1}
        y1={dimensions.height * 0.52}
        angle={45}
        length={dimensions.width * 0.18}
        withCircles
        dashed
        color={color2}
        strokeWidth={2}
      />
      <Arrow
        x1={dimensions.width * -0.1}
        y1={dimensions.height * 0.55}
        angle={45}
        length={dimensions.width * 0.22}
        withArrow
        color={color1}
        strokeWidth={2}
      />

      {/* Horizontal */}
      <Arrow
        x1={dimensions.width * 0.9}
        y1={dimensions.height * 0.4}
        length={dimensions.width * 0.2}
        withArrow
        color={color1}
        strokeWidth={2}
      />
      <Arrow
        x1={dimensions.width * 0.93}
        y1={dimensions.height * 0.44}
        length={dimensions.width * 0.2}
        withCircles
        color={color2}
        strokeWidth={2}
      />

      <Arrow
        x1={dimensions.width * 0.88}
        y1={dimensions.height * 0.74}
        angle={45}
        length={dimensions.width * 0.2}
        withArrow
        dashed
        color={color1}
        strokeWidth={2}
      />
      <Arrow
        x1={dimensions.width * 0.9}
        y1={dimensions.height * 0.81}
        angle={45}
        length={dimensions.width * 0.3}
        withCircles
        color={color1}
        strokeWidth={2}
      />
      <Arrow
        x1={dimensions.width * 0.96}
        y1={dimensions.height * 0.94}
        angle={45}
        length={dimensions.width * 0.2}
        withCircles
        color={color2}
        strokeWidth={2}
      />
    </svg>
  );
};

export default ProjectGalleryArrows;
