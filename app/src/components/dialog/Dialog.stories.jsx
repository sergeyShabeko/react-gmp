import Dialog from "./Dialog";
import MovieForm from "../movie-form/MovieForm";

export default {
  title: "components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "clicked" },
  },
};

const Template = (args) => <Dialog {...args} />;
const movie = {
  imageUrl:
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c11652e8-653b-47c1-8e72-1552399a775b/600x900",
  name: "The Godfather",
  releaseYear: 1972,
  genres: ["Crime"],
  description:
    "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  rating: "9.2",
  duration: "1h 55min",
};

export const EditMovie = Template.bind({});
export const AddMovie = Template.bind({});
export const DeleteMovie = Template.bind({});

EditMovie.args = {
  title: "EDIT MOVIE",
  children: <MovieForm movie={movie} />,
};

AddMovie.args = {
  title: "ADD MOVIE",
  children: <MovieForm movie={{}} />,
};

DeleteMovie.args = {
  title: "DELETE MOVIE",
  children: (
    <div style={{ color: "white" }}>
      <p>Are you sure you want to delete this movie?</p>
      <button>CONFIRM</button>
    </div>
  ),
};
