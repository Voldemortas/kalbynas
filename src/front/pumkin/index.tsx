import Component from './Component'
export default function Index({msg}: {msg: string}) {
  return (
    <>
      <Component message={msg} />
      <hr />
      <a href="/">Index page</a>
      <br />
      <img src="/static/punkim.png" alt="Pumkin" height={200} />
    </>
  )
}
