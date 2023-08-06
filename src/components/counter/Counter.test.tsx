/* eslint-disable jest/no-conditional-expect */
import { render, screen, act, waitFor } from "@testing-library/react"
import { Counter } from "./Counter"
import userEvent from "@testing-library/user-event"

describe("Counter", () => {
  const renderCounter = () => {
    const user = userEvent.setup()
    render(<Counter />)

    const countValue = screen.getByRole("heading", {
      level: 1,
    })
    const incrementButton = screen.getByRole("button", { name: /increment/i })
    const setButton = screen.getByRole("button", {
      name: /set/i,
    })
    // Input type 'number' have role 'spinbutton'
    const amountInput = screen.getByRole("spinbutton")

    return {
      user,
      setButton,
      countValue,
      amountInput,
      incrementButton,
    }
  }

  it("Should render heading", () => {
    const { countValue, incrementButton } = renderCounter()
    expect(countValue).toBeInTheDocument()
    expect(incrementButton).toBeInTheDocument()
  })

  it("Should render initial value as zero", () => {
    const { countValue } = renderCounter()
    expect(countValue).toHaveTextContent("0")
  })

  it("Should increment the count to 1 when button is clicked", async () => {
    const { user, countValue, incrementButton } = renderCounter()
    await act(async () => await user.click(incrementButton))
    expect(countValue).toHaveTextContent("1")
  })

  it("Should increment the count to 2 when the button is clicked twice", async () => {
    const { user, countValue, incrementButton } = renderCounter()
    await act(async () => await user.dblClick(incrementButton))
    await act(async () => await user.dblClick(incrementButton))
    await waitFor(() => expect(countValue).toHaveTextContent("2"))
  })

  it("Should render 10 as count when we set it using set button", async () => {
    const { amountInput, countValue, setButton, user } = renderCounter()
    expect(setButton).toBeInTheDocument()
    expect(amountInput).toBeInTheDocument()
    await act(async () => await user.type(amountInput, "10"))
    await waitFor(() => expect(amountInput).toHaveValue(10))
    await act(async () => await user.click(setButton))
    await waitFor(() => expect(countValue).toHaveTextContent("10"))
  })

  it("Should focus in order by tab click", async () => {
    const { user, incrementButton, amountInput, setButton } = renderCounter()
    for (let index = 0; index < 3; index++) {
      await user.tab()
      index === 0
        ? expect(incrementButton).toHaveFocus()
        : index === 1
        ? expect(amountInput).toHaveFocus()
        : expect(setButton).toHaveFocus()
    }
  })
})
