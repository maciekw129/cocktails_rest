import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1/');
  app.enableCors({
    origin: ['http://localhost:4200'],
    methods: ['GET', 'POST', 'PATCH'],
  });
  await app.listen(3000);
}
bootstrap();
