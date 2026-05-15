import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

vi.mock("@/components/layout/Header", () => ({ default: () => <header data-testid="header" /> }));
vi.mock("@/components/layout/Footer", () => ({ default: () => <footer data-testid="footer" /> }));
vi.mock("@/components/sections/Hero", () => ({
  default: () => (
    <section data-testid="hero">
      <h1>Hero</h1>
    </section>
  ),
}));
vi.mock("@/components/sections/Products", () => ({ default: () => <section data-testid="products" /> }));
vi.mock("@/components/sections/Contact", () => ({ default: () => <section data-testid="contact" /> }));

import Home from "./page";

test("Home renders all main sections", () => {
  render(<Home />);
  expect(screen.getByTestId("header")).toBeTruthy();
  expect(screen.getByTestId("hero")).toBeTruthy();
  expect(screen.getByTestId("products")).toBeTruthy();
  expect(screen.getByTestId("contact")).toBeTruthy();
  expect(screen.getByTestId("footer")).toBeTruthy();
});
