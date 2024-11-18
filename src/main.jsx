import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProviderFirebase } from './ProperContext/FirebaseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ProviderFirebase><App /></ProviderFirebase>
    
  </StrictMode>,
)
