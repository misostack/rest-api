import { DatabaseConfigService } from './src/config/database-config.service';
import { CustomNamingStrategy } from './src/persistence/shared/index';

export default {
  type: 'mysql',
  url: new DatabaseConfigService().getConfigValues().url,
  synchronize: false,
  logging: true,
  timezone: 'Z',
  entities: ['src/persistence/entity/index.ts'],
  migrations: ['src/persistence/migration/**/*.ts'],
  subscribers: ['src/persistence/subscriber/**/*.ts'],
  namingStrategy: new CustomNamingStrategy(),
  cli: {
    entitiesDir: 'src/persistence/entity',
    migrationsDir: 'src/persistence/migration',
    subscribersDir: 'src/persistence/subscriber',
  },
};
