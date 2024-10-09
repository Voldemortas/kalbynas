import './component.css'

export default function Component(props: {src: string}) {
  return (
    <div>
      {Array.from({length: 4}).map((_, i) => (
        <>
          <img
            src={props.src}
            alt={'pumkin'}
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={`i${i}`}
            className="Pumkin__Img"
          />
        </>
      ))}
    </div>
  )
}
