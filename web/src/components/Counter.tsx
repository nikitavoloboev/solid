import { createSignal } from "solid-js"

export function Counter() {
  const [count, setCount] = createSignal(0)

  return (
    <div class="p-4">
      <h1 class="text-xl mb-4">Solid Counter</h1>
      <div class="flex gap-4 items-center">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCount(count() - 1)}
        >
          -
        </button>
        <span class="text-xl">{count()}</span>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCount(count() + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}
