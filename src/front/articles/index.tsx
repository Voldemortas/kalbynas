import Body from 'front/common/Body'
import type {NavProps} from 'front/common/Nav'

export default function Index({
  text,
  articleList,
  nav,
}: {text: string; articleList: {id: number; title: string}[]; nav: NavProps}) {
  return (
    <Body nav={nav}>
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
