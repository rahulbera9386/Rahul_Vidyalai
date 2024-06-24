import React, { createContext, useContext, useState, useEffect } from 'react';

const WindowWidthContext = createContext();

export const WindowWidthProvider = ({ children }) => {
  const [isSmallerDevice, setIsSmallerDevice] = useState(false); 
  useEffect(() => {
   
    if (typeof window !== 'undefined') {
      setIsSmallerDevice(window.innerWidth < 768);

      const handleResize = () => {
        setIsSmallerDevice(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);
      
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <WindowWidthContext.Provider value={isSmallerDevice}>
      {children}
    </WindowWidthContext.Provider>
  );
};

export const useWindowWidth = () => {
  return useContext(WindowWidthContext);
};
