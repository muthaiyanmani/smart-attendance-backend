import { SeederModule } from './infrastructure/seeder/seeder.module';
import { ConfigModule } from './infrastructure/config/config.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { CommonModule } from './common/common.module';
import { Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { APP_FILTER } from '@nestjs/core';
import { RequestContextModule } from 'nestjs-request-context';
import { ConfigService } from '@infrastructure/config/config.service';
import { GenericExceptionFilter } from '@common/filters/generic-exception.filter';
import { UseCasesModule } from 'src/use-cases/use-cases.module';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [
    SeederModule,

    ConfigModule,

    CommonModule,

    AutomapperModule.forRoot({
      options: [{ name: 'mapper', pluginInitializer: classes }],
      singular: true
    }),

    RequestContextModule,

    DatabaseModule,

 
    UseCasesModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GenericExceptionFilter
    },
    ConfigService,
    JwtStrategy
  ],
  exports: [ConfigService]
})
export class AppModule {}
