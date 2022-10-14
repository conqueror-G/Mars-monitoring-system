import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { AppContext, Context } from 'src/context'

import { router } from './routes'
import { MarsProvider } from 'src/theme'
import Spinner from './components/Spinner'

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <MarsProvider>
        <Context.Provider value={new AppContext()}>
          <RouterProvider router={router} />
        </Context.Provider>
      </MarsProvider>
    </Suspense>
  )
}

export default App
