import { render, screen } from "@testing-library/react";

import Home from ".";

describe("Home tests", () => {
  it("should be rendering Home page component", () => {
    render(<Home data-testid="home-page" />);

    const home = screen.getByTestId("home-page");

    expect(home).toBeInTheDocument();
  });
});
