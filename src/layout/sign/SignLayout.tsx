import { css, useTheme } from '@emotion/react'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import { wrapperCss, welcomeImageCss, appTitleCss } from './style'

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
      <div css={{ position: 'relative', width: 1920, height: 1080 }}>
        <img alt="MarsBackgroundImage" src="src/assets/signPage_background.png" />
      </div>
      <div css={wrapperCss}>
        <div css={inputFormCss}>
          <p css={appTitleCss}>Mars</p>
          <Outlet />
        </div>
        <div css={welcomeImageCss} />
      </div>
    </Fragment>
  )
}
