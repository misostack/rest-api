import 'dotenv/config';

export interface ConfigValues {
  port: number;
}
export class ConfigService {
  private readonly envConfig: ConfigValues = null;

  constructor() {
    this.envConfig = {
      port: parseInt(process.env.PORT),
    };
  }

  getConfigValues(): ConfigValues {
    return this.envConfig;
  }
}
