export const alamarVerbs = () => (
  <ol>
    <li>aš kalbù, skambù, varvù - nèkalbu, nèskambu, nèvarvu </li>
    <li>tu kalbì, skambì, varvì - nèkalbi, nèskambi, nèvarvi </li>
    <li>jis kal̃ba, skam̃ba, var̃va - nèkalba, nèskamba, nèvarva </li>
  </ol>
)

export const eilmnrVerbs = () => (
  <ul>
    <li>brendù, breñda (bristi) - nèbrendu, nèbrenda</li>
    <li>renkù, reñka (rinkti) - nèrenku, nèrenka</li>
    ir t.t.
  </ul>
)

export const galetiTuretiVerbs = () => (
  <ol>
    <li>aš galiù, negaliù, turiù, neturiù</li>
    <li>tu galì, negalì, turì, neturì</li>
    <li>jis gãli, negãli tùri, netùri</li>
  </ol>
)

export const eilmnr = 'lmnr'
  .split('')
  .map((c) => `i${c}~e${c}`)
  .join(', ')

export const YtiVerbs = () => (
  <ul className="ipa-monospace">
    <li>žaĩdė - nèžaidė (žaĩs-ti), sẽkė - nèsekė (sèk-ti)</li>
    <li>taĩsė - netaĩsė (tais-ý-ti), mãtė - nemãtė (mat-ý-ti)</li>
  </ul>
)
