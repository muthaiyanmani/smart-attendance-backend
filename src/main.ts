import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository
} from 'typeorm-transactional-cls-hooked';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';
import { UseCasesModule } from 'src/use-cases/use-cases.module';
import { ConfigModule } from '@infrastructure/config/config.module';
import { ConfigService } from '@infrastructure/config/config.service';
import { patchSelectQueryBuilder } from 'typeorm-global-scopes'

async function bootstrap() {
  initializeTransactionalContext();
  patchTypeORMRepositoryWithBaseRepository();
  patchSelectQueryBuilder()
  const app = await NestFactory.create(AppModule);
  useContainer(app.select(UseCasesModule), {
    fallback: true,
    fallbackOnErrors: true
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true }
    })
  );

  const configService = app.select(ConfigModule).get(ConfigService);

  if (!configService.isProduction()) {
    const options = new DocumentBuilder()
      .setTitle('Base Nesjs API Documentation')
      // .setDescription('API')
      .setVersion('1.0')
      .addBearerAuth()
      .addTag('')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    const titleOptions = {
      swaggerOptions: {
        persistAuthorization: true
      }
    };
    SwaggerModule.setup('docs', app, document, titleOptions);
  }
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  });

  await app.listen(configService.getPort() || 3000);
}
bootstrap();

