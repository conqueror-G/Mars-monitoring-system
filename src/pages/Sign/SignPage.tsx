import { css, useTheme } from '@emotion/react'
import { useLocalObservable } from 'mobx-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from 'src/components/button'
import { wrapperInputCss, forgetButtonCss } from './style'

export type Inputs = {
  userId: string
  userPw: string
  singleErrorInput: string
}

export const SignPage = () => {
  const theme = useTheme()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const state = useLocalObservable(() => ({
    // 유효성 검사 중일 때, 스타일링 변화
    validationInputCss() {
      if (typeof errors.userPw === 'undefined') {
        return flexAlignButtonCss
      }
      return [flexAlignButtonCss, { marginTop: 0 }]
    },
  }))

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  // input 공통 CSS
  const inputCommonCss = css({
    padding: '0.8rem 0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: theme.color.Btn.btnActionSelect,
  })

  // 비밀번호 찾기 버튼 오른쪽 정렬 CSS
  const flexAlignButtonCss = css({
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: '1.5rem',
  })

  // 제출 버튼 CSS
  const signButtonCss = css({
    display: 'block',
    width: '100%',
    backgroundColor: theme.color.Primary,
    fontWeight: 600,
    fontSize: '1.25rem',
    color: '#fff',
  })

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <h1 css={{ fontSize: '2rem', marginBottom: '2rem' }}>Sign In</h1>

      <div css={wrapperInputCss}>
        {/* ID 입력 */}
        <label htmlFor="inputId" css={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
          ID
        </label>
        <input
          id="inputId"
          type="text"
          css={inputCommonCss}
          {...register('userId', { required: 'this', minLength: 5 })}
        />
        {/* ID 입력 유효성 검사 */}
        {errors.userId && (
          <p
            css={{ marginBotton: 0, color: theme.color.Dots.dot4 }}
          >{`Please set the ID format, ex) Mu001`}</p>
        )}

        {/* password 입력 */}
        <label
          htmlFor="passwordId"
          css={{ marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1.3rem' }}
        >
          Password
        </label>
        <input
          id="passwordId"
          type="password"
          css={inputCommonCss}
          {...register('userPw', { required: 'where', minLength: 9 })}
        />
        {/* PW 입력 유효성 검사 */}
        {errors.userPw && (
          <p css={{ marginBottom: 0, color: theme.color.Dots.dot4 }}>At least 9 characters</p>
        )}
      </div>

      {/* 비밀번호 찾기 */}
      <div css={state.validationInputCss()}>
        <Button css={forgetButtonCss}>Forget Password?</Button>
      </div>

      {/* 제출 */}
      <Button css={signButtonCss}>Sign in</Button>
    </form>
  )
}
