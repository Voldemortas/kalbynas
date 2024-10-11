import React, {
  useState,
  useImperativeHandle,
  useRef,
  forwardRef,
  useEffect,
  type Ref,
  type ReactNode,
} from 'react'

import './dialog.css'

export type DialogRef = {
  switch: () => void
}

type DialogProps = {
  children?: ReactNode
}

function Dialog({children}: DialogProps, ref: Ref<DialogRef>) {
  const [isEnabled, setEnabled] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useImperativeHandle(
    ref,
    () => ({
      switch: () => {
        setEnabled(!isEnabled)
      },
    }),
    [isEnabled]
  )

  useEffect(() => {
    if (isEnabled) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [isEnabled])

  return (
    <dialog ref={dialogRef} className="Dialog">
      <button
        type="button"
        onClick={() => setEnabled(false)}
        onKeyUp={() => setEnabled(false)}
        className="Dialog__Close"
      >
        &#128473;
      </button>
      <div className="Dialog__Content">{children}</div>
    </dialog>
  )
}

export default forwardRef(Dialog)
