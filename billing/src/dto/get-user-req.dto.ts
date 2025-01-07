export class GetUserReq {
  constructor(public readonly userId: string) {}

  // kafka serialization
  toString() {
    return JSON.stringify({
      userId: this.userId,
    });
  }
}
