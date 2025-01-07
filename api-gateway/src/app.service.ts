import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderReqDto } from './dto/create-order.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './events/order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  // emit event for billing
  createOrder({ userId, price }: CreateOrderReqDto) {
    // save to db and emit event to billing service
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );
  }
}
