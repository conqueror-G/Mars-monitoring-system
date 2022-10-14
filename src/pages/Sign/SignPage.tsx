import { css } from '@emotion/react'
import Input from 'src/components/Input'

const wrapperCss = {
  input: css({
    display: 'flex',
    flexDirection: 'column',
  }),
}

export const SignPage = () => {
  return (
    <form>
      <h1 css={{ fontSize: '1.25rem', marginBottom: '3rem' }}>Sign In</h1>

      <div css={wrapperCss.input}>
        <label htmlFor="inputId" css={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
          ID
        </label>
        <Input id="inputId" type="text" css={{ marginBottom: '1.5rem' }} />

        <label htmlFor="passwordId" css={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
          Password
        </label>
        <Input id="passwordId" type="password" css={{ marginBottom: '1rem' }} />
      </div>
    </form>
  )
}
