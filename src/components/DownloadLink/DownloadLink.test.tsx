import { render, screen } from "utils/rtl";

import DownloadLink from ".";

describe("DownloadLink tests", () => {
  it("should render correctly", () => {
    render(
      <>
        <DownloadLink
          href="/"
          downloadSourceText="App Store"
          icon={<span>Icon App Store</span>}
        />
        <DownloadLink
          href="/"
          downloadSourceText="Google Play"
          icon={<span>Icon Google Play</span>}
        />
      </>
    );

    const appStoreText = screen.getByText("App Store");
    const appStoreIcon = screen.getByText("Icon App Store");
    const googlePlayText = screen.getByText("Google Play");
    const googlePlayIcon = screen.getByText("Icon Google Play");

    expect(appStoreText).toBeVisible();
    expect(appStoreIcon).toBeVisible();
    expect(googlePlayText).toBeVisible();
    expect(googlePlayIcon).toBeVisible();
  });
});
