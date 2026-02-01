import {useEffect, useState} from 'react'

export default function useChangeGlobalCssState<
  T extends Record<string & 'default', string>,
>(key: string, record: T) {
  const [state, setState] = useState<keyof T>(
    (localStorage.getItem(key) ?? 'default') as keyof T
  )

  function updateHtml() {
    if (
      !document.getElementById(`${key}_${String(state)}`) &&
      record[state] !== ''
    ) {
      const newChild = document.createElement('style')
      newChild.setAttribute('id', `${key}_${String(state)}`)
      newChild.innerHTML = String(record[state])
      document.head.appendChild(newChild)
    }
  }

  const storageUpdateCallback = ({newValue}: StorageEvent) => {
    setState(newValue as keyof T)
  }

  useEffect(() => {
    localStorage.setItem(key, state as string)
    updateHtml()
    addEventListener('storage', storageUpdateCallback)
    return () => {
      document.getElementById(`${key}_${String(state)}`)?.remove()
      removeEventListener('storage', storageUpdateCallback)
    }
  }, [state])

  function updateState(newKey: keyof T) {
    setState(newKey)
  }

  return [state, updateState]
}
