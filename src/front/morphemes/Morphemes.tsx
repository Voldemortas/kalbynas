import React from 'react'

export default function Morphemes(props: MorphemesPageType) {
  return (
    <article>
      <h1>{props.h1}</h1>
      <p>{props.intro}</p>
      <h2>{props.schoolH2}</h2>
      <p>{props.schoolParagraph}</p>
      <div className="flex-box flex-box-bottom">
        <table className="outside inside">
          <caption className="center">{props.schoolTableCaption}</caption>
          <thead>
            <tr>
              <th>{props.name}</th>
              <th className="center">{props.marker}</th>
              <th>{props.explanation}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.root}</td>
              <EmptySpacedTd className="zd_root" />
              <td>{props.rootExp}</td>
            </tr>
            <tr>
              <td>{props.prefix}</td>
              <EmptySpacedTd className="zd_prefix" />
              <td>{props.prefixExp}</td>
            </tr>
            <tr>
              <td>{props.suffix}</td>
              <td className="center">
                <span className="zd_suffix zd_important">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </td>
              <td>{props.suffixExp}</td>
            </tr>
            <tr>
              <td>{props.flection}</td>
              <EmptySpacedTd className="zd_flection" />
              <td>{props.flectionExp}</td>
            </tr>
            <tr>
              <td>{props.stem}</td>
              <EmptySpacedTd className="zd_stem" />
              <td>{props.stemExp}</td>
            </tr>
            <tr>
              <td>{props.infix}</td>
              <EmptySpacedTd className="zd_infix" />
              <td>{props.infixExp}</td>
            </tr>
            <tr>
              <td>{props.interfix}</td>
              <EmptySpacedTd className="zd_compound" />
              <td>{props.interfixExp}</td>
            </tr>
            <tr>
              <td>{props.reflexive}</td>
              <EmptySpacedTd className="zd_reflexive" />
              <td>{props.reflexiveExp}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  )
}

function EmptySpacedTd({className}: {className: string}) {
  return (
    <td className="center">
      <span
        className={`${className} zd_important `}
        style={{fontSize: 'small', userSelect: 'none'}}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </td>
  )
}

export type MorphemesPageType = {
  h1: string
  intro: string
  schoolH2: string
  schoolParagraph: string
  schoolTableCaption: string
  name: string
  marker: string
  explanation: string
  root: string
  rootExp: string
  prefix: string
  prefixExp: string
  suffix: string
  suffixExp: string
  flection: string
  flectionExp: string
  stem: string
  stemExp: string
  infix: string
  infixExp: string
  interfix: string
  interfixExp: string
  reflexive: string
  reflexiveExp: string
}
