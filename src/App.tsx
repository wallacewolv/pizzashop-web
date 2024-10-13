import './global.css'

import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

export function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <RouterProvider router={router} />
    </div>
  )
}
