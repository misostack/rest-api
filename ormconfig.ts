import { CustomNamingStrategy } from './src/persistence/shared/index';

export default {
  type: 'mysql',
  url: process.env.DATABASE_URL,
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
