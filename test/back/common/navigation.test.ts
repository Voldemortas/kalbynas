import {describe, expect, test} from 'bun:test'
import getNavigation from 'back/common/navigation.ts'

describe('getUrl', () => {
  test('en navigation', () => {
    expect(getNavigation(new Request('http://en.kalbynas.lt'), 'a')).toEqual({
      links: [
        {
          key: '/dialectology',
          link: '/dialectology',
          text: 'Dialectology',
        },
        {
          key: '/baltistics',
          link: '/baltistics',
          text: 'Baltistics',
        },
        {
          key: '/articles',
          link: '/articles',
          text: 'Articles',
        },
      ],
      selected: 'a',
    })
  })
  test('lt navigation', () => {
    expect(
      getNavigation(new Request('http://kalbynas.lt'), '/baltistics')
    ).toEqual({
      links: [
        {
          key: '/dialectology',
          link: '/dialectology',
          text: 'Dialektologija',
        },
        {
          key: '/baltistics',
          link: '/baltistics',
          text: 'Baltistika',
        },
        {
          key: '/articles',
          link: '/articles',
          text: 'Straipsniai',
        },
      ],
      selected: '/baltistics',
    })
  })
})
