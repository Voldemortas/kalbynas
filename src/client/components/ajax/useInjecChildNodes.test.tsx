import React, {useRef} from 'react'
import {describe, test, expect} from 'bun:test'
import useInjectChildNodes from './useInjecChildNodes'
import {render, screen, act} from '@testing-library/react'

describe('useInjectChildNodes', () => {
  test('injects Child nodes', () => {
    const center = document.createElement('center')
    center.setAttribute('data-testid', 'center-id')
    const text = document.createTextNode('I am text')

    function Component() {
      const ref = useRef<HTMLSpanElement>(null)
      useInjectChildNodes([center, text], ref)
      return <span ref={ref} data-testid="span-id"></span>
    }

    act(() => {
      render(<Component />)
    })

    expect(screen.getByText('I am text')).not.toBeUndefined()
    expect(screen.getByTestId('center-id')).not.toBeUndefined()
    expect(screen.queryByTestId('span-id')).toBeNull()
  })
})

