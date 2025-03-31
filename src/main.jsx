import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./tailwind.css";



import Matrix from './Matrix.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Matrix />
  </StrictMode>,
)
