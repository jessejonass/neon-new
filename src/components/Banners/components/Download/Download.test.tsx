import { render, screen } from "utils/rtl";

import Download from ".";

describe("Download tests", () => {
  it("should render correctly", () => {
    render(<Download />);

    const title = screen.getByText("Baixe nosso app");
    const subTitle = screen.getByText(
      "Que tal abrir uma conta digital para ver como a gente faz a sua vida muito mais simples?"
    );

    expect(title).toBeVisible();
    expect(subTitle).toBeVisible();
  });
});
