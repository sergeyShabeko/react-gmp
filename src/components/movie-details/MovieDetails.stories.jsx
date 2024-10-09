import MovieDetails from "./MovieDetails";
export default {
  title: "components/MovieDetails",
  component: MovieDetails,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    movie: {
      control: "object",
      defaultValue: {
        imageUrl:
          "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c11652e8-653b-47c1-8e72-1552399a775b/600x900",
        name: "The Godfather",
        releaseYear: 1972,
        genres: ["Crime"],
        description:
          "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        rating: "9.2",
        duration: "1h 55min",
      },
    },
  },
};

const Template = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
    imageUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c11652e8-653b-47c1-8e72-1552399a775b/600x900",
    name: "The Godfather",
    releaseYear: 1972,
    genres: ["Crime"],
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    rating: "9.2",
    duration: "1h 55min",
  },
};
