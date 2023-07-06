import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../Button";

export default {
  title: "Button/Button",
  component: Button,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["solid", "outline", "text"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: [
          "default",
          "primary",
          "secondary",
          "info",
          "success",
          "danger",
          "warning",
          "dark",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "default", "large"],
      },
    },
  },
};

const Template = (args) => (
  <Button {...args} onClick={action("button-click")} />
);

export const Sizes = () => (
  <div className="flex flex-row gap-8px">
    <Button label="Small" size="small" onClick={action("button-click")} />
    <Button label="Default" size="default" onClick={action("button-click")} />
    <Button label="Default" size="large" onClick={action("button-click")} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
};

export const Success = Template.bind({});
Success.args = {
  label: "Success Button",
  variant: "success",
};

export const Info = Template.bind({});
Info.args = {
  label: "Info Button",
  type: "outline",
  variant: "info",
};

export const Outline = Template.bind({});
Outline.args = {
  label: "Outline",
  type: "outline",
  variant: "danger",
};

export const Text = Template.bind({});
Text.args = {
  label: "Text",
  type: "text",
};