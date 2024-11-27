import {describe, expect, test} from 'bun:test'
import {readdir} from 'node:fs/promises'
import {FRONT_ROOT} from 'back/config.ts'

describe('*.module.css', () => {
  test('all module.css has unique id', async () => {
    const scssFilesPaths = (
      await readdir(FRONT_ROOT, {recursive: true})
    ).filter((fileName) => fileName.endsWith('.module.scss'))
    for (const fileName of scssFilesPaths) {
      const file = await Bun.file(`${FRONT_ROOT}/${fileName}`).text()
      expect(file).toInclude(`$uniqueId: unique-id();
/* #{$uniqueId} */`)
    }
  })
})
