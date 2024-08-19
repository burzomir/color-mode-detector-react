import { ColorMode, init } from "@burzomir/color-mode-detector";
import React, { useSyncExternalStore } from "react";

const version = parseInt(React.version, 10);

export function useColorModeDetector(defaultColorMode = ColorMode.Dark) {
  const hook = version < 18 ? useColorModeDetector16 : useColorModeDetector18;
  return hook(defaultColorMode);
}

function useColorModeDetector16(defaultColorMode = ColorMode.Dark) {
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

function useColorModeDetector18(defaultColorMode = ColorMode.Dark) {
  const detector = init(defaultColorMode);
  return useSyncExternalStore(
    (callback) => {
      detector.subscribe(callback);
      return () => {
        detector.unsubscribe(callback);
      };
    },
    () => detector.currentColorMode,
    () => defaultColorMode,
  );
}
