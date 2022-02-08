import { Module } from '@nestjs/common';
import { UserService } from 'src/businesses/services';
import controllers from './controllers';

@Module({
  imports: [],
  controllers: controllers,
  providers: [UserService],
})
export class ApiModule {}
