import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function appNetwork(app) {
  app.enableCors();
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });
}

async function appListen(app) {
    const port = parseInt(process.env.PORT) || 4000;
  app.listen(port, function () {

  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

// async function appEncode(app) {
    // var encode = Buffer.from("Hello World").toString('base64');
    // var decode = Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii');
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  appNetwork(app);
  appListen(app);
}

bootstrap();
