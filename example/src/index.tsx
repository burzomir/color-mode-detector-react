import {
  useColorModeDetector,
  ColorMode,
} from "@burzomir/color-mode-detector-react";
import { PropsWithChildren } from "react";
import "./style.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<Test />);

function Test() {
  const colorMode = useColorModeDetector();
  return (
    <Container colorMode={colorMode}>
      <h1>{colorMode}</h1>
    </Container>
  );
}

function Container(props: PropsWithChildren<{ colorMode: ColorMode }>) {
  const style = (() => {
    switch (props.colorMode) {
      case ColorMode.Dark:
        return { color: "white", backgroundColor: "#333333" };
      case ColorMode.Light:
        return { color: "#333333", backgroundColor: "white" };
    }
  })();
  return (
    <div className="container" style={style}>
      {props.children}
    </div>
  );
}
