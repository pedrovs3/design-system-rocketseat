import React from 'react'
import { colors } from '@pedrovs3/tokens'
import { styled } from './styles'

const Button = styled('button', {
  backgroundColor: '$primary',
  fontFamily: '$default',
})

export function App() {
  return (
    <>
      <h1 color={colors.black}>Hello World!</h1>
      <Button>Click me</Button>
    </>
  )
}
