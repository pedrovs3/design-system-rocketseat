import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@pedrovs3/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story: StoryObj<typeof TextArea>) => (
      <Box
        as={'label'}
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size={'sm'}>Text Area</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Digite algumas coisas...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    placeholder: 'Digite algumas coisas...',
  },
}
