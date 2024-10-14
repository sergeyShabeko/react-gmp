import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import MovieTile from "./MovieTile";

const movie = {
  imageUrl:
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/84934543-5991-4c93-97eb-beb6186a3ad7/600x900",
  name: "Joker",
  releaseYear: 2019,
  genres: ["Horror", "Crime"],
  description:
    "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  rating: "8.9",
  duration: "2h 15min",
};

test("render movie details correctly", () => {
  render(<MovieTile movie={movie} onClick={jest.fn()} />);

  expect(screen.getByAltText("Joker")).toBeInTheDocument();
  expect(screen.getByText("Joker")).toBeInTheDocument();
  expect(screen.getByText("Horror, Crime")).toBeInTheDocument();
  expect(screen.getByText("2019")).toBeInTheDocument();
});

test("call onClick callback", async () => {
  const handleClick = jest.fn();
  render(<MovieTile movie={movie} onClick={handleClick} />);

  await user.click(screen.getByAltText("Joker"));
  expect(handleClick).toHaveBeenCalledWith(movie);
});

test("menu visibility", async () => {
  render(<MovieTile movie={movie} onClick={jest.fn()} />);

  const contextMenuButton = screen.getByText("⋮");
  await user.click(contextMenuButton);
  expect(screen.getByText("Edit")).toBeInTheDocument();
  expect(screen.getByText("Delete")).toBeInTheDocument();

  await user.click(screen.getByText("X"));
  expect(screen.queryByText("Edit")).not.toBeInTheDocument();
  expect(screen.queryByText("Delete")).not.toBeInTheDocument();
});
