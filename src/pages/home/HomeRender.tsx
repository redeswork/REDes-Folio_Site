import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { HomePage } from './Home'

import '../../App.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
