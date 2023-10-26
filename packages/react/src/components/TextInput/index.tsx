import { Input, Prefix, TextInputContainer } from './styles'
import React from "react";
export interface TextInputProps extends React.ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = React.forwardRef<React.ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  }
)

TextInput.displayName = 'TextInput'
