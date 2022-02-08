import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigurationValues } from './configuration.interface';

@Injectable()
export class ConfigurationService {
  private configurationValues: ConfigurationValues;
  constructor(private configService: ConfigService) {
    this.configurationValues = {
      limitRowsPerPage: parseInt(
        this.configService.get<string>('LIMIT_ROWS_PER_PAGE'),
      ),
    };
  }

  getValues(): ConfigurationValues {
    return this.configurationValues;
  }
}
