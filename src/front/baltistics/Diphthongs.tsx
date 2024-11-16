import React from 'react'

const LONG_NUCLEUS = 'iueao'.split('').map((vowel) => `${vowel}\u0304`)
const SHORT_NUCLEUS = 'iuea'.split('').map((vowel) => `${vowel}\u0306`)
const OFFGLIDE = 'i̯ u̯ n m l r'.split(' ')

function isGreen(nucleus: string, offglide: string) {
  if (SHORT_NUCLEUS.includes(nucleus)) {
    return true
  }

  return (
    (offglide === 'i̯' || offglide === 'u̯' || offglide === 'n') &&
    (nucleus === 'e\u0304' || nucleus === 'a\u0304' || nucleus === 'o\u0304')
  )
}

export default function Diphthongs({
  shortCaption,
  longCaption,
}: {
  shortCaption: string
  longCaption: string
}) {
  return (
    <div className="flex-box">
      <table className="center width-40 outside inside">
        <caption className="center">{shortCaption}</caption>
        <tbody>
          {['', ...OFFGLIDE].map((glide, gi) => (
            <tr key={glide}>
              {['', ...SHORT_NUCLEUS].map((nucleus, ni, narr) => {
                if (gi === 0 && ni === 0) {
                  return <td key="empty" />
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
                  return <td key={nucleus + glide} className="noBorder" />
                }
                return (
                  <td
                    key={nucleus + glide}
                    style={
                      isGreen(nucleus, glide)
                        ? {backgroundColor: 'var(--color-green-2)'}
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
      <table className="center width-40 outside inside">
        <caption className="center">{longCaption}</caption>
        <tbody>
          {['', ...OFFGLIDE].map((glide, gi) => (
            <tr key={glide}>
              {['', ...LONG_NUCLEUS].map((nucleus, ni, narr) => {
                if (gi === 0 && ni === 0) {
                  return <td key="empty" />
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
                  return <td key={nucleus + glide} className="noBorder" />
                }
                return (
                  <td
                    key={nucleus + glide}
                    style={
                      isGreen(nucleus, glide)
                        ? {backgroundColor: 'var(--color-green-2)'}
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
    </div>
  )
}
