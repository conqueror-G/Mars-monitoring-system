import { css, useTheme } from '@emotion/react'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const formWrapperCss = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  transform: 'translate(-50%, -50%)',
  boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
})

const welcomeViewImageCss = css({
  width: '30rem',
  backgroundImage:
    'url(https://secl-m2.musma.net/static/media/right_background.1ed956e5f717df15d219.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top left',
})

const appTitleCss = css({
  position: 'absolute',
  top: '1rem',
  left: '1rem',
  margin: 0,
  fontSize: '1.25rem',
  fontWeight: 600,
})

export const SignLayout = () => {
  const theme = useTheme()

  const inputFormCss = css({
    width: '30rem',
    height: '30rem',
    padding: '6rem',
    backgroundColor: theme.color.Bg.bgPaper,
  })

  return (
    <Fragment>
      <div css={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <img alt="MarsBackgroundImage" src="src/assets/signPage_background.png" />
      </div>
      <div css={formWrapperCss}>
        <div css={inputFormCss}>
          <p css={appTitleCss}>Mars</p>
          <Outlet />
        </div>
        <div css={welcomeViewImageCss} />
      </div>
    </Fragment>
  )
}
