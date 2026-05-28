import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('API de gestion de tareas y usuarios')
    .setDescription('Documentacion de la API para usuarios, tareas y categorias')
    .setVersion('1.0.0')
    .addTag('usuarios')
    .addTag('tareas')
    .addTag('categorias')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();