export class NotFoundError {
  public readonly msg: string;
  public readonly statusCode: number;

  constructor(msg: string, statusCode = 404) {
    this.msg = msg;
    this.statusCode = statusCode;
  }
}

export class ConflictError {
  public readonly msg: string;
  public readonly statusCode: number;

  constructor(msg: string, statusCode = 409) {
    this.msg = msg;
    this.statusCode = statusCode;
  }
}
