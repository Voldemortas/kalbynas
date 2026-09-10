import {REACT_JS_URL_PREFIX} from 'src/utils/hydrate'
import ReactPageResolver from 'src/commons/ReactPageDictionary'
import {NavProps} from 'src/commons/react/Nav'
import Body from 'src/commons/react/Body'
import {type ALTERNATES_TYPE} from 'src/commons/alternate'

const URL = `${REACT_JS_URL_PREFIX}/article-list.js`

ReactPageResolver.register(URL, import.meta.path)

export type ArticleListPageType = {
  text: string
  articleList: {id: string; title: string}[]
  nav: NavProps
  locale: ALTERNATES_TYPE
  pathname: string
}

export default function ArticleList({
  text,
  articleList,
  locale,
  nav,
  pathname,
}: ArticleListPageType) {
  return (
    <Body nav={nav} locale={locale} pathname={pathname}>
      <section>
        {text}
        <ol>
          {articleList.map(({id, title}) => (
            <li key={id}>
              <a href={`/articles/${id}`}>{title}</a>
            </li>
          ))}
        </ol>
      </section>
    </Body>
  )
}

export const url = URL
