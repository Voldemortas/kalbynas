import {afterEach, beforeEach, describe, expect, it, mock} from 'bun:test'
import {render, screen} from '@testing-library/react'
import mockModuleScss from 'test/build/mockModuleScss.ts'
import Nav from 'front/common/Nav.tsx'
import React from 'react'
import {ModuleMocker} from 'test/ModuleMocker.ts'
import mockGlobalParams from 'test/front/common/mockGlobalParams.ts'
import NavTranslations from 'front/translations/NavTranslations.ts'

const LINKS: {text: string; link: string; key: string}[] = [
  {text: 'one', link: '/one', key: '/one'},
  {text: 'two', link: '/two', key: '/two'},
  {text: 'three', link: '/three', key: '/three'},
]
const LOCALE = 'lt'
const MORPHEME_URL = '/morpheme-marker'
const MORPHEME_TEXT = NavTranslations.morphology.format(LOCALE)

const moduleMocker = new ModuleMocker()
describe('<Nav />', () => {
  beforeEach(async () => {
    mockModuleScss('front/common/nav.module.scss')
    await mockDialog()
    mockGlobalParams({locale: LOCALE})
  })
  afterEach(() => {
    mock.restore()
    moduleMocker.clear()
  })
  it('Should render static elements', () => {
    const {container} = render(<Nav links={LINKS} />)
    expect(screen.getByTestId('dialog')).toBeInTheDocument()
    expect(screen.getByText('≡')).toBeInTheDocument()
  })
  it('Should render all links without selected', () => {
    const {container} = render(<Nav links={LINKS} />)
    const hrefs = container.getElementsByTagName('a')
    expect(hrefs).toHaveLength((LINKS.length + 1) * 2)

    expect(hrefs[LINKS.length]).toHaveAttribute('href', MORPHEME_URL)
    expect(hrefs[LINKS.length * 2 + 1]).toHaveAttribute('href', MORPHEME_URL)
    expect(hrefs[LINKS.length]).toHaveTextContent(MORPHEME_TEXT)
    expect(hrefs[LINKS.length * 2 + 1]).toHaveTextContent(MORPHEME_TEXT)

    LINKS.forEach(({link, text}, i) => {
      expect(hrefs[i]).toHaveAttribute('href', link)
      expect(hrefs[i]).toHaveTextContent(text)
      expect(hrefs[i + 1 + LINKS.length]).toHaveAttribute('href', link)
      expect(hrefs[i + 1 + LINKS.length]).toHaveTextContent(text)
    })

    expect(container.getElementsByClassName('link--selected')).toHaveLength(0)
  })
  it('Should render all links with selected', () => {
    const {container} = render(<Nav links={LINKS} selected="/two" />)
    const hrefs = container.getElementsByTagName('a')
    expect(hrefs).toHaveLength((LINKS.length + 1) * 2)

    expect(hrefs[LINKS.length]).toHaveAttribute('href', MORPHEME_URL)
    expect(hrefs[LINKS.length * 2 + 1]).toHaveAttribute('href', MORPHEME_URL)
    expect(hrefs[LINKS.length]).toHaveTextContent(MORPHEME_TEXT)
    expect(hrefs[LINKS.length * 2 + 1]).toHaveTextContent(MORPHEME_TEXT)

    LINKS.forEach(({link, text}, i) => {
      expect(hrefs[i]).toHaveAttribute('href', link)
      expect(hrefs[i]).toHaveTextContent(text)
      expect(hrefs[i + 1 + LINKS.length]).toHaveAttribute('href', link)
      expect(hrefs[i + 1 + LINKS.length]).toHaveTextContent(text)
    })

    const selectedHrefs = container.getElementsByClassName('link--selected')
    expect(selectedHrefs).toHaveLength(2)
    expect(selectedHrefs[0]).toHaveTextContent('two')
    expect(selectedHrefs[1]).toHaveTextContent('two')
  })
})

async function mockDialog() {
  await moduleMocker.mock('front/common/Dialog.tsx', () => ({
    default: React.forwardRef(
      ({children}: {children: React.ReactNode}, ref) => (
        <dialog data-testid="dialog">{children}</dialog>
      )
    ),
  }))
}
