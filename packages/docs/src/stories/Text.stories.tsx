import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@pedrovs3-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    size: {
      control: 'select',
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
      ],
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
  args: {
    children: 'Texto de exemplo',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'h1',
    size: '6xl',
  },
}
