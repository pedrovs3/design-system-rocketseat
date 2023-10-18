import { styled } from './styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  backgroundColor: '$ignite300',
  border: 'none',
  color: '$white',
  fontFamily: '$default',
  borderRadius: '$md',
  padding: '$4',

  variants: {
    size: {
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$ignite300',
        color: '$white',
      },
      secondary: {
        backgroundColor: '$ignite100',
        color: '$ignite300',
      },
      tertiary: {
        backgroundColor: '$ignite700',
        color: '$ignite300',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
