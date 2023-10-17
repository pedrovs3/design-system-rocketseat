import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@pedrovs3/react'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Enviar',
  },
} as Meta

export const Primary: StoryObj = {}
