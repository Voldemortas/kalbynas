import {describe, expect, test} from 'bun:test'
import getBunEnv from 'back/common/getBunEnv.ts'

describe('getBunEnv', () => {
  //TODO fix github actions
  test.todo('env = env', () => {
    expect(JSON.stringify(Bun.env)).toStrictEqual(JSON.stringify(getBunEnv()))
  })
})
