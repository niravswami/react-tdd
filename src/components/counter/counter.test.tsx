import { act, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("render", () => {
    render(<Counter />);
    const countEle = screen.getByRole("heading");
    expect(countEle).toBeInTheDocument();

    const incBtn = screen.getByRole("button", {
      name: "Inc",
    });
    expect(incBtn).toBeInTheDocument();
  });

  test("render a count of 0", () => {
    render(<Counter />);
    const countEle = screen.getByRole("heading");
    expect(countEle).toHaveTextContent("0");
  });

  test("render a count 1 after clicking the btn", async () => {
    user.setup();
    render(<Counter />);
    const incBtn = screen.getByRole("button", {
      name: "Inc",
    });
    await act(async () => await user.click(incBtn));
    const countEle = screen.getByRole("heading");
    expect(countEle).toHaveTextContent("1");
  });

  test("render a count 2 after clicking the btn twice", async () => {
    user.setup();
    render(<Counter />);
    const incBtn = screen.getByRole("button", {
      name: "Inc",
    });
    await act(async () => await user.click(incBtn));
    await act(async () => await user.click(incBtn));
    const countEle = screen.getByRole("heading");
    expect(countEle).toHaveTextContent("2");
  });

  test("render a count of 10 after clicking on set btn", async () => {
    user.setup();
    render(<Counter />);
    const amtInp = screen.getByRole("spinbutton");
    await act(async () => await user.type(amtInp, "10"));
    expect(amtInp).toHaveValue(10);
    const setBtn = screen.getByRole("button", {
      name: "Set",
    });
    await act(async () => await user.click(setBtn));
    const countEle = screen.getByRole("heading");
    expect(countEle).toHaveTextContent("10");
  });
});
