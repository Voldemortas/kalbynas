import {afterEach, describe, expect, it, mock, spyOn} from 'bun:test'
import {render, screen} from '@testing-library/react'
import * as Body from 'front/common/Body.tsx'
import React from 'react'
import Index from 'front/articles/index.tsx'

describe('<Index />', () => {
  afterEach(() => {
    mock.restore()
  })
  it('Should render <Body /> with several articles', () => {
    spyOn(Body, 'default').mockImplementation(({children}) => (
      <div>{children}</div>
    ))
    render(
      <Index
        nav={{links: [], selected: undefined}}
        articleList={[
          {id: 10, title: 'desmit'},
          {id: 2, title: '*dwoH'},
        ]}
        text="bla bla bla"
      />
    )
    expect(screen.getByText('bla bla bla')).toBeInTheDocument()
    expect(screen.getByText('desmit')).toBeInTheDocument()
    expect(screen.getByText('desmit')).toHaveAttribute('href', '/articles/10')
    expect(screen.getByText('*dwoH')).toBeInTheDocument()
    expect(screen.getByText('*dwoH')).toHaveAttribute('href', '/articles/2')
  })
})
