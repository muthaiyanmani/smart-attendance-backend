import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { SnakeNamingStrategy } from '@common/snake-naming.strategy';

export class ConfigService {
  constructor() {
    dotenv.config({
      path: `.env`
    });
  }

  private getValue(key: string, throwOnMissing = true): string {
    const value = process.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  getPort() {
    return this.getValue('PORT', true);
  }

  isProduction() {
    const mode = this.getValue('MODE', false);
    return mode == 'PROD';
  }

  isDevelopment() {
    const mode = this.getValue('MODE', false);
    return mode == 'DEV';
  }

  isTesting() {
    const mode = this.getValue('MODE', false);
    return mode == 'TEST';
  }

  getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      entities: [__dirname + '/../database/**/*.entity{.ts,.js}'],
      migrationsTableName: 'migration',
      migrations: [__dirname + '/../database/migration/**/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/migrations'
      },
      keepConnectionAlive: true,
      type: 'mysql',
      host: this.getValue('DB_HOST'),
      port: parseInt(this.getValue('DB_PORT')),
      username: this.getValue('DB_USERNAME'),
      password: this.getValue('DB_PASSWORD'),
      database: this.getValue('DB_DATABASE'),
      migrationsRun: false,
      synchronize: false,
      logging: !this.isProduction(),
      namingStrategy: new SnakeNamingStrategy()
    };
  }

  getJWTSecret(): any {
    return {
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_EXPIRES_IN }
    }
}
}
