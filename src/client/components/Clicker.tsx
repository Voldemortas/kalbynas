import React, {useState} from 'react'

export default function Clicker({initial = 0}: {initial?: number}) {
  const [state, setState] = useState(initial)

  return (
    <>
      <button
        onClick={() => {
          setState(state + 1)
        }}
      >
        {state}
      </button>
    </>
  )
}
