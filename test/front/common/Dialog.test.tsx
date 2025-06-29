import {afterEach, beforeEach, describe, expect, it, mock} from 'bun:test'
import {fireEvent, render, screen} from '@testing-library/react'
import Dialog, {type DialogRef} from 'front/common/Dialog.tsx'
import React, {useRef} from 'react'
import mockModuleScss from 'test/build/mockModuleScss.ts'
import {ModuleMocker} from 'test/ModuleMocker.ts'

const moduleMocker = new ModuleMocker()

describe('Dialog Component', () => {
  beforeEach(() => {
    mockCancelSvg()
  })
  afterEach(() => {
    mock.restore()
  })
  it('Should render the closed dialog', () => {
    const {container} = renderDialog()
    expect(screen.getByText('dialogText')).toBeInTheDocument()
    expect(container.getElementsByClassName('dialog')[0]).not.toHaveAttribute(
      'open'
    )
  })
  it('Should open the dialog on ref.current.switch()', () => {
    const {container} = renderDialog()
    fireEvent.click(screen.getByText('button'))
    expect(screen.getByText('dialogText')).toBeInTheDocument()
    expect(container.getElementsByClassName('dialog')[0]).toHaveAttribute(
      'open'
    )
  })
  it('Should close the dialog after it was closed', () => {
    const {container} = renderDialog()
    fireEvent.click(screen.getByText('button'))
    fireEvent.click(screen.getByText('cancel'))
    expect(screen.getByText('dialogText')).toBeInTheDocument()
    expect(
      container.getElementsByClassName('dialog')[0].getAttribute('open')
    ).toBeFalsy()
  })
})

function renderDialog() {
  mockModuleScss('front/common/dialog.module.scss')
  return render(<BodyWithDialog />)
}

function BodyWithDialog() {
  const ref = useRef<DialogRef>(null)
  return (
    <>
      <button
        type="button"
        className="open"
        onClick={() => {
          ref.current?.switch()
        }}
      >
        button
      </button>
      <Dialog ref={ref}>dialogText</Dialog>
    </>
  )
}

async function mockCancelSvg() {
  await moduleMocker.mock('front/common/CancelSvg.tsx', () => ({
    default: () => 'cancel',
  }))
}
