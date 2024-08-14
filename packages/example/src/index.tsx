import Hello from "@burzomir/color-mode-detector-react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <div>
    <Hello>World</Hello>
  </div>
);
