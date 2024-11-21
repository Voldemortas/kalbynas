import React from 'react'
import Diphthongs from './Diphthongs'

export default function Baltistics(props: BaltisticsPageType) {
  return (
    <article>
      <h1>{props.h1}</h1>
      <h2>{props.commonBalticH2}</h2>
      <p>{props.commonBalticIntro}</p>
      <div className="flex-box flex-box-bottom">
        <table className="outside inside">
          <caption className="center">{props.commonConsonantsCaption}</caption>
          <thead>
          <tr>
            <th/>
            <th>{props.labials}</th>
            <th>{props.coronals}</th>
            <th>{props.dorsals}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{props.plosives}</td>
            <td>
              *p
              <br/>
              *b
            </td>
            <td>
              *t
              <br/>
              *d
            </td>
            <td>
              *k
              <br/>
              *g
            </td>
          </tr>
          <tr>
            <td>{props.sibilants}</td>
            <td/>
            <td>
              *s (*z)
              <br/>
              *š *ž
            </td>
            <td/>
          </tr>
          <tr>
            <td>{props.sonorants}</td>
            <td>
              *m
              <br/>
              *u̯
            </td>
            <td>
              *n
              <br/>
              *r *l
            </td>
            <td>
              <br/>
              *i̯
            </td>
          </tr>
          </tbody>
        </table>
        <table className="outside center width-20">
          <caption className="center">{props.commonVowelsCaption}</caption>
          <tbody>
          <tr>
            <td style={{backgroundColor: 'var(--color-green-2)'}}>ī̆</td>
            <td colSpan={3}/>
            <td style={{backgroundColor: 'var(--color-green-2)'}}>ū̆</td>
          </tr>
          <tr>
            <td/>
            <td style={{backgroundColor: 'var(--color-green-2)'}}>ē̆</td>
            <td/>
            <td
              style={{
                backgroundColor: 'var(--color-green-6)',
                color: 'var(--color-green-white)',
              }}
            >
              ō
            </td>
            <td/>
          </tr>
          <tr>
            <td colSpan={2}/>
            <td style={{backgroundColor: 'var(--color-green-2)'}}>ā̆</td>
            <td colSpan={2}/>
          </tr>
          </tbody>
        </table>
      </div>
      <p>{props.commonBalticVowels}</p>
      <p>{props.commonBalticDiphthongsIntro}</p>
      <Diphthongs
        shortCaption={props.shortEasternDiphthongsCaption}
        longCaption={props.longEasternDiphthongsCaption}
      />
      <p>{props.commonBalticDiphthongsOutro}</p>
      <h2>{props.eastBalticH2}</h2>
      <p>{props.eastBalticIntro}</p>
      <div className="flex-box flex-box-bottom">
        <table className="outside inside center width-80">
          <caption className="center">{props.longEasternVowelsCaption}</caption>
          <tbody>
          <tr>
            <td>*i{'\u0304'}</td>
            <td>*u{'\u0304'}</td>
          </tr>
          <tr>
            <td>
              *e{'\u0304'}
              {'\u0323'} &lt; *ei
            </td>
            <td>*o{'\u0304'}</td>
          </tr>
          <tr>
            <td>
              *e{'\u0304'} &lt; *e{'\u0304'}
            </td>
            <td>*a{'\u0304'}</td>
          </tr>
          </tbody>
        </table>
        <table className="outside inside center width-80">
          <caption className="center">
            {props.shortEasternVowelsCaption}
          </caption>
          <tbody>
          <tr>
            <td>*i</td>
            <td>*u</td>
          </tr>
          <tr>
            <td>*e</td>
            <td>*a</td>
          </tr>
          </tbody>
        </table>
      </div>
      <p>{props.eastBalticMain}</p>
      <p>{props.eastBalticOutro}</p>
      <h2>{props.personalisedChangeH2}</h2>
      <i>{props.toBeContinued}</i>
    </article>
  )
}

export type BaltisticsPageType = {
  h1: string
  commonBalticH2: string
  commonBalticIntro: string
  commonBalticVowels: string
  commonBalticDiphthongsIntro: string
  commonBalticDiphthongsOutro: string
  eastBalticH2: string
  eastBalticIntro: string
  eastBalticMain: string
  eastBalticOutro: string
  personalisedChangeH2: string
  toBeContinued: string
  labials: string
  coronals: string
  dorsals: string
  plosives: string
  sibilants: string
  sonorants: string
  commonConsonantsCaption: string
  commonVowelsCaption: string
  longEasternVowelsCaption: string
  shortEasternVowelsCaption: string
  longEasternDiphthongsCaption: string
  shortEasternDiphthongsCaption: string
}
