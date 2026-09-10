export const ALTERNATES = ['lt', 'en'] as const
export type ALTERNATES_TYPE = (typeof ALTERNATES)[number]
export const DEFAULT_ALTERNATE: ALTERNATES_TYPE = 'lt'
