import ItalicBlock from 'src/commons/react/ItalicBlock'
import {
  alamarVerbs,
  eilmnr,
  eilmnrVerbs,
  galetiTuretiVerbs,
} from 'src/pages/articles/texts/presentTenseNegation/utils'
import {
  PresentTables,
  PastTables,
} from 'src/pages/articles/texts/presentTenseNegation/tables'
import ReactPageResolver from 'src/commons/ReactPageDictionary'
import {REACT_URL} from 'src/pages/articles/texts/presentTenseNegation/config'
import {ALTERNATES_TYPE} from 'src/commons/alternate'

const LOCALE: ALTERNATES_TYPE = 'lt'

ReactPageResolver.register(REACT_URL, import.meta.path, {
  locales: LOCALE,
})

export default function Lithuanian() {
  return (
    <>
      <div>
        Viskas prasidėjo nuo mano „neteisingo“ žodžio <i>nekenčiu</i>{' '}
        sukirčiavimo - aš mokydamas kitakalbius lietuvių kalbos pasakiau, kad
        žodis yra <i>nèkenčiu</i>, bet dėl viso pikto pasitikrinau su{' '}
        <a href="https://kalbu.vdu.lt/mokymosi-priemones/kirciuoklis/">
          kirčiuokliu
        </a>{' '}
        ir sužinojau, kad BK kirčiuojasi <i>nekenčiù</i>. Pasinaudojus paieškos
        varikliais paaiškėjo, kad toks mano kirčiavimas yra užfiksuotas kaip{' '}
        <a href="https://portalcris.vdu.lt/server/api/core/bitstreams/d192d095-951c-4b5c-9981-996e24e8223d/content">
          dažnas neteisingas kirčiavmas jaunimo dainose
        </a>
        . Tad ėmiausi šiokio tokio tyrumuko.
      </div>
      <h2>Priešdėliai</h2>
      <div>
        Pradžiai reikėtų paminėti jog beveik visi priešdėliai, tiek mano
        tarmėje, tiek BK veikia taip pat. Ir jie vienodai paklūsta kirčio
        šokinėjimui. Vienintelis nešokinėjantis priešdėlis tiek mano tarmėje,
        tiek BK yra priešdėlis {ItalicBlock('per-')}, kuris visada yra
        kirčiuotas, nes yra tvirtapradis. Šiame straipsnyje kaip generinis
        priešdėlis bus vartojamas neiginio priešdėlis {ItalicBlock('ne-')}.
      </div>
      <h2>Esamojo laiko veiksmažodžiai</h2>
      <div>
        Iš pradžių galvojau, kad kirčio šokinėjimas yra susijęs su tvirtaprade
        priegaide, tačiau pasirodo tai susiję ir su (istoriniu) šaknies balsio
        ilgiu.{' '}
        <i>
          Spustelėkite rodykles/trikampius norėdami pasiekti daugiau
          informacijos.
        </i>
        <PresentTables locale={LOCALE} />
      </div>
      <div>
        Pagal pateiktas lenteles galima pabandyti apibendrinti:
        <ul>
          <li>Tvirtapradės šaknys visados išlaiko kirtį šaknyje.</li>
          <li>
            <i>-o</i> asmenuočių veiksmažodžiai neturi kirčio šokinėjimo į
            priešdėlį ir kirtis iš šaknies peršoka į galūnę netvirtapradėse
            šaknyse I ir II asmenyse.
          </li>
          <li>
            <i>-(i)a</i> ir <i>-i</i> asmenuočių neakūtiniai veiksmažodžiai
            patiria tokį patį šokinėjimą, kaip ir {ItalicBlock('-o')} asmenuotės
            veiksmažodžiai, tačiau šaknyse su (istoriškai) trumpu balsiu kirtis
            peršoka į priešdėlį {ItalicBlock('ne-')} visuose asmenyse.
          </li>
        </ul>
      </div>
      <div>
        <h2>Išimtys</h2>
        Besitestuodamas įvairius veiksmažodžius užtikau trijų tipų išimtis:
        <ul>
          <li>
            Veiksmažodžiai <i>galėti</i> ir <i>turėti</i> nepaklūsta{' '}
            <i>trumpojo balsio -(i)</i> paradigmai ir yra atitinkamai
            kirčiuojami:
            {galetiTuretiVerbs()}
          </li>
          <li>
            Veiksmažodžiai, kurie skirtingose formose turi besikaitaliojančias
            tvirtagales <i>{eilmnr}</i> ir <i>i~en</i> poras permeta kirtį ant
            priešdėlio:
            {eilmnrVerbs('ir t.t.')}
          </li>
          <li>
            <i>-(i) asmenuotės</i> veiksmažodžiai, turintys tvirtagalius{' '}
            <i>al̃, am̃, ar̃</i> skiemenis bei turintys priesagą{' '}
            {ItalicBlock('-ė-')} kituose laikuose, taip pat permeta kirtį ant
            priešdėlio:
            {alamarVerbs()}
          </li>
        </ul>
      </div>
      <h2>Nèkenčiu?</h2>
      <div>
        Straipsnio pradžioje buvo paminėta, jog mano tarmėje vietoje{' '}
        <i>nekeñčia</i> yra tariama <i>nèkenčia</i>. Tačiau vien esamojo laiko
        analizės neužtenka - ji neatsako, kodėl mano tarmėje veiksmažodžiai{' '}
        <i>dỹla</i> ir <i>keñčia</i> elgiasi skirtingai ir yra <i>nedỹla</i> bei{' '}
        <i>nèkenčia</i>. Todėl buvo pažvelgta ir į kitą laiką - būtąjį kartinį.
      </div>
      <h2>Būtojo kartinio laiko veiksmažodžiai</h2>
      <div>
        Iš esmės vėlgi buvo padaryti panaši analizė, kaip ir esamajam laikui. Ją
        bedarant buvo pastebėta, jog čia jau ne tik mano tarmėje, bet ir BK
        skirtingi veiksmažodžiai, kurie iš pirmo žvilgsnio priklauso tai pačiai
        asmenuotei, elgiasi skirtingai: <i>žaĩdė - nèžaidė</i>, bet{' '}
        <i>taĩsė - netaĩsė</i>. Tad išsibandžius įvairius veiksmažodžius buvo
        prieita išvados, kad tai yra nulemta ir bendraties - {ItalicBlock('-ė')}{' '}
        asmenuotės veiksmažodžiai, kurie bendratyje turi priesagą -y- (tekste
        toliau <i>priesaginiai</i>) išlaiko kirtį šaknyje bet kuriuo atveju.{' '}
        <i>
          Spustelėkite rodykles/trikampius norėdami pasiekti daugiau
          informacijos.
        </i>
        <PastTables locale={LOCALE} />
      </div>
      <div>
        Taigi, vėl pagal pateiktas lenteles galima pabandyti apibendrinti:
        <ul>
          <li>Tvirtapradės šaknys visados išlaiko kirtį šaknyje.</li>
          <li>
            <i>-o</i> asmenuočių veiksmažodžiai elgiasi taip pat, kaip ir
            esamojo laiko {ItalicBlock('o-')} asmenuotės veiksmažodžiai.
          </li>
          <li>
            Priesaginiai <i>-ė</i> asmenuotės veiksmažodžiai yra kirčiuojami
            taip pat kaip ir {ItalicBlock('-o')} asmenuotė.
          </li>
          <li>
            Netvirtapradžiai grynieji <i>-ė</i> asmenuotės veiksmažodžiai visada
            permeta kirtį į priešdėlį.
          </li>
        </ul>
      </div>
      <h2>Nèkenčiu!</h2>
      <div>
        Taigi, toks kirčiavimas kaip <i>nèkenčiu</i> yra nulemtas būt. k. l.
        pagal analogiją žodžiui <i>nèkentė</i>. O <i>nedyla</i> yra kirčiuojamas
        kaip ir BK - <i>nedỹla</i>, mat būt. k. yra <i>nedìlo</i> - kita
        asmenuotė ir kirtis išliekantis šaknyje.
      </div>
    </>
  )
}
