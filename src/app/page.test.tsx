import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "./page";

test("Home renders the hero title", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Hacemos que tu presencia digital/i);
});
