import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const SignLayout = lazy(() => import('src/layout/sign'))
const Sign = lazy(() => import('src/pages/sign'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignLayout />,
    children: [
      {
        path: '/',
        element: <Sign />,
      },
    ],
  },
])
