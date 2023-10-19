import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from '@pedrovs3/react'
import { Box, Text } from '@pedrovs3/react/src'

export default {
  title: 'Form/Text Area',
  component: TextInput,
  args: {},
  decorators: [
    (Story: StoryObj<typeof TextInput>) => (
      <Box
        as={'label'}
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size={'sm'}>Text Area</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Digite algumas coisas...',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: 'Digite algumas coisas...',
  },
}
