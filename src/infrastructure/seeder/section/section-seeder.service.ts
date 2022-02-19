import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from '@infrastructure/database/section/section.entity';
import { Repository } from 'typeorm';
import { DATA } from './section-data';

@Injectable()
export class SectionSeederService {
    constructor(
        @InjectRepository(Section)
        private readonly repository: Repository<Section>,
      ) {}
    
      createSection(): Promise<any>[] {
        return DATA.map(async data => await this.repository.save(this.repository.create(data)));
      }
}
