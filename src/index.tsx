import { ColorMode, init } from "@burzomir/color-mode-detector";
import {
  useCallback,
  useDebugValue,
  useMemo,
  useSyncExternalStore,
} from "react";

export { ColorMode } from "@burzomir/color-mode-detector";

export function useColorModeDetector(defaultColorMode = ColorMode.Dark) {
  useDebugValue("useColorModeDetector");
  const detector = useMemo(() => init(defaultColorMode), [defaultColorMode]);
  const subcribe = useCallback(
    (callback: () => void) => {
      detector.subscribe(callback);
      return () => {
        detector.unsubscribe(callback);
      };
    },
    [detector],
  );
  const colorMode = useSyncExternalStore(
    subcribe,
    () => detector.currentColorMode,
    () => defaultColorMode,
  );
  return colorMode;
}
