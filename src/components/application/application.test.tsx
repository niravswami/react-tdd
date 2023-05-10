import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("render corectly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectHeading).toBeInTheDocument();

    const imgAltText = screen.getByAltText("img");
    expect(imgAltText).toBeInTheDocument();

    const getByTitleEle = screen.getByTitle("closeIcon");
    expect(getByTitleEle).toBeInTheDocument();

    const dataTestIdEle = screen.getByTestId("customEle");
    expect(dataTestIdEle).toBeInTheDocument();

    const paraEle = screen.getByText("All fields are madatory");
    expect(paraEle).toBeInTheDocument();

    const nameEle = screen.getByRole("textbox", {
      name: "Email",
    });
    expect(nameEle).toBeInTheDocument();

    // const nameLbEle = screen.getByLabelText('Email')
    // expect(nameLbEle).toBeInTheDocument()

    const nameLbEle2 = screen.getByLabelText("Email", {
      selector: "select",
    });
    expect(nameLbEle2).toBeInTheDocument();

    // const nameVale = screen.getByDisplayValue('nirav')
    expect(nameEle).toBeInTheDocument();

    const nameEleByPlsHol = screen.getByPlaceholderText("email addr");
    expect(nameEleByPlsHol).toBeInTheDocument();

    const jobLocationEle = screen.getByRole("combobox");
    expect(jobLocationEle).toBeInTheDocument();

    const termsEle = screen.getByRole("checkbox");
    expect(termsEle).toBeInTheDocument();

    const subBtnEle = screen.getByRole("button");
    expect(subBtnEle).toBeInTheDocument();

    const bioEle = screen.getByRole("textbox", {
      name: "Example textarea",
    });
    expect(bioEle).toBeInTheDocument();
  });
});
