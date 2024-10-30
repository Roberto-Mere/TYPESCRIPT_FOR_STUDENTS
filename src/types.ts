export enum HTTPMethod {
  POST = "POST",
  GET = "GET",
}

export enum Role {
  USER = "user",
  ADMIN = "admin",
}

export interface User {
  name: string;
  age: number;
  roles: Role[];
  createdAt: Date;
  isDeleted: boolean;
}

export interface HTTPRequest {
  method: HTTPMethod;
  host: string;
  path: string;
  body?: User;
  params: { [key: string]: string };
}
