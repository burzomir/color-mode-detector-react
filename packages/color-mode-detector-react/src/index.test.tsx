import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hello from ".";

test("loads and displays greeting", async () => {
  render(<Hello>World</Hello>);
  expect(await screen.findByText("Hello World!")).toBeDefined();
});
