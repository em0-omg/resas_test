import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spinner from './Spinner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = () => <Spinner />;

export const Primary = Template.bind({});
