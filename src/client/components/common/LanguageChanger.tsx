import React from 'react'
import config from '../getConfig'
import getLocale from './getLocale'
import StyledWrapper from './StyledWrapper'
import changeUrlToLocale from './changeUrlToLocale'
import stylesheet from './languageChanger.less'

export default function LanguageChanger() {
  const currentLanguage = getLocale() || config.defaultLanguage

  return (
    <StyledWrapper
      stylesheet={stylesheet}
      tag="div"
      className="languageChanger"
    >
      {config.acceptedLanguages.map((al) => (
        <a href={changeUrlToLocale(al)}>
          <img
            src={`/assets/${al}.png`}
            //@ts-ignore
            alt={config.languageDescriptions[al]}
            key={al}
            //@ts-ignore
            title={config.languageDescriptions[al]}
          />
        </a>
      ))}
    </StyledWrapper>
  )
}

