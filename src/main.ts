import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import MiddlewareApp from './app.middleware';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Start sweeger
  const config = new DocumentBuilder()
    .setTitle('Nestjs Auth')
    .setDescription('backend api')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  process.env.NODE_ENV === 'development' &&
    SwaggerModule.setup('api', app, document);
  // End Sweeger

  //Run all middle
  new MiddlewareApp(app).run();

  //Start App
  await app.listen(parseInt(process.env.PORT));
}
bootstrap();
