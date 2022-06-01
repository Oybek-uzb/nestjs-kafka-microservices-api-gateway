import { Injectable } from '@nestjs/common';
import {CreateOrderRequestDto} from "./create-order-request.dto";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createOrder(createOrderData: CreateOrderRequestDto) {

  }
}
