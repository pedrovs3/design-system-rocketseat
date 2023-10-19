import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@pedrovs3/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Título de exemplo',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'h1 heading',
  },
  parameters: {
    docs: {
      storyDescription:
        'Por padrão o componente Heading renderiza um `<h2>`. Porém isso pode ser alterado por meio da propriedade `as`.',
    },
  },
}
