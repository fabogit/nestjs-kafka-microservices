export class OrderCreatedEvent {
  constructor(
    private readonly orderId: string,
    private readonly userId: string,
    private readonly price: number,
  ) {}
  // plain object provided as payload on event emit are stringified by nestjs by default,
  // this allow to serialize and send all propierties
  toString() {
    return JSON.stringify({
      orderId: this.orderId,
      userId: this.userId,
      price: this.price,
    });
  }
}
