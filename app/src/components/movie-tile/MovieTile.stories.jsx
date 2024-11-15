import MovieTile from "./MovieTile";

export default {
  title: "components/MovieTile",
  component: MovieTile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    movie: {
      control: "object",
      defaultValue: {
        imageUrl:
          "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/84934543-5991-4c93-97eb-beb6186a3ad7/600x900",
        name: "Joker",
        releaseYear: 2019,
        genres: ["Horror", "Crime"],
      },
    },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
    imageUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/84934543-5991-4c93-97eb-beb6186a3ad7/600x900",
    name: "Joker",
    releaseYear: 2019,
    genres: ["Horror", "Crime"],
  },
};
