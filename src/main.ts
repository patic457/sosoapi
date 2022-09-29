import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = parseInt(process.env.APP_PORT) || 4000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.listen(port, function () {
    console.log("Server started Port : " + port);
  });
}
bootstrap();
