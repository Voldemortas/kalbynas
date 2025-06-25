import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  mock,
  spyOn,
} from 'bun:test'
import {render, screen} from '@testing-library/react'
import * as Body from 'front/common/Body.tsx'
import React from 'react'
import SingleArticle from 'front/articles/SingleArticle.tsx'
import mockModuleScss from 'test/build/mockModuleScss.ts'
import mockGlobalParams from 'test/front/common/mockGlobalParams.ts'
import ArticleTranslations from 'front/translations/ArticleTranslations.ts'

const LOCALE = 'lt'

describe('<SingleArticle />', () => {
  beforeEach(async () => {
    mockModuleScss('front/articles/singleArticle.module.scss')
    mockGlobalParams({locale: LOCALE})
  })
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
        previous="previous"
        next="next"
        id="2"
      />
    )
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('author')).toBeInTheDocument()
    expect(screen.getByText('2016-09-21')).toBeInTheDocument()
    expect(screen.getByText('content')).toBeInTheDocument()
    const previousLink = screen.getByText(
      ArticleTranslations.previous.format(LOCALE)
    )
    const nextLink = screen.getByText(ArticleTranslations.next.format(LOCALE))
    expect(previousLink).toBeInTheDocument()
    expect(previousLink).toHaveAttribute('title', 'previous')
    expect(previousLink).toHaveAttribute('href', '/articles/1')
    expect(nextLink).toBeInTheDocument()
    expect(nextLink).toHaveAttribute('title', 'next')
    expect(nextLink).toHaveAttribute('href', '/articles/3')
  })
})
