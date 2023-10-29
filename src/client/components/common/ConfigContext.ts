import {createContext} from 'react'

const ConfigContext = createContext<{
  locale: string
}>({locale: ''})

export default ConfigContext

