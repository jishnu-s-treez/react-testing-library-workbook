import { screen, render } from "../../test-utils"
import MuiMode from "./MuiMode"

describe("MUI-Mode", () => {
  const renderMuiMode = () => {
    render(<MuiMode />)
    const modeHeading = screen.getByRole("heading", {
      level: 1,
    })
    return { modeHeading }
  }

  it("Should render mui mode", () => {
    const { modeHeading } = renderMuiMode()
    expect(modeHeading).toHaveTextContent(/dark mode/i)
  })
})
