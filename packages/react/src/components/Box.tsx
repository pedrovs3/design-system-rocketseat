import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  width: '100%',
  maxWidth: '100%',
})

export type BoxProps = React.ComponentProps<typeof Box>
