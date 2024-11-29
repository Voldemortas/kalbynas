import {afterEach, describe, expect, it, mock, spyOn} from 'bun:test'
import {render, screen} from '@testing-library/react'
import mockModuleScss from 'test/build/mockModuleScss.ts'
import * as Nav from 'front/common/Nav.tsx'
import * as Header from 'front/common/Header.tsx'
import Body from 'front/common/Body.tsx'
import React from 'react'
import {ModuleMocker} from 'test/ModuleMocker.ts'

const LINKS: {text: string; link: string; key: string}[] = [
  {text: 'one', link: '/one', key: '/one'},
  {text: 'two', link: '/two', key: '/two'},
  {text: 'three', link: '/three', key: '/three'},
]

const moduleMocker = new ModuleMocker()
describe('Dialog Component', () => {
  afterEach(() => {
    mock.restore()
    moduleMocker.clear()
  })
  it('Should render Body with Header and Nav', () => {
    mockModuleScss('front/common/body.module.scss')
    spyOn(Nav, 'default').mockImplementation(() => <nav>nav</nav>)
    spyOn(Header, 'default').mockImplementation(() => <header>header</header>)
    render(<Body nav={{links: LINKS}}>content</Body>)
    expect(screen.getByText('header')).toBeInTheDocument()
    expect(screen.getByText('nav')).toBeInTheDocument()
    expect(screen.getByText('content')).toBeInTheDocument()
  })
})
