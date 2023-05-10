/* Gree should render the text "hello" and if a name is passed into the component 
it should render hello followed by the name
*/
import { render, screen } from "@testing-library/react";
import Greet from "../components/greet/Greet";

test("Geet render correctly", () => {
  render(<Greet />);

  const isExist = screen.getByText(/hello/i);
  expect(isExist).toBeInTheDocument();
});

describe("Greet Name", () => {
  test("render with a name", () => {
    render(<Greet name="Nirav" />);
    const textEle = screen.getByText("hello Nirav");
    expect(textEle).toBeInTheDocument();
  });

  test("render with wrong name", () => {
    render(<Greet name="Nirava" />);
    const textEle = screen.getByText("hello Nirava");
    expect(textEle).toBeInTheDocument();
  });
});
