import { Module } from '@nestjs/common';

import { PersistenceModule } from 'src/persistence/persistence.module';
import { UserService } from './services';

@Module({
  imports: [PersistenceModule],
  providers: [UserService],
  exports: [UserService],
})
export class DomainModule {}
