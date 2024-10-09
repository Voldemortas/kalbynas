import './component.css'

export default function Component(props: {message: string}) {
  return <span className={'text'}>{props.message}</span>
}
