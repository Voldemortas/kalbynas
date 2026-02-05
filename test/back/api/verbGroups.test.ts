import {describe, expect, test} from 'bun:test'

import {CONJUGATED} from 'test/back/api/conjugated.ts'
import {GROUPS} from 'back/api/verbGroups.ts'

describe.each(Object.keys(GROUPS))(
  'api/verbGroups',
  //@ts-ignore
  (method: keyof typeof GROUPS) => {
    test.each(Object.keys(CONJUGATED))((method as string) + '(%s)', (roots) => {
      expect(GROUPS[method](roots.split('-'))).toStrictEqual(
        //@ts-ignore
        CONJUGATED[roots][method]
      )
    })
  }
)
