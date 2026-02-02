import React, {useRef} from 'react'
import useChangeGlobalCssState from 'front/common/useChangeGlobalCssState.ts'

export default function CssSelector<
  T extends Record<string & 'default', {text: string; value: string}>,
>({
  storageKey,
  options,
  label,
}: {
  storageKey: string
  options: T
  label: string
}) {
  const ref = useRef<HTMLSelectElement>(null)
  const [state, setState] = useChangeGlobalCssState(
    storageKey,
    Object.fromEntries(
      Object.keys(options).map((key) => [
        key,
        // @ts-ignore
        options[key as keyof T].value as string,
      ])
    ) as unknown as Record<keyof T & 'default', string>
  )

  return (
    <select
      aria-label={label}
      id={storageKey}
      ref={ref}
      defaultValue={state as string}
      onChange={() => {
        //@ts-ignore
        setState(ref.current!.value as keyof T)
      }}
    >
      {Object.keys(options).map((key) => (
        <option value={key} key={key}>
          {/*@ts-ignore*/}
          {options[key as keyof T].text}
        </option>
      ))}
    </select>
  )
}
