import {createRoot} from 'react-dom/client'
import SingleArticle from './SingleArticle.tsx'

const root = createRoot(document.getElementById('root') as Element)
//@ts-ignore
root.render(SingleArticle(globalParams))
