import { useEffect, useRef, useState } from "react";

const intersectionOptions = {
  root: null, // whole viewport
  rootMargin: "50px", // offset from each side of the viewport - triggers the intersection 50px below fold
  threshold: 0, // as soon as even one pixel is visible, the callback will be run
};

export const useOnlyVisible = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  // Make visible when scrolled into the view
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, intersectionOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isVisible;
};
