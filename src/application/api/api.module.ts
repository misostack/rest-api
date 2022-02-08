import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BusinessModule } from 'src/businesses/business.module';
import { PersistenceModule } from 'src/persistence/persistence.module';

import controllers from './controllers';

@Module({
  imports: [
    ConfigModule.forRoot({
      // load .env.test if run tests
      envFilePath: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
    }),
    PersistenceModule,
    BusinessModule,
  ],
  controllers: controllers,
  providers: [],
})
export class ApiModule {}
