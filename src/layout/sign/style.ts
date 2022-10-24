import { css } from '@emotion/react'

export const wrapperCss = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  transform: 'translate(-50%, -50%)',
  boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
})

export const welcomeImageCss = css({
  width: '30rem',
  backgroundImage:
    'url(https://secl-m2.musma.net/static/media/right_background.1ed956e5f717df15d219.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top left',
})

export const appTitleCss = css({
  position: 'absolute',
  top: '1rem',
  left: '1rem',
  margin: 0,
  fontSize: '1.25rem',
  fontWeight: 600,
})
