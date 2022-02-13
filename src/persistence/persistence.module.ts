import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from 'src/config/database-config.service';
import { User } from './entity';
import { CustomNamingStrategy } from './shared';

@Module({
  providers: [],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: new DatabaseConfigService().getConfigValues().url,
      // try autoload entities
      autoLoadEntities: true,
      // {module}/entities/entity.entity.ts
      entities: [User],
      // use cli and run schema:sync is better for secured data
      synchronize: false,
      namingStrategy: new CustomNamingStrategy(),
    }),
  ],
  exports: [],
})
export class PersistenceModule {}
