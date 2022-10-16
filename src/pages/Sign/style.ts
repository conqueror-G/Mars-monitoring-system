import { css } from '@emotion/react'

export const wrapperCss = {
  input: css({
    display: 'flex',
    flexDirection: 'column',
  }),

  label: css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  }),
}

export const forgetButtonCss = css({
  display: 'block',
  padding: 0,
  border: 0,
  marginBottom: '1.5rem',
  backgroundColor: '#fff',
  fontSize: '1.1rem',
  fontWeight: 500,
})

export const visiblePwIconCss = css({
  position: 'absolute',
  top: '50%',
  left: '93%',
  transform: 'translate(-50%, -50%)',
  fontSize: '1.6rem',
  cursor: 'pointer',
})
