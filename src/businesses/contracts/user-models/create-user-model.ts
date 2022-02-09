import { ApiProperty } from '@nestjs/swagger';
import { UserTypes } from 'src/domain/entity';

export class CreateUserModel {
  @ApiProperty({
    example: 'username',
  })
  login: string;
  @ApiProperty({
    example: 'securedpassword',
  })
  password: string;
  @ApiProperty({
    example: 'example.user@jsguru.net',
  })
  email: string;
  @ApiProperty({
    example: 'jsguru',
  })
  firstName: string;
  @ApiProperty({
    example: 'NET',
  })
  lastName: string;
  @ApiProperty({
    enum: UserTypes,
    enumName: 'UserTypes',
    examples: [UserTypes.ADMIN, UserTypes.MEMBER],
  })
  type: UserTypes;
}
