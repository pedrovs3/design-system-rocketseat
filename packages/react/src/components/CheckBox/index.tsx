import { CheckboxContainer, CheckboxIndicator } from './styles'
import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox/dist'

export type CheckboxInputProps = React.ComponentProps<typeof Checkbox.Root>

export function CheckBox(props: CheckboxInputProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight={'bold'} />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
