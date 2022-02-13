import 'dotenv/config';

export interface DatabaseConfigValues {
  url: string;
}
export class DatabaseConfigService {
  private readonly envConfig: DatabaseConfigValues;

  constructor() {
    this.envConfig = {
      url: process.env.DATABASE_URL,
    };
  }

  getConfigValues(): DatabaseConfigValues {
    return this.envConfig;
  }
}
