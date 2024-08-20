import { ColorMode, init } from "@burzomir/color-mode-detector";
import { useDebugValue, useSyncExternalStore } from "react";

export { ColorMode } from "@burzomir/color-mode-detector";

export function useColorModeDetector(defaultColorMode = ColorMode.Dark) {
  useDebugValue("useColorModeDetector");
  const detector = init(defaultColorMode);
  const colorMode = useSyncExternalStore(
    (callback) => {
      detector.subscribe(callback);
      return () => {
        detector.unsubscribe(callback);
      };
    },
    () => detector.currentColorMode,
    () => defaultColorMode,
  );
  return colorMode;
}
