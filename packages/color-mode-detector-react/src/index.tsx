import { ColorMode, init } from "@burzomir/color-mode-detector";
import React from "react";

export function useColorModeDetector(defaultColorMode = ColorMode.Dark) {
  const [colorMode, setColorMode] = React.useState(defaultColorMode);
  React.useEffect(() => {
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
