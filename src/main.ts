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

async function bootstrap() {
  // const port = parseInt(process.env.APP_PORT) || 4000;
  const app = await NestFactory.create(AppModule);
  appNetwork(app);
  app.listen(process.env.PORT || 4000, function () {
    console.log("Server started Port : ");
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
