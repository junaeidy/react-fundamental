import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {HeroUIProvider} from '@heroui/react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeroUIProvider>
  </StrictMode>,
)
