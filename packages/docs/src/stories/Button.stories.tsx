import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@pedrovs3/react'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    size: 'md',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    size: 'md',
  },
}
