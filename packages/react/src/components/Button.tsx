import { styled } from '../styles'

export const Button = styled('button', {
  appearance: 'none',
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$shorter',
  textAlign: 'center',
  fontWeight: '$medium',
  borderRadius: '$md',
  border: 'none',
  boxSizing: 'border-box',
  minWidth: 120,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  '&:not(:disabled):hover': {
    color: '$gray100',
    backgroundColor: '$ignite700',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$ignite500',
        color: '$gray100',
        '&:not(:disabled):hover': {
          backgroundColor: '$ignite700',
        },
      },
      secondary: {
        backgroundColor: '$gray500',
        color: '$gray100',
        '&:not(:disabled):hover': {
          backgroundColor: '$gray700',
        },
      },
      outline: {
        border: '2px solid $ignite500',
        color: '$ignite500',
      },
      ghost: {
        backgroundColor: 'transparent',
        border: 'none',
        '&:not(:disabled):hover': {
          backgroundColor: '$ignite700',
        },
      },
    },
    size: {
      sm: {
        padding: '0 $2',
        height: 32,
        fontSize: '$sm',
      },
      md: {
        padding: '0 $4',
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends React.ComponentProps<typeof Button> {
  as?: React.ElementType
}

Button.displayName = 'Button'
