export class OrderCreatedEvent {
  constructor(
    private readonly orderId: string,
    private readonly userId: string,
    private readonly price: number,
  ) {}
}
