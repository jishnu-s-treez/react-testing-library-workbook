import { render, screen, waitFor } from "@testing-library/react"
import FileUpload from "./FileUpload"
import userEvent from "@testing-library/user-event"

describe("File Upload", () => {
  const renderFileUpload = () => {
    const user = userEvent.setup()
    render(<FileUpload />)

    const uploadElement = screen.getByLabelText(/File upload:/i, {
      selector: "input",
    }) as any

    return {
      user,
      uploadElement,
    }
  }

  it("Should succeed file upload functions", async () => {
    const { user, uploadElement } = renderFileUpload()
    const file = new File(["hello"], "hello.png", { type: "image/png" })
    await user.upload(uploadElement, file)
    await waitFor(() => expect(uploadElement.files[0]).toBe(file))
    expect(uploadElement.files.item(0)).toBe(file)
    expect(uploadElement.files).toHaveLength(1)
  })
})
