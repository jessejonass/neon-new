import { render, screen } from "utils/rtl";

import Account from ".";

describe("Account tests", () => {
  it("should render correctly", () => {
    render(<Account />);

    const title = screen.getByText(
      "Contas digitais PJ gratuitas para decolar seu negócio!"
    );
    const subTitle = screen.getByText(
      "As melhores contas para fazer pagamentos, compras e receber dos seus clientes."
    );

    expect(title).toBeVisible();
    expect(subTitle).toBeVisible();
  });
});
