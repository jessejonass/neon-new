import { render, screen } from "utils/rtl";
import Bubble from ".";

describe("Card tests", () => {
  it("should render card correctly", () => {
    render(<Bubble icon={<span>Icon</span>}>Bubble</Bubble>);

    const icon = screen.getByText("Icon");
    const text = screen.getByText("Bubble");

    expect(icon).toBeVisible();
    expect(text).toBeVisible();
  });
});
