import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$md',
  boxSizing: 'border-box',
  border: '2px solid $gray800',
  display: 'flex',
  alignItems: 'baseline',
  transition: 'all 0.2s ease-in-out',
  cursor: 'text',

  '&:has(input:focus)': {
    borderColor: '$ignite500',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  color: '$gray400',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  backgroundColor: 'transparent',
  border: 'none',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  outline: 'none',
  width: '100%',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})

export type TextInputProps = React.ComponentProps<typeof Input>
