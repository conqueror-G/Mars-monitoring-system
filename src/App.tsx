import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { AppContext, Context } from 'src/context'

import { router } from './routes'

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Context.Provider value={new AppContext()}>
        <RouterProvider router={router} />
      </Context.Provider>
    </Suspense>
  )
}

export default App
