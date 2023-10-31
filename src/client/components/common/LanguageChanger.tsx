import React from 'react'
import config from '../getConfig'
import getLocale from './getLocale'
import StyledWrapper from './StyledWrapper'
import changeUrlToLocale from './changeUrlToLocale'
import stylesheet from './languageChanger.less'
import NavDrawer from './NavDrawer'
import stylesheetDrawer from './navDrawer.less'

export default function LanguageChanger() {
  const currentLanguage = getLocale() || config.defaultLanguage

  return (
    <StyledWrapper
      stylesheet={stylesheet}
      tag="div"
      className="languageChanger"
    >
      <NavDrawer
        clickable={
          <StyledWrapper stylesheet={stylesheet} tag="div" className="globe" />
        }
        title="Language menu"
        direction="leftwards"
      >
        <StyledWrapper
          stylesheet={stylesheetDrawer}
          tag="nav"
          className="mobile-nav"
        >
          {config.acceptedLanguages.map((al) => (
            <a href={changeUrlToLocale(al)}>
              {
                //@ts-ignore
                config.languageNames[al]
              }
            </a>
          ))}
        </StyledWrapper>
      </NavDrawer>
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

