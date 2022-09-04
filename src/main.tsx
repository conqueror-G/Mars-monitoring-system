import React from 'react'
import ReactDOM from 'react-dom/client'

import { worker } from './mocks/browser'
import Router from './Router'

import './index.css'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(<Router />)
