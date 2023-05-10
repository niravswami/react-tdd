import { rest } from "msw";

export const mockUsersArr = [
  {
    name: "user 1",
  },
  {
    name: "user 2",
  },
  {
    name: "user 3",
  },
];

export const GET_USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const handlers = [
  rest.get(GET_USERS_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUsersArr));
  }),
];
