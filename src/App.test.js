import { render, screen, within } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("AppComponent renders a <Counter />", () => {
    render(<App />);
    const counterComponent = screen.getByTestId("app-component");
    const counterInstance = within(counterComponent).getByTestId("counter");
    expect(counterInstance).toBeInTheDocument();
  });

  test("AppComponent renders a <SearchForm />", () => {
    render(<App />);
    const counterComponent = screen.getByTestId("app-component");
    const counterInstance = within(counterComponent).getByTestId("search-form");
    expect(counterInstance).toBeInTheDocument();
  });

  test("AppComponent renders a <GenreSelect />", () => {
    render(<App />);
    const counterComponent = screen.getByTestId("app-component");
    const counterInstance =
      within(counterComponent).getByTestId("genre-select");
    expect(counterInstance).toBeInTheDocument();
  });
});
