import { render, screen } from "@testing-library/react";
import GenreSelect from "./GenreSelect";
import user from "@testing-library/user-event";

describe("GenreSelect", () => {
  //Test that component renders all genres passed in props
  test("renders correctly", () => {
    const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

    render(<GenreSelect genres={genres} />);

    genres.forEach((genre) => {
      const buttonElement = screen.getByText(genre);
      expect(buttonElement).toBeInTheDocument();
    });
  });

  //Test that component highlights a selected genre passed in props
  test("highlight the selected genre", () => {
    const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
    const selectedGenre = "DOCUMENTARY";
    render(<GenreSelect genres={genres} selectedGenre={selectedGenre} />);

    const selectedButton = screen.getByText(selectedGenre);
    expect(selectedButton).toHaveClass("active");
  });

  //Test that after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments
  test("call onSelect callback", async () => {
    user.setup();
    const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
    const onSelect = jest.fn();
    render(
      <GenreSelect
        genres={genres}
        selectedGenre="DOCUMENTARY"
        onSelect={onSelect}
      />
    );

    const genreButton = screen.getByText("HORROR");
    await user.click(genreButton);

    expect(onSelect).toHaveBeenCalledWith("HORROR");
  });
});
