import Observable from "./classes/Observable";
import { requestsMock } from "./mocks";
import { HTTPStatus, HTTPRequest, HTTPError } from "./types";

const handleRequest = (request: HTTPRequest) => {
  // handling of request
  return { status: HTTPStatus.OK };
};
const handleError = (error: HTTPError) => {
  // handling of error
  return { status: HTTPStatus.INTERNAL_SERVER_ERROR };
};

const handleComplete = () => console.log("complete");

const requests$ = Observable.from(requestsMock);

const subscription = requests$.subscribe({
  next: handleRequest,
  error: handleError,
  complete: handleComplete,
});

subscription.unsubscribe();
