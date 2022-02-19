import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaData } from '@infrastructure/database/meta-data/meta-data.entity';
import { Repository } from 'typeorm';
import { DATA } from './meta-data-data';

@Injectable()
export class MetaDataSeederService {
    constructor(
        @InjectRepository(MetaData)
        private readonly repository: Repository<MetaData>,
      ) {}
    
      createMetaData(): Promise<any>[] {
        return DATA.map(async data => await this.repository.save(this.repository.create(data)));
      }
}
