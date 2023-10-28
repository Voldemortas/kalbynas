import {useState} from 'react'

export default function useIncrease() {
  const [state, setState] = useState(0)

  function increase() {
    setState(state + 1)
  }

  return {count: state, increase}
}
