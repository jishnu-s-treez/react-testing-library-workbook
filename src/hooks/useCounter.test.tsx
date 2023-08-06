import { renderHook, act } from "@testing-library/react"
import useCounter from "./useCounter"

const renderUseCounter = (count = 0) => {
  const { result } = renderHook(useCounter, {
    initialProps: {
      initialCount: count,
    },
  })
  return { result }
}

describe("Use Counter Hook", () => {
  it("Should render initial count as 0", () => {
    const { result } = renderUseCounter()
    expect(result.current.count).toBe(0)
  })

  it("Should render count as same as inital count props", () => {
    const { result } = renderUseCounter(10)
    expect(result.current.count).toBe(10)
  })

  it("Should increment count after increment function call", () => {
    const { result } = renderUseCounter()
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })

  it("Should decrement count after decrement function call", () => {
    const { result } = renderUseCounter()
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(-1)
  })
})
