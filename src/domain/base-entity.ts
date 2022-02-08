export abstract class AbstractBaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  public constructor(payload: any) {
    Object.assign(this, payload);
  }
}
