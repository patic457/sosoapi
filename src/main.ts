import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

var APP_PORT = process.env.APP_PORT ;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT || 3000);
}
bootstrap();
