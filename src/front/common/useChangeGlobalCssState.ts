import {useEffect, useState} from 'react'

export default function useChangeGlobalCssState<
  T extends Record<string & 'default', string>,
>(itemKey: string, record: T) {
  const [state, setState] = useState<keyof T>(
    (localStorage.getItem(itemKey) ?? 'default') as keyof T
  )

  function updateHtml() {
    if (
      !document.getElementById(`${itemKey}_${String(state)}`) &&
      record[state] !== ''
    ) {
      const newChild = document.createElement('style')
      newChild.setAttribute('id', `${itemKey}_${String(state)}`)
      newChild.innerHTML = String(record[state])
      document.head.appendChild(newChild)
    }
  }

  const storageUpdateCallback = ({newValue, key}: StorageEvent) => {
    if (key === itemKey) {
      setState(newValue as keyof T)
    }
  }

  useEffect(() => {
    localStorage.setItem(itemKey, state as string)
    updateHtml()
    addEventListener('storage', storageUpdateCallback)
    return () => {
      document.getElementById(`${itemKey}_${String(state)}`)?.remove()
      removeEventListener('storage', storageUpdateCallback)
    }
  }, [state])

  function updateState(newKey: keyof T) {
    setState(newKey)
  }

  return [state, updateState]
}
