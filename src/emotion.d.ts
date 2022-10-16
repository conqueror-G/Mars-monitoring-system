import { MarsTheme } from './theme'
import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends MarsTheme {}
}
