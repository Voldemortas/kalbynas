import React from 'react'
import CommonPage from '../components/common/CommonPage'
import VerticalHeader from '../components/table/VerticalHeader'
import Diphthongs from '../components/baltistics/Diphthongs'
import {BaltisticsPageType} from '~/server/ssr/baltistics'

export default function Baltistics(props: BaltisticsPageType) {
  return (
    <CommonPage>
      <article>
        <h1>{props.h1}</h1>
        <h2>{props.commonBalticH2}</h2>
        <p>{props.commonBalticIntro}</p>
        <div className="flex-box flex-box-bottom">
          <VerticalHeader mobileOnly>
            <table className="outside inside">
              <caption className="center">
                {props.commonConsonantsCaption}
              </caption>
              <tr>
                <th></th>
                <th>{props.labials}</th>
                <th>{props.coronals}</th>
                <th>{props.dorsals}</th>
              </tr>
              <tr>
                <td>{props.plosives}</td>
                <td>
                  *p
                  <br />
                  *b
                </td>
                <td>
                  *t
                  <br />
                  *d
                </td>
                <td>
                  *k
                  <br />
                  *g
                </td>
              </tr>
              <tr>
                <td>{props.sibilants}</td>
                <td></td>
                <td>
                  *s (*z)
                  <br />
                  *š *ž
                </td>
                <td></td>
              </tr>
              <tr>
                <td>{props.sonorants}</td>
                <td>
                  *m
                  <br />
                  *u̯
                </td>
                <td>
                  *n
                  <br />
                  *r *l
                </td>
                <td>
                  <br />
                  *i̯
                </td>
              </tr>
            </table>
          </VerticalHeader>
          <table className="outside center width-20">
            <caption className="center">{props.commonVowelsCaption}</caption>
            <tr>
              <td style={{backgroundColor: 'var(--pastel-colour-green)'}}>ī̆</td>
              <td colSpan={3}></td>
              <td style={{backgroundColor: 'var(--pastel-colour-green)'}}>ū̆</td>
            </tr>
            <tr>
              <td></td>
              <td style={{backgroundColor: 'var(--pastel-colour-green)'}}>ē̆</td>
              <td></td>
              <td style={{backgroundColor: 'var(--pastel-colour-orange)'}}>
                ō
              </td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2}></td>
              <td style={{backgroundColor: 'var(--pastel-colour-green)'}}>ā̆</td>
              <td colSpan={2}></td>
            </tr>
          </table>
        </div>
        <p>{props.commonBalticVowels}</p>
        <p>{props.commonBalticDiphthongsIntro}</p>
        <Diphthongs
          shortCaption="trumpieji BBK dvigarsiai"
          longCaption="ilgieji BBK dvigarsiai"
        />
        <p>{props.commonBalticDiphthongsOutro}</p>
        <h2>{props.eastBalticH2}</h2>
        <p>{props.eastBalticIntro}</p>
        <div className="flex-box flex-box-bottom">
          <table className="outside inside center width-80">
            <caption className="center">
              {props.longEasternVowelsCaption}
            </caption>
            <tr>
              <td>*i&#x0304;</td>
              <td>*u&#x0304;</td>
            </tr>
            <tr>
              <td>
                *e&#x0304;&#x2081; &lt;
                <span className="dotted" title="*ai, *e&#x0304;i, *a&#x0304;i">
                  {' '}
                  *ei
                </span>
              </td>
              <td>*o&#x0304;</td>
            </tr>
            <tr>
              <td>*e&#x0304;&#x2082; &lt; *e&#x0304;</td>
              <td>*a&#x0304;</td>
            </tr>
          </table>
          <table className="outside inside center width-80">
            <caption className="center">
              {props.shortEasternVowelsCaption}
            </caption>
            <tr>
              <td>*i</td>
              <td>*u</td>
            </tr>
            <tr>
              <td>*e</td>
              <td>*a</td>
            </tr>
          </table>
        </div>
        <p>{props.eastBalticOutro}</p>
        <h2>{props.personalisedChangeH2}</h2>
        <i>{props.toBeContinued}</i>
      </article>
    </CommonPage>
  )
}

