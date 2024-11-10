import { createSignal } from "solid-js"

function Comp(props: any) {
  return () => {
    const { count } = props
    if (count > 5) return <div>Large count</div>
    return <div>{count}</div>
  }
}

export default function RouteComponent() {
  const [count, setCount] = createSignal(0)
  return (
    <>
      <Comp count={count()} />
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  )
}
