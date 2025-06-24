import {Fragment} from 'react'
import {table} from './tables'

type JSXtype = () => JSX.Element
type detailsType = {element: JSXtype; caption: string}

export function Details({
  summary,
  rest = [],
}: {
  summary: detailsType
  rest?: detailsType[]
}) {
  return (
    <details>
      <summary>
        {table({table: summary.element(), caption: summary.caption})}
      </summary>
      <div>
        {rest.map(({element, caption}) => (
          <Fragment key={caption}>
            <br />
            {table({table: element(), caption})}
          </Fragment>
        ))}
      </div>
    </details>
  )
}

export function arrayToDetailsType(
  elementsArray: JSXtype[],
  captions: string[]
): detailsType[] {
  if (elementsArray.length !== captions.length) {
    throw new Error('array sizes must match')
  }
  return elementsArray.map((element, i) => ({element, caption: captions[i]}))
}
