import { HTTPError, HTTPRequest, ObserverHandlers } from "../types";

export default class Observer {
  private handlers;
  private isUnsubscribed = false;
  _unsubscribe?: () => void;

  constructor(handlers: ObserverHandlers) {
    this.handlers = handlers;
  }

  next(value: HTTPRequest) {
    if (this.handlers.next && !this.isUnsubscribed) {
      this.handlers.next(value);
    }
  }

  error(error: HTTPError) {
    if (!this.isUnsubscribed) {
      if (this.handlers.error) {
        this.handlers.error(error);
      }

      this.unsubscribe();
    }
  }

  complete() {
    if (!this.isUnsubscribed) {
      if (this.handlers.complete) {
        this.handlers.complete();
      }

      this.unsubscribe();
    }
  }

  unsubscribe() {
    this.isUnsubscribed = true;

    if (this._unsubscribe) {
      this._unsubscribe();
    }
  }
}
