import { createRoot } from 'react-dom/client'
import '@/styles/index.css'
import '@/utils/consoleArt'
import App from './App'

createRoot(document.getElementById('root')!).render(<App />)
