import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MetaData } from "@infrastructure/database/meta-data/meta-data.entity";
import { MetaDataSeederService } from "./meta-data-seeder.service";

@Module({
  imports: [TypeOrmModule.forFeature([MetaData])],
  controllers: [],
  providers: [MetaDataSeederService],
  exports:[MetaDataSeederService]
})
export class MetaDataSeederModule {}
