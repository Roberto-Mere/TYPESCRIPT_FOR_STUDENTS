export enum HTTPMethod {
  POST = "POST",
  GET = "GET",
}

export enum HTTPStatus {
  OK = 200,
  INTERNAL_SERVER_ERROR = 500,
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

export interface HTTPError {
  message: string;
}

interface OberserverStatus {
  status: HTTPStatus;
}

export interface ObserverHandlers {
  next: (request: HTTPRequest) => OberserverStatus;
  error: (error: HTTPError) => OberserverStatus;
  complete: () => void;
}
