# React Color Mode Detector Hook

Welcome to **React Color Mode Detector Hook** – a simple and effective React wrapper around the core **Color Mode Detector** library. This hook provides a seamless way to integrate color mode detection and management into your React applications, enabling you to easily respond to light and dark mode changes.

## Installation

Install the package via npm or yarn:

```bash
npm install @burzomir/color-mode-detector-react
```

## Getting Started

### Step 1: Import the Hook

To get started, import the `useColorModeDetector` hook from the library:

```typescript
import { useColorModeDetector } from "@burzomir/color-mode-detector-react";
```

### Step 2: Use the Hook in Your Component

Use the `useColorModeDetector` hook inside your React components to detect and respond to color mode changes. You can optionally pass a default color mode (`ColorMode.Light` or `ColorMode.Dark`):

```typescript
import React from "react";
import { useColorModeDetector, ColorMode } from "@burzomir/color-mode-detector-react";

const App = () => {
  const colorMode = useColorModeDetector();

  return (
    <div
      style={{
        backgroundColor: colorMode === ColorMode.Dark ? "#333" : "#FFF",
        color: colorMode === ColorMode.Dark ? "#FFF" : "#000",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{`The current color mode is ${colorMode}`}</h1>
    </div>
  );
};

export default App;
```

## Contributing

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/burzomir/color-mode-detector-react).

This hook is designed to be lightweight and easy to use, just like the core **Color Mode Detector** library. If you're building a React application and need reliable color mode management, give it a try.
