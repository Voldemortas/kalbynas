import Component from './Component'
export default function Index({msg}: {msg: string}) {
  return (
    <>
      <Component message={msg} />
      <hr />
      <a href="/pumkin">Visit another page</a>
    </>
  )
}
