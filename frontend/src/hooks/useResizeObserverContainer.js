import { useState, useEffect } from "react";

export const useResizeObserverContainer = (containerRef) => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 1200 });

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  return { dimensions };
};
