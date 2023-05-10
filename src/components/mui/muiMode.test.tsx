import { render, screen } from "../../test-utils";
import MuiMode from "./MuiMode";

describe("MuiMode", () => {
  test("render text correctly", () => {
    render(<MuiMode />);
    const headele = screen.getByRole("heading");
    expect(headele).toHaveTextContent("dark mode");
  });
});
