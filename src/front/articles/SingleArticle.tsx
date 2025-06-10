import type Article from 'back/pages/articles/Article'
import React from 'react'
import Body from 'front/common/Body'
import type {NavProps} from 'front/common/Nav'

export default function SingleArticle(
  params: Omit<
    Record<keyof Article, string> & {nav: NavProps},
    'toTranslations'
  >
) {
  return (
    <Body nav={params.nav}>
      <article>
        <header>
          <h1>{params.title}</h1>
          <address>{params.author}</address>,<time>{params.date}</time>
        </header>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: intended behaviour */}
        <section dangerouslySetInnerHTML={{__html: params.content}} />
      </article>
    </Body>
  )
}
