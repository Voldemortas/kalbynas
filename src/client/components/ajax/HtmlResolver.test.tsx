import React from 'react'
import {describe, test, expect, mock} from 'bun:test'
import HtmlResolver from './HtmlResolver'
import {render, screen, waitFor} from '@testing-library/react'

describe('<HtmlResolver />', () => {
  test('correctly resolves simple text', () => {
    render(<HtmlResolver>hello</HtmlResolver>)
    expect(screen.findByText('hello')).not.toBeUndefined()
  })
  test('correctly resolves simple html', () => {
    render(<HtmlResolver>{'<b>hello</b>'}</HtmlResolver>)
    expect(screen.findByText('hello')).not.toBeUndefined()
  })
  test('correctly resolves custom component', (done) => {
    mock.module('/path.js', () => ({
      default: (props: any) => (
        <>
          joe {props.children}, age: {props.age}
        </>
      ),
    }))
    const {container} = render(
      <HtmlResolver>{`<Component path="/path.js" params='{"age": "5"}'>doe</component>`}</HtmlResolver>
    )
    waitFor(() => {
      expect(container.textContent).toEqualIgnoringWhitespace('joe doe, age: 5')
    }).finally(done)
  }, 500)
  test('correctly resolves custom component within another custom component', (done) => {
    mock.module('/hello.js', () => ({
      default: ({children}: {children: string}) => <>hello {children}</>,
    }))
    mock.module('/there.js', () => ({
      default: ({children}: {children: string}) => <>{children}!</>,
    }))
    const {container} = render(
      <HtmlResolver>{`<Component path="/hello.js"><Component path="/there.js">Peter</Component></Component>`}</HtmlResolver>
    )
    waitFor(() => {
      expect(container.textContent).toEqualIgnoringWhitespace('hello Peter!')
    }).finally(done)
  }, 500)
})

