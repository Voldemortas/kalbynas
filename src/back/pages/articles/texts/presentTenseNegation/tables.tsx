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

export const presentTenseATable = () => (
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

export const presentTenseAShortTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>geliù barù giriù</td>
      <td>nègeliu nèbaru nègiriu</td>
    </tr>
    <tr>
      <td>II</td>
      <td>gelì &nbsp;barì girì</td>
      <td>nègeli &nbsp;nèbari nègiri</td>
    </tr>
    <tr>
      <td>III</td>
      <td>gẽlia bãra gìria</td>
      <td>nègelia nèbara nègiria</td>
    </tr>
  </tbody>
)

export const presentTenseACircumflexTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>piešiù dylù kenčiù</td>
      <td>nepiešiù nedylù nekenčiù</td>
    </tr>
    <tr>
      <td>II</td>
      <td>piešì &nbsp;dylì kentì</td>
      <td>nepiešì &nbsp;nedylì nekentì</td>
    </tr>
    <tr>
      <td>III</td>
      <td>piẽšia dỹla keñčia</td>
      <td>nepiẽšia nedỹla nekeñčia</td>
    </tr>
  </tbody>
)

export const presentTenseAAcuteTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>kéikiu léidžiu tvóju</td>
      <td>nekéikiu neléidžiu netvóju</td>
    </tr>
    <tr>
      <td>II</td>
      <td>kéiki &nbsp;léidi tvóji</td>
      <td>nekéiki &nbsp;neléidi netvóji</td>
    </tr>
    <tr>
      <td>III</td>
      <td>kéikia léidžia tvója</td>
      <td>nekéikia neléidžia netvója</td>
    </tr>
  </tbody>
)

////////

export const presentTenseITable = () => (
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

export const presentTenseIShortTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>tikiù raviù miniù</td>
      <td>nètikiu nèraviu nèminiu</td>
    </tr>
    <tr>
      <td>II</td>
      <td>tikì &nbsp;ravì &nbsp;minì</td>
      <td>nètiki &nbsp;nèravi &nbsp;nèmini</td>
    </tr>
    <tr>
      <td>III</td>
      <td>tìki &nbsp;rãvi &nbsp;mìni</td>
      <td>nètiki &nbsp;nèravi &nbsp;nèmini</td>
    </tr>
  </tbody>
)

export const presentTenseICircumflexTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>gailiù vilkiù tyliù</td>
      <td>negailiù nevilkiù netyliù</td>
    </tr>
    <tr>
      <td>II</td>
      <td>gailì &nbsp;vilkì &nbsp;tylì</td>
      <td>negailì &nbsp;nevilkì &nbsp;netylì</td>
    </tr>
    <tr>
      <td>III</td>
      <td>gaìli &nbsp;vil̃ki &nbsp;tỹli</td>
      <td>negaìli &nbsp;nevil̃ki &nbsp;netỹli</td>
    </tr>
  </tbody>
)

export const presentTenseIAcuteTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>stóviu nóriu séikiu</td>
      <td>nestóviu nenóriu neséikiu</td>
    </tr>
    <tr>
      <td>II</td>
      <td>stóvi &nbsp;nóri &nbsp;séiki</td>
      <td>nestóvi &nbsp;nenóri &nbsp;neséiki</td>
    </tr>
    <tr>
      <td>III</td>
      <td>stóvi &nbsp;nóri &nbsp;séiki</td>
      <td>nestóvi &nbsp;nenóri &nbsp;neséiki</td>
    </tr>
  </tbody>
)

////////

export const presentTenseOTable = () => (
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
        C<u>V́</u>Co &nbsp;C<u>Ṽ</u>Co &nbsp;C<u>V̆</u>Co
      </td>
      <td>
        neC<u>V́</u>Co &nbsp;neC<u>Ṽ</u>Co &nbsp;neC<u>V̆</u>Co
      </td>
    </tr>
  </tbody>
)

export const presentTenseOShortTable = () => (
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
      <td>žìno &nbsp;sãko &nbsp;mãto</td>
      <td>nežìno &nbsp;nesãko &nbsp;nemãto</td>
    </tr>
  </tbody>
)

export const presentTenseOCircumflexTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>rūkaũ laikaũ vaikaũ</td>
      <td>negailiù nevilkiù netyliù</td>
    </tr>
    <tr>
      <td>II</td>
      <td>rūkaĩ laikaĩ vaikaĩ</td>
      <td>nerūkaĩ nelaikaĩ nevaikaĩ</td>
    </tr>
    <tr>
      <td>III</td>
      <td>rū̃ko &nbsp;laĩko &nbsp;vaĩko</td>
      <td>nerū̃ko &nbsp;nelaĩko &nbsp;nevaĩko</td>
    </tr>
  </tbody>
)

export const presentTenseOAcuteTable = () => (
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
      <td>móko &nbsp;táiko &nbsp;gliáudo</td>
      <td>nemóko &nbsp;netáiko &nbsp;negliáudo</td>
    </tr>
  </tbody>
)

///////

export const pastTenseYtiTable = () => (
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
        C<u>V́</u>Cei &nbsp;CṼC<u>eĩ</u> &nbsp;CV̆C<u>eĩ</u>
      </td>
      <td>
        neC<u>V́</u>Cei &nbsp;neCṼC<u>eĩ</u> &nbsp;neCV̆C<u>eĩ</u>
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        C<u>V́</u>Cė &nbsp; C<u>Ṽ</u>Cė &nbsp; C<u>V̆</u>Cė
      </td>
      <td>
        neC<u>V́</u>Cė &nbsp; neC<u>Ṽ</u>Cė &nbsp; neC<u>V̆</u>Cė
      </td>
    </tr>
  </tbody>
)

export const pastTenseYtiShortTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>sakiaũ žudžiaũ lipdžiaũ</td>
      <td>nesakiaũ nežudžiaũ nelipdžiaũ</td>
    </tr>
    <tr>
      <td>II</td>
      <td>sakeĩ &nbsp;žudeĩ &nbsp; lipdeĩ</td>
      <td>nesakeĩ &nbsp;nežudeĩ &nbsp; nelipdeĩ</td>
    </tr>
    <tr>
      <td>III</td>
      <td>sãkė &nbsp; žùdė &nbsp;&nbsp; lìpdė</td>
      <td>nesãkė &nbsp; nežùdė &nbsp;&nbsp; nelìpdė</td>
    </tr>
  </tbody>
)

export const pastTenseYtiCircumflexTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>kinkiaũ tąsiaũ lipdžiaũ</td>
      <td>nekinkiaũ netąsiaũ nelipdžiaũ</td>
    </tr>
    <tr>
      <td>II</td>
      <td>kinkeĩ &nbsp;tąseĩ &nbsp;lipdeĩ</td>
      <td>nekinkeĩ &nbsp;netąseĩ &nbsp;nelipdeĩ</td>
    </tr>
    <tr>
      <td>III</td>
      <td>kiñkė &nbsp; tą̃sė &nbsp; kam̃šė</td>
      <td>nekiñkė &nbsp; netą̃sė &nbsp; nekam̃šė</td>
    </tr>
  </tbody>
)

export const pastTenseYtiAcuteTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>ródžiau skáidžiau mė́čiau</td>
      <td>neródžiau neskáidžiau nemė́čiau</td>
    </tr>
    <tr>
      <td>II</td>
      <td>ródei &nbsp; skáidei &nbsp; mė́tei</td>
      <td>neródei &nbsp; neskáidei &nbsp; nemė́tei</td>
    </tr>
    <tr>
      <td>III</td>
      <td>ródė &nbsp;&nbsp; skáidė &nbsp;&nbsp; mė́tė</td>
      <td>neródė &nbsp;&nbsp; neskáidė &nbsp;&nbsp; nemė́tė</td>
    </tr>
  </tbody>
)

///////

export const pastTenseOTable = () => (
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
        C<u>V́</u>Co &nbsp;C<u>Ṽ</u>Co &nbsp;C<u>V̆</u>Co
      </td>
      <td>
        neC<u>V́</u>Co &nbsp;neC<u>Ṽ</u>Co &nbsp;neC<u>V̆</u>Co
      </td>
    </tr>
  </tbody>
)

export const pastTenseOShortTable = () => (
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
      <td>sùko &nbsp;lìko &nbsp;tãpo</td>
      <td>nesùko &nbsp;nelìko &nbsp;netãpo</td>
    </tr>
  </tbody>
)

export const pastTenseOCircumflexTable = () => (
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
      <td>vil̃ko &nbsp;riñko &nbsp;grį̃žo</td>
      <td>nevil̃ko &nbsp;neriñko &nbsp;negrį̃žo</td>
    </tr>
  </tbody>
)

export const pastTenseOAcuteTable = () => (
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
      <td>áugo &nbsp;šóko &nbsp;dė́jo</td>
      <td>neáugo &nbsp;nešóko &nbsp;nedė́jo</td>
    </tr>
  </tbody>
)

////

export const pastTenseETable = () => (
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
        C<u>V́</u>Cei &nbsp;CṼC<u>eĩ</u> &nbsp;CV̆C<u>eĩ</u>
      </td>
      <td>
        neC<u>V́</u>Cei &nbsp;<u>ne</u>CṼCeĩ &nbsp;<u>ne</u>CV̆Ceĩ
      </td>
    </tr>
    <tr>
      <td>III</td>
      <td>
        C<u>V́</u>Cė &nbsp; C<u>Ṽ</u>Cė &nbsp; C<u>V̆</u>Cė
      </td>
      <td>
        neC<u>V́</u>Cė &nbsp; <u>ne</u>CṼCė &nbsp; <u>ne</u>CV̆Cė
      </td>
    </tr>
  </tbody>
)

export const pastTenseEShortTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>lakiaũ mečiaũ gimiaũ</td>
      <td>nèlakiau nèmečiau nègimiau</td>
    </tr>
    <tr>
      <td>II</td>
      <td>lakeĩ &nbsp;meteĩ &nbsp;gimeĩ</td>
      <td>nèlakei &nbsp;nèmetei &nbsp;nègimei</td>
    </tr>
    <tr>
      <td>III</td>
      <td>lãkė &nbsp; mẽtė &nbsp; gìmė</td>
      <td>nèlakė &nbsp; nèmetė &nbsp; nègimė</td>
    </tr>
  </tbody>
)

export const pastTenseECircumflexTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>rėkiaũ kenkiaũ vogiaũ</td>
      <td>nèrėkiau nèkenkiau nèvogiau</td>
    </tr>
    <tr>
      <td>II</td>
      <td>rėkeĩ &nbsp;kenkeĩ &nbsp;vogeĩ</td>
      <td>nèrėkei &nbsp;nèkenkei &nbsp;nèvogei</td>
    </tr>
    <tr>
      <td>III</td>
      <td>rė̃kė &nbsp; keñkė &nbsp; võgė</td>
      <td>nèrėkė &nbsp; nèkenkė &nbsp; nèvogė</td>
    </tr>
  </tbody>
)

export const pastTenseEAcuteTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>gė́liau kéikiau mýniau</td>
      <td>negė́liau nekéikiau nemýniau</td>
    </tr>
    <tr>
      <td>II</td>
      <td>gė́lei &nbsp;kéikei &nbsp;mýnei</td>
      <td>negė́lei &nbsp;nekéikei &nbsp;nemýnei</td>
    </tr>
    <tr>
      <td>III</td>
      <td>gė́lė &nbsp; kéikė &nbsp; mýnė</td>
      <td>negė́lė &nbsp; nekéikė &nbsp; nemýnė</td>
    </tr>
  </tbody>
)
