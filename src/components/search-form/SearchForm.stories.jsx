import SearchForm from "./SearchForm";
import { fn } from "@storybook/test";

export default {
  title: "components/SearchForm",
  component: SearchForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onSearch: fn() },
};

export const Default = {
  args: {
    initialQuery: "Initial Query",
  },
};
