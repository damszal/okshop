import { useState,useEffect } from "react";

export default function useScreenWidth() {
    const [screenWidth, setScreenWidth] = useState({
        width: window.innerWidth,
      });
    
      useEffect(() => {
        const handleResize = () => {
          setScreenWidth({
            width: window.innerWidth,
          });
        };
        
        window.addEventListener('resize', handleResize);
        console.log(screenWidth)
        
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [screenWidth]);
  return screenWidth
}
