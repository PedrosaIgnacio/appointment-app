import { ApiProperty } from '@nestjs/swagger';

export default class CreateUserDTO {
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly password: string;
  @ApiProperty()
  readonly username: string;
  @ApiProperty()
  readonly firstname: string;
  @ApiProperty()
  readonly lastname: string;
  @ApiProperty()
  readonly createdAt: Date;
}
