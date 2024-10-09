import Body from '../common/Body'

export default function Index({msg}: {msg: string}) {
  return (
    <Body
      nav={{
        links: [
          {link: '/', key: '/', text: 'Pagrindinis'},
          {link: '/pumkin', key: '/pumkin', text: 'Moliūgas'},
        ],
        selected: '/',
      }}
    >
      {msg}
    </Body>
  )
}
