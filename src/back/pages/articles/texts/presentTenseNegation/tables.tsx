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
      <td>gelì &nbspbarì girì</td>
      <td>nègeli &nbspnèbari nègiri</td>
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
      <td>piešì &nbspdylì kentì</td>
      <td>nepiešì &nbspnedylì nekentì</td>
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
      <td>kéiki &nbspléidi tvóji</td>
      <td>nekéiki &nbspneléidi netvóji</td>
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
      <td>tikì &nbspravì &nbspminì</td>
      <td>nètiki &nbspnèravi &nbspnèmini</td>
    </tr>
    <tr>
      <td>III</td>
      <td>tìki &nbsprãvi &nbspmìni</td>
      <td>nètiki &nbspnèravi &nbspnèmini</td>
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
      <td>gailì &nbspvilkì &nbsptylì</td>
      <td>negailì &nbspnevilkì &nbspnetylì</td>
    </tr>
    <tr>
      <td>III</td>
      <td>gaìli &nbspvil̃ki &nbsptỹli</td>
      <td>negaìli &nbspnevil̃ki &nbspnetỹli</td>
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
      <td>stóvi &nbspnóri &nbspséiki</td>
      <td>nestóvi &nbspnenóri &nbspneséiki</td>
    </tr>
    <tr>
      <td>II</td>
      <td>stóvi &nbspnóri &nbspséiki</td>
      <td>nestóvi &nbspnenóri &nbspneséiki</td>
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
        C<u>V́</u>Co &nbspC<u>Ṽ</u>Co &nbspC<u>V̆</u>Co
      </td>
      <td>
        neC<u>V́</u>Co &nbspneC<u>Ṽ</u>Co &nbspneC<u>V̆</u>Co
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
      <td>žìno &nbspsãko &nbspmãto</td>
      <td>nežìno &nbspnesãko &nbspnemãto</td>
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
      <td>rū̃ko &nbsplaĩko &nbspvaĩko</td>
      <td>nerū̃ko &nbspnelaĩko &nbspnevaĩko</td>
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
      <td>móko &nbsptáiko &nbspgliáudo</td>
      <td>nemóko &nbspnetáiko &nbspnegliáudo</td>
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
        C<u>V́</u>Co &nbspC<u>Ṽ</u>Co &nbspC<u>V̆</u>Co
      </td>
      <td>
        neC<u>V́</u>Co &nbspneC<u>Ṽ</u>Co &nbspneC<u>V̆</u>Co
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
      <td>sùko &nbsplìko &nbsptãpo</td>
      <td>nesùko &nbspnelìko &nbspnetãpo</td>
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
      <td>vil̃ko &nbspriñko &nbspgrį̃žo</td>
      <td>nevil̃ko &nbspneriñko &nbspnegrį̃žo</td>
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
      <td>áugo &nbspšóko &nbspdė́jo</td>
      <td>neáugo &nbspnešóko &nbspnedė́jo</td>
    </tr>
  </tbody>
)

////

export const pastTenseETable = () => (
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
        C<u>V́</u>Co &nbspC<u>Ṽ</u>Co &nbspC<u>V̆</u>Co
      </td>
      <td>
        neC<u>V́</u>Co &nbspneC<u>Ṽ</u>Co &nbspneC<u>V̆</u>Co
      </td>
    </tr>
  </tbody>
)

export const pastTenseEShortTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>sakiaũ mečiaũ gimiaũ</td>
      <td>neáugau nešókau nedė́jau</td>
    </tr>
    <tr>
      <td>II</td>
      <td>sukaĩ likaĩ tapaĩ</td>
      <td>nesukaĩ nelikaĩ netapaĩ</td>
    </tr>
    <tr>
      <td>III</td>
      <td>sùko &nbsplìko &nbsptãpo</td>
      <td>nesùko &nbspnelìko &nbspnetãpo</td>
    </tr>
  </tbody>
)

export const pastTenseECircumflexTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>vilkaũ ėjaũ grįžaũ</td>
      <td>nevilkaũ neėjaũ negrįžaũ</td>
    </tr>
    <tr>
      <td>II</td>
      <td>vilkaĩ ėjaĩ grįžaĩ</td>
      <td>nevilkaĩ neėjaĩ negrįžaĩ</td>
    </tr>
    <tr>
      <td>III</td>
      <td>vil̃ko &nbspė̃jo &nbspgrį̃žo</td>
      <td>nevil̃ko &nbspneė̃jo &nbspnegrį̃žo</td>
    </tr>
  </tbody>
)

export const pastTenseEAcuteTable = () => (
  <tbody>
    <tr>
      <td>I</td>
      <td>sakiaũ mečiaũ gimiaũ</td>
      <td>neáugau nešókau nedė́jau</td>
    </tr>
    <tr>
      <td>II</td>
      <td>áugai šókai dė́jai</td>
      <td>neáugai nešókai nedė́jai</td>
    </tr>
    <tr>
      <td>III</td>
      <td>áugo &nbspšóko &nbspdė́jo</td>
      <td>neáugo &nbspnešóko &nbspnedė́jo</td>
    </tr>
  </tbody>
)
