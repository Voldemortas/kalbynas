import { afterEach, describe, expect, it, mock, spyOn } from 'bun:test'
import { render, screen } from '@testing-library/react'
import * as Body from 'front/common/Body.tsx'
import Index from 'front/h1Text/Index'
import React from 'react'

describe('Dialog Component', () => {
  afterEach(() => {
    mock.restore()
  })
  it('Should render Body with Header and Nav', () => {
    spyOn(Body, 'default').mockImplementation(({ children }) => (
      <div>{children}</div>
    ))
    render(
      <Index
        nav={{ links: [], selected: undefined }}
        h1="h1 header"
        text="content"
      />
    )
    expect(screen.getByText('h1 header')).toBeInTheDocument()
    expect(screen.getByText('content')).toBeInTheDocument()
  })
})
