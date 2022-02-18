import { render, screen } from "utils/rtl";

import Introduction from ".";

describe("Introduction component tests", () => {
  it("should render correctly", () => {
    render(<Introduction />);

    const titleText = screen.getByText("Resolva sua vida direto pelo app Neon");
    const moreText = screen.getByText("Conheça outros produtos");

    expect(titleText).toBeVisible();
    expect(moreText).toBeVisible();
  });
});
