import { Meta, StoryObj } from '@storybook/react'
import { CheckBox, CheckboxInputProps, Box, Text } from '@pedrovs3-ui/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  args: {},
  decorators: [
    (Story: StoryObj<typeof CheckboxInputProps>) => (
      <Box
        as={'label'}
        css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
      >
        {Story()}
        <Text size={'sm'}>Accept terms of use</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxInputProps>

export const Primary: StoryObj<CheckboxInputProps> = {}

export const Disabled: StoryObj<CheckboxInputProps> = {
  args: {
    disabled: true,
    placeholder: 'Digite algumas coisas...',
  },
}
