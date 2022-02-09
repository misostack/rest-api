import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { PersistenceModule } from 'src/persistence/persistence.module';
import { UserService } from './services';

@Module({
  imports: [ConfigurationModule, PersistenceModule],
  providers: [UserService],
  exports: [UserService],
})
export class DomainModule {}
