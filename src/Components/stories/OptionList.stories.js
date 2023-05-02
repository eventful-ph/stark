import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import OptionList from "../OptionList";

export default {
  title: "Input/Option List",
  component: OptionList,
};

const Template = (args) => {
  const options = [
    { id: "radio-1", label: "Radio Option 1" },
    { id: "radio-2", label: "Radio Option 2" },
    {
      id: "radio-3",
      label: "Radio Option 3",
      helpText: "You can also provide a helpText",
    },
  ];
  const [selectedvalues, setSelectedvalues] = useState();

  return (
    <OptionList
      options={options}
      selectedValues={selectedvalues}
      onChange={setSelectedvalues}
      type={args.type}
      id={args.id}
      name={args.name}
    />
  );
};

export const RadioOptionList = Template.bind({});
RadioOptionList.args = {
  type: "radio",
  name: "radio-options",
  id: "radioList",
};

export const CheckboxOptionList = Template.bind({});
CheckboxOptionList.args = {
  type: "checkbox",
  options: [
    {
      id: "1",
      label: "Option 1",
      helpText: "This is option 1",
      name: "option1",
    },
    {
      id: "2",
      label: "Option 2",
      helpText: "This is option 2",
      name: "option2",
    },
  ],
  onChange: action("changed"),
};
