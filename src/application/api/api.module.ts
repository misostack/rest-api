import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DomainModule } from 'src/domain/domain.module';
import { PersistenceModule } from 'src/persistence/persistence.module';

import controllers from './controllers';

@Module({
  imports: [
    ConfigModule.forRoot({
      // load .env.test if run tests
      envFilePath: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
    }),
    DomainModule,
    PersistenceModule,
  ],
  controllers: controllers,
  providers: [],
})
export class ApiModule {}
