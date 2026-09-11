import {type ReactNode} from 'react'
import {ALTERNATES_TYPE} from 'src/commons/alternate'
import {generateCaptions} from 'src/pages/articles/texts/presentTenseNegation/utils'
import {articleTranslations} from 'src/translations/articles/presentTenseNegation'

export function Table({
  children,
  caption,
}: {
  children: ReactNode
  caption: string
}) {
  return (
    <table className="outside inside ipa-monospace">
      <caption className="center default-font">{caption}</caption>
      {children}
    </table>
  )
}

export const mr = <span className="mobile-break" />

export const PresentTenseATable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>
        C<u>V́</u>Cu CṼC<u>u</u> CV̆C<u>u</u>
      </td>
      <td>
        neC<u>V́</u>Cu neCṼC<u>u</u> <u>ne</u>CV̆Cu
      </td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        C<u>V́</u>Ci CṼC<u>i</u> CV̆C<u>i</u>
      </td>
      <td>
        neC<u>V́</u>Ci neCṼC<u>i</u> <u>ne</u>CV̆Ci
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        C<u>V́</u>Ca C<u>Ṽ</u>Ca C<u>V̆</u>Ca
      </td>
      <td>
        neC<u>V́</u>Ca neC<u>Ṽ</u>Ca <u>ne</u>CV̆Ca
      </td>
    </tr>
  </tbody>
)

export const PresentTenseAShortTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>geliù barù giriù</td>
      <td>nègeliu nèbaru nègiriu</td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        gelì {mr}
        barì girì
      </td>
      <td>
        nègeli {mr}
        nèbari nègiri
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>gẽlia bãra gìria</td>
      <td>nègelia nèbara nègiria</td>
    </tr>
  </tbody>
)

export const PresentTenseACircumflexTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>piešiù dylù kenčiù</td>
      <td>nepiešiù nedylù nekenčiù</td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        piešì {mr}
        dylì kentì
      </td>
      <td>
        nepiešì {mr}
        nedylì nekentì
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>piẽšia dỹla keñčia</td>
      <td>nepiẽšia nedỹla nekeñčia</td>
    </tr>
  </tbody>
)

export const PresentTenseAAcuteTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>kéikiu léidžiu tvóju</td>
      <td>nekéikiu neléidžiu netvóju</td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        kéiki {mr}
        léidi {mr} tvóji
      </td>
      <td>
        nekéiki {mr}
        neléidi {mr} netvóji
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>kéikia léidžia tvója</td>
      <td>nekéikia neléidžia netvója</td>
    </tr>
  </tbody>
)

////////

export const PresentTenseITable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>
        C<u>V́</u>Cu CṼC<u>u</u> CV̆C<u>u</u>
      </td>
      <td>
        neC<u>V́</u>Cu neCṼC<u>u</u> <u>ne</u>CV̆Cu
      </td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        C<u>V́</u>Ci CṼC<u>i</u> CV̆C<u>i</u>
      </td>
      <td>
        neC<u>V́</u>Ci neCṼC<u>i</u> <u>ne</u>CV̆Ci
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        C<u>V́</u>Ci C<u>Ṽ</u>Ci C<u>V̆</u>Ci
      </td>
      <td>
        neC<u>V́</u>Ci neC<u>Ṽ</u>Ci <u>ne</u>CV̆Ci
      </td>
    </tr>
  </tbody>
)

export const PresentTenseIShortTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>tikiù raviù miniù</td>
      <td>nètikiu nèraviu nèminiu</td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        tikì {mr}
        ravì {mr}
        minì
      </td>
      <td>
        nètiki {mr}
        nèravi {mr}
        nèmini
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        tìki {mr}
        rãvi {mr}
        mìni
      </td>
      <td>
        nètiki {mr}
        nèravi {mr}
        nèmini
      </td>
    </tr>
  </tbody>
)

export const PresentTenseICircumflexTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>gailiù vilkiù tyliù</td>
      <td>negailiù nevilkiù netyliù</td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        gailì {mr}
        vilkì {mr}
        tylì
      </td>
      <td>
        negailì {mr}
        nevilkì {mr}
        netylì
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        gaìli {mr}
        vil̃ki {mr}
        tỹli
      </td>
      <td>
        negaìli {mr}
        nevil̃ki {mr}
        netỹli
      </td>
    </tr>
  </tbody>
)

export const PresentTenseIAcuteTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>stóviu nóriu séikiu</td>
      <td>nestóviu nenóriu neséikiu</td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        stóvi {mr}
        nóri {mr}
        séiki
      </td>
      <td>
        nestóvi {mr}
        nenóri {mr}
        neséiki
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        stóvi {mr}
        nóri {mr}
        séiki
      </td>
      <td>
        nestóvi {mr}
        nenóri {mr}
        neséiki
      </td>
    </tr>
  </tbody>
)

////////

export const PresentTenseOTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>
        C<u>V́</u>Cau CṼC<u>au</u> CV̆C<u>au</u>
      </td>
      <td>
        neC<u>V́</u>Cau neCṼC<u>au</u> neCV̆C<u>au</u>
      </td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        C<u>V́</u>Cai CṼC<u>ai</u> CV̆C<u>ai</u>
      </td>
      <td>
        neC<u>V́</u>Cai neCṼC<u>ai</u> neCV̆C<u>ai</u>
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        C<u>V́</u>Co {mr}C<u>Ṽ</u>Co {mr}C<u>V̆</u>Co
      </td>
      <td>
        neC<u>V́</u>Co {mr}
        neC<u>Ṽ</u>Co {mr}
        neC<u>V̆</u>Co
      </td>
    </tr>
  </tbody>
)

export const PresentTenseOShortTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>žinaũ sakaũ mataũ</td>
      <td>nežinaũ nesakaũ nemataũ</td>
    </tr>
    <tr>
      <td>II</td>
      <td>žinaĩ sakaĩ mataĩ</td>
      <td>nežinaĩ nesakaĩ nemataĩ</td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        žìno {mr}
        sãko {mr}
        mãto
      </td>
      <td>
        nežìno {mr}
        nesãko {mr}
        nemãto
      </td>
    </tr>
  </tbody>
)

export const PresentTenseOCircumflexTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>rūkaũ laikaũ vaikaũ</td>
      <td>nerūkaũ nelaikaũ nevaikaũ</td>
    </tr>
    <tr>
      <td>II</td>
      <td>rūkaĩ laikaĩ vaikaĩ</td>
      <td>nerūkaĩ nelaikaĩ nevaikaĩ</td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        rū̃ko {mr}
        laĩko {mr}
        vaĩko
      </td>
      <td>
        nerū̃ko {mr}
        nelaĩko {mr}
        nevaĩko
      </td>
    </tr>
  </tbody>
)

export const PresentTenseOAcuteTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>mókau táikau gliáudau</td>
      <td>nemókau netáikau negliáudau</td>
    </tr>
    <tr>
      <td>II</td>
      <td>mókai táikai gliáudai</td>
      <td>nemókai netáikai negliáudai</td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        móko {mr}
        táiko {mr}
        gliáudo
      </td>
      <td>
        nemóko {mr}
        netáiko {mr}
        negliáudo
      </td>
    </tr>
  </tbody>
)

///////

export const PastTenseYtiTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>
        C<u>V́</u>Ciau CṼC<u>iaũ</u> CV̆C<u>iaũ</u>
      </td>
      <td>
        neC<u>V́</u>Ciau neCṼC<u>iaũ</u> neCV̆C<u>iaũ</u>
      </td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        C<u>V́</u>Cei {mr}
        CṼC<u>eĩ</u> {mr}
        CV̆C<u>eĩ</u>
      </td>
      <td>
        neC<u>V́</u>Cei {mr}
        neCṼC<u>eĩ</u> {mr}
        neCV̆C<u>eĩ</u>
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        C<u>V́</u>Cė {mr} C<u>Ṽ</u>Cė {mr} C<u>V̆</u>Cė
      </td>
      <td>
        neC<u>V́</u>Cė {mr} neC<u>Ṽ</u>Cė {mr} neC<u>V̆</u>Cė
      </td>
    </tr>
  </tbody>
)

export const PastTenseYtiShortTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>sakiaũ žudžiaũ lipdžiaũ</td>
      <td>nesakiaũ nežudžiaũ nelipdžiaũ</td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        sakeĩ {mr}
        žudeĩ {mr} lipdeĩ
      </td>
      <td>
        nesakeĩ {mr}
        nežudeĩ {mr} nelipdeĩ
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        sãkė {mr} žùdė {mr}
        {mr} lìpdė
      </td>
      <td>
        nesãkė {mr} nežùdė {mr}
        {mr} nelìpdė
      </td>
    </tr>
  </tbody>
)

export const PastTenseYtiCircumflexTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>kinkiaũ tąsiaũ lipdžiaũ</td>
      <td>nekinkiaũ netąsiaũ nelipdžiaũ</td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        kinkeĩ {mr}
        tąseĩ {mr}
        lipdeĩ
      </td>
      <td>
        nekinkeĩ {mr}
        netąseĩ {mr}
        nelipdeĩ
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        kiñkė {mr} tą̃sė {mr} kam̃šė
      </td>
      <td>
        nekiñkė {mr} netą̃sė {mr} nekam̃šė
      </td>
    </tr>
  </tbody>
)

export const PastTenseYtiAcuteTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>ródžiau skáidžiau mė́čiau</td>
      <td>neródžiau neskáidžiau nemė́čiau</td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        ródei {mr} skáidei {mr} mė́tei
      </td>
      <td>
        neródei {mr} neskáidei {mr} nemė́tei
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        ródė {mr}
        {mr} skáidė {mr}
        {mr} mė́tė
      </td>
      <td>
        neródė {mr}
        {mr} neskáidė {mr}
        {mr} nemė́tė
      </td>
    </tr>
  </tbody>
)

///////

export const PastTenseOTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>
        C<u>V́</u>Cau CṼC<u>au</u> CV̆C<u>au</u>
      </td>
      <td>
        neC<u>V́</u>Cau neCṼC<u>au</u> neCV̆C<u>au</u>
      </td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        C<u>V́</u>Cai CṼC<u>ai</u> CV̆C<u>ai</u>
      </td>
      <td>
        neC<u>V́</u>Cai neCṼC<u>ai</u> neCV̆C<u>ai</u>
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        C<u>V́</u>Co {mr}C<u>Ṽ</u>Co {mr}C<u>V̆</u>Co
      </td>
      <td>
        neC<u>V́</u>Co {mr}
        neC<u>Ṽ</u>Co {mr}
        neC<u>V̆</u>Co
      </td>
    </tr>
  </tbody>
)

export const PastTenseOShortTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>sukaũ likaũ tapaũ</td>
      <td>nesukaũ nelikaũ netapaũ</td>
    </tr>
    <tr>
      <td>II</td>
      <td>sukaĩ likaĩ tapaĩ</td>
      <td>nesukaĩ nelikaĩ netapaĩ</td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        sùko {mr}
        lìko {mr}
        tãpo
      </td>
      <td>
        nesùko {mr}
        nelìko {mr}
        netãpo
      </td>
    </tr>
  </tbody>
)

export const PastTenseOCircumflexTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>vilkaũ rinkaũ grįžaũ</td>
      <td>nevilkaũ nerinkaũ negrįžaũ</td>
    </tr>
    <tr>
      <td>II</td>
      <td>vilkaĩ rinkaĩ grįžaĩ</td>
      <td>nevilkaĩ nerinkaĩ negrįžaĩ</td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        vil̃ko {mr}
        riñko {mr}
        grį̃žo
      </td>
      <td>
        nevil̃ko {mr}
        neriñko {mr}
        negrį̃žo
      </td>
    </tr>
  </tbody>
)

export const PastTenseOAcuteTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>áugau šókau dė́jau</td>
      <td>neáugau nešókau nedė́jau</td>
    </tr>
    <tr>
      <td>II</td>
      <td>áugai šókai dė́jai</td>
      <td>neáugai nešókai nedė́jai</td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        áugo {mr}
        šóko {mr}
        dė́jo
      </td>
      <td>
        neáugo {mr}
        nešóko {mr}
        nedė́jo
      </td>
    </tr>
  </tbody>
)

////

export const PastTenseETable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>
        C<u>V́</u>Ciau CVC<u>iaũ</u> CV̆C<u>iaũ</u>
      </td>
      <td>
        neC<u>V́</u>Ciau <u>ne</u>CṼCiau <u>ne</u>CV̆Ciau
      </td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        C<u>V́</u>Cei {mr}
        CṼC<u>eĩ</u> {mr}
        CV̆C<u>eĩ</u>
      </td>
      <td>
        neC<u>V́</u>Cei {mr}
        <u>ne</u>CṼCeĩ {mr}
        <u>ne</u>CV̆Ceĩ
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        C<u>V́</u>Cė {mr} C<u>Ṽ</u>Cė {mr} C<u>V̆</u>Cė
      </td>
      <td>
        neC<u>V́</u>Cė {mr} <u>ne</u>CṼCė {mr} <u>ne</u>CV̆Cė
      </td>
    </tr>
  </tbody>
)

export const PastTenseEShortTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>lakiaũ mečiaũ gimiaũ</td>
      <td>nèlakiau nèmečiau nègimiau</td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        lakeĩ {mr}
        meteĩ {mr}
        gimeĩ
      </td>
      <td>
        nèlakei {mr}
        nèmetei {mr}
        nègimei
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        lãkė {mr} mẽtė {mr} gìmė
      </td>
      <td>
        nèlakė {mr} nèmetė {mr} nègimė
      </td>
    </tr>
  </tbody>
)

export const PastTenseECircumflexTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>rėkiaũ kenkiaũ vogiaũ</td>
      <td>nèrėkiau nèkenkiau nèvogiau</td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        rėkeĩ {mr}
        kenkeĩ {mr}
        vogeĩ
      </td>
      <td>
        nèrėkei {mr}
        nèkenkei {mr}
        nèvogei
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        rė̃kė {mr} keñkė {mr} võgė
      </td>
      <td>
        nèrėkė {mr} nèkenkė {mr} nèvogė
      </td>
    </tr>
  </tbody>
)

export const PastTenseEAcuteTable = (
  <tbody>
    <tr>
      <td>I</td>
      <td>gė́liau kéikiau mýniau</td>
      <td>negė́liau nekéikiau nemýniau</td>
    </tr>
    <tr>
      <td>II</td>
      <td>
        gė́lei {mr}
        kéikei {mr}
        mýnei
      </td>
      <td>
        negė́lei {mr}
        nekéikei {mr}
        nemýnei
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        gė́lė {mr} kéikė {mr} mýnė
      </td>
      <td>
        negė́lė {mr} nekéikė {mr} nemýnė
      </td>
    </tr>
  </tbody>
)

export function Details({
  summaryCaption,
  summary,
  shortCaption,
  short,
  circumflexCaption,
  circumflex,
  acuteCaption,
  acute,
}: {
  summaryCaption: string
  summary: ReactNode
  shortCaption: string
  short: ReactNode
  circumflexCaption: string
  circumflex: ReactNode
  acuteCaption: string
  acute: ReactNode
}) {
  return (
    <details>
      <summary>
        <Table caption={summaryCaption}>{summary}</Table>
      </summary>
      <div>
        <br />
        <Table caption={shortCaption}>{short}</Table>
        <br />
        <Table caption={circumflexCaption}>{circumflex}</Table>
        <br />
        <Table caption={acuteCaption}>{acute}</Table>
      </div>
    </details>
  )
}

export function PresentTables({locale}: {locale: ALTERNATES_TYPE}) {
  return (
    <>
      <Details
        {...generateCaptions(locale, articleTranslations.aCaption)}
        summary={PresentTenseATable}
        short={PresentTenseAShortTable}
        circumflex={PresentTenseACircumflexTable}
        acute={PresentTenseAAcuteTable}
      />
      <Details
        {...generateCaptions(locale, articleTranslations.iCaption)}
        summary={PresentTenseITable}
        short={PresentTenseIShortTable}
        circumflex={PresentTenseICircumflexTable}
        acute={PresentTenseIAcuteTable}
      />
      <Details
        {...generateCaptions(locale, articleTranslations.oCaption)}
        summary={PresentTenseOTable}
        short={PresentTenseOShortTable}
        circumflex={PresentTenseOCircumflexTable}
        acute={PresentTenseOAcuteTable}
      />
    </>
  )
}

export function PastTables({locale}: {locale: ALTERNATES_TYPE}) {
  return (
    <>
      <Details
        {...generateCaptions(locale, articleTranslations.eCaption)}
        summary={PastTenseETable}
        short={PastTenseEShortTable}
        circumflex={PastTenseECircumflexTable}
        acute={PastTenseEAcuteTable}
      />
      <Details
        {...generateCaptions(locale, articleTranslations.ytiCaption)}
        summary={PastTenseYtiTable}
        short={PastTenseYtiShortTable}
        circumflex={PastTenseYtiCircumflexTable}
        acute={PastTenseYtiAcuteTable}
      />
      <Details
        {...generateCaptions(locale, articleTranslations.oCaption)}
        summary={PastTenseOTable}
        short={PastTenseOShortTable}
        circumflex={PastTenseOCircumflexTable}
        acute={PastTenseOAcuteTable}
      />
    </>
  )
}
