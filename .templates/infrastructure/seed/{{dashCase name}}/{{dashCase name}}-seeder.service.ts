import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { {{pascalCase name}} } from '@infrastructure/database/{{dashCase name}}/{{dashCase name}}.entity';
import { Repository } from 'typeorm';
import { DATA } from './{{dashCase name}}-data';

@Injectable()
export class {{pascalCase name}}SeederService {
    constructor(
        @InjectRepository({{pascalCase name}})
        private readonly repository: Repository<{{pascalCase name}}>,
      ) {}
    
      create{{pascalCase name}}(): Promise<any>[] {
        return DATA.map(async data => await this.repository.save(this.repository.create(data)));
      }
}
