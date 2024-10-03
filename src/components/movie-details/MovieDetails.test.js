import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetails from "./MovieDetails";

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
  render(<MovieDetails movie={movie} />);

  expect(screen.getByAltText("Joker")).toBeInTheDocument();
  expect(screen.getByText("Joker")).toBeInTheDocument();
  expect(screen.getByText("Horror & Crime")).toBeInTheDocument();
  expect(screen.getByText("2019")).toBeInTheDocument();
  expect(screen.getByText("2h 15min")).toBeInTheDocument();
  expect(
    screen.getByText(
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("8.9")).toBeInTheDocument();
});
