import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from '@infrastructure/database/language/language.entity';
import { Repository } from 'typeorm';
import { DATA } from './language-data';

@Injectable()
export class LanguageSeederService {
    constructor(
        @InjectRepository(Language)
        private readonly repository: Repository<Language>,
      ) {}
    
      createLanguage(): Promise<any>[] {
        return DATA.map(async data => await this.repository.save(this.repository.create(data)));
      }
}
