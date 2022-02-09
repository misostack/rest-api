import { ApiProperty } from '@nestjs/swagger';
import { UserTypes } from 'src/domain/entity';

export class ViewUserModel {
  @ApiProperty({})
  id: number;
  @ApiProperty({})
  email: string;
  @ApiProperty({})
  firstName: string;
  @ApiProperty({})
  lastName: string;
  @ApiProperty({
    enum: UserTypes,
    enumName: 'UserTypes',
  })
  type: UserTypes;
  @ApiProperty({})
  createdAt: Date;
  @ApiProperty({})
  updatedAt: Date;
}
