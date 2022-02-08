import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity';
import { CustomNamingStrategy } from './shared';

@Module({
  providers: [],
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        url: configService.get<string>('DATABASE_URL'),
        // try autoload entities
        autoLoadEntities: true,
        // {module}/entities/entity.entity.ts
        entities: [User],
        // use cli and run schema:sync is better for secured data
        synchronize: false,
        namingStrategy: new CustomNamingStrategy(),
      }),
      inject: [ConfigService],
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   url: process.env.DATABASE_URL,
    //   synchronize: false,
    //   entities: [User],
    // }),
  ],
  exports: [],
})
export class PersistenceModule {}
