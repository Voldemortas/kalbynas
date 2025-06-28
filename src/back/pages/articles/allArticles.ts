import {ArticleList} from './Article'
import presentTenseNegationAccentuation from './texts/presentTenseNegationAccentuation'
import simplePastTenseNegationAccentuation from './texts/simplePastTenseNegationAccentuation.ts'

const articleList = new ArticleList([
  presentTenseNegationAccentuation,
  simplePastTenseNegationAccentuation,
])

export default articleList.list
