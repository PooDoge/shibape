import { FormEvent, ChangeEvent } from 'react'
import { CSSProperties } from 'theme-ui'
import { isNumber } from 'utils/numbers'
import Input from './Input'

const NumericInput = ({
  onUserInput,
  value,
  style,
}: {
  onUserInput: (input: string) => void
  value: string
  style?: CSSProperties
}) => {
  return (
    <Input
      sx={{
        border: 'none',
        padding: '0px 0px',
        position: 'relative',
        width: '100%',
        display: 'inline-block',
        fontSize: '22px',
        ':focus': { outline: 'none' },
        ...style,
      }}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onUserInput(e.target.value)}
      placeholder={0}
      onInput={(v: FormEvent<HTMLInputElement>) => {
        if (v.currentTarget.value === '.') {
          v.currentTarget.value = '0.'
        }
        v.currentTarget.value =
          !!v.currentTarget.value && isNumber(v.currentTarget.value) && parseFloat(v.currentTarget.value) >= 0
            ? v.currentTarget.value
            : v.currentTarget.value.slice(0, v.currentTarget.value.length - 1)
      }}
    />
  )
}

export default NumericInput