# REST API Blueprint

## Architecture

> Clean Architecture

![document](./documents/architecture.jpg)

## Design Pattern

- Factory
- DIP : Dependency inversion principle

## Rules

- SOLID

## Layers

> Application: api
> Domain : entities, contracts, services, factories, repositories (abstract)
> Persistence: repositories, orm entities
> Configuration: configuration class
> Shared: shared functions
> Tools: other tools

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
