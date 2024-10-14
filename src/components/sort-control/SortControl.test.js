import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import SortControl from "./SortControl";

test("renders with initial selection", () => {
  render(
    <SortControl currentSelection="releaseDate" onSelectionChange={jest.fn()} />
  );

  expect(screen.getByLabelText("SORT BY")).toBeInTheDocument();
  expect(screen.getByDisplayValue("Release Date")).toBeInTheDocument();
});

test("call onSelectionChange callback", async () => {
  const handleSelectionChange = jest.fn();
  render(
    <SortControl
      currentSelection="releaseDate"
      onSelectionChange={handleSelectionChange}
    />
  );

  await user.selectOptions(screen.getByLabelText("SORT BY"), "title");
  expect(handleSelectionChange).toHaveBeenCalledWith("title");
});

test("renders all options correctly", () => {
  render(
    <SortControl currentSelection="releaseDate" onSelectionChange={jest.fn()} />
  );

  expect(screen.getByText("Release Date")).toBeInTheDocument();
  expect(screen.getByText("Title")).toBeInTheDocument();
});
