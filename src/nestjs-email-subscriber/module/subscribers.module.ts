import { Module } from "@nestjs/common";
import { SubscribersService } from "../service/subscribers.service";
import { Subscriber } from "../entity/subscriber.entity";
// import { TypeOrmModule } from "@nestjs/typeorm";
import {TypeOrmModule } from '@nestjs/typeorm'



@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  exports: [],
  controllers: [SubscribersService],
})
export class SubscribersModule {}


