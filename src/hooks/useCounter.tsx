import { useState } from "react"

export default function useCounter({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount((prevState) => prevState + 1)
  const decrement = () => setCount((prevState) => prevState - 1)
  return { count, increment, decrement }
}

useCounter.defaultProps = {
  initialCount: 0,
}
