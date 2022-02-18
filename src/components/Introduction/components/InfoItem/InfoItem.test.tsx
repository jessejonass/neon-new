import { render, screen } from "utils/rtl";

import InfoItem from ".";

describe("InfoItem component tests", () => {
  it("should render correctly", () => {
    render(
      <InfoItem
        href="/"
        icon={<span>Icon</span>}
        title="Mais investimentos"
        subtitle="Rendem mais que a poupança e você resgata quando quiser"
      />
    );

    const iconText = screen.getByText("Icon");
    const titleText = screen.getByText("Mais investimentos");
    const subtitleText = screen.getByText(
      "Rendem mais que a poupança e você resgata quando quiser"
    );

    expect(iconText).toBeVisible();
    expect(titleText).toBeVisible();
    expect(subtitleText).toBeVisible();
  });
});
