import Translation, {type Translations} from './Translation'

const translations: Translations = {
  h1: new Translation({
    lt: 'Kas yra Kalbynas.lt?',
    en: 'What is kalbynas.lt?',
  }),
  text: new Translation({
    lt: `<a href="/">Kalbynas.lt</a> - internetinis puslapis, kuriame bus pateikiama tiek įvairi informacija, tiek įvairūs sukurti įrankiai. Kol kas svetainė yra kuriama, tiek
        funkcionalumo, tiek turinio kryptimis. Ateityje <a href="/dialectology">dialektologijos puslapyje</a> atsiras interaktyvus tarmių, tarminių punktų, izoglosų ir t.t. žemėlapis, 
        o <a href="/baltistics">baltistikos puslapyje</a> išsami rytų baltų kalbų garsyno atitikmenų analizė.`,
    en: `<a href="/">Kalbynas.lt</a> is a website where you'll be able to find various information and tools. The site is still under consturction in terms of both functionality 
        and content. In the future the <a href="/en/dialectology">dialectology page</a> will have an interactive map of Lithuanian dialects, and isoglosses, and in the 
        <a href="/en/baltistics">baltistics page</a> you'll be able to find the coincise analysis of the sound correspondences in the Eastern Baltic languages.`,
  }),
}

export default translations
