import Article from 'src/pages/articles/Article'
import {NavProps} from 'src/commons/react/Nav'
import Body from 'src/commons/react/Body'
import {ALTERNATES_TYPE} from 'src/commons/alternate'
import {frontTranslations} from 'src/translations/articles'
import {REACT_JS_URL_PREFIX} from 'src/utils/hydrate'
import ReactPageDictionary from 'src/commons/ReactPageDictionary'
import React, {type ComponentType} from 'react'
import {feature} from 'bun:bundle'
import getComponentServerSide from 'src/utils/getComponentServerSide'

const URL = `${REACT_JS_URL_PREFIX}/single-article.js`

ReactPageDictionary.register(URL, import.meta.path)

export type SingleArticlePageType = Omit<
  Record<keyof Article, string>,
  'toTranslations'
>

export default function SingleArticle(
  params: SingleArticlePageType & {
    nav: NavProps
    locale: ALTERNATES_TYPE
    pathname: string
    preloads?: {default: ComponentType}[]
  }
) {
  const Content = feature('CLIENT')
    ? params.preloads![0].default
    : getComponentServerSide(
        ReactPageDictionary.getPath(params.content)![params.locale].path
      )!

  return (
    <Body nav={params.nav} pathname={params.pathname} locale={params.locale}>
      <article>
        <header>
          <h1>{params.title}</h1>
          <div className="article__postTitle">
            <address className="article__author">{params.author}</address>,{' '}
            <time className="article__time">{params.date}</time>
          </div>
        </header>
        <Content />
        <footer>
          {!!params.previousId ? (
            <a
              className="float-left triangle-pointer-left"
              href={`/articles/${params.previousId}`}
              title={params.previousTitle}
            >
              {frontTranslations.previous.format(params.locale)}
            </a>
          ) : null}
          {!!params.nextId ? (
            <a
              className="float-right triangle-pointer-right"
              href={`/articles/${params.nextId}`}
              title={params.nextTitle}
            >
              {frontTranslations.next.format(params.locale)}
            </a>
          ) : null}
        </footer>
      </article>
    </Body>
  )
}

export const url = URL
