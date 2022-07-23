import React, {useState, useEffect} from "react"
import HeaderDesktop from "./headerDesktop";
import HeaderMobile from "./headerMobile"
export default function HeaderComponent(){
    const [width, setWidth] =useState(window.innerWidth);
    const breakpoint = 700;
    useEffect(() => {
     const handleResizeWindow = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        window.removeEventListener("resize", handleResizeWindow);
      };
    }, []);
    if (width > breakpoint) {
      return (
       <HeaderDesktop />
      );
    }
    return (
      <HeaderMobile />
    );
  }
