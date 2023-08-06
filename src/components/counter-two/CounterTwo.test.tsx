import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import { CounterTwo } from "./CounterTwo"

describe("CounterTwo", () => {
  const renderCounterTwo = (
    count: number,
    handleIncrement?: () => void,
    handleDecrement?: () => void,
  ) => {
    render(
      <CounterTwo
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />,
    )
  }

  test("renders correctly", () => {
    renderCounterTwo(0)
    const textElement = screen.getByText("Counter Two")
    expect(textElement).toBeInTheDocument()
  })

  test("Hanlders are called", async () => {
    user.setup()
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()
    renderCounterTwo(0, incrementHandler, decrementHandler)

    const incrementButton = screen.getByRole("button", { name: "Increment" })
    const decrementButton = screen.getByRole("button", { name: "Decrement" })

    await user.click(incrementButton)
    await user.click(decrementButton)

    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})
