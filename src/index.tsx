import { ColorMode, init } from "@burzomir/color-mode-detector";
import { useEffect, useState } from "react";

export { ColorMode } from "@burzomir/color-mode-detector";

export function useColorModeDetector(defaultColorMode = ColorMode.Dark) {
  const [colorMode, setColorMode] = useState(defaultColorMode);
  useEffect(() => {
    const detector = init(colorMode);
    detector.subscribe(setColorMode);
    setColorMode(detector.currentColorMode);
    return () => {
      detector.unsubscribe(setColorMode);
      detector.cleanup();
    };
  }, []);
  return colorMode;
}
