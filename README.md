# REST API Blueprint

## Architecture

> Clean Architecture

## Getting start

- Configuration: copy and replace related env

```bash
cp .env.sample .env
```

## DB Migration

```bash
yarn typeorm migration:generate -n CreateUserTable
yarn typeorm migration:run
yarn typeorm migration:show
```
