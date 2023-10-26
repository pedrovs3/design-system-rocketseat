import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '$16',
  height: '$16',
  borderRadius: '$full',
  backgroundColor: '$gray800',
  border: '2px solid $gray600',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$shorter',
  fontWeight: '$medium',
  textTransform: 'uppercase',
  '&:empty': {
    '&::before': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundColor: '$gray600',
      borderRadius: '$full',
    },
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    color: '$gray400',
    width: '$5',
    height: '$6',
  },
})

export type AvatarProps = React.ComponentProps<typeof AvatarContainer>
