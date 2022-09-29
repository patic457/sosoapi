import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.listen(parseInt(process.env.APP_PORT) || 4000, function () {
    console.log("Server started...... ");
  });
}
bootstrap();
