import { DefaultNamingStrategy, Table } from 'typeorm';

const camelToSnakeCase = (str) =>
  str
    .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    .replace(/^_/, '');

function parseName(
  prefix: string,
  tableOrName: Table | string,
  suffix?: string | string[],
) {
  const tableName =
    tableOrName instanceof Table ? tableOrName.name : tableOrName;

  suffix = Array.isArray(suffix) ? suffix.join('_') : suffix;

  return `${prefix}_${tableName}${suffix ? `_${suffix}` : ''}`;
}

export class CustomNamingStrategy extends DefaultNamingStrategy {
  foreignKeyName(
    tableOrName: Table | string,
    columnNames: string[],
    _referencedTablePath?: string,
    _referencedColumnNames?: string[],
  ): string {
    return parseName('fk', tableOrName, _referencedTablePath);
  }
  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[],
  ): string {
    return customName ? customName : camelToSnakeCase(propertyName);
  }
}
