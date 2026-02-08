import type Article from 'back/pages/articles/Article'
import React from 'react'
import Body from 'front/common/Body'
import type {NavProps} from 'front/common/Nav'
import ArticleTranslations from 'front/translations/ArticleTranslations.ts'
import type {ALTERNATES_TYPE} from 'build/config.ts'
import getGlobalParams from 'front/common/getGlobalParams.ts'

import styles from './singleArticle.module.scss'

export default function SingleArticle(
  params: Omit<
    Record<keyof Article, string> & {nav: NavProps},
    'toTranslations'
  >
) {
  const locale = getGlobalParams().locale as ALTERNATES_TYPE
  return (
    <Body nav={params.nav}>
      <article>
        <header>
          <h1>{params.title}</h1>
          <div className={styles('postTitle')}>
            <address className={styles('author')}>{params.author}</address>,{' '}
            <time className={styles('time')}>{params.date}</time>
          </div>
        </header>
        <section dangerouslySetInnerHTML={{__html: params.content}} />
        <footer>
          {!!params.previousId ? (
            <a
              className="float-left triangle-pointer-left"
              href={`/articles/${params.previousId}`}
              title={params.previousTitle}
            >
              {ArticleTranslations.previous.format(locale)}
            </a>
          ) : null}
          {!!params.nextId ? (
            <a
              className="float-right triangle-pointer-right"
              href={`/articles/${params.nextId}`}
              title={params.nextTitle}
            >
              {ArticleTranslations.next.format(locale)}
            </a>
          ) : null}
        </footer>
      </article>
    </Body>
  )
}
