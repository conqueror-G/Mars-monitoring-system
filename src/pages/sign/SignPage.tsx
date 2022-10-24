import { css, useTheme } from '@emotion/react'
import { observer, useLocalObservable } from 'mobx-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineEye, AiFillEye } from 'react-icons/ai'

import Button from 'src/components/button'

// useForm Type
export type Inputs = {
  userId: string
  userPw: string
  singleErrorInput: string
}

// Password 보여주기 아이콘 CSS
const visiblePwIconCss = css({
  position: 'absolute',
  top: '50%',
  left: '93%',
  transform: 'translate(-50%, -50%)',
  fontSize: '1.6rem',
  cursor: 'pointer',
})

// Password 찾기 버튼 오른쪽 정렬 CSS
const flexAlignButtonCss = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  marginTop: '1.5rem',
}

// input 공통 CSS
const inputCss = {
  get common() {
    const theme = useTheme()

    return {
      padding: '0.8rem 0.5rem',
      borderRadius: '0.25rem',
      backgroundColor: theme.color.Btn.btnActionSelect,
    }
  },
}

export const SignPage = observer(() => {
  const theme = useTheme()

  // useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  // Local Store
  const state = useLocalObservable(() => ({
    // Password visible Icon 상태값
    visibilifyStatus: false as boolean,

    // Password Input type 초기값
    visibilityType: 'password' as string,

    // 유효성 검사 중일 때, 스타일링 변화
    get validationInputCss() {
      if (typeof errors.userPw === 'undefined') {
        return flexAlignButtonCss
      }
      return [flexAlignButtonCss, { marginTop: 0 }]
    },

    // visibilifyStatus에 따라 아이콘을 변경하는 함수
    get changeIcon() {
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

  // event Handler - submit
  const handleFormSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <h1 css={{ fontSize: '2rem', marginBottom: '2rem' }}>Sign In</h1>

      <div css={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="inputId" css={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
          ID
        </label>

        {/* ID 입력 */}
        <input
          id="inputId"
          type="text"
          css={inputCss.common}
          {...register('userId', { required: true, minLength: 5 })}
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

        <div css={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
          {/* password 입력 */}
          <input
            id="passwordId"
            type={state.visibilityType}
            css={inputCss.common}
            {...register('userPw', { required: true, minLength: 9 })}
          />

          {/* password 표시 아이콘 */}
          {state.changeIcon}
        </div>

        {/* PW 입력 유효성 검사 */}
        {errors.userPw && (
          <p css={{ marginBottom: 0, color: theme.color.Dots.dot4 }}>At least 9 characters</p>
        )}
      </div>

      {/* password 찾기 */}
      <div css={state.validationInputCss}>
        <Button
          css={{
            display: 'block',
            padding: 0,
            border: 0,
            marginBottom: '1.5rem',
            backgroundColor: '#fff',
            fontSize: '1.1rem',
            fontWeight: 500,
          }}
        >
          Forget Password?
        </Button>
      </div>

      {/* 제출 */}
      <Button
        css={{
          display: 'block',
          width: '100%',
          backgroundColor: theme.color.Primary,
          fontWeight: 600,
          fontSize: '1.25rem',
          color: '#fff',
        }}
      >
        Sign in
      </Button>
    </form>
  )
})
