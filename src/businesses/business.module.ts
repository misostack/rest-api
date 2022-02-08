import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { UserService } from './services';

@Module({
  imports: [ConfigurationModule],
  providers: [UserService],
  exports: [UserService],
})
export class BusinessModule {}
