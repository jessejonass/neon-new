import userEvent from "@testing-library/user-event";
import { render, screen } from "utils/rtl";

import Button from ".";

describe("Button tests", () => {
  const buttonText = "Button";

  it("should render button with provided text", () => {
    render(<Button>{buttonText}</Button>);

    const button = screen.getByRole("button", { name: buttonText });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(buttonText);
  });

  it("should execute the onClick function", () => {
    const mock = jest.fn();

    render(<Button onClick={mock}>{buttonText}</Button>);

    const button = screen.getByRole("button", { name: buttonText });

    userEvent.click(button);
    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
    expect(mock).toHaveBeenCalledTimes(2);
  });

  it("should disable user interaction on disabled button", () => {
    const mock = jest.fn();

    render(
      <Button onClick={mock} disabled>
        {buttonText}
      </Button>
    );

    const button = screen.getByRole("button", { name: buttonText });

    userEvent.click(button);

    expect(button).toBeDisabled();
    expect(mock).not.toHaveBeenCalled();
  });

  it("should render with variant primary", () => {
    render(<Button variant="primary">{buttonText}</Button>);

    const button = screen.getByRole("button", { name: buttonText });

    expect(button).toBeInTheDocument();
  });

  it("should render with variant secondary", () => {
    render(<Button variant="secondary">{buttonText}</Button>);

    const button = screen.getByRole("button", { name: buttonText });

    expect(button).toBeInTheDocument();
  });

  it("should render with variant light", () => {
    render(<Button variant="light">{buttonText}</Button>);

    const button = screen.getByRole("button", { name: buttonText });

    expect(button).toBeInTheDocument();
  });
});
