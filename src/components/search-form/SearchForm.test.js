import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";
import user from "@testing-library/user-event";

describe("SearchForm", () => {
  test("renders correctly", () => {
    render(<SearchForm />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();

    const searchButton = screen.getByRole("button");
    expect(searchButton).toBeInTheDocument();
  });

  //Test that component renders an input with the value equal to initial value passed in props
  test("renders initial value provided in props", () => {
    const initialValue = "Some value";
    render(<SearchForm initialQuery={initialValue} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue(initialValue);
  });

  test("the value changes during typing", async () => {
    user.setup();
    render(<SearchForm initialQuery="Initial Query" />);

    const inputElement = screen.getByRole("textbox");
    await user.clear(inputElement);
    await user.type(inputElement, "New Query");

    expect(inputElement).toHaveValue("New Query");
  });

  //Test that after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value
  test("call onSearch by Search button", async () => {
    user.setup();
    const onSearchMock = jest.fn();
    render(<SearchForm initialQuery="" onSearch={onSearchMock} />);

    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button");

    await user.type(inputElement, "Test Query");
    await user.click(buttonElement);

    expect(onSearchMock).toHaveBeenCalledWith("Test Query", expect.any(Object));
  });

  //Test that after typing to the input and pressing Enter key, the "onChange" prop is called with proper value
  test("call onSearch by pressing Enter key", async () => {
    user.setup();
    const onSearchMock = jest.fn();
    render(<SearchForm initialQuery="" onSearch={onSearchMock} />);

    const inputElement = screen.getByRole("textbox");
    await user.type(inputElement, "Test Query");
    fireEvent.submit(inputElement);

    expect(onSearchMock).toHaveBeenCalledWith("Test Query", expect.any(Object));
  });
});
