import {render, screen} from "@testing-library/react"
import Header from "./Header"

test("render Header", () => {
	render(<Header/>)
	screen.debug()
	expect(screen.getByText("RESAS APP")).toBeInTheDocument()
})