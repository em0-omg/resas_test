import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
  title: 'Elements/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'ストーリー',
  checked: false,
  value: 0,
  onChange: (e) => {
    console.log(e.target.value);
  },
};
