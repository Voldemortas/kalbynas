import React, {
  forwardRef,
  type ReactNode,
  type Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import style from './dialog.module.scss'

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
    <dialog ref={dialogRef} className={style('dialog')}>
      <button
        type="button"
        onClick={() => setEnabled(false)}
        onKeyUp={() => setEnabled(false)}
        className={style('close')}
      >
        &#128473;
      </button>
      <div className={style('content')}>{children}</div>
    </dialog>
  )
}

export default forwardRef(Dialog)
