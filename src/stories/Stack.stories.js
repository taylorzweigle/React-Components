//Taylor Zweigle, 2023
import Stack from "../components/stack/stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((item) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#008cff",
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {item + 1}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});

Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
};

export const Vertical = Template.bind({});

Vertical.args = {
  direction: "column",
  spacing: 2,
  wrap: false,
};

export const NoSpacing = Template.bind({});

NoSpacing.args = {
  direction: "row",
  spacing: 0,
  wrap: true,
};

export const WrapOverflow = Template.bind({});

WrapOverflow.args = {
  numberOfChildren: 100,
  direction: "row",
  spacing: 2,
  wrap: true,
};
