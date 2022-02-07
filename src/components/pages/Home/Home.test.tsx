import { render } from "@testing-library/react";

import Home from ".";

describe("Home tests", () => {
  it("should be rendering Home component", () => {
    render(<Home />);
  });
});
