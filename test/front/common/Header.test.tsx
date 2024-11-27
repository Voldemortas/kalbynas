import {afterEach, beforeEach, describe, expect, it, mock} from 'bun:test'
import {render, screen} from '@testing-library/react'
import mockModuleScss from 'test/mockModuleScss.ts'
import Header from 'front/common/Header.tsx'
import React from 'react'
import {ModuleMocker} from 'test/ModuleMocker.ts'

const moduleMocker = new ModuleMocker()
describe('Dialog Component', () => {
  beforeEach(async () => {
    await mockDialog()
  })
  afterEach(() => {
    mock.restore()
    moduleMocker.clear()
  })
  it('Should render static elements', () => {
    renderHeader('https://kalbynas.lt')
    expect(screen.getByTestId('dialog')).toBeInTheDocument()
    expect(screen.getByText('Kalbyn[ɐ̝]s')).toBeInTheDocument()
    expect(screen.getByText('Change language')).toBeInTheDocument()
    expect(screen.getByText('Pakeisti kalbą')).toBeInTheDocument()
    expect(screen.getByText('Lietuvių k.')).toBeInTheDocument()
    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByTestId('dialog')).not.toHaveAttribute('open')
  })
  it('Should render correct links Lithuanian url', () => {
    const expectedAlternates = [
      '/',
      'https://kalbynas.lt/',
      'https://en.kalbynas.lt/',
      'https://kalbynas.lt/',
      'https://en.kalbynas.lt/',
    ]
    const {container} = renderHeader('https://kalbynas.lt')
    expect(container.getElementsByTagName('a')).toHaveLength(5)
    expectedAlternates.forEach((expectedAlternate, i) => {
      expect(container.getElementsByTagName('a')[i]).toHaveAttribute(
        'href',
        expectedAlternate
      )
    })
  })
  it('Should render correct links English url', () => {
    const expectedAlternates = [
      '/',
      'https://kalbynas.lt/test',
      'https://en.kalbynas.lt/test',
      'https://kalbynas.lt/test',
      'https://en.kalbynas.lt/test',
    ]
    const {container} = renderHeader('https://en.kalbynas.lt/test')
    expect(container.getElementsByTagName('a')).toHaveLength(5)
    expectedAlternates.forEach((expectedAlternate, i) => {
      expect(container.getElementsByTagName('a')[i]).toHaveAttribute(
        'href',
        expectedAlternate
      )
    })
  })
})

function renderHeader(url: string) {
  mockModuleScss('front/common/header.module.scss')

  Object.defineProperty(window, 'location', {
    value: new URL(url),
    writable: true, // possibility to override
  })
  return render(<Header />)
}

async function mockDialog() {
  await moduleMocker.mock('front/common/Dialog.tsx', () => ({
    default: React.forwardRef(
      ({children}: {children: React.ReactNode}, ref) => (
        <dialog data-testid="dialog">{children}</dialog>
      )
    ),
  }))
}
