import { render, screen } from "@testing-library/react"
import { rest } from "msw"
import { Users } from "./Users"
import server from "../../mocks/server"

describe("User", () => {
  const renderUsers = () => {
    render(<Users />)
    const userHeading = screen.getByRole("heading", { name: "Users" })

    return {
      userHeading,
    }
  }

  it("Should render Users as heading", () => {
    const { userHeading } = renderUsers()
    expect(userHeading).toBeInTheDocument()
  })

  it("Should render a list of users", async () => {
    renderUsers()
    // FindBy - Coz it's a fetch function
    const usersList = await screen.findAllByRole("listitem")
    expect(usersList).toHaveLength(3)
  })

  it("Should throw error test during status 500", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500))
        },
      ),
    )
    renderUsers()
    const errorTxt = await screen.findByText("Error fetching users")
    expect(errorTxt).toBeInTheDocument()
  })
})
