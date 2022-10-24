import { css } from '@emotion/react'
import ReactLoading from 'react-loading'

const wrapperCss = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: '#e2e8f0',
  opacity: 0.6,
})

const spinnerCss = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const Spinner = () => {
  return (
    <div css={wrapperCss}>
      <ReactLoading css={spinnerCss} width="10%" height="1%" color="#036DB7" />
    </div>
  )
}
