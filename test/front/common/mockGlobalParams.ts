import {mock} from 'bun:test'

export default function mockGlobalParams(params: any) {
  mock.module('front/common/getGlobalParams', () => {
    return {
      default: () => params,
    }
  })
}
