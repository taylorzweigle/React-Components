//Taylor Zweigle, 2023
import Button from "../components/button/button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args}>Click Me</Button>;

export const Primary = Template.bind({});

Primary.args = {
  color: "#008cff",
};
