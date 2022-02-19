import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '@common/common.module';

/* PLOP_INJECT_IMPORT */
import entities from '@infrastructure/database/entities';
import providers from './providers';
import { AllEntitiesSubscriber } from './all-entities-subscriber';
import { dataBaseProvider } from './database.service';
import { ConfigModule } from '@infrastructure/config/config.module';
import { TenantFilter } from './tenant-filter';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    CommonModule,
    dataBaseProvider,
    TypeOrmModule.forFeature([...entities]),
    ConfigModule,
    JwtModule.register({ secret: 'secretKey' })
  ],
  controllers: [],
  providers: [...providers, AllEntitiesSubscriber],
  exports: [...providers, dataBaseProvider]
})
export class DatabaseModule {
  constructor(private readonly jwtService: JwtService) {}

  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(async (req: any, _res: any, next: any) => {
        if (req.headers.authorization) {
          const token = req.headers.authorization.split(' ')[1];
          if (token) {
            const user = this.jwtService.decode(token);
            req.user = user;
            TenantFilter.tenantId = req.user.tenantId;
          }
        }
        next();
      })
      .forRoutes('*');
  }
}
