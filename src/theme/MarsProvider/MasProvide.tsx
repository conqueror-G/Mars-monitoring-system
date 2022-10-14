import { ThemeProvider } from '@emotion/react'
import { createContext, ReactNode, useContext } from 'react'
import { DefaultTheme, MarsTheme, NormalizeCSS } from 'src/theme'

interface MarsProviderContextType {
  theme?: MarsTheme
}

const MarsProviderContext = createContext<MarsProviderContextType>({
  theme: DefaultTheme,
})

export function useMarsTheme() {
  return useContext(MarsProviderContext)?.theme || DefaultTheme
}

export interface MarsProviderProps {
  withNormalizeCSS?: boolean
  theme?: MarsTheme
  children?: ReactNode
}

export const MarsProvider = ({
  withNormalizeCSS = true,
  theme = DefaultTheme,
  children,
}: MarsProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MarsProviderContext.Provider value={{ theme }}>
        {withNormalizeCSS && <NormalizeCSS />}
        {children}
      </MarsProviderContext.Provider>
    </ThemeProvider>
  )
}
