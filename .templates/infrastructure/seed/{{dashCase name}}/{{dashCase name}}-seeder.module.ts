import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { {{pascalCase name}} } from "@infrastructure/database/{{dashCase name}}/{{dashCase name}}.entity";
import { {{pascalCase name}}SeederService } from "./{{dashCase name}}-seeder.service";

@Module({
  imports: [TypeOrmModule.forFeature([{{pascalCase name}}])],
  controllers: [],
  providers: [{{pascalCase name}}SeederService],
  exports:[{{pascalCase name}}SeederService]
})
export class {{pascalCase name}}SeederModule {}
