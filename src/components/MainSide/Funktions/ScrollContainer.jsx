import React, { useState, useEffect } from 'react';

function ScrollContainer() {
  const [showKidsContainer, setShowKidsContainer] = useState(true);
  const [showSeIdagContainer, setShowSeIdagContainer] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setShowKidsContainer(false);
        setShowSeIdagContainer(false);
      } else {
        setShowKidsContainer(true);
        setShowSeIdagContainer(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  // You can return the state values if needed, for example:
  return {
    showKidsContainer,
    showSeIdagContainer,
  };
}

export default ScrollContainer;
