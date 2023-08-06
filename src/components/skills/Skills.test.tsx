import { render, screen } from "@testing-library/react"
import { Skills } from "./Skills"

describe("Skills", () => {
  const renderSkills = () => {
    const skills = ["HTML", "CSS", "JS"]
    const { container } = render(<Skills skills={skills} />)
    return {
      container,
      skills,
    }
  }

  it("Should render component", () => {
    renderSkills()
    const skillList = screen.getByRole("list")
    expect(skillList).toBeInTheDocument()
  })

  it("Should render 3 items in the list", () => {
    const { skills } = renderSkills()
    const skillList = screen.getAllByRole("listitem")
    expect(skillList).toHaveLength(skills.length)
  })

  it("Should render login button", () => {
    renderSkills()
    const loginButton = screen.getByRole("button", {
      name: "Login",
    })
    expect(loginButton).toBeInTheDocument()
  })

  // To find button is not rendered, queryBy.. will return null if no match found (Can use matchers like not,null etc.)
  it("Should not render start learning button", () => {
    renderSkills()
    const learningButton = screen.queryByRole("button", {
      name: /Start Learning/i,
    })
    expect(learningButton).not.toBeInTheDocument()
  })

  // Asynchronously rendered button in DOM
  it("Start learning button is eventually displayed", async () => {
    renderSkills()
    // logRoles(container);
    // logDOM(container)
    const learningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 1200,
      },
    )

    expect(learningButton).toBeInTheDocument()
  })
})
