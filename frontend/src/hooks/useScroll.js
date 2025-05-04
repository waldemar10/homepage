export const useScroll = () => {
    const scrollTo = (position = 0) => {
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    };
  
    return { scrollTo };
  };
  