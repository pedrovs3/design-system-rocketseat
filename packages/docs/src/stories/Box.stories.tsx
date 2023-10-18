import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@pedrovs3/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text as={'span'}>Texto o elemento Box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
