import { css, useTheme } from '@emotion/react'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLElement>

export const Button = (props: ButtonProps) => {
  const theme = useTheme()

  const buttonCss = css({
    padding: '0.8rem 0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: theme.color.Primary,
  })

  return <button css={buttonCss} {...props} />
}
