import { css, useTheme } from '@emotion/react'
import Button from 'src/components/Button'
import Input from 'src/components/Input'

const wrapperCss = {
  input: css({
    display: 'flex',
    flexDirection: 'column',
  }),
}

export const SignPage = () => {
  const theme = useTheme()

  return (
    <form>
      <h1 css={{ fontSize: '2rem', marginBottom: '3rem' }}>Sign In</h1>

      <div css={wrapperCss.input}>
        <label htmlFor="inputId" css={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
          ID
        </label>
        <Input id="inputId" type="text" css={{ marginBottom: '1.5rem' }} />

        <label htmlFor="passwordId" css={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
          Password
        </label>
        <Input id="passwordId" type="password" css={{ marginBottom: '1.5rem' }} />

        <Button
          css={{ border: 0, fontSize: '1.25rem', fontWeight: 600, color: theme.color.Bg.bgDefault }}
        >
          Sign in
        </Button>
      </div>
    </form>
  )
}
