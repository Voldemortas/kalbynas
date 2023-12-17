const answers: {
  lt: CommonType
  en: CommonType
} = {
  lt: {
    labials: 'Lūpiniai',
    coronals: 'Liežuvio priešakiniai',
    dorsals: 'Gomuriniai',
    plosives: 'Sprogstamieji',
    sibilants: 'Pučiamieji',
    sonorants: 'Pusbalsiai',
  },
  en: {
    labials: 'Labials',
    coronals: 'Coronals',
    dorsals: 'Dorsals',
    plosives: 'Plosives',
    sibilants: 'Sibilants',
    sonorants: 'Sonorants',
  },
}

export {answers as commonStrings}

export type CommonType = {
  labials: string
  coronals: string
  dorsals: string
  plosives: string
  sibilants: string
  sonorants: string
}

