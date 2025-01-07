import { Injectable } from '@nestjs/common';
import { GetUserReq } from './dto/get-user-req.dto';

@Injectable()
export class AppService {
  // mock data
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: '43234',
    },
    {
      userId: '345',
      stripeUserId: '27279',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserReq) {
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
