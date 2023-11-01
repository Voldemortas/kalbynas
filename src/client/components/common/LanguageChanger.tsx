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
        direction="downwards"
      >
        <StyledWrapper
          stylesheet={stylesheetDrawer}
          tag="nav"
          className="mobile-nav"
        >
          <StyledWrapper stylesheet={stylesheet}>
            {config.acceptedLanguages.map((al) => (
              <a
                href={changeUrlToLocale(al)}
                //@ts-ignore
                aria-label={config.languageDescriptions[al]}
                className={currentLanguage === al ? 'sameLanguage' : ''}
                rel="alternate"
                hrefLang={al}
                key={al}
              >
                {
                  //@ts-ignore
                  config.languageNames[al]
                }
              </a>
            ))}
          </StyledWrapper>
        </StyledWrapper>
      </NavDrawer>
      {config.acceptedLanguages.map((al) => (
        <a
          href={changeUrlToLocale(al)}
          rel="alternate"
          hrefLang={al}
          //@ts-ignore
          aria-label={config.languageDescriptions[al]}
          key={al}
        >
          <img
            src={`/assets/${al}.png`}
            //@ts-ignore
            alt={config.languageDescriptions[al]}
            //@ts-ignore
            title={config.languageDescriptions[al]}
          />
        </a>
      ))}
    </StyledWrapper>
  )
}

