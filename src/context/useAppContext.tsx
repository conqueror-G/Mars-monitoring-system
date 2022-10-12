import { createContext, useContext } from 'react'

import { AppContext } from './AppContext'

export const Context = createContext<AppContext | null>(null)

export function useAppContext() {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Cannot find AppContext Provider')
  }
  return context
}
