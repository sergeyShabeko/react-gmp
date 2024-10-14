import Counter from "./Counter";

export default {
  title: "components/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    initialValue: 0,
  },
};
