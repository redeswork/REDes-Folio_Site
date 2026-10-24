import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { HomeNew } from './HomeNew'

import '../../App.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomeNew />
  </StrictMode>,
)
