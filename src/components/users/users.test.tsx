import { render, screen } from "@testing-library/react";
import Users from "./Users";
import { GET_USERS_URL, mockUsersArr } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("User fetch", () => {
  test("conmpent rendered", () => {
    render(<Users />);
    const headingEle = screen.getByText("Users");
    expect(headingEle).toBeInTheDocument();
  });

  test("render a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(mockUsersArr.length);
  });

  test("render error", async () => {
    server.use(
      rest.get(GET_USERS_URL, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ msg: "something went wrong" }));
      })
    );
    render(<Users />);
    const errTxt = await screen.findByText("Error fetching users");
    expect(errTxt).toBeInTheDocument();
  });
});
