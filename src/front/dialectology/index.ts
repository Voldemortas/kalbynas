import {createRoot} from 'react-dom/client'
import Index from './index.tsx'

const root = createRoot(document.getElementById('root') as Element)
//@ts-ignore
root.render(Index(globalParams))
