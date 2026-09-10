import {useEffect, useState} from 'react'

export default function useChangeGlobalCssState<
  T extends Record<string & 'default', string>,
>(itemKey: string, record: T) {
  if (typeof localStorage === 'undefined') {
    return ['default', () => {}]
  }

  const [state, setState] = useState<keyof T>(
    (localStorage.getItem(itemKey) ?? 'default') as keyof T
  )

  function updateHtml<T extends Record<string & 'default', string>>(
    itemKey: string,
    record: T,
    state: keyof T
  ) {
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

  updateHtml(itemKey, record, state)

  const storageUpdateCallback = ({newValue, key}: StorageEvent) => {
    if (key === itemKey) {
      setState(newValue as keyof T)
    }
  }

  useEffect(() => {
    localStorage.setItem(itemKey, state as string)
    updateHtml(itemKey, record, state)
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
