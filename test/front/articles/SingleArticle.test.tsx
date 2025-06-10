import {afterEach, describe, expect, it, mock, spyOn} from 'bun:test'
import {render, screen} from '@testing-library/react'
import * as Body from 'front/common/Body.tsx'
import React from 'react'
import SingleArticle from 'front/articles/SingleArticle.tsx'

describe('<SingleArticle />', () => {
  afterEach(() => {
    mock.restore()
  })
  it(`Should render <Body /> with article's data`, () => {
    spyOn(Body, 'default').mockImplementation(({children}) => (
      <div>{children}</div>
    ))
    render(
      <SingleArticle
        nav={{links: [], selected: undefined}}
        title="title"
        author="author"
        date="2016-09-21"
        content="content"
      />
    )
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('author')).toBeInTheDocument()
    expect(screen.getByText('2016-09-21')).toBeInTheDocument()
    expect(screen.getByText('content')).toBeInTheDocument()
  })
})
