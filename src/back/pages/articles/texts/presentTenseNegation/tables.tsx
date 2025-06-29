import type {ReactNode} from 'react'
import {renderToStaticMarkup} from 'react-dom/server'

export const table = ({
  table,
  caption,
}: {
  table: JSX.Element
  caption: string
}) => (
  <table className="outside inside ipa-monospace">
    <caption className="center default-font">{caption}</caption>
    {table}
  </table>
)

export const MobileTd = ({children}: {children: ReactNode}) => {
  const stackMarkup = renderToStaticMarkup(children).replaceAll(
    /\s+/g,
    '<br />'
  )
  return (
    <td>
      <span
        className="sr-view"
        dangerouslySetInnerHTML={{__html: stackMarkup}}
      />
      <span className="desktop-view">{children}</span>
    </td>
  )
}

export const presentTenseATable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>
        C<u>V́</u>Cu CṼC<u>u</u> CV̆C<u>u</u>
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Cu neCṼC<u>u</u> <u>ne</u>CV̆Cu
      </MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>
        C<u>V́</u>Ci CṼC<u>i</u> CV̆C<u>i</u>
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Ci neCṼC<u>i</u> <u>ne</u>CV̆Ci
      </MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>
        C<u>V́</u>Ca C<u>Ṽ</u>Ca C<u>V̆</u>Ca
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Ca neC<u>Ṽ</u>Ca <u>ne</u>CV̆Ca
      </MobileTd>
    </tr>
  </tbody>
)

export const presentTenseAShortTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>geliù barù giriù</MobileTd>
      <MobileTd>nègeliu nèbaru nègiriu</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>gelì &nbsp;barì girì</MobileTd>
      <MobileTd>nègeli &nbsp;nèbari nègiri</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>gẽlia bãra gìria</MobileTd>
      <MobileTd>nègelia nèbara nègiria</MobileTd>
    </tr>
  </tbody>
)

export const presentTenseACircumflexTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>piešiù dylù kenčiù</MobileTd>
      <MobileTd>nepiešiù nedylù nekenčiù</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>piešì &nbsp;dylì kentì</MobileTd>
      <MobileTd>nepiešì &nbsp;nedylì nekentì</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>piẽšia dỹla keñčia</MobileTd>
      <MobileTd>nepiẽšia nedỹla nekeñčia</MobileTd>
    </tr>
  </tbody>
)

export const presentTenseAAcuteTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>kéikiu léidžiu tvóju</MobileTd>
      <MobileTd>nekéikiu neléidžiu netvóju</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>kéiki &nbsp;léidi tvóji</MobileTd>
      <MobileTd>nekéiki &nbsp;neléidi netvóji</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>kéikia léidžia tvója</MobileTd>
      <MobileTd>nekéikia neléidžia netvója</MobileTd>
    </tr>
  </tbody>
)

////////

export const presentTenseITable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>
        C<u>V́</u>Cu CṼC<u>u</u> CV̆C<u>u</u>
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Cu neCṼC<u>u</u> <u>ne</u>CV̆Cu
      </MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>
        C<u>V́</u>Ci CṼC<u>i</u> CV̆C<u>i</u>
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Ci neCṼC<u>i</u> <u>ne</u>CV̆Ci
      </MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>
        C<u>V́</u>Ci C<u>Ṽ</u>Ci C<u>V̆</u>Ci
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Ci neC<u>Ṽ</u>Ci <u>ne</u>CV̆Ci
      </MobileTd>
    </tr>
  </tbody>
)

export const presentTenseIShortTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>tikiù raviù miniù</MobileTd>
      <MobileTd>nètikiu nèraviu nèminiu</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>tikì &nbsp;ravì &nbsp;minì</MobileTd>
      <MobileTd>nètiki &nbsp;nèravi &nbsp;nèmini</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>tìki &nbsp;rãvi &nbsp;mìni</MobileTd>
      <MobileTd>nètiki &nbsp;nèravi &nbsp;nèmini</MobileTd>
    </tr>
  </tbody>
)

export const presentTenseICircumflexTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>gailiù vilkiù tyliù</MobileTd>
      <MobileTd>negailiù nevilkiù netyliù</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>gailì &nbsp;vilkì &nbsp;tylì</MobileTd>
      <MobileTd>negailì &nbsp;nevilkì &nbsp;netylì</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>gaìli &nbsp;vil̃ki &nbsp;tỹli</MobileTd>
      <MobileTd>negaìli &nbsp;nevil̃ki &nbsp;netỹli</MobileTd>
    </tr>
  </tbody>
)

export const presentTenseIAcuteTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>stóviu nóriu séikiu</MobileTd>
      <MobileTd>nestóviu nenóriu neséikiu</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>stóvi &nbsp;nóri &nbsp;séiki</MobileTd>
      <MobileTd>nestóvi &nbsp;nenóri &nbsp;neséiki</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>stóvi &nbsp;nóri &nbsp;séiki</MobileTd>
      <MobileTd>nestóvi &nbsp;nenóri &nbsp;neséiki</MobileTd>
    </tr>
  </tbody>
)

////////

export const presentTenseOTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>
        C<u>V́</u>Cau CṼC<u>au</u> CV̆C<u>au</u>
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Cau neCṼC<u>au</u> neCV̆C<u>au</u>
      </MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>
        C<u>V́</u>Cai CṼC<u>ai</u> CV̆C<u>ai</u>
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Cai neCṼC<u>ai</u> neCV̆C<u>ai</u>
      </MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>
        C<u>V́</u>Co &nbsp;C<u>Ṽ</u>Co &nbsp;C<u>V̆</u>Co
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Co &nbsp;neC<u>Ṽ</u>Co &nbsp;neC<u>V̆</u>Co
      </MobileTd>
    </tr>
  </tbody>
)

export const presentTenseOShortTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>žinaũ sakaũ mataũ</MobileTd>
      <MobileTd>nežinaũ nesakaũ nemataũ</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>žinaĩ sakaĩ mataĩ</MobileTd>
      <MobileTd>nežinaĩ nesakaĩ nemataĩ</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>žìno &nbsp;sãko &nbsp;mãto</MobileTd>
      <MobileTd>nežìno &nbsp;nesãko &nbsp;nemãto</MobileTd>
    </tr>
  </tbody>
)

export const presentTenseOCircumflexTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>rūkaũ laikaũ vaikaũ</MobileTd>
      <MobileTd>negailiù nevilkiù netyliù</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>rūkaĩ laikaĩ vaikaĩ</MobileTd>
      <MobileTd>nerūkaĩ nelaikaĩ nevaikaĩ</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>rū̃ko &nbsp;laĩko &nbsp;vaĩko</MobileTd>
      <MobileTd>nerū̃ko &nbsp;nelaĩko &nbsp;nevaĩko</MobileTd>
    </tr>
  </tbody>
)

export const presentTenseOAcuteTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>mókau táikau gliáudau</MobileTd>
      <MobileTd>nemókau netáikau negliáudau</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>mókai táikai gliáudai</MobileTd>
      <MobileTd>nemókai netáikai negliáudai</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>móko &nbsp;táiko &nbsp;gliáudo</MobileTd>
      <MobileTd>nemóko &nbsp;netáiko &nbsp;negliáudo</MobileTd>
    </tr>
  </tbody>
)

///////

export const pastTenseYtiTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>
        C<u>V́</u>Ciau CṼC<u>iaũ</u> CV̆C<u>iaũ</u>
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Ciau neCṼC<u>iaũ</u> neCV̆C<u>iaũ</u>
      </MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>
        C<u>V́</u>Cei &nbsp;CṼC<u>eĩ</u> &nbsp;CV̆C<u>eĩ</u>
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Cei &nbsp;neCṼC<u>eĩ</u> &nbsp;neCV̆C<u>eĩ</u>
      </MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>
        C<u>V́</u>Cė &nbsp; C<u>Ṽ</u>Cė &nbsp; C<u>V̆</u>Cė
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Cė &nbsp; neC<u>Ṽ</u>Cė &nbsp; neC<u>V̆</u>Cė
      </MobileTd>
    </tr>
  </tbody>
)

export const pastTenseYtiShortTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>sakiaũ žudžiaũ lipdžiaũ</MobileTd>
      <MobileTd>nesakiaũ nežudžiaũ nelipdžiaũ</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>sakeĩ &nbsp;žudeĩ &nbsp; lipdeĩ</MobileTd>
      <MobileTd>nesakeĩ &nbsp;nežudeĩ &nbsp; nelipdeĩ</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>
        <span className="desktop-view">
          sãkė &nbsp; žùdė &nbsp;&nbsp; lìpdė
        </span>
        <span className="sr-view">
          sãkė
          <br />
          žùdė
          <br />
          lìpdė
        </span>
      </MobileTd>
      <MobileTd>
        <span className="desktop-view">
          nesãkė &nbsp; nežùdė &nbsp;&nbsp; nelìpdė
        </span>
      </MobileTd>
    </tr>
  </tbody>
)

export const pastTenseYtiCircumflexTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>kinkiaũ tąsiaũ lipdžiaũ</MobileTd>
      <MobileTd>nekinkiaũ netąsiaũ nelipdžiaũ</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>kinkeĩ &nbsp;tąseĩ &nbsp;lipdeĩ</MobileTd>
      <MobileTd>nekinkeĩ &nbsp;netąseĩ &nbsp;nelipdeĩ</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>kiñkė &nbsp; tą̃sė &nbsp; kam̃šė</MobileTd>
      <MobileTd>nekiñkė &nbsp; netą̃sė &nbsp; nekam̃šė</MobileTd>
    </tr>
  </tbody>
)

export const pastTenseYtiAcuteTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>ródžiau skáidžiau mė́čiau</MobileTd>
      <MobileTd>neródžiau neskáidžiau nemė́čiau</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>ródei &nbsp; skáidei &nbsp; mė́tei</MobileTd>
      <MobileTd>neródei &nbsp; neskáidei &nbsp; nemė́tei</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>ródė &nbsp;&nbsp; skáidė &nbsp;&nbsp; mė́tė</MobileTd>
      <MobileTd>neródė &nbsp;&nbsp; neskáidė &nbsp;&nbsp; nemė́tė</MobileTd>
    </tr>
  </tbody>
)

///////

export const pastTenseOTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>
        C<u>V́</u>Cau CṼC<u>au</u> CV̆C<u>au</u>
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Cau neCṼC<u>au</u> neCV̆C<u>au</u>
      </MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>
        C<u>V́</u>Cai CṼC<u>ai</u> CV̆C<u>ai</u>
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Cai neCṼC<u>ai</u> neCV̆C<u>ai</u>
      </MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>
        C<u>V́</u>Co &nbsp;C<u>Ṽ</u>Co &nbsp;C<u>V̆</u>Co
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Co &nbsp;neC<u>Ṽ</u>Co &nbsp;neC<u>V̆</u>Co
      </MobileTd>
    </tr>
  </tbody>
)

export const pastTenseOShortTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>sukaũ likaũ tapaũ</MobileTd>
      <MobileTd>nesukaũ nelikaũ netapaũ</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>sukaĩ likaĩ tapaĩ</MobileTd>
      <MobileTd>nesukaĩ nelikaĩ netapaĩ</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>sùko &nbsp;lìko &nbsp;tãpo</MobileTd>
      <MobileTd>nesùko &nbsp;nelìko &nbsp;netãpo</MobileTd>
    </tr>
  </tbody>
)

export const pastTenseOCircumflexTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>vilkaũ rinkaũ grįžaũ</MobileTd>
      <MobileTd>nevilkaũ nerinkaũ negrįžaũ</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>vilkaĩ rinkaĩ grįžaĩ</MobileTd>
      <MobileTd>nevilkaĩ nerinkaĩ negrįžaĩ</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>vil̃ko &nbsp;riñko &nbsp;grį̃žo</MobileTd>
      <MobileTd>nevil̃ko &nbsp;neriñko &nbsp;negrį̃žo</MobileTd>
    </tr>
  </tbody>
)

export const pastTenseOAcuteTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>áugau šókau dė́jau</MobileTd>
      <MobileTd>neáugau nešókau nedė́jau</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>áugai šókai dė́jai</MobileTd>
      <MobileTd>neáugai nešókai nedė́jai</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>áugo &nbsp;šóko &nbsp;dė́jo</MobileTd>
      <MobileTd>neáugo &nbsp;nešóko &nbsp;nedė́jo</MobileTd>
    </tr>
  </tbody>
)

////

export const pastTenseETable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>
        C<u>V́</u>Ciau CVC<u>iaũ</u> CV̆C<u>iaũ</u>
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Ciau <u>ne</u>CṼCiau <u>ne</u>CV̆Ciau
      </MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>
        C<u>V́</u>Cei &nbsp;CṼC<u>eĩ</u> &nbsp;CV̆C<u>eĩ</u>
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Cei &nbsp;<u>ne</u>CṼCeĩ &nbsp;<u>ne</u>CV̆Ceĩ
      </MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>
        C<u>V́</u>Cė &nbsp; C<u>Ṽ</u>Cė &nbsp; C<u>V̆</u>Cė
      </MobileTd>
      <MobileTd>
        neC<u>V́</u>Cė &nbsp; <u>ne</u>CṼCė &nbsp; <u>ne</u>CV̆Cė
      </MobileTd>
    </tr>
  </tbody>
)

export const pastTenseEShortTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>lakiaũ mečiaũ gimiaũ</MobileTd>
      <MobileTd>nèlakiau nèmečiau nègimiau</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>lakeĩ &nbsp;meteĩ &nbsp;gimeĩ</MobileTd>
      <MobileTd>nèlakei &nbsp;nèmetei &nbsp;nègimei</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>lãkė &nbsp; mẽtė &nbsp; gìmė</MobileTd>
      <MobileTd>nèlakė &nbsp; nèmetė &nbsp; nègimė</MobileTd>
    </tr>
  </tbody>
)

export const pastTenseECircumflexTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>rėkiaũ kenkiaũ vogiaũ</MobileTd>
      <MobileTd>nèrėkiau nèkenkiau nèvogiau</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>rėkeĩ &nbsp;kenkeĩ &nbsp;vogeĩ</MobileTd>
      <MobileTd>nèrėkei &nbsp;nèkenkei &nbsp;nèvogei</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>rė̃kė &nbsp; keñkė &nbsp; võgė</MobileTd>
      <MobileTd>nèrėkė &nbsp; nèkenkė &nbsp; nèvogė</MobileTd>
    </tr>
  </tbody>
)

export const pastTenseEAcuteTable = () => (
  <tbody>
    <tr>
      <MobileTd>I</MobileTd>
      <MobileTd>gė́liau kéikiau mýniau</MobileTd>
      <MobileTd>negė́liau nekéikiau nemýniau</MobileTd>
    </tr>
    <tr>
      <MobileTd>II</MobileTd>
      <MobileTd>gė́lei &nbsp;kéikei &nbsp;mýnei</MobileTd>
      <MobileTd>negė́lei &nbsp;nekéikei &nbsp;nemýnei</MobileTd>
    </tr>
    <tr>
      <MobileTd>III</MobileTd>
      <MobileTd>gė́lė &nbsp; kéikė &nbsp; mýnė</MobileTd>
      <MobileTd>negė́lė &nbsp; nekéikė &nbsp; nemýnė</MobileTd>
    </tr>
  </tbody>
)
