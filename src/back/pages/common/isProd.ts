import getConfigVar from '../../common/getConfigVar.ts'

const IS_PROD =
  Bun.env.NODE_ENV === 'production' || getConfigVar('PRODUCTION') === 'true'

export default IS_PROD
