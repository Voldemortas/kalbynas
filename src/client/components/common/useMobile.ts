import React, {useEffect, useState} from 'react'

export default function useMobile() {
  const [state, setState] = useState(window.innerWidth)

  useEffect(() => {
    const setter = () => {
      setState(window.innerWidth)
    }
    window.addEventListener('resize', setter)

    return () => {
      window.removeEventListener('resize', setter)
    }
  }, [])

  return state < 800
}
