import {
  ClassConstructor,
  instanceToPlain,
  plainToInstance,
} from 'class-transformer';

export abstract class BaseService {
  entityToModel<T, V>(entity: T, modelClass: ClassConstructor<V>): V {
    return plainToInstance(modelClass, instanceToPlain(entity));
  }
}
