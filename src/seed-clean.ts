import { Seeder } from '@infrastructure/seeder/seeder';
import { SeederModule } from '@infrastructure/seeder/seeder.module';
import { NestFactory } from '@nestjs/core';
async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule).then((appContext) => {
    const seeder = appContext.get(Seeder);

    seeder
      .clean()
      .then(() => {
        console.debug('Cleaning database complete!');
      })
      .catch((error) => {
        console.error('Cleaning database failed!');
        throw error;
      })
      .finally(() => appContext.close());
  });
}
bootstrap();
