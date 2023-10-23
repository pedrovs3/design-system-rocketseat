import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@pedrovs3/react/src'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    onClick: {
      action: 'click',
    },
  },
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
  },
}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
  },
}
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Send
        <ArrowRight weight={'bold'} />
      </>
    ),
  },
}
