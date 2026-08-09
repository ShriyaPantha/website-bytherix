import { useEffect, useState } from "react";
import Hero from "./Hero";

const HeroIntro = () => {
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    // small delay so the text fades in smoothly
    const t = setTimeout(() => setDocked(true), 400);
    return () => clearTimeout(t);
  }, []);

  return <Hero docked={docked} />;
};

export default HeroIntro;