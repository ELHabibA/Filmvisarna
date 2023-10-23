// libraryToggle.js

import { useState } from 'react';

export function useLibraryToggle(initialValue = true) {
  const [showKidsLibrary, setShowKidsLibrary] = useState(initialValue);

  const toggleLibrary = () => {
    setShowKidsLibrary(!showKidsLibrary);
  };

  return {
    showKidsLibrary,
    toggleLibrary,
  };
}
