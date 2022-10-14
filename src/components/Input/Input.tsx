import { css, useTheme } from '@emotion/react'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  const theme = useTheme()

  const inputCss = css({
    padding: '0.8rem 0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: theme.color.Btn.btnActionSelect,
  })

  return <input css={inputCss} {...props} />
}
