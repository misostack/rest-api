# REST API Blueprint

## Architecture

> Clean Architecture

## Layers

> Application: api
> Domain : central layer, define entity, contracts, services, factory
> Persistence: orm, repository
> Configuration
> Shared
> Tools

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
