import SortControl from "./SortControl";

export default {
  title: "components/SortControl",
  component: SortControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    currentSelection: {
      control: "select",
      options: ["releaseDate", "title"],
    },
    onSelectionChange: { action: "clicked" },
  },
};

const Template = (args) => <SortControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentSelection: "Title",
};
