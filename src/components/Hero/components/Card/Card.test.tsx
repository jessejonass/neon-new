import { render, screen } from "utils/rtl";
import Card from ".";

describe("Card tests", () => {
  it("should render card correctly", () => {
    render(<Card />);

    const title = screen.getByText("Banco 100% digital");

    expect(title).toBeVisible();
  });
});
