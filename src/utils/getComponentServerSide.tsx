import {lazy} from 'react'
import {feature} from 'bun:bundle'

export default function getComponentServerSide(path: string) {
  if (feature('CLIENT')) {
    return null
  }
  return lazy(() => import(path))
}
