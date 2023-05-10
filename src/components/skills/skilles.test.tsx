import { logRoles, render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["html", "js"];
  test("render", () => {
    render(<Skills skills={skills} />);
    const listEle = screen.getByRole("list");
    expect(listEle).toBeInTheDocument();
  });

  test("render list of skills", () => {
    render(<Skills skills={skills} />);
    const listIremsEle = screen.getAllByRole("listitem");
    expect(listIremsEle).toHaveLength(skills.length);
  });

  test("login button present", () => {
    render(<Skills skills={skills} />);
    const loginBtn = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginBtn).toBeInTheDocument();
  });

  test("start learing not render", () => {
    render(<Skills skills={skills} />);
    const startLearingBtn = screen.queryByRole("button", {
      name: "Start learing",
    });
    expect(startLearingBtn).not.toBeInTheDocument();
  });

  test("start learing btn displayed after some time", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    // screen.debug()
    const startLearingBtn = await screen.findByRole("button", {
      name: "Start learing",
    });
    // screen.debug()
    expect(startLearingBtn).toBeInTheDocument();
  });
});
