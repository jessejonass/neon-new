import { render, screen } from "utils/rtl";

import Title from ".";

describe("Title component tests", () => {
  it("should render correctly", () => {
    render(<Title variant="xxl">Title Text</Title>);

    const titleText = screen.getByText("Title Text");

    expect(titleText).toBeVisible();
    expect(titleText).toHaveStyle({ fontSize: "4rem" });
  });

  it("should render with another font-size", () => {
    render(<Title variant="xl">Title Text</Title>);

    const titleText = screen.getByText("Title Text");

    expect(titleText).toBeVisible();
    expect(titleText).toHaveStyle({ fontSize: "3.5rem" });
  });
});
