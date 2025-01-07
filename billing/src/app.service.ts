import { Inject, Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './events/order-created.event';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserReq } from './dto/get-user-req.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  // send out a topic andget a reply back from auth on a different topic
  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    // console.log(orderCreatedEvent);
    // will send and wait the reply. to send the message need to subscribe otherwise it will not be fired
    this.authClient
      .send('get_user', new GetUserReq(orderCreatedEvent.userId))
      .subscribe((user) => {
        console.log(
          `Billing user with stripe ID ${user.stripeUserId} a price of $${orderCreatedEvent.price}`,
        );
      });
  }
}
