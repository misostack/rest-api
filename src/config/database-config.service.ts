import 'dotenv/config';

export interface DatabaseConfigValues {
  url: string;
}
export class DatabaseConfigService {
  private readonly envConfig: DatabaseConfigValues;

  constructor() {
    console.error('DATABASE_URL', process.env.DATABASE_URL);
    this.envConfig = {
      url: process.env.DATABASE_URL,
    };
  }

  getConfigValues(): DatabaseConfigValues {
    return this.envConfig;
  }
}
