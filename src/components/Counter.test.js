import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const countElement = screen.getByTestId("counter");
    expect(countElement).toBeInTheDocument();

    const decrementButton = screen.getByRole("button", { name: "-" });
    expect(decrementButton).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "+" });
    expect(incrementButton).toBeInTheDocument();
  });

  //Test that component renders initial value provided in props
  test("renders initial value provided in props", () => {
    const initialCount =
      Math.floor(
        Math.random() * (Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER + 1)
      ) + Number.MIN_SAFE_INTEGER;
    render(<Counter initialValue={initialCount} />);
    const countElement = screen.getByTestId("counter");
    expect(countElement).toHaveTextContent(initialCount.toString());
  });
});

describe("increment/decrement testing", () => {
  const initialCount =
    Math.floor(
      Math.random() * (Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER + 1)
    ) + Number.MIN_SAFE_INTEGER;

  //Test that a click event on "increment" button increments the displayed value
  test("increasing the value after clicking the increment button", async () => {
    user.setup();
    render(<Counter initialValue={initialCount} />);

    const incrementButton = screen.getByRole("button", { name: "+" });
    await user.click(incrementButton);

    const countElement = screen.getByTestId("counter");
    expect(countElement).toHaveTextContent((initialCount + 1).toString());
  });

  //Test that a click event on "decrement" button decrements the displayed value
  test("decreasing the value after clicking the decrement button", async () => {
    user.setup();
    render(<Counter initialValue={initialCount} />);

    const decrementButton = screen.getByRole("button", { name: "-" });
    await user.click(decrementButton);

    const countElement = screen.getByTestId("counter");
    expect(countElement).toHaveTextContent((initialCount - 1).toString());
  });
});
