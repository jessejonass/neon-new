import { screen, render, waitFor } from "utils/rtl";

import Header from ".";

describe("Header tests", () => {
  it("should render correctly", () => {
    render(<Header />);

    const neonProductsText = screen.getByText("Produtos Neon");
    const digitalAccountText = screen.getByText("Conta digital PJ");
    const whoWeAreText = screen.getByText("Quem somos");
    const blogText = screen.getByText("Blog");
    const helpText = screen.getByText("Ajuda");
    const button = screen.getByRole("button", {
      name: "Abra sua conta digital",
    });

    expect(neonProductsText).toBeVisible();
    expect(digitalAccountText).toBeVisible();
    expect(whoWeAreText).toBeVisible();
    expect(blogText).toBeVisible();
    expect(helpText).toBeVisible();
    expect(button).toBeVisible();
    expect(button).toBeEnabled();
  });

  it("should render with responsivity: max-width: 1200px", async () => {
    render(<Header />);

    const style = document.createElement("style");
    style.innerHTML = `@media screen and (min-width: 1200px) {}`;
    document.body.appendChild(style);

    const neonProductsText = screen.queryByText("Produtos Neon");
    const digitalAccountText = screen.queryByText("Conta digital PJ");
    const whoWeAreText = screen.queryByText("Quem somos");
    const blogText = screen.queryByText("Blog");
    const helpText = screen.queryByText("Ajuda");
    const button = screen.queryByRole("button", {
      name: "Abra sua conta digital",
    });

    waitFor(() => {
      expect(neonProductsText).toBeNull();
      expect(digitalAccountText).toBeNull();
      expect(whoWeAreText).toBeNull();
      expect(blogText).toBeNull();
      expect(helpText).toBeNull();
      expect(neonProductsText).toBeNull();
      expect(button).toBeNull();
    });
  });

  it("should render with responsivity: max-width: 600px", async () => {
    render(<Header />);

    const style = document.createElement("style");
    style.innerHTML = `@media screen and (min-width: 600px) {}`;
    document.body.appendChild(style);

    const button = screen.queryByRole("button", {
      name: "Abra sua conta digital",
    });

    waitFor(() => {
      expect(button).toBeNull();
    });
  });
});
