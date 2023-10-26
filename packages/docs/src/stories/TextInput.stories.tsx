import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps, Box, Text } from '@pedrovs3-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story: StoryObj<typeof TextInput>) => (
      <Box
        as={'label'}
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size={'sm'}>Email Address</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Digite seu nome',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: 'Digite seu nome',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}
