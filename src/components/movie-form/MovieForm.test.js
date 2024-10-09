import React from "react";
import { render, screen } from "@testing-library/react";
import MovieForm from "./MovieForm";
import user from "@testing-library/user-event";

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

test("renders MovieForm component", () => {
  render(<MovieForm movie={movie} onSubmit={jest.fn()} />);

  expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/movie url/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/genre/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/release date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/rating/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/runtime/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/overview/i)).toBeInTheDocument();
});

test("submits form data", async () => {
  const handleSubmit = jest.fn();
  render(<MovieForm movie={movie} onSubmit={handleSubmit} />);

  await user.type(screen.getByLabelText(/title/i), "New title");
  await user.type(screen.getByLabelText(/movie url/i), "http://newURL.com");
  await user.type(screen.getByLabelText(/rating/i), "10.0");
  await user.type(screen.getByLabelText(/runtime/i), "2h 14 min");
  await user.type(screen.getByLabelText(/overview/i), "New description");

  await user.click(screen.getByRole("button", { name: /submit/i }));

  expect(handleSubmit).toHaveBeenCalled();
});
