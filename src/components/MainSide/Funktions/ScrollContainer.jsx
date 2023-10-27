import { useState, useEffect } from 'react';

function ScrollContainer() {
  const [showContainer, setShowContainer] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos === 0) {
        // If at the top of the page, show the container
        setShowContainer(true);
      } else {
        // If scrolling down, hide the container
        setShowContainer(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // You can return the state value if needed, for example:
  return showContainer;
}

export default ScrollContainer;
