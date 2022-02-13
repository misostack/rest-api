import { Module } from '@nestjs/common';

import { DomainModule } from 'src/domain/domain.module';
import { PersistenceModule } from 'src/persistence/persistence.module';

import controllers from './controllers';

@Module({
  imports: [DomainModule, PersistenceModule],
  controllers: controllers,
  providers: [],
})
export class ApiModule {}
