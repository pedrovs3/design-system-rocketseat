import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@pedrovs3-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/pedrovs3.png',
    alt: 'Pedro Vieira',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
