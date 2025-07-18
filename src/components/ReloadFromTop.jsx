import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ReloadFromTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Immediate jump to top
  }, [pathname]);

  return null;
}