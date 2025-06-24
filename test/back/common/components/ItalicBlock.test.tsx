import ItalicBlock from 'back/pages/common/components/ItalicBlock.tsx'
import {describe, expect, it} from 'bun:test'
import {renderToStaticMarkup} from 'react-dom/server'

describe('<ItalicBlock />', () => {
  it('should render text with correct stylings', () => {
    const result = renderToStaticMarkup(ItalicBlock('textToBePresent'))
    expect(result).toEqualIgnoringWhitespace(
      '<i style="text-wrap:nowrap">textToBePresent</i>'
    )
  })
})
