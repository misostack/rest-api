export abstract class AbstractBaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  public constructor(payload: any) {
    Object.assign(this, payload);
  }
}
