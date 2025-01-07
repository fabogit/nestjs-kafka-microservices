import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderReq } from './dto/create-order-req.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createOrder(@Body() createOrderRequest: CreateOrderReq) {
    this.appService.createOrder(createOrderRequest);
  }
}
