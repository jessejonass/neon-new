import { render, screen, waitFor } from "utils/rtl";

import Info from ".";

describe("Info tests", () => {
  it("should render correctly", () => {
    render(<Info />);

    const title = screen.getByText("Abra sua conta, é só baixar o app!");
    const subtitle = screen.getByText(
      "A conta digital certa pra cuidar bem do seu dinheiro"
    );

    expect(title).toBeVisible();
    expect(subtitle).toBeVisible();

    waitFor(() => {
      const annuityButton = screen.getByRole("button", {
        name: "Cartão sem anuidade",
      });

      const accountButton = screen.getByRole("button", {
        name: "Conta digital 100% grátis",
      });

      const moneyButton = screen.getByRole("button", {
        name: "Seu dinheiro rendendo mais",
      });

      expect(annuityButton).toBeVisible();
      expect(accountButton).toBeVisible();
      expect(moneyButton).toBeVisible();
    });
  });
});
