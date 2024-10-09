import Body from '../common/Body'
import Component from './Component'
export default function Index({src}: {src: string}) {
  return (
    <Body
      nav={{
        links: [
          {link: '/', key: '/', text: 'Pagrindinis'},
          {link: '/pumkin', key: '/pumkin', text: 'Moliūgas'},
        ],
        selected: '/pumkin',
      }}
    >
      <Component src={src} />
    </Body>
  )
}
