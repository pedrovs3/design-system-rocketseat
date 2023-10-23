import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$md',
  boxSizing: 'border-box',
  border: '2px solid $gray800',

  transition: 'all 0.2s ease-in-out',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 'none',
    borderColor: '$ignite500',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
export type TextAreaProps = React.ComponentProps<typeof TextArea>
TextArea.displayName = 'TextArea'
