import { render, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import user from "@testing-library/user-event";

describe("Counter Two", () => {
  test("render correctly", () => {
    render(<CounterTwo count={0} />);
    const textEle = screen.getByText("CounterTwo");
    expect(textEle).toBeInTheDocument();
  });

  test("handlera are called", async () => {
    user.setup();
    const incHandler = jest.fn();
    const decHandler = jest.fn();
    render(
      <CounterTwo count={0} handleInc={incHandler} handleDec={decHandler} />
    );
    const incBtn = screen.getByRole("button", {
      name: "Inc",
    });
    const deccBtn = screen.getByRole("button", {
      name: "Dec",
    });
    expect(incBtn).toBeInTheDocument();
    expect(deccBtn).toBeInTheDocument();

    await user.click(incBtn);
    await user.click(deccBtn);

    expect(incHandler).toHaveBeenCalledTimes(1);
    expect(decHandler).toHaveBeenCalledTimes(1);
  });
});
