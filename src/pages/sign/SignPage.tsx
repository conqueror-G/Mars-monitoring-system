import { css, useTheme } from '@emotion/react'
import { observer, useLocalObservable } from 'mobx-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineEye, AiFillEye } from 'react-icons/ai'

import Button from 'src/components/button'

import { wrapperCss, forgetButtonCss, visiblePwIconCss } from './style'

export type Inputs = {
  userId: string
  userPw: string
  singleErrorInput: string
}

export const SignPage = observer(() => {
  const theme = useTheme()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const state = useLocalObservable(() => ({
    // password visible Icon 상태값
    visibilifyStatus: false as boolean,

    // password Input type 초기값
    visibilityType: 'password' as string,

    // 유효성 검사 중일 때, 스타일링 변화
    validationInputCss() {
      if (typeof errors.userPw === 'undefined') {
        return flexAlignButtonCss
      }
      return [flexAlignButtonCss, { marginTop: 0 }]
    },

    // visibilifyStatus에 따라 아이콘을 변경하는 함수
    changeIcon() {
      if (state.visibilifyStatus) {
        return (
          <AiFillEye onClick={() => state.handleIconToggler('password')} css={visiblePwIconCss} />
        )
      }
      return <AiOutlineEye onClick={() => state.handleIconToggler('text')} css={visiblePwIconCss} />
    },

    // visibilifyStatus 상태값 변경 함수
    handleIconToggler(type: string) {
      state.visibilifyStatus = !state.visibilifyStatus
      state.visibilityType = type
    },
  }))

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  // input 공통 CSS
  const inputCommonCss = css({
    padding: '0.8rem 0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: theme.color.Btn.btnActionSelect,
  })

  // password 찾기 버튼 오른쪽 정렬 CSS
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

      <div css={wrapperCss.input}>
        <label htmlFor="inputId" css={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
          ID
        </label>

        {/* ID 입력 */}
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

        <label
          htmlFor="passwordId"
          css={{ marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1.3rem' }}
        >
          Password
        </label>

        <div css={wrapperCss.label}>
          {/* password 입력 */}
          <input
            id="passwordId"
            type={state.visibilityType}
            css={inputCommonCss}
            {...register('userPw', { required: 'where', minLength: 9 })}
          />

          {/* password 표시 아이콘 */}
          {state.changeIcon()}
        </div>

        {/* PW 입력 유효성 검사 */}
        {errors.userPw && (
          <p css={{ marginBottom: 0, color: theme.color.Dots.dot4 }}>At least 9 characters</p>
        )}
      </div>

      {/* password 찾기 */}
      <div css={state.validationInputCss()}>
        <Button css={forgetButtonCss}>Forget Password?</Button>
      </div>

      {/* 제출 */}
      <Button css={signButtonCss}>Sign in</Button>
    </form>
  )
})
