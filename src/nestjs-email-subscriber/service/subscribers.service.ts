import { Controller } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Subscriber } from '../entity/subscriber.entity'
import { Repository } from 'typeorm'
import { CreateSubscriberDto } from "../dto/createSubscriberDto.dto";
import { GrpcMethod } from "@nestjs/microservices";

@Controller()
export class SubscribersService{
    constructor(
        @InjectRepository(Subscriber)
        private readonly subscribersRepository: Repository<Subscriber>,
    ){}

    @GrpcMethod('SubscribersService', 'AddSubscriber')
    async AddSubscriber(subscriber: CreateSubscriberDto){
        const newSubscriber = await this.subscribersRepository.create(subscriber)
        await this.subscribersRepository.save(newSubscriber)
        console.log(newSubscriber)
        return newSubscriber
    }

    @GrpcMethod('SubscribersService','GetAllSubscribers')
    async GetAllSubscribers(){

        console.log('grpc subscriber microservice call:', await this.subscribersRepository.find())
        return { data: await this.subscribersRepository.find()}

        // const data = await this.subscribersRepository.find();
        // return {
        //   data
        // }
        
          
    }

}

