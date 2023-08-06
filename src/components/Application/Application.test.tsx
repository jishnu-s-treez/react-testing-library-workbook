import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

describe("Application test", () => {
  fit("Should render all elements", () => {
    render(<Application />)

    // role = 'heading'
    const h1Element = screen.getByRole("heading", {
      name: "Job application form",
      // Lvl 1 for h1 Element
      level: 1,
    })
    expect(h1Element).toBeInTheDocument()

    const h2Element = screen.getByRole("heading", {
      name: "Section 1",
      // Lvl 2 for h2 Element
      level: 2,
    })
    expect(h2Element).toBeInTheDocument()

    // Query by text content & Multiple elements found with same text content
    const paragraphElement = screen.getByText("All fields are mandatory", {
      selector: "span",
    })
    expect(paragraphElement).toBeInTheDocument()

    // Query by full string (TEXT)
    const paraEle1 = screen.getByText("All fields are mandatory", {
      selector: "p",
    })
    expect(paraEle1).toBeInTheDocument()
    // Query by substring without exact match (TEXT)
    const paraEle2 = screen.getByText("TORY", {
      exact: false,
      selector: "p",
    })
    expect(paraEle2).toBeInTheDocument()
    // Query by ignore casing (TEXT)
    const paraEle3 = screen.getByText("all fields are mandatory", {
      exact: false,
      selector: "p",
    })
    expect(paraEle3).toBeInTheDocument()

    // Query by full string (REGEX)
    const paraEle4 = screen.getByText(/^All fields are mandatory$/, {
      selector: "p",
    })
    expect(paraEle4).toBeInTheDocument()
    // Query by substring without exact match & ignore casing (REGEX)
    const paraEle5 = screen.getByText(/TORY/i, { exact: false, selector: "p" })
    expect(paraEle5).toBeInTheDocument()

    // Query by substring ignore casing (REGEX)
    const paraEle6 = screen.getByText(/^all fields are mandatory$/i, {
      selector: "p",
    })
    expect(paraEle6).toBeInTheDocument()

    // Query by title
    const closeElement = screen.getByTitle("close")
    expect(closeElement).toBeInTheDocument()

    // Query by alt text content
    const imgElement = screen.getByAltText("a person with a laptop")
    expect(imgElement).toBeInTheDocument()

    // Query by data-testid
    const customElement = screen.getByTestId("custom-element")
    expect(customElement).toBeInTheDocument()

    // role = 'textbox' for input element
    const inputElement = screen.getByRole("textbox", {
      name: "Name",
    })
    expect(inputElement).toBeInTheDocument()

    // Query by label text & Multiple elements found with same label
    const inputElement2 = screen.getByLabelText("Name", {
      selector: "input",
    })
    expect(inputElement2).toBeInTheDocument()

    // Query by placeholder text
    const inputElement3 = screen.getByPlaceholderText("Fullname")
    expect(inputElement3).toBeInTheDocument()

    // Query by diplay value
    const inputElement4 = screen.getByDisplayValue("jishnu")
    expect(inputElement4).toBeInTheDocument()

    // role = 'textbox' for textArea element
    const textAreaElement = screen.getByRole("textbox", {
      name: "Bio",
    })
    expect(textAreaElement).toBeInTheDocument()

    // role = 'combobox' for dropdown element
    const dropDownElement = screen.getByRole("combobox")
    expect(dropDownElement).toBeInTheDocument()

    // role = 'checkbox' for checkbox element
    const termsElement = screen.getByRole("checkbox")
    expect(termsElement).toBeInTheDocument()

    // Label-text query
    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions",
    )
    expect(termsElement2).toBeInTheDocument()

    // role = 'button' for button element
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toBeDisabled()
  })
})
