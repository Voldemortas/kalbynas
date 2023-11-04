import React from 'react'
import getLocale from '../common/getLocale'

const NUCLEUS = '5	i	ī	u	ū	e	ē	a	ā	ō'.split('\t')
const OFFGLIDE = '5 i̯ u̯ l m n r'.split(' ')

function isLongVowel(vowel: string) {
  return (
    vowel === 'ī' ||
    vowel === 'ū' ||
    vowel === 'ē' ||
    vowel === 'ā' ||
    vowel === 'ō'
  )
}

function isGreen(nucleus: string, offglide: string) {
  if (!isLongVowel(nucleus)) {
    return true
  }

  return (
    (offglide === 'i̯' || offglide === 'u̯' || offglide === 'n') &&
    (nucleus == 'ē' || nucleus == 'ā' || nucleus == 'ō')
  )
}

export default function Diphthongs({children}: {children: React.ReactNode}) {
  return (
    <table className="center width-40 outside inside">
      <caption className="center">{children}</caption>
      <tbody>
        {OFFGLIDE.map((glide, gi) => (
          <tr key={glide}>
            {NUCLEUS.map((nucleus, ni, narr) => {
              if (gi === 0 && ni === 0) {
                return <td key="empty"></td>
              }
              if (ni === 0) {
                return <td key={glide}>*{glide}</td>
              }
              if (gi === 0) {
                return <td key={nucleus}>*{nucleus}</td>
              }
              if (
                (nucleus.includes('i') ||
                  nucleus.includes('ī') ||
                  nucleus.includes('u') ||
                  nucleus.includes('ū')) &&
                (glide.includes('i') || glide.includes('u'))
              ) {
                return <td key={nucleus + glide} className="noBorder"></td>
              }
              return (
                <td
                  key={nucleus + glide}
                  style={
                    isGreen(nucleus, glide)
                      ? {backgroundColor: 'var(--pastel-colour-green)'}
                      : {}
                  }
                >
                  *{nucleus + glide}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

