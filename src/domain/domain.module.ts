import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationModule } from 'src/configuration/configuration.module';

import { PersistenceModule } from 'src/persistence/persistence.module';
import { UserRepository } from 'src/persistence/repositories/UserRepository';
import { UserService } from './services';

@Module({
  imports: [
    ConfigurationModule,
    PersistenceModule,
    TypeOrmModule.forFeature([UserRepository]),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class DomainModule {}
