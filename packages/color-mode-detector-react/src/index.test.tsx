import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useColorModeDetector } from "./index";
import { ColorMode } from "@burzomir/color-mode-detector";

function TestComponent() {
  const color = useColorModeDetector();
  return <span data-testid="test-component-id">{color}</span>;
}

test("useColorModeDetector returns a proper color mode", async () => {
  let callback = jest.fn();
  let matches = true;
  window.matchMedia = jest.fn().mockImplementation(() => ({
    get matches() {
      return matches;
    },
    addEventListener: jest.fn().mockImplementation((_, cb) => {
      callback = cb;
    }),
    removeEventListener: jest.fn(),
  }));
  render(<TestComponent />);
  const span = await screen.findByTestId("test-component-id");
  expect(span).toHaveTextContent(ColorMode.Dark);
  act(() => {
    matches = false;
    callback();
  });
  expect(span).toHaveTextContent(ColorMode.Light);
});
