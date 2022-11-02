import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Legend } from "./Legend";

export default {
    title: 'Legend',
    component: Legend
} as Meta

const Template: Story = (args) => {
    return <Legend {...args} />;
}

export const GameLegend = Template.bind({})