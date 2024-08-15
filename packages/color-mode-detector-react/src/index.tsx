import { ColorMode, init } from "@burzomir/color-mode-detector";
import { useState, useEffect } from "react";

export function useColorModeDetector(defaultColorMode = ColorMode.Dark) {
  const [colorMode, setColorMode] = useState(defaultColorMode);
  useEffect(() => {
    const detector = init(colorMode);
    detector.subscribe(setColorMode);
    return () => {
      detector.unsubscribe(setColorMode);
      detector.cleanup();
    };
  }, []);
  return colorMode;
}
