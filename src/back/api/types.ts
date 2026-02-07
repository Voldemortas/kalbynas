const GROUP_ARRAY = ['presInd', 'pastInd', 'pastFreqInd', 'futInd'] as const
const FORMAT_ARRAY = ['json', 'xml'] as const
const SPEECH_PART_ARRAY = ['verb']

export type GroupKeysType = (typeof GROUP_ARRAY)[number]
export type FormatKeysType = (typeof FORMAT_ARRAY)[number]
export type SpeechPartsKeysType = (typeof SPEECH_PART_ARRAY)[number]

export type MoodType = {
  sg1: string
  sg2: string
  sg3: string
  pl1: string
  pl2: string
  pl3: string
}

export type ResponseType = Record<string, MoodType>
