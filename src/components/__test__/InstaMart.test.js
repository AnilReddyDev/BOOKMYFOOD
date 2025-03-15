import { render, screen } from "@testing-library/react";
import InstaMart from "../InstaMart";
import "@testing-library/jest-dom";

describe("test for InstaMart", () => {
  //test or it are one and the same
  it("should render the heading of InstaMart", () => {
    render(<InstaMart />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should render two input", () => {
    render(<InstaMart />);
    const input = screen.getAllByRole("textbox");
    expect(input.length).toBe(2);
  });

  it("should render email input", () => {
    render(<InstaMart />);
    const input = screen.getByPlaceholderText("Enter the email");
    expect(input).toBeInTheDocument();
  });
});
