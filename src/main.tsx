import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { enableMSW } from './api/mocks'
import { App } from './App'

enableMSW().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
