import { Meta, StoryObj } from '@storybook/react'
import { MultiStep, MultiStepProps } from '@pedrovs3/react'
import { Box } from '@pedrovs3/react/src'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
  },
  decorators: [
    (Story: StoryObj<typeof MultiStepProps>) => (
      <Box
        as={'label'}
        css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
