import { render, screen, waitFor } from "utils/rtl";

import NavItem from ".";

describe("NavItem tests", () => {
  it("should render correctly with text", () => {
    const navItemContent = "NavItem";

    render(<NavItem text={navItemContent} href="/redirect" />);

    const navItemText = screen.getByRole("link", { name: navItemContent });

    expect(navItemText).toBeVisible();
    expect(navItemText).toHaveAttribute("href", "/redirect");
  });
});
