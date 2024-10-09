import React from "react";
import { render, screen } from "@testing-library/react";
import Dialog from "./Dialog";
import user from "@testing-library/user-event";

describe("Dialog Component", () => {
  const title = "Test Dialog";
  const onCloseDialog = jest.fn();

  it("render the dialog with the title and children", () => {
    render(
      <Dialog
        title={title}
        children={<p>Dialog content</p>}
        onCloseDialog={onCloseDialog}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText("Dialog content")).toBeInTheDocument();
  });

  it("calls onCloseDialog", async () => {
    render(
      <Dialog
        title={title}
        children={<p>Dialog content</p>}
        onCloseDialog={onCloseDialog}
      />
    );

    await user.click(screen.getByRole("button", { name: /×/i }));
    expect(onCloseDialog).toHaveBeenCalledTimes(1);
  });
});
