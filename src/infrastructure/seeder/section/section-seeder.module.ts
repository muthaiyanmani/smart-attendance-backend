import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Section } from "@infrastructure/database/section/section.entity";
import { SectionSeederService } from "./section-seeder.service";

@Module({
  imports: [TypeOrmModule.forFeature([Section])],
  controllers: [],
  providers: [SectionSeederService],
  exports:[SectionSeederService]
})
export class SectionSeederModule {}
