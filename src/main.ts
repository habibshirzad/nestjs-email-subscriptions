import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { join } from 'path'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  
  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'subscribers',
      protoPath: join(process.cwd(),'src/nestjs-email-subscriber/proto/subscriber.proto'),
      url: configService.get('GRPC_CONNECTION_URL_1')
    },
  })

  console.log(configService.get('GRPC_CONNECTION_URL_1'))

  app.startAllMicroservices()
  app.init()
}
bootstrap();


// process.cwd()