import React from 'react'
import {describe, test, expect, mock} from 'bun:test'
import HtmlResolver from './HtmlResolver'
import {render, screen, waitFor} from '@testing-library/react'

const MAX_TEST_DURATION_MS = 500

describe('<HtmlResolver />', () => {
  test(
    'correctly resolves simple text',
    () => {
      render(<HtmlResolver>hello</HtmlResolver>)
      expect(screen.findByText('hello')).not.toBeUndefined()
    },
    MAX_TEST_DURATION_MS
  )
  test(
    'correctly resolves simple html',
    () => {
      render(<HtmlResolver>{'<b>hello</b>'}</HtmlResolver>)
      expect(screen.findByText('hello')).not.toBeUndefined()
    },
    MAX_TEST_DURATION_MS
  )
  test('correctly resolves custom component', (done) => {
    mock.module('/path.js', () => ({
      default: (props: any) => (
        <>
          joe {props.children}, age: {props.age}
        </>
      ),
    }))
    const {container} = render(
      <HtmlResolver>{`<center>start==<component tag="blink" idk="5" path="/path.js" age="5">doe</component>==end</center>`}</HtmlResolver>
    )
    waitFor(() => {
      expect(container.textContent).toEqualIgnoringWhitespace(
        'start==joe doe, age: 5==end'
      )
    }).finally(done)
  }, 500)
  test(
    'correctly resolves custom component within another custom component',
    (done) => {
      mock.module('/hello.js', () => ({
        default: ({children}: {children: string}) => <>hello {children}</>,
      }))
      mock.module('/there.js', () => ({
        default: ({children}: {children: string}) => <>there, {children}!</>,
      }))
      const {container} = render(
        <HtmlResolver>{`<Component path="/hello.js"><Component path="/there.js">Peter</Component></Component>`}</HtmlResolver>
      )
      waitFor(() => {
        expect(container.textContent).toEqualIgnoringWhitespace(
          'hello there, Peter!'
        )
      }).finally(done)
    },
    MAX_TEST_DURATION_MS
  )
  test(
    'correctly resolves custom component with multiple children tags',
    (done) => {
      mock.module('/children.js', () => ({
        default: ({children}: {children: string}) => <>{children}</>,
      }))
      const {container} = render(
        <HtmlResolver>{`<Component path="/children.js"><b>Good</b> <b>day</b></Component>`}</HtmlResolver>
      )
      waitFor(() => {
        expect(container.textContent).toEqualIgnoringWhitespace('Good day')
      }).finally(done)
    },
    MAX_TEST_DURATION_MS
  )
})

