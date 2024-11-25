import getConfigVar from 'back/common/getConfigVar.ts'
import getBunEnv from 'back/common/getBunEnv.ts'

const IS_PROD =
  getBunEnv().NODE_ENV === 'production' || getConfigVar('PRODUCTION') === 'true'

export default IS_PROD
