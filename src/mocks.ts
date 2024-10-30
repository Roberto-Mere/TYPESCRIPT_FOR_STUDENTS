import { HTTPMethod, HTTPRequest, Role, User } from "./types";

export const userMock: User = {
  name: "User Name",
  age: 26,
  roles: [Role.USER, Role.ADMIN],
  createdAt: new Date(),
  isDeleted: false,
};

export const requestsMock: HTTPRequest[] = [
  {
    method: HTTPMethod.POST,
    host: "service.example",
    path: "user",
    body: userMock,
    params: {},
  },
  {
    method: HTTPMethod.GET,
    host: "service.example",
    path: "user",
    params: {
      id: "3f5h67s4s",
    },
  },
];
