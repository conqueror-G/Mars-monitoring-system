import { css, useTheme } from '@emotion/react'
import Button from 'src/components/Button'
import Input from 'src/components/Input'

const wrapperCss = {
  input: css({
    display: 'flex',
    flexDirection: 'column',
  }),

  button: css({
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  }),
}

export const SignPage = () => {
  const theme = useTheme()

  const buttonCss = {
    forget: css({
      display: 'block',
      padding: 0,
      border: 0,
      marginBottom: '1.5rem',
      backgroundColor: '#fff',
      fontSize: '1.1rem',
      fontWeight: 500,
    }),

    sign: css({
      display: 'block',
      width: '100%',
      backgroundColor: theme.color.Primary,
      fontWeight: 600,
      fontSize: '1.25rem',
      color: '#fff',
    }),
  }

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
      </div>

      <div css={wrapperCss.button}>
        <Button css={buttonCss.forget}>Forget Password?</Button>
      </div>

      <Button css={buttonCss.sign}>Sign in</Button>
    </form>
  )
}
